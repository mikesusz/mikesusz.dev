import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';
import remarkDirective from 'remark-directive';

// Render any container directive as <div class="{name}">, merging any
// {.extra-class}/{#id} attributes. Gives a reusable block primitive:
//   :::gallery
//   ![a](/a.png)
//   ![b](/b.png)
//   :::
// becomes <div class="gallery"> wrapping the images. Style the class in CSS.
function remarkDirectiveBlocks() {
	return (tree) => {
		const walk = (node) => {
			if (node.type === 'containerDirective') {
				const attrs = node.attributes || {};
				const className = [node.name, ...(attrs.class ? attrs.class.split(/\s+/) : [])];
				node.data = {
					...node.data,
					hName: 'div',
					hProperties: { className, ...(attrs.id ? { id: attrs.id } : {}) }
				};
			}
			node.children?.forEach(walk);
		};
		walk(tree);
	};
}

// Turn a standalone image that has a markdown title into a semantic
// <figure><img><figcaption>. Alt stays as alt; the title becomes the caption.
//   ![accessible alt text](/img.png "Visible caption")
function rehypeImageFigures() {
	return (tree) => {
		const walk = (node) => {
			if (!node.children) return;
			node.children = node.children.map((child) => {
				walk(child);
				if (child.type !== 'element' || child.tagName !== 'p') return child;
				const kids = child.children.filter((c) => !(c.type === 'text' && c.value.trim() === ''));
				const img = kids[0];
				if (kids.length !== 1 || img.tagName !== 'img' || !img.properties?.title) return child;
				const caption = img.properties.title;
				delete img.properties.title;
				return {
					type: 'element',
					tagName: 'figure',
					properties: {},
					children: [
						img,
						{
							type: 'element',
							tagName: 'figcaption',
							properties: {},
							children: [{ type: 'text', value: caption }]
						}
					]
				};
			});
		};
		walk(tree);
	};
}
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function getDraftBlogSlugs() {
	const blogDir = join(__dirname, 'src/content/blog');
	const drafts = new Set();
	for (const file of readdirSync(blogDir)) {
		if (!/\.(md|mdx)$/.test(file)) continue;
		const content = readFileSync(join(blogDir, file), 'utf-8');
		const frontmatter = content.match(/^---\n([\s\S]*?)\n---/);
		if (frontmatter && /^\s*draft:\s*true\s*$/m.test(frontmatter[1])) {
			drafts.add(file.replace(/\.(md|mdx)$/, ''));
		}
	}
	return drafts;
}

const draftSlugs = getDraftBlogSlugs();

export default defineConfig({
	site: 'https://mikesusz.dev',
	redirects: {
		'/projects/obsidian-mcp/': '/projects/markdown-vault-mcp/'
	},
	adapter: node({
		mode: 'standalone'
	}),
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => {
				const match = new URL(page).pathname.match(/^\/blog\/([^/]+)\/?$/);
				return match ? !draftSlugs.has(match[1]) : true;
			}
		})
	],
	markdown: {
		processor: unified({
			remarkPlugins: [remarkDirective, remarkDirectiveBlocks],
			rehypePlugins: [
				[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
				rehypeImageFigures
			]
		})
	},
	experimental: {
		contentIntellisense: true
	}
});

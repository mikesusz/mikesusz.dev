import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

import rehypeExternalLinks from 'rehype-external-links';
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
		rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]]
	},
	experimental: {
		contentIntellisense: true
	}
});

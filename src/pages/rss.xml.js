import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, RSS_MAX } from '../consts';

import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
	const posts = await getCollection('blog');
	// filter the posts collection to remove anything in 'draft' status.
	const filteredPosts = posts
		.filter((post) => !post.data.draft)
		.slice(0, RSS_MAX);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: await Promise.all(filteredPosts.map(async (post) => {
			// const html = post.body ? post.body : (await post.render()).html;
			// const { html } = await post.render();
			return {
				...post.data,
				link: `/blog/${post.slug}/`,
				content: sanitizeHtml(parser.render(post.body), {
					allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
				})
			};
		}))
	});
}

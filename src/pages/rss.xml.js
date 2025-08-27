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
		.sort((a, b) => new Date(b.data.date) - new Date(a.data.date)) // descending
		.slice(0, RSS_MAX);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: await Promise.all(filteredPosts.map(async (post) => {
    const rawHtml = parser.render(post.body);
    const noCommentsHtml = rawHtml.replace(/&lt;!--[\s\S]*?--&gt;/g, ''); // Remove HTML comments
			return {
				...post.data,
				link: `/blog/${post.slug}/`,
				content: sanitizeHtml(noCommentsHtml, {
					allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
				})
			};
		}))
	});
}

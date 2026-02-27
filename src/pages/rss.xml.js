import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, RSS_MAX } from '../consts';
import { cleanHtmlContent } from '../utils/cleanHtmlContent';

import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
	const posts = await getCollection('blog');
	// filter the posts collection to remove anything in 'draft' status.
	const filteredPosts = posts
		.filter((post) => !post.data.draft)
		.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate)) // descending
		.slice(0, RSS_MAX);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: await Promise.all(
			filteredPosts.map(async (post) => {
				const rawHtml = parser.render(post.body);
				const cleanedHtml = cleanHtmlContent(rawHtml);

				let heroImgHtml = '';
				if (post.data.heroImage) {
					heroImgHtml = `<img src="${post.data.heroImage}" alt="${post.data.heroAlt || ''}" style="max-width:100%;height:auto;margin-bottom:1em;" />`;
				}

				return {
					...post.data,
					link: `/blog/${post.slug}/`,
					content: heroImgHtml + cleanedHtml
				};
			})
		)
	});
}

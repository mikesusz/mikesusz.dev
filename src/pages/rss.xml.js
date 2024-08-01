import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	// filter the posts collection to remove anything in 'draft' status.
	const filteredPosts = posts.filter((post) => !post.data.draft);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: filteredPosts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`
		}))
	});
}

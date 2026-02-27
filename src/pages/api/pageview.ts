import type { APIRoute } from 'astro';
import { recordPageView } from '../../lib/db';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.json();
		const { path, referrer } = data;

		if (!path) {
			return new Response(JSON.stringify({ error: 'Path is required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// Don't track views to the stats page itself
		if (path === '/stats') {
			return new Response(JSON.stringify({ success: true, tracked: false }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// Get user agent from headers
		const userAgent = request.headers.get('user-agent');

		// Record the pageview
		recordPageView({
			path,
			referrer: referrer || undefined,
			user_agent: userAgent || undefined,
			timestamp: Date.now()
		});

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error recording pageview:', error);
		return new Response(JSON.stringify({ error: 'Failed to record pageview' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};

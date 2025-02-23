import type { Post } from '$lib/types.js';

export async function load({ fetch, params }) {
	const response = await fetch('../api/posts');
	const rawPosts: Post[] = await response.json();
	const taggedPosts = rawPosts.filter((p) => p.tags.includes(params.slug));
	return { posts: taggedPosts };
}

export const prerender = true;

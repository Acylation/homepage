import { json } from '@sveltejs/kit';
import { getPosts } from '$lib/posts';

export async function GET() {
	const posts = getPosts();
	return json(posts);
}

export const prerender = true;

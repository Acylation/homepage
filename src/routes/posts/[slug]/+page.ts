import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/posts';

export async function load({ params }) {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		throw error(404, `Could not find ${params.slug}`);
	}

	if (!post.content) {
		throw error(404, `Could not render ${params.slug}`);
	}

	return post;
}

export const prerender = true;

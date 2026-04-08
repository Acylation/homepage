import type { PageServerLoad } from './$types';
import type { Post } from '$lib/types';
import { SERIES } from '$lib/series';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const { slug } = params;

	const series = SERIES.find((t) => t.slug === slug);
	if (!series) {
		throw error(404, 'Series not found');
	}

	const response = await fetch('/api/posts');
	const allPosts: Post[] = await response.json();

	const posts = allPosts.filter((post) => post.series === slug);

	return {
		series,
		posts
	};
};

export const prerender = true;

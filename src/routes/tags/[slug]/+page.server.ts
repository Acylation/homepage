import type { PageServerLoad } from './$types';
import type { Post } from '$lib/types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const { slug } = params;

	const response = await fetch('/api/posts');
	const allPosts: Post[] = await response.json();

	const posts = allPosts.filter((post) => post.tags?.includes(slug));

	return {
		posts,
		tag: slug,
		decodedTag: decodeURIComponent(slug)
	};
};

export const prerender = true;

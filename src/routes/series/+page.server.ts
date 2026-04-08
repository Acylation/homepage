import type { PageServerLoad } from './$types';
import type { Post, SeriesWithCount } from '$lib/types';
import { SERIES } from '$lib/series';

export const prerender = true;

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();

	const seriesWithCount: SeriesWithCount[] = SERIES.map((series) => {
		const count = posts.filter((post) => post.series === series.slug).length;
		return {
			...series,
			count
		};
	});

	return {
		series: seriesWithCount
	};
};

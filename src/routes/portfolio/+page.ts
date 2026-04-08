import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
	return {
		title: 'Portfolio & Creations',
		description:
			'Open source projects and creative works showcasing technical innovation and artistic expression'
	};
};

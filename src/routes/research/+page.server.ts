import type { PageServerLoad } from './$types';

export const prerender = true;

interface Publication {
	id: string;
	title: string;
	authors: string[];
	publication: string;
	date: string;
	year: number;
	type: string;
	tags: string[];
	links: Record<string, string>;
}

interface ResearchItem {
	id: string;
	title: string;
	type: string;
	authors: string[];
	publication: string;
	date: string;
	description: string;
	tags: string[];
	links: Record<string, string>;
}

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/pubs.json');
	const data = await response.json();

	const publications: ResearchItem[] = data.publications.map((pub: Publication, index: number) => ({
		id: pub.id || `json-${index}`,
		title: pub.title || '',
		type: pub.type || 'journal',
		authors: pub.authors || [],
		publication: pub.publication || '',
		date: pub.date || pub.year?.toString() || '',
		description: `${pub.publication}${pub.date ? `, ${pub.date}` : ''}`,
		tags: pub.tags || [pub.publication].filter(Boolean),
		links: pub.links || {}
	}));

	return { publications };
};

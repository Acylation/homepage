export type Post = {
	title: string;
	slug: string;
	description: string;
	image: string;
	date: string;
	tags?: string[];
	published: boolean;
	series?: string;
	readingTime?: number;
};

export type Series = {
	name: string;
	slug: string;
	description: string;
};

export type SeriesWithCount = Series & {
	count: number;
};

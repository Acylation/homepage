export type Post = {
	title: string;
	slug: string;
	description: string;
	image: string;
	date: string;
	type: string; // Article, review, essay, news, prospective, tutorial, etc.
	tags: string[];
	published: boolean;
};

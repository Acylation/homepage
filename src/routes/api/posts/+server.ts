import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types.ts';
import { Temporal } from 'temporal-polyfill';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Partial<Omit<Post, 'slug'>>; // Ensure metadata follows Post type, excluding slug
			const post: Post = {
				title: metadata.title ?? 'Untitled',
				description: metadata.description ?? '',
				image: metadata.image ?? '',
				date: metadata.date ?? Temporal.Now.plainDateISO().toString(),
				type: metadata.type ?? 'article',
				tags: metadata.tags ?? [],
				published: metadata.published ?? false,
				slug
			};

			if (post.published) posts.push(post);
		}
	}

	posts = posts.sort((a, b) =>
		Temporal.PlainDateTime.compare(
			Temporal.PlainDateTime.from(a.date),
			Temporal.PlainDateTime.from(b.date)
		)
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}

export const prerender = true;

import { Temporal } from 'temporal-polyfill';
import type { Component } from 'svelte';
import type { Post } from '$lib/types';
import { estimateReadingTime } from '$lib/utils';

type PostModule = {
	metadata?: Partial<Omit<Post, 'slug'>>;
	default?: Component;
};

const metadataModules = import.meta.glob('/src/posts/*.md', { eager: true }) as Record<
	string,
	PostModule
>;
const rawModules = import.meta.glob('/src/posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;
const lazyModules = import.meta.glob('/src/posts/*.md') as Record<
	string,
	() => Promise<PostModule>
>;
const lazyRawModules = import.meta.glob('/src/posts/*.md', {
	query: '?raw',
	import: 'default'
}) as Record<string, () => Promise<string>>;

const LOCALE_SUFFIX_RE = /\.(en-US|zh-CN)$/;

function getSlugFromPath(path: string): string {
	return path.split('/').at(-1)?.replace('.md', '') ?? '';
}

export function getPosts(): Post[] {
	const posts: Post[] = [];

	for (const path in metadataModules) {
		// Ignore locale-variant filenames when running in single-language mode.
		if (LOCALE_SUFFIX_RE.test(path)) continue;

		const file = metadataModules[path];
		const metadata = file.metadata ?? {};
		if (metadata.published !== true) continue;

		const rawContent = rawModules[path] ?? '';

		posts.push({
			title: metadata.title ?? 'Untitled',
			description: metadata.description ?? '',
			image: metadata.image ?? '',
			date: metadata.date ?? Temporal.Now.plainDateISO().toString(),
			tags: metadata.tags ?? [],
			published: true,
			series: metadata.series,
			slug: getSlugFromPath(path),
			readingTime: estimateReadingTime(rawContent)
		});
	}

	return posts.sort((a, b) =>
		Temporal.PlainDateTime.compare(
			Temporal.PlainDateTime.from(b.date),
			Temporal.PlainDateTime.from(a.date)
		)
	);
}

export async function getPostBySlug(slug: string) {
	const preferredPath = `/src/posts/${slug}.md`;
	const fallbackPaths = [`/src/posts/${slug}.zh-CN.md`, `/src/posts/${slug}.en-US.md`];

	const pickedPath = [preferredPath, ...fallbackPaths].find((path) => Boolean(lazyModules[path]));
	if (!pickedPath) return null;

	const moduleLoader = lazyModules[pickedPath];
	if (!moduleLoader) return null;

	const post = await moduleLoader();
	const rawLoader = lazyRawModules[pickedPath];
	const rawContent = rawLoader ? await rawLoader() : '';
	const metadata = post.metadata ?? {};

	return {
		content: post.default,
		meta: {
			title: metadata.title ?? 'Untitled',
			description: metadata.description ?? '',
			image: metadata.image ?? '',
			date: metadata.date ?? Temporal.Now.plainDateISO().toString(),
			tags: metadata.tags ?? [],
			published: metadata.published ?? false,
			series: metadata.series
		},
		readingTime: estimateReadingTime(rawContent)
	};
}

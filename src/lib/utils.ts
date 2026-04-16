/*
  From shadcn-svelte
*/

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

/*
  For posts
*/

import { Temporal } from 'temporal-polyfill';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

//TODO: localization
export function formatDate(
	date: string,
	dateStyle: DateStyle = 'medium',
	locales = 'zh-CN'
): string {
	// Safari is mad about dashes in the date
	const dateToFormat = Temporal.PlainDateTime.from(date);
	return dateToFormat.toLocaleString(locales, { dateStyle });
}

// TODO: manual review - reading time estimation uses ~300 chars/min for CJK, ~200 words/min for Latin text.
// Adjust rates or add per-post overrides if estimates feel inaccurate.
export function estimateReadingTime(rawMarkdown: string): number {
	// Strip frontmatter
	const content = rawMarkdown.replace(/^---[\s\S]*?---/, '');
	// Strip code blocks
	const withoutCode = content.replace(/```[\s\S]*?```/g, '').replace(/`[^`]*`/g, '');
	// Strip markdown syntax
	const plainText = withoutCode
		.replace(/#+\s/g, '')
		.replace(/[*_~`>]/g, '')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '');

	// Count Chinese characters (~300 chars/min)
	const chineseChars = (plainText.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length;
	// Count words in non-Chinese text (~200 words/min)
	const nonChinese = plainText.replace(/[\u4e00-\u9fff\u3400-\u4dbf]/g, ' ');
	const words = nonChinese.split(/\s+/).filter((w) => w.length > 0).length;

	const minutes = chineseChars / 300 + words / 200;
	return Math.max(1, Math.ceil(minutes));
}

import { Temporal } from 'temporal-polyfill';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = Temporal.PlainDateTime.from(date);
	return dateToFormat.toLocaleString(locales, { dateStyle });
}

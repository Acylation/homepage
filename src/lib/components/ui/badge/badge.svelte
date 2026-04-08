<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'default' | 'secondary' | 'outline' | 'subtle';
	type Size = 'sm' | 'md' | 'lg';

	interface Props {
		href?: string;
		variant?: Variant;
		size?: Size;
		rounded?: boolean;
		class?: string;
		children?: Snippet;
		[restProps: string]: unknown;
	}

	let {
		href,
		variant = 'default',
		size = 'md',
		rounded = false,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const baseClass =
		'inline-flex items-center whitespace-nowrap border font-medium transition-colors focus-visible:ring-2 focus-visible:ring-(--color-primary)/50';

	const radiusClass = $derived(rounded ? 'rounded-full' : 'rounded-md');

	const variantClass: Record<Variant, string> = {
		default: 'border-transparent bg-(--color-primary) text-white',
		secondary: 'border-transparent bg-(--bg-tertiary) text-(--text-primary)',
		outline: 'border-(--border-color) bg-transparent text-(--text-primary)',
		subtle: 'border-transparent bg-(--color-primary-light) text-(--color-primary-dark)'
	};

	const sizeClass: Record<Size, string> = {
		sm: 'px-2 py-0.5 text-xs',
		md: 'px-2.5 py-1 text-xs',
		lg: 'px-3 py-1.5 text-sm'
	};

	const classes = $derived(
		`${baseClass} ${radiusClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`
	);
</script>

{#if href}
	<a {href} class={classes} {...restProps}>
		{@render children?.()}
	</a>
{:else}
	<span class={classes} {...restProps}>
		{@render children?.()}
	</span>
{/if}

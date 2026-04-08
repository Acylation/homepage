<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
	type Size = 'default' | 'sm' | 'lg' | 'icon' | 'xs';

	interface Props {
		href?: string;
		variant?: Variant;
		size?: Size;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
		target?: string;
		rel?: string;
		disabled?: boolean;
		ariaLabel?: string;
		children?: Snippet;
		[restProps: string]: unknown;
	}

	let {
		href,
		variant = 'default',
		size = 'default',
		type = 'button',
		class: className = '',
		target,
		rel,
		disabled = false,
		ariaLabel,
		children,
		...restProps
	}: Props = $props();

	const baseClass =
		'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)/60 disabled:pointer-events-none disabled:opacity-50';

	const variantClass: Record<Variant, string> = {
		default: 'bg-(--color-primary) text-white hover:bg-(--color-primary-hover)',
		secondary: 'bg-(--bg-tertiary) text-(--text-primary) hover:opacity-90',
		outline:
			'border border-(--border-color) bg-(--bg-secondary) text-(--text-primary) hover:bg-(--bg-tertiary)',
		ghost: 'text-(--text-secondary) hover:bg-(--bg-tertiary) hover:text-(--text-primary)',
		link: 'h-auto p-0 text-(--color-primary) underline-offset-4 hover:underline'
	};

	const sizeClass: Record<Size, string> = {
		default: 'h-10 px-4 py-2',
		sm: 'h-8 rounded-md px-3 text-xs',
		lg: 'h-11 rounded-md px-6 text-base',
		xs: 'h-7 rounded-md px-2.5 text-xs',
		icon: 'h-10 w-10 p-0'
	};

	const classes = $derived(`${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`);
</script>

{#if href}
	<a
		href={disabled ? undefined : href}
		{target}
		{rel}
		class={classes}
		aria-label={ariaLabel}
		aria-disabled={disabled}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button {type} class={classes} aria-label={ariaLabel} {disabled} {...restProps}>
		{@render children?.()}
	</button>
{/if}

<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';

	interface Props {
		tags?: string[];
		size?: 'xs' | 'sm' | 'md';
		variant?: 'default' | 'outline' | 'subtle';
		maxTags?: number | null;
		showCount?: boolean;
		linkable?: boolean;
		className?: string;
		itemClass?: string;
		countClass?: string;
	}

	let {
		tags = [],
		size = 'sm',
		variant = 'default',
		maxTags = null,
		showCount = true,
		linkable = true,
		className = '',
		itemClass = '',
		countClass = ''
	}: Props = $props();

	const displayTags = $derived(maxTags ? tags.slice(0, maxTags) : tags);
	const remainingCount = $derived(maxTags && tags.length > maxTags ? tags.length - maxTags : 0);

	// 统一的标签样式配置
	const sizeStyles = {
		xs: 'text-xs px-2 py-1',
		sm: 'text-sm px-2.5 py-1',
		md: 'text-base px-3 py-1.5'
	};

	const variantStyles = {
		default: 'bg-(--color-primary) text-white hover:bg-(--color-primary-hover)',
		outline:
			'border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary-light)',
		subtle: 'bg-(--color-primary-light) text-(--color-primary-dark) hover:opacity-80'
	};

	const tagClasses = $derived(
		`transition-colors duration-200 font-medium rounded-full inline-block ${sizeStyles[size]} ${variantStyles[variant]} ${itemClass}`
	);
	const countClasses = $derived(
		`inline-block rounded-full bg-(--bg-quaternary) text-(--text-secondary) ${sizeStyles[size]} ${countClass}`
	);
</script>

{#if tags.length > 0}
	<div class="flex flex-wrap gap-2 {className}">
		{#each displayTags as tag}
			{#if linkable}
				<Badge rounded href={`/tags/${tag}`} class={tagClasses} variant="subtle" size="md">
					{tag}
				</Badge>
			{:else}
				<span class={tagClasses}>
					{tag}
				</span>
			{/if}
		{/each}

		{#if remainingCount > 0 && showCount}
			<Badge rounded class={countClasses} variant="secondary" size="md">
				+{remainingCount}
			</Badge>
		{/if}
	</div>
{/if}

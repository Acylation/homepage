<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
		[restProps: string]: unknown;
	}

	let { class: className = '', children, ...restProps }: Props = $props();
</script>

<div
	class={`rounded-xl border border-(--border-color) bg-(--bg-secondary) text-(--text-primary) shadow-[0_14px_40px_-28px_var(--shadow-color)] ${className}`}
	{...restProps}
>
	{@render children?.()}
</div>

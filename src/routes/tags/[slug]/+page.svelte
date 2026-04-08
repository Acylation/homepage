<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import BlogRow from '$lib/components/BlogRow.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Posts tagged with "{data.decodedTag}" - Acylation</title>
	<meta name="description" content="All posts tagged with {data.decodedTag}" />
</svelte:head>

<section class="w-full">
	<div class="mb-6 px-6">
		<div class="mb-4 flex items-center gap-3">
			<svg
				class="h-8 w-8 text-(--color-primary)"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 7h.01M3 11l8.586-8.586A2 2 0 0113 2h7a2 2 0 012 2v7a2 2 0 01-.586 1.414L12.828 21a4 4 0 01-5.656 0l-4.172-4.172a4 4 0 010-5.656z"
				/>
			</svg>
			<h1 class="section-title">Posts tagged with</h1>
			<Badge size="lg" variant="subtle" class="text-lg">
				{data.decodedTag}
			</Badge>
		</div>
		<p class="section-subtitle">
			{data.posts.length}
			{data.posts.length === 1 ? 'post' : 'posts'} found with this tag
		</p>
	</div>

	<div class="card-shell">
		{#each data.posts as post, index}
			<BlogRow {post} />
		{/each}

		{#if data.posts.length === 0}
			<div class="p-8 text-center text-(--text-tertiary)">
				<svg
					class="mx-auto mb-4 h-16 w-16 text-(--text-tertiary)"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M7 7h.01M3 11l8.586-8.586A2 2 0 0113 2h7a2 2 0 012 2v7a2 2 0 01-.586 1.414L12.828 21a4 4 0 01-5.656 0l-4.172-4.172a4 4 0 010-5.656z"
					/>
				</svg>
				<h3 class="mb-2 text-lg font-medium text-(--text-primary)">No posts found</h3>
				<p>No posts have been tagged with "{data.decodedTag}" yet.</p>
				<a
					href="/posts"
					class="mt-4 inline-block text-(--color-primary) hover:text-(--color-primary-hover)"
				>
					← Browse all posts
				</a>
			</div>
		{/if}
	</div>
</section>

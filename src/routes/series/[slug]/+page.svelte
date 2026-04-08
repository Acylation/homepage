<script lang="ts">
	import type { PageData } from './$types';
	import BlogRow from '$lib/components/BlogRow.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.series.name} - 专题</title>
	<meta name="description" content={data.series.description} />
</svelte:head>

<section class="w-full">
	<div class="mb-8 px-6">
		<nav class="mb-4">
			<a href="/series" class="text-sm font-medium text-(--color-primary) hover:underline">
				← 返回专栏列表
			</a>
		</nav>

		<div class="mb-4 flex items-center gap-4">
			<h1 class="section-title">
				{data.series.name}
			</h1>
		</div>

		<p class="section-subtitle">
			{data.series.description}
		</p>
	</div>

	{#if data.posts.length > 0}
		<div class="card-shell">
			{#each data.posts as post}
				<BlogRow {post} />
			{/each}
		</div>
	{:else}
		<div class="py-12 text-center">
			<div class="mx-auto max-w-md">
				<div class="mb-4">
					<svg
						class="mx-auto h-16 w-16 text-(--text-tertiary)"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-medium text-(--text-primary)">暂无文章</h3>
				<p class="text-(--text-tertiary)">巨坑待填，敬请期待~</p>
			</div>
		</div>
	{/if}
</section>

<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Series - Categorized Reading</title>
	<meta name="description" content="Browse all series and discover interesting content" />
</svelte:head>

<section class="w-full">
	<div class="mb-8 px-6">
		<h1 class="section-title mb-4">专栏</h1>
		<p class="section-subtitle">分类阅读，发现更多有趣内容。</p>
	</div>

	<div class="grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
		{#each data.series as serie}
			<a
				href={`/series/${serie.slug}`}
				class="card-shell group block p-6 duration-200 hover:shadow-lg"
			>
				<div class="mb-4 flex items-start justify-between">
					<h2
						class="text-xl font-semibold text-(--text-primary) transition-colors group-hover:text-(--color-primary)"
					>
						{serie.name}
					</h2>
					<span
						class="bg-(--color-primary-light)] text-(--color-primary-dark)] rounded-full px-2 py-1 text-xs font-medium"
					>
						{serie.count} posts
					</span>
				</div>

				<p class="mb-4 leading-relaxed text-(--text-secondary)">
					{serie.description}
				</p>
			</a>
		{/each}
	</div>
</section>

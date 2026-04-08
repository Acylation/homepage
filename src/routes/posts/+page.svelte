<script lang="ts">
	let { data } = $props();

	import BlogRow from '$lib/components/BlogRow.svelte';
</script>

<svelte:head>
	<title>博客</title>
	<meta name="description" content="全部博文" />
</svelte:head>

<section class="w-full">
	<div class="mb-6 px-6">
		<h1 class="section-title mb-2">博客</h1>
		<p class="section-subtitle">placeholder</p>
	</div>

	<div class="card-shell">
		{#each data.posts as post, index}
			<BlogRow {post} />
		{/each}

		{#if data.posts.length === 0}
			<div class="p-8 text-center text-(--text-tertiary)">暂时还没有文章。</div>
		{/if}
	</div>
</section>

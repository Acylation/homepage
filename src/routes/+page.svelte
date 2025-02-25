<script lang="ts">
	let { data } = $props();
	import BlogCard from './BlogCard.svelte';
</script>

<svelte:head>
	<title>Test</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container mx-auto px-4">
	<!-- Section Title -->
	<div class="mb-6">
		<h1 class="w-full border-b-2 border-gray-300 pb-2 text-2xl font-bold">Featured</h1>
	</div>

	<!-- Responsive Grid -->
	<section class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
		{#each data.posts as post}
			<BlogCard {post} />
		{/each}
	</section>
</div>

<style></style>

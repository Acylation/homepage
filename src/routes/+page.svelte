<script lang="ts">
	let { data } = $props();

	import Counter from './Counter.svelte';
	import BlogCard from './BlogCard.svelte';
</script>

<svelte:head>
	<title>Test</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Counter />

	<ul class="posts mb16">
		{#each data.posts as post}
			<!-- to format as a gallery -->
			<ul class="flex flex-col items-center">
				<BlogCard {post} />
			</ul>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.posts {
		display: grid;
		gap: var(--size-7);
	}
</style>

<script lang="ts">
	let { data } = $props();

	import BlogCard from '../BlogCard.svelte';
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="description" content="all my posts" />
</svelte:head>

<section>
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

<script lang="ts">
	import { formatDate } from '$lib/utils.js';
	import type { Post } from '$lib/types';
	import { Card, Badge } from 'flowbite-svelte';
	export let post: Post;

	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="space-y-4">
	<Card img={post.image}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{post.title}
		</h5>
		<p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">
			{post.description}
		</p>
		<small>On {formatDate(post.date)}</small>

		{#each post.tags as tag}
			<Badge rounded href={`/tags/${tag}`}>{tag}</Badge>
		{/each}

		<Button href={`/posts/${post.slug}`}>
			Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
		</Button>
	</Card>
</div>

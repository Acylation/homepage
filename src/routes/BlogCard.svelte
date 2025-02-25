<script lang="ts">
	import { formatDate } from '$lib/utils.js';
	import type { Post } from '$lib/types';
	import { Card, Badge } from 'flowbite-svelte';
	export let post: Post;

	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	import placeHolder from './placeholder.svg';
</script>

<div class="space-y-4">
	<Card
		img={post.image || placeHolder}
		imgClass="w-full aspect-[16/10] object-cover"
		class="mx-auto w-full max-w-screen-md overflow-hidden rounded-lg shadow-lg"
	>
		<!-- Card Content -->
		<div class="p-4">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{post.title}
			</h5>
			<p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">
				{post.description}
			</p>
			<small class="text-sm text-gray-500 dark:text-gray-300">On {formatDate(post.date)}</small>

			<!-- Tags -->
			<div class="mt-2 flex flex-wrap gap-2">
				{#each post.tags as tag}
					<Badge rounded href={`/tags/${tag}`} class="bg-blue-500 text-white hover:bg-blue-600">
						{tag}
					</Badge>
				{/each}
			</div>

			<!-- Read More Button -->
			<Button href={`/posts/${post.slug}`} class="mt-4 w-full sm:w-auto">
				Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
			</Button>
		</div>
	</Card>
</div>

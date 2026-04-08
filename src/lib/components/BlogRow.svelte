<script lang="ts">
	import { formatDate } from '$lib/utils.js';
	import type { Post } from '$lib/types';
	import Tags from '$lib/components/Tags.svelte';

	interface Props {
		post: Post;
	}
	let { post }: Props = $props();
</script>

<div class="group blog-row">
	<div class="blog-row__item">
		<div class="flex items-center justify-between gap-4">
			<div class="min-w-0 flex-1">
				<div class="mb-1 flex items-center gap-2">
					{#if post.series}
						<a
							href={`/series/${post.series}`}
							class="blog-row__series shrink-0 transition-colors hover:opacity-90"
							onclick={(e: MouseEvent) => e.stopPropagation()}
						>
							专栏
						</a>
					{/if}
					<a href={`/posts/${post.slug}`} class="min-w-0 flex-1">
						<h3 class="blog-row__title truncate text-lg font-semibold">
							{post.title}
						</h3>
					</a>
				</div>
			</div>

			<div class="flex shrink-0 items-center gap-3">
				<div class="hidden sm:block">
					<Tags
						tags={post.tags}
						size="xs"
						variant="subtle"
						maxTags={3}
						linkable={false}
						className="gap-1.5"
					/>
				</div>

				<time datetime={post.date} class="text-muted text-sm whitespace-nowrap">
					{formatDate(post.date, 'medium')}
				</time>
				<!-- TODO: manual review - reading time estimation may need calibration for mixed CJK/Latin content -->
				{#if post.readingTime}
					<span class="text-soft text-sm whitespace-nowrap">· {post.readingTime} 分钟阅读</span>
				{/if}
			</div>
		</div>

		<div class="mt-2 sm:hidden">
			<Tags
				tags={post.tags}
				size="xs"
				variant="subtle"
				maxTags={4}
				linkable={false}
				className="gap-1.5"
			/>
		</div>
	</div>
</div>

<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Tags from '$lib/components/Tags.svelte';

	import './posts.css';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="post-content">
	<section class="post-header">
		<h1 class="post-title">{data.meta.title}</h1>
		<div class="post-meta">
			<time datetime={data.meta.date} class="post-date">
				{formatDate(data.meta.date, 'medium')}
			</time>
			{#if data.readingTime}
				<span class="post-reading-time">· {data.readingTime} min read</span>
			{/if}
		</div>
		<div class="post-tags">
			<Tags tags={data.meta.tags} size="sm" variant="subtle" linkable={true} />
		</div>
	</section>
	<hgroup>
		<h1 class="section-title">{data.meta.title}</h1>
		<p class="text-sm text-(--text-secondary)">
			Posted on {formatDate(data.meta.date, 'medium')}
			<!-- TODO: manual review - reading time estimation may need calibration for mixed CJK/Latin content -->
			{#if data.readingTime}
				<span class="text-(--text-tertiary)">
					· {data.readingTime} min read
				</span>
			{/if}
		</p>
	</hgroup>

	<div class="mt-4">
		<Tags tags={data.meta.tags} size="sm" variant="subtle" linkable={true} />
	</div>

	<data.content />
</article>

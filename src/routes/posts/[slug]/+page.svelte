<script lang="ts">
	import { formatDate } from '$lib/utils';
	import './post.css';

	import './prism.css'; // light
	// import './one-dark.css'; // dark
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.tags as tag}
			<span class="surface-4">&num;{tag}</span>
		{/each}
	</div>
</article>

<article class=".post">
	<data.content />
</article>

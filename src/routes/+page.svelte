<script lang="ts">
	let { data } = $props();
	const topPosts = $derived(data.posts.slice(0, 2));
	const bottomPosts = $derived(data.posts.slice(2, 5));

	import BlogCard from '$lib/components/BlogCard.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ResearchGateIcon from '$lib/images/research gate.svg';
	import GoogleScholarIcon from '$lib/images/google scholar.ico';
	import GithubIcon from '$lib/images/github.svg';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<svelte:head>
	<title>Acyl Blog</title>
	<meta name="description" content="Acylation's research and creative hub" />
</svelte:head>

<div>
	<section class="rounded-lg py-16">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-4xl text-center">
				<h1 class="text-main mb-6 text-5xl leading-tight font-bold">
					你好，我是 <span class="text-(--color-primary)">@Acylation</span>
				</h1>
				<p class="mb-8 text-2xl text-(--text-secondary)">
					科研 / 实验物化 / 前端 / 计算机视觉 / 音乐 / ACGN
				</p>
				<div class="mt-8 flex items-center justify-center gap-6">
					<a
						href="https://scholar.google.com/citations?user=chiyu-liang&user=Yzc1A8sAAAAJ"
						title="Google Scholar"
						class="bg-surface group flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
						aria-label="Google Scholar Profile"
					>
						<img
							src={GoogleScholarIcon}
							alt="Google Scholar"
							class="h-6 w-6 grayscale filter transition-all duration-300 group-hover:grayscale-0"
						/>
					</a>
					<a
						href="https://www.researchgate.net/profile/Chiyu-Liang"
						title="ResearchGate"
						class="bg-surface group flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
						aria-label="ResearchGate Profile"
					>
						<img
							src={ResearchGateIcon}
							alt="ResearchGate"
							class="h-6 w-6 grayscale filter transition-all duration-300 group-hover:grayscale-0"
						/>
					</a>
					<a
						href="https://github.com/Acylation"
						title="GitHub"
						class="bg-surface group text-muted hover:text-main flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
						aria-label="GitHub Profile"
					>
						<img
							src={GithubIcon}
							alt="GitHub"
							class="h-6 w-6 opacity-60 transition-all duration-300 group-hover:opacity-100"
						/>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="py-8">
		<div class="container mx-auto px-4">
			<!-- 标题 -->
			<div class="mb-12 text-center">
				<h2 class="section-title mb-4">精选文章</h2>
				<div class="section-underline mx-auto"></div>
			</div>

			<!-- 卡片区域 -->
			<div class="space-y-6">
				<!-- 通用卡片容器 -->
				{#each [{ list: topPosts, cols: 2 }, { list: bottomPosts, cols: 3 }] as { list, cols } (cols)}
					{#if list.length}
						<div
							class={`mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-6 
            lg:flex-nowrap lg:justify-between
            lg:[&>.blog-card-wrapper]:grow-0 
            lg:[&>.blog-card-wrapper]:basis-[calc((100%-${(cols - 1) * 1.5}rem)/${cols})]`}
						>
							{#each list as post}
								<BlogCard {post} isWide={cols === 2} />
							{/each}
						</div>
					{/if}
				{/each}
			</div>

			<!-- CTA -->
			{#if data.posts.length > 5}
				<div class="mt-8 text-center">
					<Button href="/posts" size="sm" class="cta-primary inline-flex items-center">
						查看更多文章
						<ChevronRight class="h-4 w-4" aria-hidden="true" />
					</Button>
				</div>
			{/if}
		</div>
	</section>
</div>

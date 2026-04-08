<script lang="ts">
	import { fly } from 'svelte/transition';
	import Card from '$lib/components/ui/card/card.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	let { data } = $props();

	const highlightAuthor = (authors: string[], targetName: string = 'Chiyu Liang') => {
		return authors.map((author) => ({
			name: author,
			isHighlighted: author.trim() === targetName
		}));
	};

	const linkConfig: Record<string, { label: string; className: string }> = {
		doi: {
			label: 'DOI',
			className:
				'border border-(--color-primary) bg-(--color-primary-light) text-(--color-primary-dark)'
		},
		paper: {
			label: 'Paper',
			className: 'bg-(--color-success) text-white'
		},
		researchgate: {
			label: 'ResearchGate',
			className: 'bg-(--text-primary) text-(--bg-primary)'
		}
	};
</script>

<svelte:head>
	<title>Research - Academic Publications & Projects</title>
	<meta
		name="description"
		content="Academic research publications, conference papers, and scholarly contributions"
	/>
</svelte:head>

<div class="bg-page min-h-screen">
	<section class="border-base bg-page border-b">
		<div class="mx-auto max-w-7xl px-4 pt-8 pb-8 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1 class="section-title mb-4">科研发表</h1>
				<p class="section-subtitle mx-auto max-w-3xl">学术作品</p>
			</div>
		</div>
	</section>

	<!-- 研究项目列表 -->
	<main class="mx-auto max-w-5xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
		{#if data.publications.length === 0}
			<div class="py-12 text-center">
				<p class="text-muted">No research publications found.</p>
			</div>
		{:else}
			<div class="space-y-6">
				{#each data.publications as item, index (item.id)}
					<Card class="p-6 transition-all duration-300 hover:shadow-xl">
						<div in:fly={{ y: 30, duration: 400, delay: index * 100 }}>
							<!-- 论文头部信息 -->
							<div class="mb-4 flex items-start justify-between">
								<div class="flex-1">
									<h3 class="mb-3 text-xl leading-tight">
										{item.title}
									</h3>
								</div>
							</div>

							<!-- 作者和期刊信息 -->
							<div class="mb-4 space-y-2">
								<div class="text-muted flex text-sm">
									<div class="mt-0.5 mr-2 flex shrink-0 items-start">
										<svg
											class="text-soft me-2 mt-0.5 h-4 w-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17 20h5V9h-5m0 11v-7M2 20h5V4H2m5 16v-9m0 0h10m-10 0V4m10 7V4m0 7v9"
											/>
										</svg>
										<span class="font-medium whitespace-nowrap">作者:</span>
									</div>
									<span class="flex-1 leading-relaxed">
										{#each highlightAuthor(item.authors) as author, index}
											{#if index > 0}<span class="text-soft">, </span>{/if}
											{#if author.isHighlighted}
												<span
													class="rounded bg-(--color-primary-light) px-1 py-0.5 font-semibold text-(--color-primary-dark)"
													>{author.name}</span
												>
											{:else}
												<span>{author.name}</span>
											{/if}
										{/each}
									</span>
								</div>

								<div class="text-soft flex items-center text-sm">
									<svg
										class="me-2 h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									<span class="me-2 font-medium">时间:</span>
									<span>{item.date}</span>
								</div>
							</div>

							<p class="text-muted mb-4 text-sm leading-relaxed">
								{item.description}
							</p>

							<div class="flex flex-wrap gap-2">
								{#each Object.entries(item.links) as [linkType, url]}
									{#if url && linkConfig[linkType]}
										{@const config = linkConfig[linkType]}
										<Button
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											size="xs"
											variant="outline"
											class={config.className}
										>
											<svg
												class="me-1 h-3 w-3"
												viewBox="0 0 24 24"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													d="M4 5.5A2.5 2.5 0 016.5 3H15a2.5 2.5 0 012.5 2.5v13A2.5 2.5 0 0115 21H6.5A2.5 2.5 0 014 18.5v-13zM7 7h7v1.5H7V7zm0 3h7v1.5H7V10zm0 3h5v1.5H7V13z"
												/>
											</svg>
											{config.label}
											<svg
												class="ms-1 h-3 w-3"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M14 3h7m0 0v7m0-7L10 14M5 5h5M5 9h5m-5 4h5m-5 4h5"
												/>
											</svg>
										</Button>
									{/if}
								{/each}
							</div>
						</div>
					</Card>
				{/each}
			</div>
		{/if}
	</main>
</div>

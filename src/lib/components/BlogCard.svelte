<script lang="ts">
	const placeholderSVG = `<svg width="64" height="64" class="text-(--text-secondary)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
	<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42
	</svg>
	`;

	import { formatDate } from '$lib/utils.js';
	import type { Post } from '$lib/types';
	import Card from '$lib/components/ui/card/card.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import { SERIES } from '$lib/series';

	interface Props {
		post: Post;
		isWide?: boolean;
	}
	let { post, isWide = false }: Props = $props();

	const seriesName = $derived(
		post.series ? SERIES.find((series) => series.slug === post.series)?.name : null
	);

	let imageLoaded = $state(false);
	let imageError = $state(false);

	function getImagePosition(img: HTMLImageElement): string {
		if (!img.naturalWidth || !img.naturalHeight) return 'center';

		const aspectRatio = img.naturalWidth / img.naturalHeight;
		const targetRatio = 16 / 10;

		if (aspectRatio > targetRatio * 1.5) {
			return 'center';
		} else if (aspectRatio < targetRatio * 0.7) {
			return 'center 25%';
		} else {
			return 'center 40%';
		}
	}
</script>

<div class="blog-card-wrapper" class:wide={isWide}>
	<Card class="blog-card w-full max-w-none!">
		<div class="blog-card__image">
			{#if post.image && !imageError}
				<img
					src={post.image}
					alt={post.title}
					class="blog-card__image-img"
					class:loaded={imageLoaded}
					class:error={imageError}
					loading="lazy"
					onload={(e: Event) => {
						imageLoaded = true;
						imageError = false;
						const img = e.target as HTMLImageElement;
						img.style.objectPosition = getImagePosition(img);
					}}
					onerror={() => {
						imageError = true;
						imageLoaded = false;
					}}
				/>
			{:else}
				<!-- SVG Placeholder -->
				<div class="blog-card__placeholder">
					{@html placeholderSVG}
				</div>
			{/if}

			<!-- 加载占位符 -->
			{#if post.image && !imageLoaded && !imageError}
				<div class="blog-card__loading">
					<div class="blog-card__spinner"></div>
				</div>
			{/if}
		</div>

		<!-- 卡片内容 -->
		<div class="blog-card__content">
			<!-- 系列标签 -->
			{#if seriesName}
				<div class="series-label mb-2">
					<a href={`/series/${post.series}`} class="blog-card__series">
						{seriesName}
					</a>
				</div>
			{/if}

			<!-- 标题区域 -->
			<div class="title-section mb-3" class:with-series={seriesName}>
				<a href={`/posts/${post.slug}`} class="title-link block">
					<h3 class="blog-card__title text-lg leading-tight font-bold">
						{post.title}
					</h3>
				</a>
			</div>

			<!-- 描述区域 -->
			<div class="description-section relative mb-4 flex-1 overflow-hidden">
				<p class="blog-card__excerpt text-sm leading-relaxed">
					{post.description}
				</p>
				<div class="pointer-events-none absolute right-0 bottom-0 left-0 h-6"></div>
			</div>

			<!-- 底部固定区域 -->
			<div class="bottom-section mt-auto space-y-3">
				<!-- 日期 -->
				<div class="date-section flex items-center gap-2">
					<time class="text-xs text-(--text-tertiary)" datetime={post.date}>
						{formatDate(post.date, 'medium')}
					</time>
					{#if post.readingTime}
						<span class="text-xs text-(--text-tertiary)">
							· {post.readingTime} 分钟阅读
						</span>
					{/if}
				</div>

				<!-- 标签 -->
				<div class="tags-section">
					<Tags
						tags={post.tags}
						size="xs"
						variant="subtle"
						maxTags={isWide ? 5 : 4}
						linkable={true}
					/>
				</div>
			</div>
		</div>
	</Card>
</div>

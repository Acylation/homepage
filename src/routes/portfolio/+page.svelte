<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import type { MouseEventHandler } from 'svelte/elements';

	// 项目数据类型定义
	interface Project {
		id: string;
		title: string;
		description: string;
		category: 'opensource' | 'creative';
		tags: string[];
		image?: string;
		links: {
			github?: string;
			demo?: string;
			website?: string;
		};
		status: 'active' | 'completed' | 'archived';
		date: string;
		role: string;
	}

	// 项目数据
	const projects: Project[] = [
		// 开源项目
		{
			id: 'ultrafast-dynamics-sim',
			title: 'Ultrafast Dynamics Simulator',
			description: '基于量子力学的超快激光与分子相互作用仿真工具，支持多种激光脉冲波形和分子结构。',
			category: 'opensource',
			tags: ['Python', 'NumPy', 'Quantum Mechanics', 'Laser Physics'],
			links: {
				github: 'https://github.com/yourusername/ultrafast-sim',
				demo: 'https://ultrafast-sim.demo'
			},
			status: 'active',
			date: '2024-03',
			role: '主要开发者'
		},
		{
			id: 'microdroplet-analyzer',
			title: 'Microdroplet Image Analyzer',
			description: '微液滴显微镜图像的自动化分析工具，基于深度学习进行液滴识别和尺寸测量。',
			category: 'opensource',
			tags: ['Python', 'OpenCV', 'TensorFlow', 'Image Processing'],
			links: {
				github: 'https://github.com/yourusername/droplet-analyzer'
			},
			status: 'completed',
			date: '2023-11',
			role: '项目负责人'
		},
		{
			id: 'svelte-blog-template',
			title: 'Modern Blog Template',
			description: '基于 SvelteKit 的现代化博客模板，支持 MDX、暗色模式、响应式设计。',
			category: 'opensource',
			tags: ['Svelte', 'TypeScript', 'Tailwind CSS', 'MDX'],
			links: {
				github: 'https://github.com/yourusername/svelte-blog',
				demo: 'https://svelte-blog-demo.vercel.app'
			},
			status: 'active',
			date: '2024-01',
			role: '独立开发'
		},

		// 创作作品
		{
			id: 'interactive-physics-demo',
			title: 'Interactive Physics Demonstrations',
			description: '基于 Web 技术的交互式物理演示集合，包括波动、量子效应、热力学等可视化。',
			category: 'creative',
			tags: ['Three.js', 'WebGL', 'Physics Simulation', 'Education'],
			links: {
				demo: 'https://physics-demos.netlify.app',
				github: 'https://github.com/yourusername/physics-demos'
			},
			status: 'active',
			date: '2024-02',
			role: '创作者'
		},
		{
			id: 'css-art-gallery',
			title: 'Pure CSS Art Gallery',
			description: '纯 CSS 创作的艺术作品集合，探索 CSS 的创意可能性，无需 JavaScript。',
			category: 'creative',
			tags: ['CSS', 'Web Design', 'Digital Art', 'Animation'],
			links: {
				demo: 'https://css-art-gallery.surge.sh',
				github: 'https://github.com/yourusername/css-art'
			},
			status: 'completed',
			date: '2023-09',
			role: '艺术家'
		},
		{
			id: 'data-visualization-toolkit',
			title: 'Scientific Data Visualization Toolkit',
			description: '科学数据可视化工具包，提供多种图表类型和交互功能，专门针对科研数据分析设计。',
			category: 'opensource',
			tags: ['D3.js', 'JavaScript', 'Data Visualization', 'Science'],
			links: {
				github: 'https://github.com/yourusername/sci-viz-toolkit',
				demo: 'https://sci-viz.demo.com'
			},
			status: 'active',
			date: '2024-05',
			role: '主要开发者'
		}
	];
</script>

<svelte:head>
	<title>Open Source & Creations</title>
	<meta
		name="description"
		content="Open source projects and creative works showcasing technical innovation and artistic expression"
	/>
</svelte:head>

<div class="bg-page min-h-screen">
	<section class="bg-surface">
		<div class="mx-auto max-w-7xl px-4 pt-8 pb-8 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1 class="section-title mb-4">作品集</h1>
				<p class="section-subtitle mx-auto max-w-3xl">开源项目与艺术创作</p>
			</div>
		</div>
	</section>

	<!-- 分隔线 -->
	<div class="border-base border-b"></div>

	<main class="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, index (project.id)}
				<article
					class="card-shell transform overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					in:fly={{ y: 50, duration: 500, delay: index * 100 }}
				>
					<div class="p-6">
						<div class="mb-4 flex items-start justify-between">
							<div class="flex-1">
								<h3 class="text-main mb-2 text-xl font-bold">
									{project.title}
								</h3>
							</div>
						</div>

						<p class="text-muted mb-4 text-sm leading-relaxed">
							{project.description}
						</p>

						<div class="mb-4 flex flex-wrap gap-1">
							{#each project.tags as tag}
								<span class="bg-subtle text-muted rounded px-2 py-1 text-xs">
									{tag}
								</span>
							{/each}
						</div>

						<div class="text-soft mb-4 text-xs">
							<div class="flex justify-between">
								<span>角色: {project.role}</span>
								<span>{project.date}</span>
							</div>
						</div>

						<div class="flex flex-wrap gap-2">
							{#if project.links.github}
								<a
									href={project.links.github}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center rounded-md bg-(--text-primary) px-3 py-1.5 text-xs font-medium text-(--bg-primary) transition-colors hover:opacity-90"
								>
									<svg class="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
											clip-rule="evenodd"
										/>
									</svg>
									GitHub
								</a>
							{/if}
							{#if project.links.demo}
								<a
									href={project.links.demo}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center rounded-md bg-(--color-primary) px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-(--color-primary-hover)"
								>
									<svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
									Demo
								</a>
							{/if}
							{#if project.links.website}
								<a
									href={project.links.website}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center rounded-md bg-(--color-success) px-3 py-1.5 text-xs font-medium text-white transition-colors hover:opacity-90"
								>
									<svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
										/>
									</svg>
									Website
								</a>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>

		<!-- 空状态 -->
		{#if projects.length === 0}
			<div class="py-16 text-center" in:fade>
				<svg
					class="text-soft mx-auto mb-4 h-16 w-16"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
				<h3 class="text-main mb-2 text-lg font-medium">No portfolio items found</h3>
				<p class="text-muted">Try adjusting your filters to see more results.</p>
			</div>
		{/if}
	</main>
</div>

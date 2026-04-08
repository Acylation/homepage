<script lang="ts">
	let avatarError = false;
</script>

<svelte:head>
	<title>About | Acyl Blog</title>
	<meta
		name="description"
		content="Acylation is a physical and analytical chemistry grad student exploring ultrafast spectroscopy, mass spectrometry, and research-focused software."
	/>
</svelte:head>

<section class="bg-(--bg-primary)">
	<div class="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-0">
		<div class="grid gap-12 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:items-center">
			<figure class="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
				<div
					class="flex h-40 w-40 items-center justify-center overflow-hidden rounded-3xl border border-(--border-color) bg-(--bg-tertiary) shadow-xl ring-8 ring-(--bg-primary)/70 md:h-52 md:w-52"
				>
					{#if !avatarError}
						<img
							src="/logo.svg"
							alt="Avatar placeholder"
							class="h-full w-full object-cover"
							on:error={() => (avatarError = true)}
						/>
					{:else}
						<div
							class="flex h-full w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-(--bg-quaternary) via-(--bg-tertiary) to-(--bg-quaternary) text-(--text-secondary)"
						>
							<svg
								class="h-20 w-20 text-(--text-tertiary)"
								viewBox="0 0 120 120"
								role="img"
								aria-label="Anonymous avatar placeholder"
							>
								<title>Anonymous avatar placeholder</title>
								<circle cx="60" cy="42" r="24" fill="currentColor" opacity="0.88" />
								<path
									d="M24 100c0-20.4 16-40 36-40s36 19.6 36 40v12H24z"
									fill="currentColor"
									opacity="0.55"
								/>
							</svg>
							<span class="text-sm font-medium">Avatar unavailable</span>
							<span class="text-xs tracking-[0.3em] uppercase">Retry later</span>
						</div>
					{/if}
				</div>
				<figcaption class="text-sm text-(--text-secondary)">
					class="h-20 w-20 text-(--text-tertiary)"
				</figcaption>
			</figure>
			<div class="space-y-6 text-base leading-relaxed text-(--text-primary)">
				<h1 class="section-title">
					Hi, I&rsquo;m @Acylation — a second-year physical & analytical chemistry grad.
				</h1>
				<p>
					I focus on experimental physical chemistry, building up intuition at the intersection of
					femtosecond transient absorption spectroscopy, small-molecule mass spectrometry, and
					microscale interfacial chemistry. My day-to-day is a mix of lab work, data crunching, and
					squeezing insights out of instruments one calibration at a time.
				</p>
				<p>
					Outside the lab you&rsquo;ll usually find me shipping tooling that smooths research
					workflows: frontend dashboards, automation scripts, computer-vision pipelines, and curated
					knowledge bases in the Obsidian community. I enjoy translating messy experimental data
					into clean interfaces that the whole group can rely on.
				</p>
				<p>
					This space will evolve into a concise bio once I settle on the final wording — likely with
					a stylised anime portrait to keep things on-brand.
				</p>
			</div>
		</div>

		<section
			class="grid gap-6 rounded-3xl border border-(--border-color) bg-(--bg-tertiary)/70 p-8 shadow-sm sm:grid-cols-2"
		>
			<div class="space-y-3">
				<h2 class="text-sm font-semibold tracking-wide text-(--text-tertiary) uppercase">
					Research Toolkit
				</h2>
				<p class="text-sm leading-relaxed text-(--text-secondary)">
					Femtosecond transient absorption · Small molecule mass spectrometry · Ultrafast laser
					spectroscopy · Interfacial physical chemistry.
				</p>
			</div>
			<div class="space-y-3">
				<h2 class="text-sm font-semibold tracking-wide text-(--text-tertiary) uppercase">
					Software Habits
				</h2>
				<p class="text-sm leading-relaxed text-(--text-secondary)">
					SvelteKit frontends · Research automation scripts · Computer vision experiments ·
					Knowledge management systems.
				</p>
			</div>
		</section>
	</div>
</section>

<script lang="ts">
	import { projects, projectFilters, type ProjectType, type Project } from '$lib/data';
	import { iconMap } from '$lib/iconMap';

	let activeFilter = $state<ProjectType>('all');
	let filteredProjects = $state<Project[]>(projects);

	function filterProjects(type: ProjectType) {
		activeFilter = type;

		if (type === 'all') {
			filteredProjects = projects;
		} else {
			filteredProjects = projects.filter((project) => project.type.includes(type));
		}
	}
</script>

<!-- Portfolio Section -->
<section
	class="scroll-mt-20 bg-bg-secondary px-6 py-24"
	id="portfolio"
	data-testid="portfolio-section"
>
	<div class="mx-auto w-full max-w-max-width px-6">
		<h2
			class="relative mb-12 inline-block font-family-display text-[clamp(2rem,5vw,2.5rem)] text-text-primary after:absolute after:bottom-[-0.5rem] after:left-0 after:h-0.75 after:w-full after:bg-[linear-gradient(90deg,var(--color-accent-primary),var(--color-accent-secondary))] after:content-['']"
		>
			作品集
		</h2>

		<!-- Filter Buttons -->
		<div class="mb-16 flex flex-wrap justify-center gap-4" data-testid="portfolio-filters">
			{#each projectFilters as filter (filter.type)}
				<button
					class="border-2 border-transparent bg-bg-tertiary px-6 py-4 font-medium text-text-secondary transition-all duration-(--transition-base) hover:bg-bg-primary hover:text-text-primary {activeFilter ===
					filter.type
						? 'border-accent-primary bg-accent-primary text-white'
						: ''}"
					onclick={() => filterProjects(filter.type)}
					data-testid={`filter-${filter.type}`}
				>
					{filter.label}
				</button>
			{/each}
		</div>

		<!-- Projects Grid -->
		<div
			class="grid animate-[fadeIn_var(--transition-slow)] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
			data-testid="projects-grid"
		>
			{#each filteredProjects as project (project.id)}
				<div
					class="flex flex-col gap-6 border border-border bg-bg-tertiary p-8 transition-all duration-(--transition-base) hover:border-accent-primary"
					data-testid={`project-${project.id}`}
				>
					<h3 class="mb-2 text-2xl text-text-primary">{project.title}</h3>
					<p class="grow leading-[1.6] text-text-secondary">{project.description}</p>

					<div class="flex flex-wrap gap-2">
						{#each project.technologies as tech (tech)}
							<span
								class="border border-border bg-bg-tertiary px-3 py-1 text-xs font-semibold text-accent-primary"
								>{tech}</span
							>
						{/each}
					</div>

					<div class="flex gap-6 border-t border-border pt-4">
						{#if project.githubUrl}
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 px-4 py-2 font-medium text-accent-primary transition-all duration-(--transition-fast) hover:translate-x-1 hover:bg-[rgba(132,204,22,0.1)]"
								data-testid={`project-github-${project.id}`}
								aria-label="查看 GitHub 專案"
							>
								<img src={iconMap['github']} alt="GitHub" loading="lazy" class="h-auto w-7" />
								GitHub
							</a>
						{/if}
						{#if project.liveUrl}
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 px-4 py-2 font-medium text-accent-primary transition-all duration-(--transition-fast) hover:translate-x-1 hover:bg-[rgba(132,204,22,0.1)]"
								data-testid={`project-live-${project.id}`}
								aria-label="查看線上展示"
							>
								<img src={iconMap['link']} alt="Link" loading="lazy" class="h-auto w-6" />
								Demo
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import { resume, navLinks } from '$lib/data';
	import { handleNavClick, scrollToTop } from '$lib/utils';

	let mobileMenuOpen = $state(false);

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<!-- Navigation -->
<nav
	class="sticky top-0 z-(--z-nav) border-b border-border bg-bg-primary/95 py-4 backdrop-blur-[10px]"
	data-testid="navigation"
>
	<div class="mx-auto flex max-w-max-width items-center justify-between px-6">
		<button
			class="font-family-display text-2xl font-bold text-accent-primary transition-transform duration-(--transition-fast) hover:scale-105"
			onclick={scrollToTop}
			data-testid="logo"
		>
			{resume.name}
		</button>

		<!-- Desktop Navigation -->
		<div class="hidden gap-8 font-family-display md:flex" data-testid="desktop-nav">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					onclick={(e) => handleNavClick(e, link.href)}
					class="relative font-medium text-text-secondary transition-colors duration-(--transition-fast) after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent-primary after:transition-[width] after:duration-(--transition-base) after:content-[''] hover:text-accent-primary hover:after:w-full"
					data-testid={`nav-link-${link.id}`}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Mobile Hamburger -->
		<button
			class="z-[calc(var(--z-drawer)+10)] flex flex-col gap-1.25 p-2 md:hidden"
			onclick={toggleMobileMenu}
			aria-label="Toggle menu"
			data-testid="hamburger-button"
		>
			<span class="h-0.5 w-6.25 bg-text-primary transition-all duration-(--transition-base)"></span>
			<span class="h-0.5 w-6.25 bg-text-primary transition-all duration-(--transition-base)"></span>
			<span class="h-0.5 w-6.25 bg-text-primary transition-all duration-(--transition-base)"></span>
		</button>
	</div>
</nav>

<!-- Mobile Menu Drawer -->
{#if mobileMenuOpen}
	<div
		class="fixed inset-0 z-(--z-overlay) animate-[fadeIn_var(--transition-base)] bg-black/70"
		onclick={closeMobileMenu}
		onkeydown={(e) => e.key === 'Escape' && closeMobileMenu()}
		role="button"
		tabindex="-1"
		aria-label="Close menu"
		data-testid="mobile-overlay"
	></div>
	<div
		class="fixed top-0 bottom-0 left-0 z-(--z-drawer) w-70 max-w-[80vw] animate-[slideInLeft_var(--transition-slow)] bg-bg-secondary p-8"
		data-testid="mobile-drawer"
	>
		<div class="mb-12 flex items-center justify-between">
			<span class="font-family-display text-2xl font-bold text-accent-primary">選單</span>
			<button
				class="p-2 text-[2rem] text-text-secondary transition-colors duration-(--transition-fast) hover:text-accent-primary"
				onclick={closeMobileMenu}
				aria-label="Close menu"
				data-testid="close-menu-button"
			>
				✕
			</button>
		</div>
		<nav class="flex flex-col gap-6">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					onclick={(e) => handleNavClick(e, link.href, closeMobileMenu)}
					class="p-4 text-lg font-medium text-text-primary transition-all duration-(--transition-fast) hover:translate-x-2 hover:bg-bg-tertiary hover:text-accent-primary"
					data-testid={`mobile-nav-link-${link.id}`}
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</div>
{/if}

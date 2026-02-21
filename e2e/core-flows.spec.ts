import { test, expect } from '@playwright/test';

test.describe('Homepage Core Flows', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test.describe('Major Section Rendering', () => {
		test('should render all major sections of the homepage', async ({ page }) => {
			// Navigation
			const nav = page.getByTestId('navigation');
			await expect(nav).toBeVisible();
			await expect(nav.getByTestId('logo')).toBeVisible();
			await expect(nav.getByTestId('desktop-nav')).toBeVisible();

			// Hero section
			const hero = page.getByTestId('hero-section');
			await expect(hero).toBeVisible();
			await expect(hero.getByTestId('typing-text')).toBeVisible();
			await expect(hero.getByTestId('cta-about')).toBeVisible();
			await expect(hero.getByTestId('cta-portfolio')).toBeVisible();

			// About section
			const about = page.getByTestId('about-section');
			await expect(about).toBeVisible();
			await expect(about.getByTestId('education-card').first()).toBeVisible();

			// Verify social links exist
			const socialGithub = about.getByTestId('social-github');
			const socialLinkedin = about.getByTestId('social-linkedin');
			await expect(socialGithub).toBeVisible();
			await expect(socialLinkedin).toBeVisible();

			// Certificates section
			const certificates = page.getByTestId('certificates-section');
			await expect(certificates).toBeVisible();

			// Tech Stack section
			const techStack = page.getByTestId('tech-stack-section');
			await expect(techStack).toBeVisible();
			// Verify at least one tech category is visible
			await expect(techStack.getByTestId('tech-category-前端開發')).toBeVisible();

			// Portfolio section
			const portfolio = page.getByTestId('portfolio-section');
			await expect(portfolio).toBeVisible();
			await expect(portfolio.getByTestId('portfolio-filters')).toBeVisible();
			// projects-grid exists but is hidden when projects array is empty
			await expect(portfolio.getByTestId('projects-grid')).toBeAttached();

			// Footer
			const footer = page.getByTestId('footer');
			await expect(footer).toBeVisible();
		});

		test('should render navigation links correctly', async ({ page }) => {
			const nav = page.getByTestId('desktop-nav');

			// Check all navigation links are present
			await expect(nav.getByTestId('nav-link-about')).toBeVisible();
			await expect(nav.getByTestId('nav-link-certificates')).toBeVisible();
			await expect(nav.getByTestId('nav-link-skills')).toBeVisible();
			await expect(nav.getByTestId('nav-link-portfolio')).toBeVisible();
		});
	});

	test.describe('Mobile Menu Flow', () => {
		test('should open mobile menu when hamburger is clicked', async ({ page }) => {
			// Set mobile viewport
			await page.setViewportSize({ width: 375, height: 667 });

			// Initially, mobile menu should be closed
			const overlay = page.getByTestId('mobile-overlay');
			const drawer = page.getByTestId('mobile-drawer');

			await expect(overlay).not.toBeVisible();
			await expect(drawer).not.toBeVisible();

			// Click hamburger button
			const hamburger = page.getByTestId('hamburger-button');
			await hamburger.click();

			// Mobile menu should now be open
			await expect(overlay).toBeVisible();
			await expect(drawer).toBeVisible();

			// Verify mobile nav links are visible
			await expect(drawer.getByTestId('mobile-nav-link-about')).toBeVisible();
			await expect(drawer.getByTestId('mobile-nav-link-certificates')).toBeVisible();
			await expect(drawer.getByTestId('mobile-nav-link-skills')).toBeVisible();
		});

		test('should close mobile menu when overlay is clicked', async ({ page }) => {
			// Set mobile viewport
			await page.setViewportSize({ width: 375, height: 667 });

			// Open mobile menu
			const hamburger = page.getByTestId('hamburger-button');
			await hamburger.click();

			// Verify menu is open
			const overlay = page.getByTestId('mobile-overlay');
			const drawer = page.getByTestId('mobile-drawer');
			await expect(overlay).toBeVisible();
			await expect(drawer).toBeVisible();

			// Click overlay to close
			await overlay.click();

			// Menu should be closed
			await expect(overlay).not.toBeVisible();
			await expect(drawer).not.toBeVisible();
		});

		test('should close mobile menu when close button is clicked', async ({ page }) => {
			// Set mobile viewport
			await page.setViewportSize({ width: 375, height: 667 });

			// Open mobile menu
			const hamburger = page.getByTestId('hamburger-button');
			await hamburger.click();

			// Verify menu is open
			const overlay = page.getByTestId('mobile-overlay');
			const drawer = page.getByTestId('mobile-drawer');
			await expect(overlay).toBeVisible();
			await expect(drawer).toBeVisible();

			// Click close button
			const closeButton = page.getByTestId('close-menu-button');
			await closeButton.click();

			// Menu should be closed
			await expect(overlay).not.toBeVisible();
			await expect(drawer).not.toBeVisible();
		});
	});

	test.describe('Portfolio Filter Flow', () => {
		test('should show empty projects grid with all filter active', async ({ page }) => {
			const projectsGrid = page.getByTestId('projects-grid');

			// Projects array is currently empty
			const allProjects = projectsGrid.locator('> div[data-testid^="project-"]');
			await expect(allProjects).toHaveCount(0);

			// Verify "All Projects" filter is active
			const allFilter = page.getByTestId('filter-all');
			await expect(allFilter).toHaveClass(/bg-accent-primary/);
		});
	});

	test.describe('Skills Accordion', () => {
		test('should toggle skill category accordion', async ({ page }) => {
			const techStack = page.getByTestId('tech-stack-section');

			// On desktop, categories should be expanded by default
			const firstToggle = techStack.getByTestId('tech-category-toggle-前端開發');
			await expect(firstToggle).toBeVisible();
			await expect(firstToggle).toHaveAttribute('aria-expanded', 'true');

			// Verify skills are visible
			await expect(techStack.getByTestId('tech-skill-html')).toBeVisible();

			// Click to collapse
			await firstToggle.click();
			await expect(firstToggle).toHaveAttribute('aria-expanded', 'false');

			// Skills should be hidden
			await expect(techStack.getByTestId('tech-skill-html')).not.toBeVisible();

			// Click to expand again
			await firstToggle.click();
			await expect(firstToggle).toHaveAttribute('aria-expanded', 'true');
			await expect(techStack.getByTestId('tech-skill-html')).toBeVisible();
		});
	});

	test.describe('Interactive Elements', () => {
		test('should have working CTA buttons in hero section', async ({ page }) => {
			const ctaAbout = page.getByTestId('cta-about');
			const ctaPortfolio = page.getByTestId('cta-portfolio');

			await expect(ctaAbout).toBeVisible();
			await expect(ctaAbout).toBeEnabled();
			await expect(ctaPortfolio).toBeVisible();
			await expect(ctaPortfolio).toBeEnabled();
		});
	});
});

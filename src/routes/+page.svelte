<script lang="ts">
	import { Head, SchemaOrg, type SeoConfig, type SchemaOrgProps } from 'svead';
	import { page } from '$app/state';
	import { resume, socialLinks } from '$lib/data';
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import CertificatesSection from '$lib/components/CertificatesSection.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import PortfolioSection from '$lib/components/PortfolioSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PUBLIC_CDN_URL } from '$env/static/public';

	const title = '謝孟哲 - 全端工程師';
	const description = resume.about.join('');
	const url = page.url.toString();
	const language = 'zh-tw';
	const seoConfig: SeoConfig = {
		title,
		description,
		url,
		author_name: '謝孟哲',
		language,
		open_graph_image: `${PUBLIC_CDN_URL}/photos/avatar.webp`,
		open_graph_image_alt: "Meng Che Hsieh's avatar"
	};
	const personSchema: SchemaOrgProps['schema'] = {
		'@type': 'Person',
		name: '謝孟哲',
		alternateName: ['Meng Che Hsieh', 'Hsieh Meng Che', 'Jay'],
		url: page.url.toString(),
		sameAs: socialLinks.map(({ url }) => url),
		jobTitle: ['全端工程師', 'Fullstack Developer'],
		email: 'contact@mengche.dev',
		gender: 'male'
	};
	const websiteSchema: SchemaOrgProps['schema'] = {
		'@type': 'WebSite',
		name: title,
		description,
		url,
		publisher: personSchema,
		inLanguage: language
	};
	const breadcrumbSchema: SchemaOrgProps['schema'] = {
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: '謝孟哲 - 全端工程師',
				item: 'https://www.hsieh-dev.us.ci'
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Icon Credits | 謝孟哲',
				item: 'https://www.hsieh-dev.us.ci/credits'
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: 'Daily Quote Generator',
				item: 'https://www.hsieh-dev.us.ci/daily-quote-generator'
			},
			{
				'@type': 'ListItem',
				position: 4,
				name: 'Password Strength Checker',
				item: 'https://www.hsieh-dev.us.ci/password-strength-checker'
			},
			{
				'@type': 'ListItem',
				position: 5,
				name: 'Pomodoro Timer',
				item: 'https://www.hsieh-dev.us.ci/pomodoro-timer'
			},
			{
				'@type': 'ListItem',
				position: 6,
				name: 'CSS 3D',
				item: 'https://www.hsieh-dev.us.ci/css-3d'
			},
			{
				'@type': 'ListItem',
				position: 7,
				name: 'Simple TODO List',
				item: 'https://www.hsieh-dev.us.ci/simple-todo-list'
			},
			{
				'@type': 'ListItem',
				position: 8,
				name: 'Color Palette',
				item: 'https://www.hsieh-dev.us.ci/color-palette'
			},
			{
				'@type': 'ListItem',
				position: 8,
				name: 'Unlockture 2025 Memorial',
				item: 'https://www.hsieh-dev.us.ci/unlockture-2025-memorial'
			},
			{
				'@type': 'ListItem',
				position: 8,
				name: 'Ping Board',
				item: 'https://ping-board.hsieh-dev.us.ci'
			}
		]
	};
</script>

<Head seo_config={seoConfig} />
<SchemaOrg schema={personSchema} />
<SchemaOrg schema={websiteSchema} />
<SchemaOrg schema={breadcrumbSchema} />

<div class="flex min-h-screen flex-col">
	<Navigation />
	<Hero />
	<AboutSection />
	<CertificatesSection />
	<SkillsSection />
	<PortfolioSection />
	<Footer />
</div>

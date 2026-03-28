export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface Education {
	degree?: string;
	institution: string;
	location: string;
	period: string;
}

export interface Skill {
	name: string;
	icon: string;
}

export interface SkillCategory {
	category: string;
	skills: Skill[];
}

export interface IconCredit {
	name: string;
	icon: string;
	sourceName: string;
	sourceUrl?: string;
	license?: string;
	licenseUrl?: string;
	modified?: boolean;
	note?: string;
}

export interface NavigationLink {
	id: string;
	label: string;
	href: string;
}

export interface Certificate {
	name: string;
	issuer: string;
	date: string;
	credentialUrl?: string;
}

export type ProjectType = 'all';

export interface Project {
	id: string;
	title: string;
	description: string;
	type: ProjectType[];
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
}

export interface ResumeData {
	name: string;
	title: string;
	location: string;
	email: string;
	about: string[];
}

export const resume: ResumeData = {
	name: '謝孟哲',
	title: '全端工程師',
	location: '台灣・新竹',
	email: 'contact@hsieh-dev.us.ci',
	about: [
		'我是 謝孟哲，你可以叫我 阿哲 或 Jay！',
		'我是一名對開發充滿熱情的學生，有 4 年全端開發經驗，熟悉 Node.js、Svelte 與 TypeScript。',
		'目前持續精進中，也歡迎任何交流與合作機會！'
	]
};

export const socialLinks: SocialLink[] = [
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/jaydev0220/',
		icon: 'facebook'
	},
	{
		name: 'Discord',
		url: 'https://discordapp.com/users/263613963034427392',
		icon: 'discord'
	},
	{
		name: 'GitHub',
		url: 'https://github.com/jaydev0220',
		icon: 'github'
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/mengche0220',
		icon: 'linkedin'
	}
];

export const education: Education[] = [
	{
		institution: '國立雲林科技大學',
		location: '雲林縣斗六市大學路三段123號',
		period: '2024 - NOW'
	},
	{
		institution: '國立新竹高級工業職業學校',
		location: '新竹市東區中華路二段2號',
		period: '2021 - 2024'
	},
	{
		institution: '新竹市立光華國民中學',
		location: '新竹市北區光華北街10號',
		period: '2018 - 2021'
	},
	{
		institution: '新竹市北區北門國民小學',
		location: '新竹市北區水田街33號',
		period: '2012 - 2018'
	}
];

export const skillCategories: SkillCategory[] = [
	{
		category: '前端開發',
		skills: [
			{ name: 'HTML', icon: 'html5' },
			{ name: 'CSS', icon: 'css' },
			{ name: 'JavaScript', icon: 'javascript' },
			{ name: 'TypeScript', icon: 'typescript' },
			{ name: 'Svelte', icon: 'svelte' },
			{ name: 'Vue.js', icon: 'vuedotjs' },
			{ name: 'React', icon: 'react' },
			{ name: 'Tailwind CSS', icon: 'tailwindcss' },
			{ name: 'Sass', icon: 'sass' },
			{ name: 'Flutter', icon: 'flutter' }
		]
	},
	{
		category: '後端開發',
		skills: [
			{ name: 'Node.js', icon: 'nodedotjs' },
			{ name: 'Python', icon: 'python' },
			{ name: 'Express', icon: 'express' },
			{ name: 'FastAPI', icon: 'fastapi' },
			{ name: 'REST', icon: 'rest' },
			{ name: 'GraphQL', icon: 'graphql' }
		]
	},
	{
		category: '資料管理',
		skills: [
			{ name: 'PostgreSQL', icon: 'postgresql' },
			{ name: 'Redis', icon: 'redis' },
			{ name: 'MongoDB', icon: 'mongodb' },
			{ name: 'SQLite', icon: 'sqlite' }
		]
	},
	{
		category: '網路與伺服器',
		skills: [
			{ name: 'Docker', icon: 'docker' },
			{ name: 'GitHub Actions', icon: 'githubactions' },
			{ name: 'AWS', icon: 'aws' },
			{ name: 'GCP', icon: 'googlecloud' },
			{ name: 'Vercel', icon: 'vercel' },
			{ name: 'Railway', icon: 'railway' },
			{ name: 'Cloudflare', icon: 'cloudflare' },
			{ name: 'NGINX', icon: 'nginx' }
		]
	}
];

export const iconCredits: IconCredit[] = [
	{
		name: 'HTML',
		icon: 'html5',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/html5.svg',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'CSS',
		icon: 'css',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/css.svg',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'JavaScript',
		icon: 'javascript',
		sourceName: 'voodootikigod/logo.js',
		sourceUrl: 'https://raw.githubusercontent.com/voodootikigod/logo.js/refs/heads/master/js.svg',
		license: 'MIT',
		licenseUrl: 'https://spdx.org/licenses/MIT',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'TypeScript',
		icon: 'typescript',
		sourceName: 'TypeScript: Branding',
		sourceUrl: 'https://www.typescriptlang.org/branding/typescript-design-assets.zip',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Svelte',
		icon: 'svelte',
		sourceName: 'Wikimedia Commons',
		sourceUrl: 'https://simpleicons.org/icons/svelte.svg',
		license: 'MIT',
		licenseUrl: '',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Vue.js',
		icon: 'vuedotjs',
		sourceName: 'vuejs/art',
		sourceUrl:
			'https://raw.githubusercontent.com/vuejs/art/a1c78b74569b70a25300925b4eacfefcc143b8f6/logo.svg',
		license: 'CC-BY-NC-SA-4.0',
		licenseUrl: 'https://spdx.org/licenses/CC-BY-NC-SA-4.0',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Tailwind CSS',
		icon: 'tailwindcss',
		sourceName: 'Brand - Tailwind CSS',
		sourceUrl: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.96ee6a5a.svg',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Flutter',
		icon: 'flutter',
		sourceName: 'Flutter',
		sourceUrl: 'https://flutter.dev/assets/icon_flutter.817b4a56b047d0d36b338dd9ffd44dbd.svg',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Node.js',
		icon: 'nodedotjs',
		sourceName: 'Node.js — Branding of Node.js',
		sourceUrl: 'https://nodejs.org/static/logos/jsIconGreen.svg',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Python',
		icon: 'python',
		sourceName: 'Python.org',
		sourceUrl:
			'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Express',
		icon: 'express',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/express.svg',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'FastAPI',
		icon: 'fastapi',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/fastapi.svg',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'REST',
		icon: 'rest',
		sourceName: 'Project custom icon',
		license: 'Proprietary (this project)',
		note: 'Drawn and maintained in this repository.'
	},
	{
		name: 'GraphQL',
		icon: 'graphql',
		sourceName: 'GraphQL Logo & Brand Guidelines | GraphQL',
		sourceUrl: 'https://graphql.org/brand/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'PostgreSQL',
		icon: 'postgresql',
		sourceName: 'PostgreSQL wiki',
		sourceUrl: 'https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Redis',
		icon: 'redis',
		sourceName: 'Redis Brand Guidelines',
		sourceUrl: 'https://brand.redis.io/document/4#/visual-guidelines/logo',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'MongoDB',
		icon: 'mongodb',
		sourceName: 'MongoDB Brand Resources',
		sourceUrl: 'https://simpleicons.org/icons/mongodb.svg',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'SQLite',
		icon: 'sqlite',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/sqlite.svg',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Docker',
		icon: 'docker',
		sourceName: 'Docker Brand Guidelines',
		sourceUrl: 'https://www.docker.com/company/newsroom/media-resources/',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'GitHub',
		icon: 'github',
		sourceName: 'GitHub Brand Toolkit',
		sourceUrl: 'https://brand.github.com/GitHub_Logos.zip',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'GitHub Actions',
		icon: 'githubactions',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/githubactions.svg',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'AWS',
		icon: 'aws',
		sourceName: 'Wikimedia Commons (source: Amazon)',
		sourceUrl: 'https://commons.wikimedia.org/wiki/File:Amazon_Web_Services_Logo.svg',
		license: 'Apache License 2.0',
		licenseUrl: 'https://www.apache.org/licenses/LICENSE-2.0',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'GCP',
		icon: 'googlecloud',
		sourceName: 'Wikimedia Commons',
		sourceUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
		modified: true,
		note: 'Modified for text removal. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Railway',
		icon: 'railway',
		sourceName: 'Railway Design',
		sourceUrl: 'https://railway.com/brand/logo-light.svg',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Cloudflare',
		icon: 'cloudflare',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/cloudflare.svg',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Facebook',
		icon: 'facebook',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/facebook.svg',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Discord',
		icon: 'discord',
		sourceName: "Discord's Brand Guidelines",
		sourceUrl: 'https://discord.com/branding',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'LinkedIn',
		icon: 'linkedin',
		sourceName: 'Wikimedia Commons',
		sourceUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Mail',
		icon: 'mail',
		sourceName: 'Lucide',
		sourceUrl: 'https://lucide.dev/icons/mail',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Location',
		icon: 'location',
		sourceName: 'Lucide',
		sourceUrl: 'https://lucide.dev/icons/map-pin',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Link',
		icon: 'link',
		sourceName: 'Lucide',
		sourceUrl: 'https://lucide.dev/icons/square-arrow-out-up-right',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'React',
		icon: 'react',
		sourceName: 'Wikimedia Commons',
		sourceUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Sass',
		icon: 'sass',
		sourceName: 'Simple Icons',
		sourceUrl: 'https://simpleicons.org/icons/sass.svg',
		license: 'CC-BY-NC-SA-3.0',
		licenseUrl: 'https://spdx.org/licenses/CC-BY-NC-SA-3.0',
		modified: true,
		note: 'Modified for color fill. Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'NGINX',
		icon: 'nginx',
		sourceName: 'SVG LOGOS',
		sourceUrl: 'https://svglogos.dev',
		note: 'Brand names and trademarks belong to their respective owners.'
	},
	{
		name: 'Vercel',
		icon: 'vercel',
		sourceName: 'Vercel',
		sourceUrl: 'https://vercel.com/geist/brands',
		note: 'Brand names and trademarks belong to their respective owners.'
	}
];

export const projects: Project[] = [
	{
		id: '1',
		title: 'Daily Quote Generator',
		description:
			'A lightweight quote app that serves random daily inspiration, stores in local storage, and delivers a responsive, polished reading experience with clean vanilla HTML, CSS, and JavaScript.',
		type: [],
		technologies: ['HTML', 'CSS', 'JavaScript', 'RWD', 'Local Storage'],
		githubUrl: 'https://github.com/jaydev0220/daily-quote-generator',
		liveUrl: '/daily-quote-generator'
	},
	{
		id: '2',
		title: 'Password Strength Checker',
		description:
			'A Python password analyzer that scores strength by length, entropy signals, and common-pattern detection, then returns actionable guidance to improve security.',
		type: [],
		technologies: ['Python'],
		githubUrl: 'https://github.com/jaydev0220/password-strength-checker',
		liveUrl: '/password-strength-checker'
	},
	{
		id: '3',
		title: 'Pomodoro Timer',
		description:
			'A Vue 3 productivity timer with configurable work and break cycles, transition alerts, and volume control, designed for focused deep-work sessions across devices.',
		type: [],
		technologies: ['Vue.js', 'CSS', 'JavaScript', 'RWD'],
		githubUrl: 'https://github.com/jaydev0220/pomodoro-timer',
		liveUrl: '/pomodoro-timer'
	},
	{
		id: '4',
		title: 'CSS 3D',
		description:
			'A compact CSS 3D demo showcasing animated cubes, layered transforms, and axis-based spin effects, built to demonstrate spatial motion and modern CSS rendering.',
		type: [],
		technologies: ['HTML', 'CSS', 'RWD'],
		githubUrl: 'https://github.com/jaydev0220/css-3d',
		liveUrl: '/css-3d'
	},
	{
		id: '5',
		title: 'Simple TODO List',
		description:
			'A React and TypeScript task manager with local persistence, theme switching, and component-based state handling, built for clear UX and maintainable front-end architecture.',
		type: [],
		technologies: ['React', 'CSS', 'TypeScript', 'RWD'],
		githubUrl: 'https://github.com/jaydev0220/simple-todo-list',
		liveUrl: '/simple-todo-list'
	},
	{
		id: '6',
		title: 'Color Palette',
		description:
			'A fast Svelte tool for generating, previewing, and refining color systems in real time, helping developers and designers build consistent UI themes with export-ready output.',
		type: [],
		technologies: ['Svelte', 'Tailwind CSS', 'TypeScript'],
		githubUrl: 'https://github.com/jaydev0220/color-palette',
		liveUrl: '/color-palette'
	},
	{
		id: '7',
		title: "SuiSui's Personal Website",
		description:
			'A high-performance Svelte website for VTuber 水水, optimized for static deployment, responsive presentation, and a modern branded fan experience.',
		type: [],
		technologies: ['Svelte', 'Tailwind CSS', 'TypeScript', 'RWD'],
		githubUrl: 'https://github.com/suisui0528/suisui0528.github.io',
		liveUrl: 'https://suisui0528.github.io'
	},
	{
		id: '8',
		title: 'Unlockture 2025 Memorial',
		description:
			'An immersive Vue 3 fullscreen storytelling experience with custom scroll behavior, smooth section transitions, and multi-section navigation for high-impact event presentation.',
		type: [],
		technologies: ['Vue.js', 'Sass', 'TypeScript', 'RWD'],
		githubUrl: 'https://github.com/jaydev0220/unlockture-2025-memorial',
		liveUrl: '/unlockture-2025-memorial'
	},
	{
		id: '9',
		title: 'Ping Board',
		description:
			'A distributed uptime monitoring platform with status pages, latency tracking, and 90-day historical charts, built for reliable service observability and responsive dashboard visibility.',
		type: [],
		technologies: ['Svelte', 'Tailwind CSS', 'TypeScript', 'RWD', 'Express'],
		githubUrl: 'https://github.com/jaydev0220/ping-board',
		liveUrl: 'https://ping-board.hsieh-dev.us.ci'
	},
	{
		id: '10',
		title: "Butter's Personal Website",
		description:
			'A performant Svelte website for Butter 巴特, combining theme tokens, Runes-based state management, and responsive design for a refined personal brand presence.',
		type: [],
		technologies: ['Svelte', 'Tailwind CSS', 'TypeScript', 'RWD'],
		githubUrl: 'https://github.com/eddyb5201314-afk/eddyb5201314-afk.github.io',
		liveUrl: 'https://eddyb5201314-afk.github.io'
	}
];

export const certificates: Certificate[] = [
	{
		name: 'TOEIC Gold (885)',
		issuer: 'ETS',
		date: '2023',
		credentialUrl: 'https://cdn.hsieh-dev.us.ci/certificates/toeic-2023.webp'
	},
	{
		name: '工業電子丙級',
		issuer: '中華民國勞動部',
		date: '2023',
		credentialUrl: 'https://cdn.hsieh-dev.us.ci/certificates/industrial-electronics-c.webp'
	},
	{
		name: '工業配線丙級',
		issuer: '中華民國勞動部',
		date: '2022',
		credentialUrl: 'https://cdn.hsieh-dev.us.ci/certificates/industrial-wiring-c.webp'
	},
	{
		name: 'GEPT 中級',
		issuer: 'LTTC',
		date: '2019',
		credentialUrl: 'https://cdn.hsieh-dev.us.ci/certificates/gept-intermediate.webp'
	},
	{
		name: 'GEPT 初級',
		issuer: 'LTTC',
		date: '2018',
		credentialUrl: 'https://cdn.hsieh-dev.us.ci/certificates/gept-elementary.webp'
	}
];

export const navLinks: NavigationLink[] = [
	{ id: 'about', label: '關於', href: '#about' },
	{ id: 'certificates', label: '證照', href: '#certificates' },
	{ id: 'skills', label: '技能', href: '#skills' },
	{ id: 'portfolio', label: '作品', href: '#portfolio' }
];

export const typingStrings = [
	'你好，我是謝孟哲。',
	'我是一名全端工程師。',
	"Hi, I'm Meng Che.",
	"I'm a Fullstack Developer."
];

export const projectFilters: { label: string; type: ProjectType }[] = [
	{ label: '全部', type: 'all' }
];

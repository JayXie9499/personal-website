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
		icon: 'logos:facebook'
	},
	{
		name: 'Discord',
		url: 'https://discordapp.com/users/263613963034427392',
		icon: 'logos:discord-icon'
	},
	{
		name: 'GitHub',
		url: 'https://github.com/jaydev0220',
		icon: 'simple-icons:github'
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/mengche0220',
		icon: 'logos:linkedin-icon'
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
			{ name: 'HTML', icon: 'skill-icons:html' },
			{ name: 'CSS', icon: 'skill-icons:css' },
			{ name: 'JavaScript', icon: 'skill-icons:javascript' },
			{ name: 'TypeScript', icon: 'skill-icons:typescript' },
			{ name: 'Svelte', icon: 'skill-icons:svelte' },
			{ name: 'Vue.js', icon: 'skill-icons:vuejs-light' },
			{ name: 'React', icon: 'skill-icons:react-light' },
			{ name: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-light' },
			{ name: 'Sass', icon: 'skill-icons:sass' },
			{ name: 'Flutter', icon: 'skill-icons:flutter-light' }
		]
	},
	{
		category: '後端開發',
		skills: [
			{ name: 'Node.js', icon: 'skill-icons:nodejs-light' },
			{ name: 'Python', icon: 'skill-icons:python-light' },
			{ name: 'Express', icon: 'skill-icons:expressjs-light' },
			{ name: 'FastAPI', icon: 'skill-icons:fastapi' },
			{ name: 'GraphQL', icon: 'skill-icons:graphql-light' }
		]
	},
	{
		category: '資料管理',
		skills: [
			{ name: 'PostgreSQL', icon: 'skill-icons:postgresql-light' },
			{ name: 'Redis', icon: 'skill-icons:redis-light' },
			{ name: 'MongoDB', icon: 'skill-icons:mongodb' },
			{ name: 'SQLite', icon: 'skill-icons:sqlite' }
		]
	},
	{
		category: '網路與伺服器',
		skills: [
			{ name: 'Docker', icon: 'skill-icons:docker' },
			{ name: 'GitHub Actions', icon: 'skill-icons:githubactions-light' },
			{ name: 'AWS', icon: 'skill-icons:aws-light' },
			{ name: 'GCP', icon: 'skill-icons:gcp-light' },
			{ name: 'Vercel', icon: 'skill-icons:vercel-light' },
			{ name: 'Railway', icon: 'devicon:railway' },
			{ name: 'Cloudflare', icon: 'skill-icons:cloudflare-light' },
			{ name: 'NGINX', icon: 'skill-icons:nginx' }
		]
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

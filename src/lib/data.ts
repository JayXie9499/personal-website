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

export type ProjectType = 'web' | 'mobile' | 'data' | 'automation' | 'all';

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
	about: string;
}

export const resume: ResumeData = {
	name: '謝孟哲',
	title: '全端工程師',
	location: '台灣・新竹',
	email: 'mengche@example.com',
	about: '專注在產品體驗與系統可維護性的全端工程師。'
};

export const socialLinks: SocialLink[] = [
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/jayxie9499/',
		icon: 'facebook'
	},
	{
		name: 'Discord',
		url: 'https://discordapp.com/users/263613963034427392',
		icon: 'discord'
	},
	{
		name: 'GitHub',
		url: 'https://github.com/JayXie9499',
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
		institution: '國立新竹高級工業職業學校',
		location: '新竹市東區中華路二段2號',
		period: '2020 - 2023'
	},
	{
		institution: '新竹市立光華國民中學',
		location: '新竹市北區光華北街10號',
		period: '2017 - 2020'
	},
	{
		institution: '新竹市北區北門國民小學',
		location: '新竹市北區水田街33號',
		period: '2011 - 2017'
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
			{ name: 'Tailwind CSS', icon: 'tailwindcss' },
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
			{ name: 'Railway', icon: 'railway' },
			{ name: 'Cloudflare', icon: 'cloudflare' }
		]
	}
];

export const projects: Project[] = [];

export const certificates: Certificate[] = [
	{
		name: 'AWS Certified Cloud Practitioner',
		issuer: 'Amazon Web Services',
		date: '2023',
		credentialUrl: 'https://example.com/cert/aws'
	},
	{
		name: 'Google Cloud Digital Leader',
		issuer: 'Google Cloud',
		date: '2023',
		credentialUrl: 'https://example.com/cert/gcp'
	},
	{
		name: 'TOEIC 785',
		issuer: 'ETS',
		date: '2022'
	}
];

export const navLinks: NavigationLink[] = [
	{ id: 'about', label: '關於', href: '#about' },
	{ id: 'certificates', label: '證照', href: '#certificates' },
	{ id: 'skills', label: '技能', href: '#skills' },
	{ id: 'portfolio', label: '作品', href: '#portfolio' }
];

export const typingStrings = ['你好，我是謝孟哲。', '我是一名全端工程師。'];

export const projectFilters: { label: string; type: ProjectType }[] = [
	{ label: '全部', type: 'all' }
];

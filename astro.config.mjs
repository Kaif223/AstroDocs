// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kaif223.github.io',
	base: '/AstroDocs',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Kaif223/AstroDocs' }],
			sidebar: [
				{
					label: 'Docs',
					items: [
						{ label: 'Introduction', link: '/' },
						{ label: 'Getting started', link: '/getting-started' },
						{ label: 'Setup Guide', link: '/setup' },
						{ label: 'FAQ', link: '/faq' },
					],
				},
			],
		}),
	],
});

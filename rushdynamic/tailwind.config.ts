import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			colors: {
				'light-grey': '#F6F6F6',
				'dark-grey': '#0D0D0D',
				'text-dark': '#8F8F8F',
			},
			fontFamily: {
				inter: 'var(--font-inter)',
				'neue-metana': 'var(--font-neue-metana)',
				montreal: 'var(--font-montreal)',
				fraunces: 'var(--font-fraunces)',
				'jetbrains-mono': 'var(--font-jetbrains-mono)',
			},
		},
	},
	plugins: [],
};
export default config;

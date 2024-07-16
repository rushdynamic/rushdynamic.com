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
			},
			fontFamily: {
				inter: 'var(--font-inter)',
				'neue-metana': 'var(--font-neue-metana)',
			},
		},
	},
	plugins: [],
};
export default config;

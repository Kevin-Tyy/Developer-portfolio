/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				"primary-dark-100": "#242330",
				"primary-dark-200": "#35344A",
				"primary-dark-300": "#474466",
				"secondary-100": "#FFC31F",
			},
			content: {
				quotes: "url('/quotes.png')",
			},
			keyframes: {
				"slide-in": {
					from: { opacity: 0, transform: "translateY(20%)" },
					to: { opacity: 1, transform: "none" },
				},
				"slide-out": {
					from: { opacity: 0, transform: "translateY(-25%)" },
					to: { opacity: 1, transform: "none" },
				},
			},
		},
	},
	plugins: [],
};

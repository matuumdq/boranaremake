/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				trade: ["trade", "sans-serif"],
				tradegothic: ["tradegothic", "sans-serif"],
			},
			screens: {
				fold: "350px",
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				nunito: ["Nunito", "sans-serif"],
				antonio: ["Antonio", "sans-serif"],
				trade: ["Trade Gothic Next Rust W01", "sans-serif"],
			},
		},
	},
	plugins: [],
};

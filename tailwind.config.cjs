/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,svelte}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Grayish_blue: "hsl(237, 18%, 59%)",
				Soft_red: "hsl(345, 95%, 68%)",

				// Neutral

				White: "hsl(0, 0%, 100%)",
				Dark_desaturated_blue: "hsl(236, 21%, 26%)",
				Very_dark_blue: "hsl(235, 16%, 14%)",
				Very_dark_blue_black: "hsl(234, 17%, 12%)",
			},
      fontFamily: {
        sans: ['Red Hat Text', 'sans-serif'],
      },
		},
	},
	plugins: [],
};

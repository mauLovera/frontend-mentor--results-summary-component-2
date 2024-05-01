import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			"light-red": "hsl(0, 100%, 67%)",
			"orangey-yellow": "hsl(39, 100%, 56%)",
			"green-teal": "hsl(166, 100%, 37%)",
			"cobalt-blue": "hsl(234, 85%, 45%)",
			white: "hsl(0, 0%, 100%)",
			"pale-blue": "hsl(221, 100%, 96%)",
			"light-blue": "hsl(241, 100%, 89%)",
			"dark-gray-blue": "hsl(224, 30%, 27%)",
		},
		gradientColorStops: {
			"results-1": "hsl(252, 100%, 67%)",
			"results-2": "hsl(252, 100%, 63%)",
			"results-3": "hsl(241, 81%, 54%)",
			"results-circle-1": "hsl(256, 71%, 46%)",
			"results-circle-2": "hsla(241, 71%, 46%, 0)",
			"violet-blue": "hsla(256, 72%, 46%, 1)",
			"persian-blue": "hsla(241, 72%, 46%, 1)",
			"dark-gray-blue": "hsl(224, 30%, 27%)",
		},
		extend: {
			borderRadius: {
				container: "36px",
			},
		},
	},
	plugins: [],
}
export default config

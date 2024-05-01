import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      reaction: "hsl(0, 100%, 67%)",
      "reaction-light": "hsl(0, 100%, 98%)",
      memory: "hsl(39, 100%, 56%)",
      "memory-light": "hsl(39, 100%, 98%)",
      verbal: "hsl(166, 100%, 37%)",
      "verbal-light": "hsl(166, 100%, 98%)",
      visual: "hsl(234, 85%, 45%)",
      "visual-light": "hsl(234, 85%, 97%)",
      "pale-blue": "hsl(220, 100%, 96%)",
      "light-blue": "hsl(241, 100%, 89%)",
      "dark-navy": "hsl(223, 30%, 27%)",
      white: "hsl(0, 0%, 100%)",
    },
    gradientColorStops: {
      "results-1": "hsl(252, 100%, 67%)",
      "results-2": "hsl(252, 100%, 63%)",
      "results-3": "hsl(241, 81%, 54%)",
      "results-circle-1": "hsl(256, 71%, 46%)",
      "results-circle-2": "hsla(241, 71%, 46%, 0)",
    },
    extend: {
      borderRadius: {
        container: "36px",
      },
      screens: {
        md: "769px",
      },
    },
  },
  plugins: [],
}
export default config

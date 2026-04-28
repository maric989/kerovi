import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        beige: {
          DEFAULT: "#EDE0CC",
          dark: "#D4C4A8",
        },
        brown: {
          DEFAULT: "#5C3D2E",
          light: "#8B6347",
          dark: "#3A1F13",
        },
        gold: {
          DEFAULT: "#C9963A",
          light: "#E5B96A",
          dark: "#9B6E1E",
        },
        forest: {
          DEFAULT: "#2D4A3E",
          light: "#3D6355",
          dark: "#1A2E26",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#f0f4f9",
          100: "#d9e4f0",
          200: "#b3c8e0",
          300: "#7ca3cb",
          400: "#4d7fb3",
          500: "#2c609a",
          600: "#1e4d82",
          700: "#163a69",
          800: "#102b50",
          900: "#0b1e38",
          950: "#060f1e",
        },
        gold: {
          400: "#f0c040",
          500: "#e8a800",
          600: "#c48c00",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      "dark-green": "#052e16",
      white: "#ffffff",
      brown: "#f5c986",
      yellow: "#eab308",
      "light-green": "#bef264",
      orange: "#fdba74",
      "light-brown": "#a16207",
      lime: "#f7fee7",
      green: "#3f6212",
      gray: "#808080",
    },
    fontFamily: {},
  },
  plugins: [],
};
export default config;

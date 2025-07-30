/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MaruBuri: ["Maruburi", "sans-serif"],
        continuous: ["continuous", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00F5A0",
        dark: "#0B0F19",
        card: "rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // to use dark theme we have to enable the configuration in tailwind css which is a dark mode 
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}


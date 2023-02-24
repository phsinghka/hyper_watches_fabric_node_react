/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'watch-pattern': "url('./src/assets/watches.jpg')",
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}
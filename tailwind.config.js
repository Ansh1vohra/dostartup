/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        monte: ['var(--font-montserrat)'],
        outfit: ['var(--font-outfit)'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

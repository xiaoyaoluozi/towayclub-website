/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E8B57',
        secondary: '#FF6B35',
        accent: '#4ECDC4',
      },
    },
  },
  plugins: [],
}

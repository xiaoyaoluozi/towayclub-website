/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E8B57', // 海洋绿
        secondary: '#FF6B35', // 活力橙
        accent: '#4ECDC4', // 清新蓝
      },
    },
  },
  plugins: [],
}

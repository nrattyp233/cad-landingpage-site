/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#0f172a',
        'dark-2': '#1e293b',
        'dark-3': '#334155',
        'light-1': '#f8fafc',
        'light-2': '#e2e8f0',
        'brand-pink': '#ec4899',
        'brand-purple': '#8b5cf6',
        'brand-light': '#e0f2fe',
      },
      animation: {
        'hue-cycle': 'hue 8s ease-in-out infinite',
        'text-gradient-flow': 'gradient 8s ease infinite',
      },
      keyframes: {
        hue: {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(30deg)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

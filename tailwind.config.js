/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        bits: {
          dark: '#0f172a',
          gold: '#fbbf24',
          cyan: '#22d3ee',
          ocean: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}

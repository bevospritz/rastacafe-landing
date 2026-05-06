/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rasta: {
          green: { DEFAULT: '#1B4332', dark: '#0A2318', light: '#2D6A4F' },
          gold: { DEFAULT: '#C8901A', light: '#E8B040' },
          cream: '#F9F4EC',
          dark: '#0F1A12',
          brown: '#6B3A2A',
        },
      },
    },
  },
  plugins: [],
}

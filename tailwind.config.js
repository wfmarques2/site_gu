/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'usa-blue': '#002868',
        'usa-light-blue': '#1E3A8A',
        'usa-red': '#BF0A30',
        'dark-bg': '#0B1120',
        'dark-surface': '#111827',
        'dark-card': '#1F2937',
        'dark-border': '#374151',
        'dark-text': '#E5E7EB',
        'dark-muted': '#9CA3AF',
      },
    },
  },
  plugins: [],
}

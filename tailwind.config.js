/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'header': 'auto 1fr',
        'board': '240px 240px 240px',
      }
    },
  },
  plugins: [],
}


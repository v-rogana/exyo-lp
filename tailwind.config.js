/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'exyo-cyan': '#70CED3',
        'exyo-dark': '#0A0A0A',
        'exyo-dark2': '#0E0E10',
        'exyo-card': '#111111',
        'exyo-border': '#1E1E22',
        'exyo-border-light': '#2A2A2E',
        'exyo-gray': '#9A9AA0',
        'exyo-white': '#F5F5F7',
      },
      fontFamily: {
        'display': ['Sora', 'sans-serif'],
        'body': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 esto es lo importante
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

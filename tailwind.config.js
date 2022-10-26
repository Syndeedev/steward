/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, 
  content: [],
  theme: {
    extend: {
      colors: {
        'steward-green': '#12B76A',
        'steward-gray': '#344054',
      },
      screens: {
        'xs': '320px',
    },
  }
  },
  plugins: [],
}

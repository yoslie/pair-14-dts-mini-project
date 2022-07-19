/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        DEFAULT: '0px 6px 22px rgba(2, 43, 85, 0.08)'
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#141414',
      red: '#B9090B',
      gray: '#808080',
      midGray: '#6D6D6E',
      smokeWhite: '#E5E5E5'
    }
  },
  plugins: [],
}

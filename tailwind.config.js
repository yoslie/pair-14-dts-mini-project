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
      black: '#000',
      semiBlack: {
        100: '#EAEAEA',
        200: '#141414',
      },
      red: {
        50: '#FFEBEE',
        100: '#FFCDD2',
        200: '#EF9A9A',
        300: '#E57373',
        400: '#EF5350',
        500: '#F44336',
        600: '#E53935',
        700: '#D32F2F',
        800: '#C62828',
        900: '#B9090B'
      },
      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        150: '#FBFBFB',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121'
      },
      midGray: '#6D6D6E',
      smokeWhite: '#E5E5E5'
    }
  },
  plugins: [],
}

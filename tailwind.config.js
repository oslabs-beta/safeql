/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'blue-400': '#344E77',
      'blue-300': '#5277AF',
      'blue-200': '#7495C7',
      'blue-100': '#97B5E2',
      white: '#ffffff',
    },
    fontFamily: {},
    extend: {
      width: {
        '95p': '95%',
      },
      borderRadius: {
        'lg-1': '0.6rem',
      },
    },
  },
  plugins: [],
};

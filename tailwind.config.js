/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // purge:[
  //   './pages/**/*.{js, ts, jsx, tsx}',
  //   './components/**/*.{js,ts,jsx,tsx}'
  // ],
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
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    fontFamily: {},
    extend: {
      width: {
        '95p': '95%',
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33%',
      },
      borderRadius: {
        'lg-1': '0.6rem',
      },
    },
  },
  plugins: [],
};

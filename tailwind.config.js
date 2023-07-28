const constants = require('./src/constants/index');
const BASE_IMAGE_URL = constants['BASE_IMAGE_URL'];

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '1/9': '12%',
        'pane': '40%',
        // Unit Panel
        '1/16': '6.25%',
        '2/16': '12.5%',
        '3/16': '18.75%',
        '4/16': '25%',
      },
      height: {
        '1/10': '10%'
      },
      backgroundImage: {
        'unit-panel': `url(${BASE_IMAGE_URL}bg.gif)`,
        'dark-unit-panel':  `url(${BASE_IMAGE_URL}bg-dark.gif)`,
      },
      padding: {
        'top': '2px'
      },
      boxShadowColor: {
        'unit-panel': 'rgb(32, 24, 15)'
      },
      boxShadow: {
        'unit-panel': '3px 3px'
      },
      borderColor: {
        'unit-panel': 'rgb(83, 78, 64)'
      },
      textColor: {
        'unit-panel': 'rgb(51, 42, 30)'
      }
    },
  },
  plugins: [],
}


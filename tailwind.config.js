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
      backgroundImage: {
        'unit-panel': "url('./src/assets/images/bg.gif')"
      }
    },
  },
  plugins: [],
}


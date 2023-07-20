/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '1/9': '12%',
        'pane': '40%'
      },
      backgroundImage: {
        'unit-panel': "url('./src/assets/images/bg.gif')"
      }
    },
  },
  plugins: [],
}


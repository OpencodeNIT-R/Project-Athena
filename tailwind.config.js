/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily:{
        silverEditorial : ['The Silver Editorial','serif']
      },
      boxShadow: {
        'inner-white': 'inset 0 2px 4px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
};

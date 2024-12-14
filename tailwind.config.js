/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'inner-white': 'inset 0 2px 4px rgba(255, 255, 255, 0.5)', 
      },      
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

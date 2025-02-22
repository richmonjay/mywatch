/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    
    extend: {
      boxShadow: {
        custom: '0 2px 5px rgba(0,0,0,0.1)',
      },
      fontSize: {
        custom: '.8rem',
      },
      colors: {
        customColor: '#c39052'
      }
    },
  },
  plugins: [],
}
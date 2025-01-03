/** @type {import('tailwindcss').Config} */
import form from '@tailwindcss/forms'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "primary-gradient"  : 'linear-gradient(30deg, red, green)',
      },
      colors :{
        'll' : 'red'
      }
    },
  },
  plugins: [
  form,
  ],
 
}
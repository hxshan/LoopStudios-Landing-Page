/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        alata: ['Alata'],
        josefin: ['Josefin Sans']
      }
    },
  },
  plugins: [],
}
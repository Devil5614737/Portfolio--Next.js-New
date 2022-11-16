/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "pink":"#FF32A1",
        "sky-blue":"#86FFE2",
        "blue":"#84F0FF",
        "pink-secondary":"#FB42FF"
      },
      boxShadow:{
        'card-shadow':"10px 10px 31px -9px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}

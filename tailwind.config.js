/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:{
    content: ["./dist/*.{html,js}"]
  },
  theme: {
    extend: {
      colors:{
        primary:'#FF3B30',
        body:'#000000',
        small:'#4A5468',
        background1: '#EDF0F7',
        background2: '#E2E7F0',
        white:'#FFFFFF'
      },
      fontFamily:{
        sans:['FiraGO', 'sans-serif']
      },
      
    },
    container:{
      width:'1312px'
    }
  },
  plugins: [],
}


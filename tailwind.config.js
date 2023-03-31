/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:{
    content: ["./dist/*.{html,js}"]
  },
  theme: {
    screens:{
      sm:'360px',
      'md': '768pxpx',
      lg: ' 1128px',
      xl: '1312px'
    },
    extend: {
      colors:{
        primary:'#FF3B30',
        body:'#000000',
        small:'#4A5468',
        background1: '#EDF0F7',
        background2: '#E2E7F0',
        white:'#FFFFFF',
        darkGrey:'#4A5468'
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


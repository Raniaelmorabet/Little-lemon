
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      custom: ['markazi'],
      Karla: ['Karla'],
    },
    extend: {
      colors: {
        "dark-brown" : '#342524',
        "light-brown" :'#412E2D',
      },
      width: {
        '25': '25rem',
      },
      height: {
         "723" :'723px',
        "719" :'719px',

      },
      spacing: {
        '283': '283px',
      },
      screens: {
        'sm': '1700px',
      },
    },
  },
  plugins: [],
}

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'midnightblue': '#242d52',  //Customized textColor
      },
      backgroundImage: theme => ({
        'heroPattern': "url('./../assets/endlessClouds.svg')",
      }),

      backgroundColor: theme => ({
    
        'DarkRed': '#8B0000'
       })
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



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
        
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./*.html', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        archivo : 'Archivo, serif',
        'roboto-serif': 'Roboto Serif, serif',
        lato: 'Lato'
      },
      fontSize: {
        '100': '100%',
        'em': '1em',
        '12em': '1.2em',
        '15em': '1.5em',
        '2em': '2em',
        '23em': '2.3em',
        '25em': '2.5em',
      },
      colors: {
        crema: '#fffdf5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
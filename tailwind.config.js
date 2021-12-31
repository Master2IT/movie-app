module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    colors: {
      base: '#eee',
      appbar: '#549DF2',
      searchBtn: '#549DF2',
      white: '#fff'
    },
    textColor: {
      white: '#fff',
      pagination: '#318FE7',
      gray: '#ccc',
      subtitle: '#888',
      genre: '#aaa',
      star: '#facc15'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

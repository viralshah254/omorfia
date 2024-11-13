const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodoni': ['Bodoni', 'serif'],
        'magenta': ['Magenta', 'sans-serif'],
      },
      colors: {
        'eerie-black': '#1a1e23',
        'lapis-lazuli': '#155f7d',
        'timber-wolf': '#DBD3C9',
        'monbatten': '#9EB384',
      },
    },
  },
  plugins: [],
}
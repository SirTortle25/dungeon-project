/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          text: '#F9E0BB',
          primary: '#FFC26F',
          outline: '#C38154',
          back: '#884A39',
          action: '#ed9b21',
          dark: '#2D2D2D',
        }
      }
    }
  },
  plugins: [],
}
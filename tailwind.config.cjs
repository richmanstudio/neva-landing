/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#172A4A',      // тёмный синий
        secondary: '#FFFFFF',    // белый
        accent: '#8560B8',       // фиолетово-лавандовый
        bgStart: '#F5F6F8',      // светлый градиент
        bgEnd: '#FFFFFF',
        tealLight: '#C8F7F5',
        teal: '#17C4BE',
      },
      boxShadow: {
        custom: '0 4px 24px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        xl: '20px',
        '2xl': '32px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
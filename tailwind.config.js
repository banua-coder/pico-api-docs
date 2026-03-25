/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f4f8',
          100: '#d1e9f1',
          200: '#a3d3e3',
          300: '#75bdd5',
          400: '#5dade2',
          500: '#3498db',
          600: '#2980b9',
          700: '#1f4e79',
          800: '#1a3a5c',
          900: '#15263f',
        },
        pico: {
          'sky': '#5dade2',
          'blue': '#3498db',
          'deep': '#2980b9',
          'accent': '#635bff',
          'dark': '#1f4e79'
        },
        gray: {
          950: '#0d0f12',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

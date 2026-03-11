/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e9ece3',
          200: '#d4dac8',
          300: '#b5c0a2',
          400: '#93a27d',
          500: '#738660',
          600: '#5b6b4c',
          700: '#49563d',
          800: '#3c4533',
          900: '#333b2c',
        },
        cream: '#faf9f6',
        charcoal: '#1a1f16',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        body: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

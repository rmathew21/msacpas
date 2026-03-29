/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         forest: {
//           50: '#f0fdf4',
//           100: '#dcfce7',
//           200: '#bbf7d0',
//           300: '#86efac',
//           400: '#4ade80',
//           500: '#22c55e',
//           600: '#16a34a',
//           700: '#15803d',
//           800: '#166534',
//           900: '#14532d',
//           950: '#052e16',
//         },
//         sage: {
//           50: '#f6f7f4',
//           100: '#e9ece3',
//           200: '#d4dac8',
//           300: '#b5c0a2',
//           400: '#93a27d',
//           500: '#738660',
//           600: '#5b6b4c',
//           700: '#49563d',
//           800: '#3c4533',
//           900: '#333b2c',
//         },
//         cream: '#faf9f6',
//         charcoal: '#1a1f16',
//       },
//       fontFamily: {
//         display: ['Georgia', 'Cambria', 'serif'],
//         body: ['Helvetica Neue', 'Arial', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50:  '#e8f0fc',
          100: '#c4d6f7',
          200: '#9dbcf2',
          300: '#6599e8',
          400: '#3271d4',
          500: '#014da4', // ← logo primary
          600: '#013c82',
          700: '#012d61',
          800: '#011e40',
          900: '#010f20',
          950: '#000810',
        },
        navy: {
          50:  '#e6ecf5',
          100: '#c0ceea',
          200: '#94aedd',
          300: '#5f83c8',
          400: '#3460ad',
          500: '#153a81', // ← logo secondary
          600: '#0d337d', // ← logo wordmark
          700: '#0a2660',
          800: '#071944',
          900: '#040d27',
          950: '#020618',
        },
        slate: {
          50:  '#f4f6f9',
          100: '#dde3ed',
          200: '#bec8d9',
          300: '#95a4bc',
          400: '#6b7e99',
          500: '#4e6078',
          600: '#3a4a5c',
          700: '#283342',
          800: '#18202b',
          900: '#0b0e13',
        },
        cream:    '#f8f9fb',
        charcoal: '#14213d',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        body:    ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

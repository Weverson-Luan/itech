/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/shared/presentation/components/**/*tsx"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257E6',
        },
        green: {
          700: '#9BF00B',

        },
        blue: {
          500: '#00AEFF'
        },
        gray: {
          500: '#C0C0C0',
          400: '#777777',
          700: '#2E2E2E'
        }
      }
    },
  },
  plugins: [],
}

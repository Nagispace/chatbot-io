/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/*.html'],
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        apple: ['Apple']
      }
    }
  },
  plugins: []
};

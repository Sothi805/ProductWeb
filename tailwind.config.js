/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1599.98px' },
      'xl': { 'max': '1399.98px' },
      'lg': { 'max': '1199.98px' },
      'md': { 'max': '991.98px' },
      'sm': { 'max': '767.98px' },
      'xs': { 'max': '575.98px' }
    }
  },
  plugins: [],
}
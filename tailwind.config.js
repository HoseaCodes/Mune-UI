/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'custom-green': '#1aae33',
        'custom-purple': '#8133f1',
        'custom-blue': '#33adf1',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

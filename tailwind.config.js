/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-primary": '#0978FD',
        "gray-primary": '#F5F5F5',
        "gray-secondary": "#797979",
        "gray-toopbar": "#2c3e50",
        "green-active": "#31A24C"
      },
      fontSize: {
        'rale': '2.1rem'
      }
    },
  },
  plugins: [],
}

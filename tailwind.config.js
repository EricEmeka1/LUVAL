/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "sx": "15px",
      },
      screens:{
        "xs": "365px"
      }
    },
  },
  plugins: [],
}

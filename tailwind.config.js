/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,jpg}"],
  theme: {
    extend: {
      fontFamily: {
        charm: ["Charm",],
      },
      colors: {
        primary: '#e6e4e1',
        secondary:'#deaf71' ,
        tertiary: '#c79c60',
        whatever:'#f5c481',
        four: "#bab9b6",
      },
      backgroundImage: {
        'cover': "url('../images/cropped-1-1400x600.jpg')",
      },
    },
    plugins: [],
  }
}
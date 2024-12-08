/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#CDDFF4', // Custom blue color
        'custom-hover': '#666f7a', // Hover color
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'], // Helvetica font
      },
    },
  },
  plugins: [],
}

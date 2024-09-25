/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tell Tailwind to look for classes in these files
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'custom-banner': "url('/public/TopBannerBackground.svg')",
      },
    },
  },
  plugins: [],
};
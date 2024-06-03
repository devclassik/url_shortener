/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.clip-custom': {
          clipPath: 'polygon(0 5%, 100% 0%, 100% 97%, 0% 100%)',
        },
        '.clip-custom-sm': {
          clipPath: 'polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)',
        },
        '.clip-custom-md': {
          clipPath:'polygon(0 4%, 100% 0%, 100% 98%, 0% 100%)',
        },
        '.clip-custom2': {
          clipPath: 'polygon(0 6%, 100% 0%, 100% 100%, 0% 100%)',
        },
      });
    },
  ],
}
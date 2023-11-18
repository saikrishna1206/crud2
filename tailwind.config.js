/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "corporate"],
  },
  plugins: [require("daisyui")],
}
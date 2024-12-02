/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure this points to your source code
    './src/**/*.{js,tsx,ts,jsx}',
    // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
    // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F15223',
        'orange20': 'rgba(241, 82, 35, 0.2)',
        'purple': '#5041AB',
        'black': '#040415',
        'gold': '#FFB432',
        'cyan': '#69E0C7',
        'light-purple': '#8A24FF',
        'pink': '#FF7D7D',
        'green': '#65CF58'
      }
    },
  },
  plugins: [],
};

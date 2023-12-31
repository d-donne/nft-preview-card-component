/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {},
    colors: {
      "soft-blue": "hsl(215, 51%, 70%)",
      cyan: "hsl(178, 100%, 50%)",
      "bg-primary": "hsl(217, 54%, 11%)",
      "bg-card": "hsl(216, 50%, 16%)",
      "very-dark-blue": "hsl(215, 32%, 27%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      "ff-primary": ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};

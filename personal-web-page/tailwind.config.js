/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "480px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "481px", max: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "769px", max: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1025px", max: "1200px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1300px", max: "1600" },
      // => @media (min-width: 1536px) { ... }
      "3xl": { min: "1600px", max: "2000" },
    },

    // extend: {},
  },
  plugins: [],
};

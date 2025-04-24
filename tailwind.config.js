// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a4b6d", // Dark navy (trust/professionalism)
          light: "#22577a", // Original Lapis Lazuli
        },
        accent: {
          DEFAULT: "#3bb389", // Accessible Emerald
          light: "#57cc99", // Hover states
        },
        cta: "#fec601", // Mikado Yellow (attention-grabbing)
        secondary: "#8a2a32", // Dark Auburn (borders/errors)
        background: "#f9f1f0", // Soft neutral background
        dark: "#242423", // Eerie Black (text/dark mode)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

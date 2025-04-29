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
          DEFAULT: "#2568e4",
          100: "#06142f",
          200: "#0c295e",
          300: "#123d8e",
          400: "#1751bd",
          500: "#2568e4",
          600: "#5186e9",
          700: "#7ca4ef",
          800: "#a8c3f4",
          900: "#d3e1fa",
        },
        accent: {
          DEFAULT: "#f5b700",
          100: "#312500",
          200: "#624900",
          300: "#936e00",
          400: "#c49300",
          500: "#f5b700",
          600: "#ffca2b",
          700: "#ffd760",
          800: "#ffe495",
          900: "#fff2ca",
        },
        secondary: {
          DEFAULT: "#5ae8ed",
          100: "#07393b",
          200: "#0d7276",
          300: "#14abb0",
          400: "#1fdfe6",
          500: "#5ae8ed",
          600: "#7becf0",
          700: "#9cf1f4",
          800: "#bdf6f8",
          900: "#defafb",
        },
        background: {
          DEFAULT: "#f7f7ff",
          100: "#000064",
          200: "#0000c8",
          300: "#2d2dff",
          400: "#9191ff",
          500: "#f7f7ff",
          600: "#f7f7ff",
          700: "#f9f9ff",
          800: "#fbfbff",
          900: "#fdfdff",
        },
        dark: {
          DEFAULT: "#1c1c1c",
          100: "#060606",
          200: "#0b0b0b",
          300: "#111111",
          400: "#161616",
          500: "#1c1c1c",
          600: "#494949",
          700: "#777777",
          800: "#a4a4a4",
          900: "#d2d2d2",
        },
        danger: {
          DEFAULT: "#dc0073",
          100: "#2c0017",
          200: "#58002d",
          300: "#840044",
          400: "#af005b",
          500: "#dc0073",
          600: "#ff168f",
          700: "#ff51ab",
          800: "#ff8bc7",
          900: "#ffc5e3",
        },
        success: {
          DEFAULT: "#04e762",
          100: "#012e14",
          200: "#015c27",
          300: "#028b3b",
          400: "#03b94f",
          500: "#04e762",
          600: "#26fc7f",
          700: "#5cfd9f",
          800: "#92fdbf",
          900: "#c9fedf",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: "#1a4b6d", // Dark navy (trust/professionalism)
//           light: "#22577a", // Original Lapis Lazuli
//         },
//         accent: {
//           DEFAULT: "#3bb389", // Accessible Emerald
//           light: "#57cc99", // Hover states
//         },
//         cta: "#fec601", // Mikado Yellow (attention-grabbing)
//         secondary: "#8a2a32", // Dark Auburn (borders/errors)
//         background: "#f9f1f0", // Soft neutral background
//         dark: "#242423", // Eerie Black (text/dark mode)
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//         heading: ["Plus Jakarta Sans", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

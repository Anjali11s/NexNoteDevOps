import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["pastel"],
  },
//   daisyui: {
//   themes: [
//     {
//       mytheme: {
//         "primary": "#A67C52",   // warm pastel brown
//         "secondary": "#D9CBB3", // cream beige
//         "accent": "#F4E1D2",    // soft peach
//         "neutral": "#EDEDED",   // light gray
//         "base-100": "#FFFDF9",  // background
//       },
//     },
//   ],
// }

}
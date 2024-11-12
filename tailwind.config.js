/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9538E2",
        "custom-gray": "#F6F6F6",
      },
      boxShadow: {
        "btn-shadow": "0px 4px 50px 0px rgba(11, 11, 11, 0.15) inset",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};

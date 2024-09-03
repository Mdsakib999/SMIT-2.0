/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-2px, -2px) rotate(-1deg)" },
          "50%": { transform: "translate(2px, -2px) rotate(1deg)" },
          "75%": { transform: "translate(-2px, 2px) rotate(-1deg)" },
          "100%": { transform: "translate(2px, 2px) rotate(0deg)" },
        },
      },
      animation: {
        shake: "shake 0.5s infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};

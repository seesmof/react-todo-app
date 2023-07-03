/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        accent: "#e0f2fe",
        accentHover: "#a6e4ff",
        text: "#075985",
      },
    },
  },
  plugins: [],
};

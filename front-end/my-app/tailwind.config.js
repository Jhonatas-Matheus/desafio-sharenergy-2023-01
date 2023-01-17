/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        perso: "-1px 10px 51px 17px rgba(0,0,0,0.75)",
        perso2: "-1px 10px 46px 2px rgba(0,0,0,0.75)",
        perso3: "-1px 10px 46px 2px #1ba2a1"
      },
    },
  },
  plugins: [],
};

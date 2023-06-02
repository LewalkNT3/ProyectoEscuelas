// @type {import('tailwindcss').Config}
module.exports = {
  mode: "jit",
  content: [" ./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "rgb(57, 141, 123)",
      },
    },
  },
  plugins: [],
};

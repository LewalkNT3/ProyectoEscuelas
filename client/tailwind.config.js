// @type {import('tailwindcss').Config}
module.exports = {
  mode: "jit",
  content: [" ./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "rgb(79 127 127)",
        "custom-ornage": "rgb(207 83 59)",
        "custom-violet": "#9585ba",
        "custom-yellow": "#f3d1a4",
        "full-bg-color": "#d9d9d9",
      },
    },
  },
  plugins: [],
};

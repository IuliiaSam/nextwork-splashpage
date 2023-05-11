/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#837161",
          secondary: "#556A6F",
          accent: "#768E7F",
          neutral: "#47454D",
          success: "#868864",
          info: "#3AA1F1",
          warning: "#DBD87E",
          error: "#eb5234",
          "base-100": "#ffffff",
          darkgrey: "#34373F",
          ".about": {
            "background-color": "#767A80",
          },
          ".resources-color": {
            color: "#34373F",
          },
          ".usage-color": {
            color: "#34373F",
            "background-color": "#768E7F",
          },
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#837161",
          secondary: "#556A6F",
          accent: "#768E7F",
          neutral: "#47454D",
          success: "#868864",
          info: "#3AA1F1",
          warning: "#DBD87E",
          error: "#eb5234",
          ".resources-color": {
            color: "#fff",
          },
          ".usage-color": {
            color: "#fff",
            "background-color": "#47454D",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

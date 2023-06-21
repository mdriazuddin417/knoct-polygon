/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#05BC61",
          secondary: "#02CD4A",

          black: "#000000",
          semiBlack: "#242D28",

          smallText: "#7F7F83",
          accent: "black",

          "base-100": "#FFFFFF",

          info: "#DCE8FA",
          success: "#09B66D",

          warning: "#FDBF5E",

          error: "#FF3D57",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: 'rgb(1,1,1)',
        dark: `rgb(2,2,2)`,
        primary: 'rgb(1,1,1)',
        secondary: `rgb(2,2,2)`
      }
    },
  },
  plugins: [nextui(
    {defaultTheme : "dark",
    addCommonColors : true,
    defaultExtendTheme: "dark", }
  )],
}



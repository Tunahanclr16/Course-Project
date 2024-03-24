/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#FF9500",
          70: "#FFBF66",
          75: "#FFCA80",
          80: "#FFD499",
          90: "#FFEACC",
          95: "#FFF4E5",
          97: "#FFF9F0",
          99: "#FFFDFA",
        },
        white: {
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
        grey:{
          10:"#191919",
          15:"#262626",
          20:"333333",
          30:"#4C4C4D",
          35:"#59595A",
          40:"#656567",
          60:"#98989A",
          70:"#B3B3B3",
        }
      },
      screens:{
        md:"994px",
        xs:"361px",
        lg:"1187px",
        lgg:"1282px",
      }
    },
  },
  plugins: [],
};

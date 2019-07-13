import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Nunito",
      styles: ["300", "400", "600", "700"],
    },
    {
      name: "Quattrocento Sans",
      styles: ["300", "400", "600", "700"],
    },
  ],
  headerFontFamily: ["Nunito", "sans-serif"],
  bodyFontFamily: ["Quattrocento Sans", "sans-serif"],
  baseFontSize: "18px",
  baseLineHeight: 1.666,
})

export const { scale, rhythm, options } = typography
export default typography

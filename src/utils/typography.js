import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Nunito",
      styles: ["300", "400", "600", "700"],
    },
  ],
  headerFontFamily: ["Nunito", "sans-serif"],
  bodyFontFamily: ["Nunito", "sans-serif"],
})

export const { scale, rhythm, options } = typography
export default typography

import { style } from "@vanilla-extract/css"
import { themeVars } from "@/styles/theme.css"

export const logoWrapper = style({
    position: "relative",
    height: "100%",
    aspectRatio: "6.8/1",
})

export const logoStyle = style({
    fill: themeVars.primaryColor,
})

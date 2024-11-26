import { style } from "@vanilla-extract/css"
import { themeVars } from "@/styles/theme.css"

export const colorStripes = style({
    stroke: themeVars.primaryColor,
})

export const svgWrapper = style({
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
})

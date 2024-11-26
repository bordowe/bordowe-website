import { style } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"
import { breakpoints } from "@/styles/breakpoints.css"
import { themeVars } from "@/styles/theme.css"
import VC from "@/styles/vwCalculator"

export const typography = {
    navbar: {
        nav: style({
            fontSize: VC(36, "mobile"),
            lineHeight: calc.divide(38, VC(36, "mobile")),
            fontWeight: 900,
            color: themeVars.primaryColor ? themeVars.primaryColor : "white",
            fontStyle: "italic",
            textDecoration: "none",

            "@media": {
                [breakpoints.largeMobile]: {
                    fontSize: VC(36, "largeMobile"),
                    lineHeight: calc.divide(38, VC(36, "largeMobile")),
                },
                [breakpoints.tablet]: {
                    fontSize: VC(42, "tablet"),
                    lineHeight: calc.divide(44, VC(42, "tablet")),
                },
                [breakpoints.smallDesktop]: {
                    fontSize: VC(24, "smallDesktop"),
                    lineHeight: calc.divide(28, VC(24, "smallDesktop")),
                    fontWeight: 700,
                },
                [breakpoints.desktop]: {
                    fontSize: VC(24, "desktop"),
                    lineHeight: calc.divide(28, VC(24, "desktop")),
                },
                [breakpoints.largeDesktop]: {
                    fontSize: VC(24, "largeDesktop"),
                    lineHeight: calc.divide(28, VC(24, "largeDesktop")),
                },
                [breakpoints.over]: {
                    fontSize: 24,
                    lineHeight: calc.divide(28, 24),
                },
            },
        }),
    },
}

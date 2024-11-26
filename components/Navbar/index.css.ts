import { style, styleVariants } from "@vanilla-extract/css"
import { themeVars } from "@/styles/theme.css"
import { breakpoints } from "@/styles/breakpoints.css"

export const navbarWrapper = style({
    flexDirection: "column",
    backgroundColor: themeVars.secondaryColor,
    borderBottom: `1px solid rgba(${themeVars.primaryColor}, 0.07)`,
    clipPath: "inset(0 0 0 0)",
    overflow: "hidden",
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",

    "@media": {
        [breakpoints.smallDesktop]: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 25px",
            boxSizing: "border-box",
        },
        [breakpoints.desktop]: {
            padding: "0 50px",
        },
        [breakpoints.desktop]: {
            padding: "0 100px",
        },
    },
})

export const mobileNavGroup = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "26px 10px",
    width: "100%",
    height: 80,
    boxSizing: "border-box",
    borderBottom: `1px solid color-mix(in srgb, ${themeVars.primaryColor} 7%, transparent)`,

    "@media": {
        [breakpoints.largeMobile]: {
            padding: "15px 10px",
        },
        [breakpoints.tablet]: {
            padding: "15px 25px",
        },
        [breakpoints.smallDesktop]: {
            width: "fit-content",
            height: "100%",
            padding: "15px 0",
        },
    },
})

export const logoWrapper = style({
    height: "100%",
    mixBlendMode: "difference",
})

export const hamburgerMenuIconWrapper = style({
    height: 24,
    aspectRatio: "1/1",
    padding: 5,
    margin: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mixBlendMode: "difference",

    "@media": {
        [breakpoints.smallDesktop]: {
            display: "none",
        },
    },
})

export const hamburgerMenuIcon = style({
    height: 2,
    width: "100%",
    position: "relative",
    selectors: {
        "&::before, &::after": {
            content: "",
            position: "absolute",
            left: 0,
            height: 2,
            width: "100%",
            background: themeVars.primaryColor,
        },
    },
})

export const menuState = styleVariants({
    iconOpen: {
        background: "",
        selectors: {
            "&::before, &::after": { top: 0 },
            "&::before": { rotate: "45deg" },
            "&::after": { rotate: "-45deg" },
        },
    },
    iconClosed: {
        background: themeVars.primaryColor,
        selectors: {
            "&::before, &::after": {},
            "&::before": { top: -5 },
            "&::after": { top: 5 },
        },
    },
})

export const navWrapper = style({
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh-80px)",
    gap: 15,
    padding: "25px 15px",

    "@media": {
        [breakpoints.smallDesktop]: {
            flexDirection: "row",
            width: "fit-content",
            height: "100%",
            padding: "0",
            alignItems: "center",
        },
    },
})

export const decoStripes = style({
    display: "flex",
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "50%",
    mixBlendMode: "difference",

    "@media": {
        [breakpoints.smallDesktop]: {
            display: "none",
        },
    },
})

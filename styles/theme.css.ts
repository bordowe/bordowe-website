import { createTheme, createThemeContract } from "@vanilla-extract/css"
import { colors } from "@/styles/variables.css"

export const themeVars = createThemeContract({
    primaryColor: null,
    secondaryColor: null,
})

// Index
export const heroSection = createTheme(themeVars, {
    primaryColor: colors.red,
    secondaryColor: colors.redDark,
})

export const realizationSection = createTheme(themeVars, {
    primaryColor: colors.green,
    secondaryColor: colors.greenDark,
})

export const solutionsSection = createTheme(themeVars, {
    primaryColor: colors.blue,
    secondaryColor: colors.blueDark,
})

export const aboutSection = createTheme(themeVars, {
    primaryColor: colors.yellow,
    secondaryColor: colors.yellowDark,
})

export const contactSection = createTheme(themeVars, {
    primaryColor: colors.orange,
    secondaryColor: colors.orangeDark,
})

export const footerSection = createTheme(themeVars, {
    primaryColor: colors.purple,
    secondaryColor: colors.purpleDark,
})

// Pages
export const realizationPage = createTheme(themeVars, {
    primaryColor: colors.green,
    secondaryColor: colors.greenDark,
})

export const blogPage = createTheme(themeVars, {
    primaryColor: colors.yellow,
    secondaryColor: colors.yellowDark,
})

export const solutionsPage = createTheme(themeVars, {
    primaryColor: colors.blue,
    secondaryColor: colors.blueDark,
})

// Single pages
export const blogSinglePage = createTheme(themeVars, {
    primaryColor: colors.black,
    secondaryColor: colors.white,
})

export const realizationSinglePage = createTheme(themeVars, {
    primaryColor: colors.black,
    secondaryColor: colors.white,
})

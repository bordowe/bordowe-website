import { globalStyle } from "@vanilla-extract/css"

globalStyle("body", {
    backgroundColor: "black",
    margin: "0 auto",
    maxWidth: 1920,
})

globalStyle("*, *::before, *::after", {
    transition: "all 0.2s ease-out",
})

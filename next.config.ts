const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const withVanillaExtract = createVanillaExtractPlugin()

// const withMDX = require("@next/mdx")({
//     extension: /\.mdx$/,
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
        appIsrStatus: false,
        buildActivity: false,
    },
}

// module.exports = withVanillaExtract(withMDX(nextConfig))
module.exports = withVanillaExtract(nextConfig)

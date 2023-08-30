/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    experimental: {
        appDir: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/dryhnlf4u/**",
            },
        ],
    },
    env: {
        NEXT_PUBLIC_TELEGRAM_CHAT_ID: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
        NEXT_PUBLIC_TELEGRAM_URL_API: process.env.NEXT_PUBLIC_TELEGRAM_URL_API,
    },
    i18n: {
        locales: ["uk", "en"],
        defaultLocale: "uk",
        localeDetection: false,
    },
};

module.exports = nextConfig;

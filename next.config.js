/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: { domains: ["lemonsqueezy.imgix.net", "image.tmdb.org"] },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          subsets: ["latin"]
        }
      }
    ],
    appDir: true,
  },
  images: {
    domains: ["avatars.dicebar.com"]
  },
  reactStrictMode: true,
}

module.exports = nextConfig

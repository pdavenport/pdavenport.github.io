/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
        pathname: "/badge/**",
      },
      {
        protocol: "https",
        hostname: "readme-spotify-seven.vercel.app",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
  // output: "export",
};

module.exports = nextConfig;

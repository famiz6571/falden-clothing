/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  images: {
    unoptimized: true, // required if you use next/image for static export
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/app/utils/imageLoader.js", // Path to your custom loader
  },
};

module.exports = nextConfig;

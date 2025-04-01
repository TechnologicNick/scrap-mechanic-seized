/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Remove the experimental section with the warning

  transpilePackages: [], // Add any packages here that need to be transpiled

  images: {
    domains: [
      "upload.wikimedia.org",
      "www.justice.gov",
      "static.wikia.nocookie.net",
      "i.ytimg.com",
      "source.unsplash.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "media.githubusercontent.com",
      "raw.githubusercontent.com",
      "github.com",
      "img.shields.io",
      "avatars.githubusercontent.com"
    ],
    unoptimized: true,
  },

  // Fix: Update the distDir for static site
  output: 'export',
  distDir: 'out',
};

module.exports = nextConfig;

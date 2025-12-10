/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Generate a static export in the out/ folder
  output: 'export',
  // Set basePath for GitHub Pages under /daniel
  basePath: '/daniel',
  // Ensure static HTML paths end with a slash for GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages
  output: 'export',
  // Set basePath and assetPrefix for repo-based GitHub Pages
  basePath: isProd ? '/daniel' : '',
  assetPrefix: isProd ? '/daniel/' : '',
  images: {
    // Disable image optimization for static export
    unoptimized: true,
  },
};

module.exports = nextConfig;

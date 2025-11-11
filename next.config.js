/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configurações para GitHub Pages
  basePath: '/siteprintbag',
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Trailing slash para garantir compatibilidade com GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig



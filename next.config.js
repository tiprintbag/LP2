/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configurações para GitHub Pages
  // Sempre usa basePath /LP2 e export estático para GitHub Pages
  basePath: '/LP2',
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Trailing slash para garantir compatibilidade com GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig



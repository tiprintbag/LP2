/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configurações para GitHub Pages
  // basePath é condicional: vazio para domínio personalizado, /LP2 para GitHub Pages padrão
  basePath: process.env.USE_CUSTOM_DOMAIN === 'true' ? '' : '/LP2',
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Trailing slash para garantir compatibilidade com GitHub Pages
  trailingSlash: true,
  // Variáveis de ambiente públicas
  env: {
    NEXT_PUBLIC_USE_CUSTOM_DOMAIN: process.env.USE_CUSTOM_DOMAIN || 'false',
    NEXT_PUBLIC_BASE_PATH: process.env.USE_CUSTOM_DOMAIN === 'true' ? '' : '/LP2',
  },
}

module.exports = nextConfig



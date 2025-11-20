/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production'
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true'

const nextConfig = {
  reactStrictMode: true,
  // Configurações para GitHub Pages
  // basePath é condicional: vazio para domínio personalizado, /LP2 para GitHub Pages padrão
  // Em desenvolvimento, não usa basePath para facilitar testes
  basePath: isDev ? '' : (useCustomDomain ? '' : '/LP2'),
  // output: 'export' só em produção/build, não em desenvolvimento
  // O Next.js não suporta output: 'export' com next dev - será adicionado apenas no build
  images: {
    unoptimized: true,
  },
  // Trailing slash para garantir compatibilidade com GitHub Pages
  trailingSlash: true,
  // Variáveis de ambiente públicas
  env: {
    NEXT_PUBLIC_USE_CUSTOM_DOMAIN: process.env.USE_CUSTOM_DOMAIN || 'false',
    NEXT_PUBLIC_BASE_PATH: isDev ? '' : (useCustomDomain ? '' : '/LP2'),
    // EmailJS Configuration
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_5l5z60l',
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_vmalf5b',
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YY----laYSqdMEPFs',
  },
}

// Adiciona output: 'export' apenas quando NEXT_EXPORT estiver definido (build de produção)
if (process.env.NEXT_EXPORT === 'true') {
  nextConfig.output = 'export'
}

module.exports = nextConfig



/**
 * Helper para gerenciar caminhos de assets
 * Detecta automaticamente se está usando domínio personalizado ou GitHub Pages
 * 
 * IMPORTANTE: Esta função usa NEXT_PUBLIC_BASE_PATH que é injetada no build time
 * pelo next.config.js baseado na variável USE_CUSTOM_DOMAIN
 */

/**
 * Retorna o caminho completo para um asset (imagem, vídeo, etc)
 * @param path - Caminho relativo do asset (ex: '/images/logo.png')
 * @returns Caminho completo com basePath correto
 */
export function getAssetPath(path: string): string {
  // NEXT_PUBLIC_BASE_PATH é injetada no build time pelo next.config.js
  // Se USE_CUSTOM_DOMAIN=true, será '' (vazio)
  // Caso contrário, será '/LP2'
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/LP2'
  
  // Remove barra inicial se já tiver basePath
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  
  // Se basePath estiver vazio, retorna apenas o caminho (domínio personalizado)
  if (!basePath || basePath === '/') {
    return cleanPath
  }
  
  // Garante que basePath não tenha barra final
  const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
  
  return `${cleanBasePath}${cleanPath}`
}


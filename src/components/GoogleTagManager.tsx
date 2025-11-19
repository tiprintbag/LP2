'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default function GoogleTagManager() {
  useEffect(() => {
    // Inicializar dataLayer se não existir
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      
      // Verificar se o script já foi adicionado
      const existingScript = document.querySelector('script[data-gtm-id="GTM-MNM875VB"]')
      if (existingScript) {
        return
      }

      // Criar e adicionar o script do GTM
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-MNM875VB'
      script.setAttribute('data-gtm-id', 'GTM-MNM875VB')
      
      // Inicializar GTM
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      })
      
      // Adicionar script ao head
      const firstScript = document.getElementsByTagName('script')[0]
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript)
      } else {
        document.head.appendChild(script)
      }
    }
  }, [])

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MNM875VB"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}


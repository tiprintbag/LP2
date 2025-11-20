'use client'

import React from 'react'
import { getAssetPath } from '@/utils/paths'

const LogosStrip: React.FC = () => {
  // Usar getAssetPath para garantir que funcione em produção com domínio personalizado
  const images = [
    getAssetPath('/images/parceiros.png'),
    getAssetPath('/images/parceiros1.png'),
  ]

  // Duplicar as imagens para criar um loop infinito suave
  const duplicatedImages = [...images, ...images]

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <p className="text-center text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
          Empresas que confiam na Printbag
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 md:gap-16 animate-scroll" style={{ width: 'max-content' }}>
            {duplicatedImages.map((image, index) => {
              const originalIndex = index % images.length

              return (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ minWidth: '800px', height: '250px' }}
                >
                  <img
                    src={image}
                    alt={`Parceiros Printbag ${originalIndex + 1}`}
                    width={1200}
                    height={200}
                    className="h-auto w-auto max-h-56 md:max-h-72 object-contain"
                    loading="lazy"
                    style={{ display: 'block', maxWidth: '800px', height: 'auto' }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogosStrip



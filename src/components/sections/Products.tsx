'use client'

import React from 'react'
import Image from 'next/image'

const Products: React.FC = () => {
  // Detecção dinâmica de basePath
  const basePath = typeof window !== 'undefined' && window.location.pathname.startsWith('/siteprintbag') 
    ? '/siteprintbag' 
    : (process.env.NEXT_PUBLIC_BASE_PATH || '')

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Image
            src={`${basePath}/images/produtos.png`}
            alt="Produtos Printbag"
            width={1920}
            height={1080}
            className="w-full h-auto max-w-7xl object-contain"
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}

export default Products


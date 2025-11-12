'use client'

import React from 'react'
import { getAssetPath } from '@/utils/paths'

const Products: React.FC = () => {
  return (
    <section id="produtos" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Confira um de nossos produtos
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Embalagens que transformam a experiência do seu cliente e elevam o valor da sua marca
          </p>
        </div>
      </div>
      <div className="w-full">
          <img
            src={getAssetPath('/images/produtos.png')}
            alt="Produtos Printbag"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
      </div>
    </section>
  )
}

export default Products


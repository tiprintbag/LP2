'use client'

import React from 'react'
import Image from 'next/image'

const LogosStrip: React.FC = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const images = [
    `${basePath}/images/parceiros.png`,
    `${basePath}/images/parceiros1.png`,
  ]

  // Duplicar as imagens para criar um loop infinito suave
  const duplicatedImages = [...images, ...images]

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
          Empresas que confiam na Printbag
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-8 md:gap-12 animate-scroll">
            {duplicatedImages.map((image, index) => (
            <div
              key={index}
                className="flex-shrink-0"
              >
                <Image
                  src={image}
                  alt={`Parceiros Printbag ${index + 1}`}
                  width={1200}
                  height={200}
                  className="h-auto w-auto max-h-24 md:max-h-32 object-contain"
                  unoptimized
                />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogosStrip



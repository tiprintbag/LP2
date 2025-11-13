'use client'

import React from 'react'
import { getAssetPath } from '@/utils/paths'
import Button from '@/components/ui/Button'

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-start pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-primary-50/30 to-blue-50/30">
      <div className="container mx-auto w-full max-w-7xl 2xl:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Embalagens de papel que{' '}
              <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">
                inovam, encantam e apaixonam
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-gray-600 mb-6 lg:mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Mais que uma indústria gráfica — somos especialistas em criar embalagens personalizadas e sustentáveis para sua marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('contato')}
              >
                Solicitar Orçamento
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('produtos')}
              >
                Ver Catálogo
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-base sm:text-lg text-gray-600">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certificação FSC</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>15+ anos de experiência</span>
              </div>
            </div>
          </div>

          {/* Imagem de Produtos - Alinhada com o "E" de Embalagem */}
          <div className="relative flex items-start justify-center lg:justify-start w-full h-full overflow-visible">
            <img
              src={getAssetPath('/images/weleda-2-transparent.png')}
              alt="Enxoval de Produtos Printbag"
              width={2000}
              height={1500}
              className="h-auto object-contain w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl"
              style={{ 
                filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                maxHeight: 'calc(100vh - 8rem)',
              }}
              loading="lazy"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero



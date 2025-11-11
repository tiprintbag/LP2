'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center"
            >
              <Image
                src={`${typeof window !== 'undefined' && window.location.pathname.startsWith('/siteprintbag') ? '/siteprintbag' : (process.env.NEXT_PUBLIC_BASE_PATH || '')}/images/printbag.png`}
                alt="Printbag"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              A Printbag
            </button>
            <button
              onClick={() => scrollToSection('modelos')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Modelos de Negócio
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('sustentabilidade')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Sustentabilidade
            </button>
            <button
              onClick={() => scrollToSection('clientes')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contato
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('contato')}
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                A Printbag
              </button>
              <button
                onClick={() => scrollToSection('modelos')}
                className="text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Modelos de Negócio
              </button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection('sustentabilidade')}
                className="text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Sustentabilidade
              </button>
              <button
                onClick={() => scrollToSection('clientes')}
                className="text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Clientes
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Contato
              </button>
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => scrollToSection('contato')}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header



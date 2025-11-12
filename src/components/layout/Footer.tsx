'use client'

import React from 'react'

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Printbag
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Mais que uma indústria gráfica — somos especialistas em inovar, encantar e apaixonar pessoas.
            </p>
            <p className="text-sm text-gray-500">
              Camboriú - SC, Brasil
            </p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('produtos')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Catálogo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('modelos')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Modelos de Negócio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sustentabilidade')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sustentabilidade
                </button>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('clientes')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Clientes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Printbag. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              Desenvolvido por <span className="text-gray-400">Pedro Levorato</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



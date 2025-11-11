import React from 'react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge variant="info" className="mb-4">
              Sobre a Printbag
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mais que uma indústria gráfica
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Somos especialistas em inovar, encantar e apaixonar pessoas através de embalagens de papel personalizadas e sustentáveis.
            </p>
            <p className="text-gray-600 mb-6">
              Com mais de 15 anos de experiência, a Printbag está localizada em Camboriú - SC e atende desde pequenos comércios até grandes redes de varejo e franquias em todo o Brasil.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">FSC</div>
                <div className="text-sm text-gray-600">Certificada</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-4 h-full flex items-center justify-center overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl"
            >
              <source src="/images/printhorizontal.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover>
            <div className="text-primary-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Missão</h3>
            <p className="text-gray-600">
              Criar embalagens que conectem marcas e pessoas, promovendo sustentabilidade e inovação em cada projeto.
            </p>
          </Card>

          <Card hover>
            <div className="text-primary-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Visão</h3>
            <p className="text-gray-600">
              Ser referência nacional em embalagens sustentáveis, reconhecida pela qualidade, inovação e compromisso ambiental.
            </p>
          </Card>

          <Card hover>
            <div className="text-primary-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Valores</h3>
            <p className="text-gray-600">
              Sustentabilidade, inovação, qualidade, compromisso com o cliente e responsabilidade ambiental em tudo que fazemos.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About



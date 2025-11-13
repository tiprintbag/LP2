import Hero from '@/components/sections/Hero'
import LogosStrip from '@/components/sections/LogosStrip'
import Products from '@/components/sections/Products'
import Features from '@/components/sections/Features'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import { getAssetPath } from '@/utils/paths'

export default function Home() {
  return (
    <>
      {/* Logo Printbag alinhado com o "E" de Embalagens */}
      <section className="w-full bg-white py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-start items-center">
            <img
              src={getAssetPath('/images/printbag.png')}
              alt="Printbag Logo"
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </section>
      <Hero />
      <LogosStrip />
      <Features />
      <About />
      <Products />
      <Contact />
    </>
  )
}



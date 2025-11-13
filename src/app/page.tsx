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
      {/* Logo Printbag no topo esquerdo */}
      <section className="w-full bg-white py-2 sm:py-2 lg:py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-start items-center">
            <img
              src={getAssetPath('/images/printbag.png')}
              alt="Printbag Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
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



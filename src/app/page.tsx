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
      {/* Logo Printbag no topo */}
      <section className="w-full bg-white py-4 sm:py-6 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-center items-center">
            <img
              src={getAssetPath('/images/printbag.png')}
              alt="Printbag Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 w-auto object-contain"
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



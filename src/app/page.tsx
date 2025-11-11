import Hero from '@/components/sections/Hero'
import LogosStrip from '@/components/sections/LogosStrip'
import Products from '@/components/sections/Products'
import Features from '@/components/sections/Features'
import About from '@/components/sections/About'
import UseCases from '@/components/sections/UseCases'
import HowItWorks from '@/components/sections/HowItWorks'
import Sustainability from '@/components/sections/Sustainability'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <LogosStrip />
      <Features />
      <About />
      <Products />
      <UseCases />
      <HowItWorks />
      <Sustainability />
      <Testimonials />
      <Contact />
    </>
  )
}



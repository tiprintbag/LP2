import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleTagManager from '@/components/GoogleTagManager'
import UtmCapture from '@/components/UtmCapture'
import { SITE_URL } from '@/utils/site'

const inter = Inter({ subsets: ['latin'] })

const siteDescription =
  'Mais que uma indústria gráfica — somos especialistas em inovar, encantar e apaixonar pessoas. Embalagens de papel personalizadas com certificação FSC.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Printbag - Embalagens de Papel Personalizadas e Sustentáveis',
  description: siteDescription,
  keywords: 'embalagens de papel, sacolas sustentáveis, embalagens personalizadas, FSC, Camboriú SC',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Printbag',
    title: 'Printbag - Embalagens de Papel Personalizadas e Sustentáveis',
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <GoogleTagManager />
        <UtmCapture />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}






'use client'

import { useEffect } from 'react'
import { captureUtmFromUrl } from '@/utils/utm'

/** Inicializa captura de UTM em qualquer página da LP (sem alterar layout visual). */
export default function UtmCapture() {
  useEffect(() => {
    captureUtmFromUrl()
  }, [])

  return null
}

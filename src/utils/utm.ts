export const UTM_PARAM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

export type UtmParamKey = (typeof UTM_PARAM_KEYS)[number]

export type UtmData = Record<UtmParamKey, string>

const STORAGE_KEY = 'printbag_utm'

const ORGANIC_UTM: UtmData = {
  utm_source: 'Origem orgânica',
  utm_medium: 'Origem orgânica',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
}

function isBrowser(): boolean {
  return typeof window !== 'undefined'
}

function readStoredUtm(): Partial<UtmData> {
  if (!isBrowser()) return {}

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as Partial<UtmData>
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

function writeStoredUtm(data: Partial<UtmData>): void {
  if (!isBrowser()) return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function hasAnyUtmValue(data: Partial<UtmData>): boolean {
  return UTM_PARAM_KEYS.some((key) => Boolean(data[key]?.trim()))
}

/** Extrai UTMs de URLSearchParams (somente parâmetros presentes na URL). */
export function parseUtmFromSearchParams(searchParams: URLSearchParams): Partial<UtmData> {
  const fromUrl: Partial<UtmData> = {}

  for (const key of UTM_PARAM_KEYS) {
    const value = searchParams.get(key)?.trim()
    if (value) {
      fromUrl[key] = value
    }
  }

  return fromUrl
}

/**
 * Captura UTMs da URL atual, mescla com localStorage e persiste.
 * Deve rodar no carregamento da página (client-side).
 */
export function captureUtmFromUrl(): void {
  if (!isBrowser()) return

  const searchParams = new URLSearchParams(window.location.search)
  const fromUrl = parseUtmFromSearchParams(searchParams)

  if (!hasAnyUtmValue(fromUrl)) return

  const merged: Partial<UtmData> = {
    ...readStoredUtm(),
    ...fromUrl,
  }

  writeStoredUtm(merged)
  console.log('UTM capturada:', getUtmPayload())
}

/** Retorna objeto `utm` para o payload do formulário (com fallback orgânico). */
export function getUtmPayload(): { utm: UtmData } {
  const stored = readStoredUtm()

  if (!hasAnyUtmValue(stored)) {
    const utmData = { ...ORGANIC_UTM }
    console.log('UTM capturada:', { utm: utmData })
    return { utm: utmData }
  }

  const utm: UtmData = {
    utm_source: stored.utm_source?.trim() || '',
    utm_medium: stored.utm_medium?.trim() || '',
    utm_campaign: stored.utm_campaign?.trim() || '',
    utm_term: stored.utm_term?.trim() || '',
    utm_content: stored.utm_content?.trim() || '',
  }

  console.log('UTM capturada:', { utm })
  return { utm }
}

export type FormSubmissionPayload = {
  nome: string
  email: string
  empresa: string
  telefone: string
  lojas: string
  segmento: string
  utm: UtmData
}

/** Payload do webhook: campos do formulário + objeto `utm` + UTMs no nível raiz (n8n/Pipedrive). */
export function buildWebhookPayload(data: FormSubmissionPayload) {
  const { utm } = getUtmPayload()

  return {
    nome: data.nome.trim(),
    email: data.email.trim(),
    empresa: data.empresa.trim() || '',
    telefone: data.telefone.trim(),
    lojas: data.lojas,
    segmento: data.segmento,
    utm,
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_term: utm.utm_term,
    utm_content: utm.utm_content,
  }
}

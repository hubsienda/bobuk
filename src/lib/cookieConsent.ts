export const COOKIE_CONSENT_NAME = 'bobmazzei_cookie_consent'
export const COOKIE_CONSENT_VERSION = 1
export const COOKIE_CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 183

export type CookieConsent = {
  version: number
  necessary: true
  analytics: boolean
  timestamp: string
}

function isValidConsent(value: unknown): value is CookieConsent {
  if (!value || typeof value !== 'object') return false
  const consent = value as Partial<CookieConsent>
  if (
    consent.version !== COOKIE_CONSENT_VERSION ||
    consent.necessary !== true ||
    typeof consent.analytics !== 'boolean' ||
    typeof consent.timestamp !== 'string'
  ) {
    return false
  }

  const timestamp = Date.parse(consent.timestamp)
  if (!Number.isFinite(timestamp)) return false

  const age = Date.now() - timestamp
  return age >= 0 && age <= COOKIE_CONSENT_MAX_AGE_SECONDS * 1000
}

export function readCookieConsent(): CookieConsent | null {
  if (typeof document === 'undefined') return null

  const prefix = COOKIE_CONSENT_NAME + '='
  const raw = document.cookie
    .split(';')
    .map(part => part.trim())
    .find(part => part.startsWith(prefix))

  if (!raw) return null

  try {
    const parsed = JSON.parse(decodeURIComponent(raw.slice(prefix.length)))
    return isValidConsent(parsed) ? parsed : null
  } catch {
    return null
  }
}

export function writeCookieConsent(analytics: boolean): CookieConsent {
  const consent: CookieConsent = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics,
    timestamp: new Date().toISOString()
  }

  if (typeof document !== 'undefined') {
    const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : ''
    document.cookie =
      COOKIE_CONSENT_NAME +
      '=' +
      encodeURIComponent(JSON.stringify(consent)) +
      '; Path=/; Max-Age=' +
      COOKIE_CONSENT_MAX_AGE_SECONDS +
      '; SameSite=Lax' +
      secure
  }

  return consent
}

export function removeAnalyticsCookies() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return

  const names = document.cookie
    .split(';')
    .map(part => part.trim().split('=')[0])
    .filter(name => name === '_ga' || name.startsWith('_ga_'))

  if (!names.length) return

  const hostname = window.location.hostname
  const parts = hostname.split('.')
  const registrable = parts.length >= 2 ? parts.slice(-2).join('.') : hostname
  const domains = Array.from(new Set(['', hostname, '.' + hostname, registrable, '.' + registrable]))

  for (const name of names) {
    for (const domain of domains) {
      const domainPart = domain ? '; Domain=' + domain : ''
      document.cookie = name + '=; Path=/; Max-Age=0; SameSite=Lax' + domainPart
    }
  }
}

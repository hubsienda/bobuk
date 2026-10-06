'use client'

import Link from 'next/link'
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from 'react'
import {
  readCookieConsent,
  removeAnalyticsCookies,
  writeCookieConsent,
  type CookieConsent
} from '@/lib/cookieConsent'

type CookieConsentContextValue = {
  consent: CookieConsent | null
  hydrated: boolean
  openPreferences: () => void
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null)

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (!context) throw new Error('useCookieConsent must be used within CookieConsentProvider')
  return context
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [hydrated, setHydrated] = useState(false)
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [analyticsChoice, setAnalyticsChoice] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const originRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setConsent(readCookieConsent())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!preferencesOpen) return

    setAnalyticsChoice(consent?.analytics ?? false)
    const timer = window.setTimeout(() => dialogRef.current?.focus(), 0)

    return () => window.clearTimeout(timer)
  }, [preferencesOpen, consent])

  const save = (analytics: boolean) => {
    const next = writeCookieConsent(analytics)
    if (!analytics) removeAnalyticsCookies()
    setConsent(next)
    setPreferencesOpen(false)
    window.setTimeout(() => originRef.current?.focus(), 0)
  }

  const openPreferences = () => {
    originRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    setPreferencesOpen(true)
  }

  const closePreferences = () => {
    setPreferencesOpen(false)
    window.setTimeout(() => originRef.current?.focus(), 0)
  }

  const value = useMemo(
    () => ({ consent, hydrated, openPreferences }),
    [consent, hydrated]
  )

  return (
    <CookieConsentContext.Provider value={value}>
      {children}

      {hydrated && consent === null && !preferencesOpen && (
        <section className="cookie-banner" aria-label="Privacy and cookie choices">
          <p className="cookie-banner-title">Privacy &amp; Cookies</p>
          <p className="cookie-banner-copy">
            We use necessary technologies to make this site work and remember your privacy choices.
            With your permission, we also use Google Analytics to understand how visitors use the
            website. Analytics is off unless you choose to enable it.
          </p>
          <div className="cookie-banner-links">
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/cookie-policy/">Cookie Policy</Link>
          </div>
          <div className="cookie-actions">
            <button type="button" className="button-link button-primary" onClick={() => save(true)}>
              Accept all
            </button>
            <button type="button" className="button-link button-secondary" onClick={() => save(false)}>
              Reject non-essential
            </button>
            <button type="button" className="button-link button-secondary" onClick={openPreferences}>
              Preferences
            </button>
          </div>
        </section>
      )}

      {preferencesOpen && (
        <div
          className="cookie-backdrop"
          onKeyDown={event => {
            if (event.key === 'Escape') closePreferences()
          }}
        >
          <div
            ref={dialogRef}
            className="cookie-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            tabIndex={-1}
          >
            <div className="cookie-panel-head">
              <div>
                <p className="eyebrow">Privacy &amp; Cookies</p>
                <h2 id="cookie-preferences-title">Cookie Preferences</h2>
              </div>
              <button type="button" className="cookie-close" onClick={closePreferences} aria-label="Close cookie preferences">
                Close
              </button>
            </div>

            <p className="cookie-panel-intro">
              Choose which optional technologies may be used. Necessary technologies are always
              active because they are required to operate the website and remember your privacy choices.
            </p>

            <div className="cookie-category">
              <div className="cookie-category-row">
                <div>
                  <h3>Necessary</h3>
                  <p>Required to operate the website and remember your privacy choices.</p>
                </div>
                <span className="cookie-locked" aria-label="Necessary technologies are on and locked">
                  On · Locked
                </span>
              </div>
            </div>

            <div className="cookie-category">
              <div className="cookie-category-row">
                <div>
                  <h3>Analytics</h3>
                  <p>
                    Allows Google Analytics to help us understand how visitors use the website,
                    including pages visited, sessions, approximate location and browser/device information.
                  </p>
                </div>
                <label className="cookie-toggle">
                  <input
                    type="checkbox"
                    checked={analyticsChoice}
                    onChange={event => setAnalyticsChoice(event.target.checked)}
                  />
                  {analyticsChoice ? 'On' : 'Off'}
                </label>
              </div>
            </div>

            <div className="cookie-actions">
              <button type="button" className="button-link button-primary" onClick={() => save(analyticsChoice)}>
                Save preferences
              </button>
              <button type="button" className="button-link button-secondary" onClick={() => save(true)}>
                Accept all
              </button>
              <button type="button" className="button-link button-secondary" onClick={() => save(false)}>
                Reject non-essential
              </button>
            </div>
          </div>
        </div>
      )}
    </CookieConsentContext.Provider>
  )
}

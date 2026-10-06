'use client'

import { useCookieConsent } from '@/components/CookieConsentProvider'

export function CookiePreferencesButton() {
  const { openPreferences } = useCookieConsent()

  return (
    <button type="button" className="footer-preferences-button" onClick={openPreferences}>
      Cookie Preferences
    </button>
  )
}

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useCookieConsent } from '@/components/CookieConsentProvider'
import { removeAnalyticsCookies } from '@/lib/cookieConsent'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim()
const SCRIPT_ID = 'bobmazzei-google-analytics'

type AnalyticsWindow = Window & {
  dataLayer?: unknown[][]
  gtag?: (...args: unknown[]) => void
}

export function GoogleAnalytics() {
  const { consent, hydrated } = useCookieConsent()
  const pathname = usePathname()

  useEffect(() => {
    if (!hydrated || !GA_ID) return

    const analyticsWindow = window as AnalyticsWindow
    const analyticsFlags = window as unknown as Record<string, unknown>
    const disableKey = 'ga-disable-' + GA_ID

    if (!consent?.analytics) {
      analyticsFlags[disableKey] = true
      document.getElementById(SCRIPT_ID)?.remove()
      removeAnalyticsCookies()
      return
    }

    analyticsFlags[disableKey] = false
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || []
    analyticsWindow.gtag =
      analyticsWindow.gtag ||
      function gtag(...args: unknown[]) {
        analyticsWindow.dataLayer?.push(args)
      }

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.async = true
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID)
      document.head.appendChild(script)

      analyticsWindow.gtag('js', new Date())
    }

    analyticsWindow.gtag('config', GA_ID, {
      anonymize_ip: true,
      page_path: pathname,
      send_page_view: true
    })
  }, [consent?.analytics, hydrated, pathname])

  return null
}

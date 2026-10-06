import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import type { ReactNode } from 'react'
import { CookieConsentProvider } from '@/components/CookieConsentProvider'
import { Footer } from '@/components/Footer'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { Header } from '@/components/Header'
import { NextraTheme } from '@/components/NextraTheme'
import { site } from '@/data/site'
import './globals.css'

const serif = Lora({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Bob Mazzei | Writer',
    template: '%s | Bob Mazzei'
  },
  description: site.description,
  alternates: { canonical: '/' },
  icons: {
    icon: '/logo/favicon.png',
    shortcut: '/logo/favicon.png',
    apple: '/logo/favicon.png'
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: 'Bob Mazzei | Writer',
    description: site.description,
    url: site.url
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bob Mazzei | Writer',
    description: site.description
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    jobTitle: 'Writer'
  }

  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <CookieConsentProvider>
          <Header />
          <NextraTheme>
            <main>{children}</main>
          </NextraTheme>
          <Footer />
          <GoogleAnalytics />
        </CookieConsentProvider>
      </body>
    </html>
  )
}

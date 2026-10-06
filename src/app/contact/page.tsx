import type { Metadata } from 'next'
import Link from 'next/link'
import { ButtonLink } from '@/components/ButtonLink'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Bob Mazzei for reader, publishing, media and writing-related enquiries.',
  alternates: { canonical: '/contact/' }
}

export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch.</h1>
          <p>For readers, publishing enquiries, media and professional contact relating to the writing.</p>
        </div>
      </header>
      <div className="page-rule" />
      <section className="section-tight">
        <div className="shell">
          <div className="contact-panel">
            <p>Email is the simplest way to make contact. Please include enough context to make the purpose of your message clear.</p>
            <p className="contact-privacy">Information sent by email is handled as described in the <Link href="/privacy-policy/">Privacy Policy</Link>.</p>
            <div className="action-group">
              <ButtonLink href={`mailto:${site.contactEmail}`}>Send an email</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

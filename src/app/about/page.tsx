import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Bob Mazzei and the perspective behind his fiction.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About Bob Mazzei',
    description: 'About Bob Mazzei and the perspective behind his fiction.',
    images: [{ url: '/pics/bob-photo.jpg', alt: 'Bob Mazzei' }]
  }
}

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">About</p>
          <h1>Bob Mazzei</h1>
          <p>Writer of fiction concerned with mystery, evidence, memory and the limits of certainty.</p>
        </div>
      </header>
      <div className="page-rule" />
      <section className="section">
        <div className="shell about-page-grid">
          <div className="about-preview-photo">
            <Image src="/pics/bob-photo.jpg" alt="Bob Mazzei" width={760} height={950} className="author-image" priority />
          </div>
          <div className="about-copy">
            <p>Bob Mazzei writes fiction in which an investigation is rarely only about discovering what happened. It is also about the way people interpret evidence, build certainty and live with what remains unresolved.</p>
            <p>His stories move naturally between Britain and southern Europe, using place not simply as scenery but as part of the tension: different climates, rhythms and assumptions surrounding the same human questions.</p>
            <p>His broader background in analytical and technical work informs a persistent interest in reasoning, systems and proof, but the fiction remains centred on character, consequence and ambiguity rather than explanation for its own sake.</p>
          </div>
        </div>
      </section>
    </>
  )
}

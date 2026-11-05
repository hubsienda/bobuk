import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Bob Mazzei — author, business engineer and AI consultant.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About Bob Mazzei',
    description: 'About Bob Mazzei — author, business engineer and AI consultant.',
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
          <p>Author, business engineer and AI consultant working across fiction, technology, business and questions of evidence and reasoning.</p>
        </div>
      </header>
      <div className="page-rule" />
      <section className="section">
        <div className="shell about-page-grid">
          <div className="about-preview-photo">
            <Image src="/pics/bob-photo.jpg" alt="Bob Mazzei" width={760} height={950} className="author-image" priority />
          </div>
          <div className="about-copy">
            <p>Bob Mazzei writes fiction, essays and analysis concerned with the way people interpret evidence, build certainty and make decisions when the facts are incomplete or contested.</p>
            <p>His work spans technology, business, artificial intelligence, political economy, literature and human behaviour, alongside fiction that moves between Britain and southern Europe.</p>
            <p>More than three decades of commercial and technical experience inform a persistent interest in reasoning, systems, proof and the assumptions behind difficult decisions. The same questions recur across both the professional analysis and the writing: what do we know, what are we assuming, and what does the evidence actually justify?</p>
          </div>
        </div>
      </section>
    </>
  )
}

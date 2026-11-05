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
          <h1>Author, business engineer and AI consultant.</h1>
        </div>
      </header>
      <div className="page-rule" />

      <section className="section about-intro-section">
        <div className="shell about-page-grid">
          <div className="about-preview-photo about-page-photo">
            <Image
              src="/pics/bob-photo.jpg"
              alt="Bob Mazzei"
              width={760}
              height={950}
              className="author-image"
              priority
            />
          </div>
          <div className="about-copy">
            <p className="about-experience-marker">Since 1987</p>
            <p className="about-lead">Bob Mazzei is an author, business engineer and AI consultant whose work spans fiction, technology, business, political economy and questions of evidence, reasoning and human behaviour.</p>
            <p>His fiction, essays and analysis share a recurring interest in how people and organisations make decisions, construct certainty and respond when evidence is incomplete, contested or inconvenient.</p>
          </div>
        </div>
      </section>

      <section className="section editorial-section about-background-section">
        <div className="shell about-editorial-grid">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Professional background</h2>
          </div>
          <div className="about-copy">
            <p>My professional life began in 1987, and for nearly four decades I have worked where business, technology and practical problem-solving meet.</p>
            <p>My experience spans business engineering, commercial management, software and systems analysis, project and product management, data and professional education, across sectors including agrifood, construction, medicine, law, professional services and technology. Much of that work has been international, involving businesses, organisations and commercial relationships across multiple markets.</p>
            <p>Teaching has also been a significant part of my career. I have taught business, technology and applied problem-solving to thousands of people, developed professional courses and directed a school of informatics and technologies.</p>
            <p>That experience informs the way I write and analyse problems today. I am interested not in technology or theory for their own sake, but in what happens when ideas meet organisations, incentives, evidence and reality.</p>
          </div>
        </div>
      </section>
    </>
  )
}

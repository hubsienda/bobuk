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
          <p>Author, business engineer and AI consultant. Nearly four decades of work across technology, commerce and organisations inform writing that moves between fiction, artificial intelligence, business, evidence and the systems people build around themselves.</p>
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
            <p>Bob Mazzei writes fiction, essays and analysis concerned with the way people interpret evidence, build certainty and make decisions when the facts are incomplete or contested.</p>
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
            <p>My professional life began in 1987 and has moved between business, technology and the problems that appear when the two meet.</p>
            <p>Over nearly four decades I have worked in business engineering, commercial management, software and systems analysis, project and product management, data and professional education. The work has crossed industries as different as agrifood, construction, medicine, law, professional services and technology, often in international markets and across complex commercial relationships.</p>
            <p>Teaching has been another constant. I have taught business, technology and practical problem-solving to thousands of people, developed professional courses and directed a school of informatics and technologies.</p>
            <p>That experience inevitably finds its way into my writing. It is one reason I am interested less in technology for its own sake than in what people and organisations actually do with it — how decisions are made, how systems acquire authority, where evidence ends and assumption begins, and what happens when theory encounters reality.</p>
          </div>
        </div>
      </section>

      <section className="section about-perspective-section">
        <div className="shell about-editorial-grid">
          <div>
            <p className="eyebrow">Writing &amp; ideas</p>
            <h2>What the work keeps returning to.</h2>
          </div>
          <div className="about-copy">
            <p>His work spans technology, business, artificial intelligence, political economy, literature and human behaviour, alongside fiction that moves between Britain and southern Europe.</p>
            <p>More than three decades of commercial and technical experience inform a persistent interest in reasoning, systems, proof and the assumptions behind difficult decisions. The same questions recur across both the professional analysis and the writing: what do we know, what are we assuming, and what does the evidence actually justify?</p>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import { BookCover } from '@/components/BookCover'
import { declan } from '@/data/books'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: "Declan's Lost Race",
  description: declan.shortDescription,
  alternates: { canonical: '/books/declans-lost-race/' },
  openGraph: {
    title: "Declan's Lost Race | Bob Mazzei",
    description: declan.shortDescription,
    url: `${site.url}/books/declans-lost-race/`,
    images: [{ url: declan.cover, alt: declan.coverAlt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Declan's Lost Race | Bob Mazzei",
    description: declan.shortDescription,
    images: [declan.cover]
  }
}

export default function DeclanPage() {
  const bookJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: declan.title,
    author: { '@type': 'Person', name: 'Bob Mazzei' },
    genre: declan.genres,
    image: `${site.url}${declan.cover}`,
    url: `${site.url}/books/declans-lost-race/`,
    description: declan.shortDescription
  }

  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }} />
      <div className="shell">
        <div className="book-page-grid">
          <BookCover book={declan} priority />
          <div>
            <p className="eyebrow">Crime · Mystery · Forensic Mystery</p>
            <h1 className="book-page-title">Declan&apos;s Lost Race</h1>
            <p className="book-hook"><span>One dead man.</span><span>Two male DNA profiles.</span></p>
            <div className="book-synopsis">
              <p>A dead man is found on the Costa del Sol. Most of the body produces one male DNA profile. A mouth swab produces another.</p>
              <p>The second profile matches evidence from a London murder committed thirty-two years earlier. Then an old university photograph points towards Declan.</p>
              <p>As the investigation moves between London and southern Spain, the evidence does not simply ask who the dead man was. It raises a more difficult question: what, exactly, can the evidence prove?</p>
            </div>
          </div>
        </div>

        <div className="book-detail-sections">
          <section>
            <h2>The premise</h2>
            <p>One body should produce one identity. Here, the forensic evidence refuses to behave so neatly.</p>
          </section>
          <section>
            <h2>The investigation</h2>
            <p>A DNA match reaches three decades into the past, turning a present-day death into a question with an older history.</p>
          </section>
          <section>
            <h2>London / Costa del Sol</h2>
            <p>The story moves between two places with very different light, pace and atmosphere, while the same unresolved evidence follows the investigation across both.</p>
          </section>
        </div>
      </div>
    </section>
  )
}

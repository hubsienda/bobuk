import type { Metadata } from 'next'
import { BookCover } from '@/components/BookCover'
import { ButtonLink } from '@/components/ButtonLink'
import { ghost } from '@/data/books'
import { site } from '@/data/site'

const description =
  'The Ghost of Highgate by Bob Mazzei is an irreverent philosophical satire in which Karl Marx returns to modern London determined to correct what the world has made of his ideas.'

export const metadata: Metadata = {
  title: 'The Ghost of Highgate',
  description,
  alternates: { canonical: '/books/the-ghost-of-highgate/' },
  openGraph: {
    title: 'The Ghost of Highgate | Bob Mazzei',
    description,
    url: `${site.url}/books/the-ghost-of-highgate/`,
    images: [{ url: ghost.cover, alt: ghost.coverAlt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ghost of Highgate | Bob Mazzei',
    description,
    images: [ghost.cover]
  }
}

export default function GhostOfHighgatePage() {
  const bookJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: ghost.title,
    author: { '@type': 'Person', name: site.name, url: site.url },
    genre: ghost.genres,
    image: `${site.url}${ghost.cover}`,
    url: `${site.url}/books/the-ghost-of-highgate/`,
    description,
    datePublished: '2023',
    ...(ghost.amazonUrl ? { sameAs: ghost.amazonUrl } : {})
  }

  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }} />
      <div className="shell">
        <div className="book-page-grid">
          <div style={{ maxWidth: 320 }}>
            <BookCover book={ghost} priority />
          </div>
          <div>
            <p className="eyebrow">A philosophical satire</p>
            <h1 className="book-page-title">The Ghost of Highgate</h1>
            <div className="genre-line"><span>Philosophical satire · London · 2023</span></div>
            <p className="book-hook">Karl Marx is back. He is not pleased.</p>
            <div className="book-synopsis">
              <p>A strange encounter near Highgate Cemetery leaves Nob face to face with a dishevelled Victorian who should have been dead for well over a century.</p>
              <p>The stranger is Karl Marx — or, as he prefers to put it, an enduring idea, temporarily manifest.</p>
              <p>Appalled by what politicians, revolutionaries, dictators, academics and assorted followers have made of his work, Marx has returned with a mission: understand the twenty-first century and set the record straight.</p>
              <p>Unfortunately, his reluctant guide is Nob — a London IT engineer more interested in football, pubs and getting on with his life than escorting a nineteenth-century philosopher through smartphones, the Internet, modern politics and the strange habits of contemporary society.</p>
              <p>The Ghost of Highgate is an irreverent philosophical satire about ideas, ideology, history and what happens to a thinker's work once the thinker is no longer around to defend it.</p>
            </div>
            <div className="action-group">
              {ghost.amazonUrl && <ButtonLink href={ghost.amazonUrl}>Buy on Amazon</ButtonLink>}
              <ButtonLink href="/writing/the-ghost-of-highgate-extract/" variant="secondary">Read an extract</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

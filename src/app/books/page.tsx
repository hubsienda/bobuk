import type { Metadata } from 'next'
import { BookCover } from '@/components/BookCover'
import { ButtonLink } from '@/components/ButtonLink'
import { declan, ghost, missingHour } from '@/data/books'

export const metadata: Metadata = {
  title: 'Books',
  description: "Books by Bob Mazzei, including Declan's Lost Race, The Ghost of Highgate and the free novel The Missing Hour.",
  alternates: { canonical: '/books/' }
}

export default function BooksPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Books</p>
          <h1>Fiction built around evidence, ideas and consequence.</h1>
          <p>Forensic mystery, philosophical satire and allegorical fiction — from the Costa del Sol and modern London to an unnamed city where even time has become political.</p>
        </div>
      </header>
      <div className="page-rule" />

      <section className="section">
        <div className="shell books-list">
          <article className="book-list-item">
            <BookCover book={declan} />
            <div>
              <p className="eyebrow">Latest book</p>
              <h2>{declan.title}</h2>
              <div className="genre-line">{declan.genres.map(genre => <span key={genre}>{genre}</span>)}</div>
              <p>{declan.shortDescription}</p>
              <div className="action-group">
                <ButtonLink href={`/books/${declan.slug}/`} variant="secondary">Discover the book</ButtonLink>
                {declan.amazonUrl && <ButtonLink href={declan.amazonUrl}>Buy on Amazon</ButtonLink>}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="shell">
          <article className="book-list-item">
            <div style={{ maxWidth: 260 }}>
              <BookCover book={ghost} />
            </div>
            <div>
              <p className="eyebrow">Earlier work</p>
              <h2>{ghost.title}</h2>
              <div className="genre-line"><span>Philosophical satire · 2023</span></div>
              <p>Karl Marx is back — although he prefers to describe himself as an enduring idea, temporarily manifest.</p>
              <p>Convinced that generations of politicians, revolutionaries, dictators and followers have distorted his work, Marx returns to modern London determined to set the record straight. His unwilling guide is Nob, an IT engineer whose priorities involve football, pubs and considerably fewer nineteenth-century philosophers.</p>
              <p>An irreverent collision of philosophy, politics, technology and modern life.</p>
              <div className="action-group">
                <ButtonLink href={`/books/${ghost.slug}/`} variant="secondary">Discover the book</ButtonLink>
                {ghost.amazonUrl && <ButtonLink href={ghost.amazonUrl}>Buy on Amazon</ButtonLink>}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <article className="book-list-item">
            <div style={{ maxWidth: 260 }}>
              <BookCover book={missingHour} />
            </div>
            <div>
              <p className="eyebrow">Free novel</p>
              <h2>{missingHour.title}</h2>
              <div className="genre-line"><span>Philosophical fiction · Satirical fiction · 2025</span></div>

              <p>One morning, the bells ring the wrong number of times.</p>

              <p>An hour has disappeared from an unnamed Italian seaside city. It has not vanished into the supernatural. It has been quietly taken by queues, procedures, private lanes, priority doors and the people who know how to rent out somebody else&apos;s waiting.</p>

              <p>Luca, a cartographer at the City Archive, follows a street that should no longer exist and discovers the <em>Archivio</em> — a room containing records not only of forgotten streets, but of abandoned possibilities.</p>

              <p>What follows is a satirical journey through bureaucracy, merit, inequality, freedom and the strange machinery through which institutions decide whose time matters.</p>

              <p>The complete novel is available free.</p>

              <p className="book-list-hook">
                <span>The missing hour was never really missing.</span>
                <span>Someone was using it.</span>
              </p>

              <div className="action-group">
                {missingHour.downloadUrl && (
                  <ButtonLink href={missingHour.downloadUrl}>
                    Download free PDF
                  </ButtonLink>
                )}
                {missingHour.writingUrl && (
                  <ButtonLink href={missingHour.writingUrl} variant="secondary">
                    Read about the novel
                  </ButtonLink>
                )}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

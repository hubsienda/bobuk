import type { Metadata } from 'next'
import { BookCover } from '@/components/BookCover'
import { ButtonLink } from '@/components/ButtonLink'
import { declan, ghost } from '@/data/books'

export const metadata: Metadata = {
  title: 'Books',
  description: "Books by Bob Mazzei, including Declan's Lost Race and The Ghost of Highgate.",
  alternates: { canonical: '/books/' }
}

export default function BooksPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Books</p>
          <h1>Fiction built around evidence, ideas and consequence.</h1>
          <p>Forensic mystery and philosophical satire, moving from the Costa del Sol to modern London.</p>
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
    </>
  )
}

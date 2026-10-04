import type { Metadata } from 'next'
import { BookCover } from '@/components/BookCover'
import { ButtonLink } from '@/components/ButtonLink'
import { books } from '@/data/books'

export const metadata: Metadata = {
  title: 'Books',
  description: 'Books by Bob Mazzei, including Declan’s Lost Race.',
  alternates: { canonical: '/books/' }
}

export default function BooksPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Books</p>
          <h1>Fiction built around evidence, uncertainty and consequence.</h1>
          <p>The current catalogue begins with a forensic mystery moving between London and the Costa del Sol.</p>
        </div>
      </header>
      <div className="page-rule" />
      <section className="section">
        <div className="shell books-list">
          {books.map(book => (
            <article key={book.slug} className="book-list-item">
              <BookCover book={book} />
              <div>
                <p className="eyebrow">Forensic mystery</p>
                <h2>{book.title}</h2>
                <div className="genre-line">{book.genres.map(genre => <span key={genre}>{genre}</span>)}</div>
                <p>{book.shortDescription}</p>
                <ButtonLink href={`/books/${book.slug}/`} variant="text">Discover the book</ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

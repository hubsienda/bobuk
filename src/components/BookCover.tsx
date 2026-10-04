import Image from 'next/image'
import type { Book } from '@/data/books'

export function BookCover({ book, priority = false }: { book: Book; priority?: boolean }) {
  return (
    <div className="book-cover-frame">
      <Image
        src={book.cover}
        alt={book.coverAlt}
        width={640}
        height={960}
        priority={priority}
        className="book-cover-image"
        sizes="(max-width: 768px) 72vw, 340px"
      />
    </div>
  )
}

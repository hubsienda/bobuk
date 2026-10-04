import Link from 'next/link'
import type { WritingItem } from '@/lib/writing'
import { formatWritingDate, writingTypeLabel } from '@/lib/writing'

export function WritingList({ items }: { items: WritingItem[] }) {
  if (!items.length) {
    return (
      <div className="writing-empty">
        <p>No pieces are published here yet.</p>
        <p>This section will gather essays, fiction and extracts as they are released.</p>
      </div>
    )
  }

  return (
    <div className="writing-list">
      {items.map(item => (
        <article key={item.slug} className="writing-row">
          <div className="writing-row-meta">
            <span>{writingTypeLabel(item.type)}</span>
            <span>{formatWritingDate(item.date)}</span>
            <span>{item.readingMinutes} min read</span>
          </div>
          <div>
            <h2 className="writing-row-title">
              <Link href={`/writing/${item.slug}/`}>{item.title}</Link>
            </h2>
            {item.description && <p className="writing-row-description">{item.description}</p>}
          </div>
          <Link className="writing-row-link" href={`/writing/${item.slug}/`} aria-label={`Read ${item.title}`}>
            Read →
          </Link>
        </article>
      ))}
    </div>
  )
}

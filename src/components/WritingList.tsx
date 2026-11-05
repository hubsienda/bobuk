import Link from 'next/link'
import type { WritingItem } from '@/lib/writing'
import { formatWritingDate, tagToSlug, writingTypeLabel } from '@/lib/writing'

export function WritingList({ items }: { items: WritingItem[] }) {
  if (!items.length) {
    return (
      <div className="writing-empty">
        <p>No matching pieces are published here yet.</p>
        <p>This section gathers articles, essays, fiction and extracts as they are released.</p>
      </div>
    )
  }

  return (
    <div className="writing-list">
      {items.map(item => (
        <article key={item.slug} className={item.featured ? 'writing-row writing-row-featured' : 'writing-row'}>
          <div className="writing-row-meta">
            <span>{writingTypeLabel(item.type)}</span>
            <span>{formatWritingDate(item.date)}</span>
            <span>{item.readingMinutes} min read</span>
          </div>
          <div>
            <h2 className="writing-row-title">
              <Link href={'/writing/' + item.slug + '/'}>{item.title}</Link>
            </h2>
            {item.description && <p className="writing-row-description">{item.description}</p>}
            {item.tags.length > 0 && (
              <div className="writing-tags" aria-label={'Tags for ' + item.title}>
                {item.tags.slice(0, 3).map(tag => (
                  <Link key={tagToSlug(tag)} href={'/writing/tag/' + tagToSlug(tag) + '/'}>{tag}</Link>
                ))}
              </div>
            )}
          </div>
          <Link className="writing-row-link" href={'/writing/' + item.slug + '/'} aria-label={'Read ' + item.title}>
            Read →
          </Link>
        </article>
      ))}
    </div>
  )
}

import type { Metadata } from 'next'
import { WritingList } from '@/components/WritingList'
import { getArchiveGroups } from '@/lib/writing'

export const metadata: Metadata = {
  title: 'Writing Archive',
  description: 'Browse Bob Mazzei writing by year.',
  alternates: { canonical: '/writing/archive/' }
}

export default async function WritingArchivePage() {
  const groups = await getArchiveGroups()

  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Writing</p>
          <h1>Archive</h1>
          <p>Published writing by year.</p>
        </div>
      </header>
      <div className="page-rule" />
      <section className="section-tight">
        <div className="shell archive-list">
          {groups.map(([year, items]) => (
            <section key={year} className="archive-year" aria-labelledby={'archive-' + year}>
              <h2 id={'archive-' + year}>{year}</h2>
              <WritingList items={items} />
            </section>
          ))}
        </div>
      </section>
    </>
  )
}

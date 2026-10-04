import type { Metadata } from 'next'
import Link from 'next/link'
import { WritingList } from '@/components/WritingList'
import { getAllWriting, type WritingType } from '@/lib/writing'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Essays, fiction and extracts by Bob Mazzei.',
  alternates: { canonical: '/writing/' }
}

const validFilters = new Set<WritingType>(['essay', 'fiction', 'extract'])

export default async function WritingPage({
  searchParams
}: {
  searchParams: Promise<{ type?: string | string[] }>
}) {
  const params = await searchParams
  const requested = Array.isArray(params.type) ? params.type[0] : params.type
  const active = requested && validFilters.has(requested as WritingType) ? (requested as WritingType) : undefined
  const all = await getAllWriting()
  const items = active ? all.filter(item => item.type === active) : all

  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Writing</p>
          <h1>Writing</h1>
          <p>Essays, fiction and extracts.</p>
        </div>
      </header>
      <div className="page-rule" />
      <section className="section-tight">
        <div className="shell">
          <nav className="filters" aria-label="Filter writing by type">
            <Link className={!active ? 'filter-link active' : 'filter-link'} href="/writing/">All</Link>
            <Link className={active === 'essay' ? 'filter-link active' : 'filter-link'} href="/writing/?type=essay">Essays</Link>
            <Link className={active === 'fiction' ? 'filter-link active' : 'filter-link'} href="/writing/?type=fiction">Fiction</Link>
            <Link className={active === 'extract' ? 'filter-link active' : 'filter-link'} href="/writing/?type=extract">Extracts</Link>
          </nav>
          <WritingList items={items} />
        </div>
      </section>
    </>
  )
}

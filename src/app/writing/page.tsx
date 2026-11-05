import type { Metadata } from 'next'
import Link from 'next/link'
import { ButtonLink } from '@/components/ButtonLink'
import { WritingList } from '@/components/WritingList'
import { site } from '@/data/site'
import { getAllWriting, searchWriting, type WritingType } from '@/lib/writing'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Essays, articles, fiction and extracts by Bob Mazzei.',
  alternates: { canonical: '/writing/' }
}

const validFilters = new Set<WritingType>(['article', 'essay', 'fiction', 'extract'])

function filterHref(type: WritingType | undefined, query: string) {
  const params = new URLSearchParams()
  if (type) params.set('type', type)
  if (query) params.set('q', query)
  const suffix = params.toString()
  return suffix ? '/writing/?' + suffix : '/writing/'
}

export default async function WritingPage({
  searchParams
}: {
  searchParams: Promise<{ type?: string | string[]; q?: string | string[] }>
}) {
  const params = await searchParams
  const requested = Array.isArray(params.type) ? params.type[0] : params.type
  const queryValue = Array.isArray(params.q) ? params.q[0] : params.q
  const query = (queryValue ?? '').trim()
  const active = requested && validFilters.has(requested as WritingType) ? (requested as WritingType) : undefined
  const all = await getAllWriting()
  const filtered = active ? all.filter(item => item.type === active) : all
  const items = searchWriting(filtered, query)

  return (
    <>
      <header className="page-hero writing-page-hero">
        <div className="shell">
          <h1>Writing</h1>
          <p>Essays, articles, fiction and extracts.</p>
        </div>
      </header>
      <div className="page-rule" />
      <section className="section-tight writing-index-section">
        <div className="shell">
          <div className="writing-tools">
            <nav className="filters" aria-label="Filter writing by type">
              <Link className={!active ? 'filter-link active' : 'filter-link'} href={filterHref(undefined, query)}>All</Link>
              <Link className={active === 'article' ? 'filter-link active' : 'filter-link'} href={filterHref('article', query)}>Articles</Link>
              <Link className={active === 'essay' ? 'filter-link active' : 'filter-link'} href={filterHref('essay', query)}>Essays</Link>
              <Link className={active === 'fiction' ? 'filter-link active' : 'filter-link'} href={filterHref('fiction', query)}>Fiction</Link>
              <Link className={active === 'extract' ? 'filter-link active' : 'filter-link'} href={filterHref('extract', query)}>Extracts</Link>
            </nav>
            <div className="writing-discovery">
              <Link href="/writing/archive/">Archive</Link>
              <Link href="/feed.xml">RSS</Link>
            </div>
          </div>

          <form className="writing-search" action="/writing/" method="get" role="search">
            {active && <input type="hidden" name="type" value={active} />}
            <label className="sr-only" htmlFor="writing-search">Search writing</label>
            <input id="writing-search" name="q" type="search" defaultValue={query} placeholder="Search writing…" />
            <button type="submit">Search</button>
            {query && <Link href={filterHref(active, '')}>Clear</Link>}
          </form>

          {query && <p className="writing-search-summary">{items.length} result{items.length === 1 ? '' : 's'} for “{query}”</p>}
          <WritingList items={items} />
        </div>
      </section>

      <section className="section socratic-section socratic-writing">
        <div className="shell socratic-grid">
          <div className="socratic-marker" aria-hidden="true">?</div>
          <div className="socratic-copy">
            <p className="eyebrow">The Socratic Shrug</p>
            <h2>{site.socraticShrug.name}</h2>
            <p className="socratic-tagline">{site.socraticShrug.tagline}</p>
            <p>
              I also publish The Socratic Shrug on Substack — essays and arguments on evidence, certainty, power and human behaviour.
            </p>
            <div className="action-group">
              <ButtonLink href={site.socraticShrug.url} variant="secondary">Read The Socratic Shrug ↗</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { WritingList } from '@/components/WritingList'
import { getAllTags, getTagBySlug, getWritingByTag } from '@/lib/writing'

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map(tag => ({ tag: tag.slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const { tag: slug } = await params
  const tag = await getTagBySlug(slug)
  if (!tag) return {}
  return {
    title: tag.name + ' — Writing',
    description: 'Writing by Bob Mazzei tagged ' + tag.name + '.',
    alternates: { canonical: '/writing/tag/' + tag.slug + '/' }
  }
}

export default async function WritingTagPage({
  params
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag: slug } = await params
  const tag = await getTagBySlug(slug)
  if (!tag) notFound()
  const items = await getWritingByTag(slug)

  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Writing tag</p>
          <h1>{tag.name}</h1>
          <p>{tag.count} published piece{tag.count === 1 ? '' : 's'}.</p>
        </div>
      </header>
      <div className="page-rule" />
      <section className="section-tight">
        <div className="shell">
          <WritingList items={items} />
        </div>
      </section>
    </>
  )
}

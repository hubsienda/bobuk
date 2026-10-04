import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { importPage } from 'nextra/pages'
import { getAllWriting, getWritingBySlug, formatWritingDate, writingTypeLabel } from '@/lib/writing'
import { site } from '@/data/site'

export async function generateStaticParams() {
  const items = await getAllWriting({ includeDrafts: process.env.NODE_ENV !== 'production' })
  return items.map(item => ({ mdxPath: item.slug.split('/') }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ mdxPath: string[] }>
}): Promise<Metadata> {
  const { mdxPath } = await params
  const slug = mdxPath.join('/')
  const item = await getWritingBySlug(slug)
  if (!item || (item.draft && process.env.NODE_ENV === 'production')) return {}

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/writing/${item.slug}/` },
    openGraph: {
      type: 'article',
      title: item.title,
      description: item.description,
      url: `${site.url}/writing/${item.slug}/`,
      publishedTime: item.date,
      authors: [site.name]
    }
  }
}

export default async function WritingArticlePage({
  params
}: {
  params: Promise<{ mdxPath: string[] }>
}) {
  const { mdxPath } = await params
  const slug = mdxPath.join('/')
  const item = await getWritingBySlug(slug)

  if (!item || (item.draft && process.env.NODE_ENV === 'production')) notFound()

  let page
  try {
    page = await importPage(mdxPath)
  } catch {
    notFound()
  }
  const MDXContent = page.default

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    description: item.description,
    datePublished: item.date,
    author: { '@type': 'Person', name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/writing/${item.slug}/`
  }

  return (
    <article className="article-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <header className="article-header">
        <p className="article-kind">{writingTypeLabel(item.type)}</p>
        <h1 className="article-title">{item.title}</h1>
        {item.description && <p className="article-description">{item.description}</p>}
        <div className="article-meta">
          <span>{formatWritingDate(item.date)}</span>
          <span>{item.readingMinutes} min read</span>
        </div>
      </header>
      <div className="prose-literary">
        <MDXContent />
      </div>
      <footer className="article-footer">
        <Link className="button-link button-text" href="/writing/">Back to writing</Link>
        <span className="article-copyright">© {new Date().getFullYear()} Bob Mazzei. All rights reserved.</span>
      </footer>
    </article>
  )
}

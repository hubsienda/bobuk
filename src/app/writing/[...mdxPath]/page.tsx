import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { importPage } from 'nextra/pages'
import {
  formatWritingDate,
  getAllWriting,
  getRelatedWriting,
  getWritingBySlug,
  hasMeaningfulUpdate,
  isWritingPublic,
  tagToSlug,
  writingTypeLabel
} from '@/lib/writing'
import { site } from '@/data/site'

export async function generateStaticParams() {
  const includeUnpublished = process.env.NODE_ENV !== 'production'
  const items = await getAllWriting({
    includeDrafts: includeUnpublished,
    includeFuture: includeUnpublished
  })
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
  if (!item || (process.env.NODE_ENV === 'production' && !isWritingPublic(item))) return {}

  const description = item.seoDescription || item.description
  const localUrl = site.url + '/writing/' + item.slug + '/'
  const canonical = item.canonical || localUrl
  const images = item.image ? [{ url: item.image, alt: item.imageAlt || item.title }] : undefined

  return {
    title: item.title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: item.title + ' | ' + site.name,
      description,
      url: canonical,
      publishedTime: item.date,
      modifiedTime: item.updated || item.date,
      authors: [site.name],
      tags: item.tags,
      ...(images ? { images } : {})
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title + ' | ' + site.name,
      description,
      ...(item.image ? { images: [item.image] } : {})
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

  if (!item || (process.env.NODE_ENV === 'production' && !isWritingPublic(item))) notFound()

  let page
  try {
    page = await importPage(mdxPath)
  } catch {
    notFound()
  }
  const MDXContent = page.default
  const related = await getRelatedWriting(item)
  const canonical = item.canonical || site.url + '/writing/' + item.slug + '/'
  const image = item.image
    ? (item.image.startsWith('http') ? item.image : site.url + item.image)
    : undefined

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    description: item.seoDescription || item.description,
    datePublished: item.date,
    dateModified: item.updated || item.date,
    author: { '@type': 'Person', name: site.name, url: site.url },
    mainEntityOfPage: canonical,
    ...(image ? { image } : {}),
    ...(item.bookTitle ? { isPartOf: { '@type': 'Book', name: item.bookTitle } } : {})
  }

  return (
    <article className="article-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <header className="article-header">
        <p className="article-kind">{writingTypeLabel(item.type)}</p>
        <h1 className="article-title">{item.title}</h1>
        {item.subtitle && <p className="article-subtitle">{item.subtitle}</p>}
        {item.description && <p className="article-description">{item.description}</p>}
        <div className="article-meta">
          {item.chapter && <span>{item.chapter}</span>}
          {item.series && <span>{item.series}</span>}
          <span>{formatWritingDate(item.date)}</span>
          <span>{item.readingMinutes} min read</span>
          {hasMeaningfulUpdate(item) && item.updated && <span>Updated {formatWritingDate(item.updated)}</span>}
        </div>
        {item.tags.length > 0 && (
          <div className="article-tags" aria-label="Article tags">
            {item.tags.map(tag => (
              <Link key={tagToSlug(tag)} href={'/writing/tag/' + tagToSlug(tag) + '/'}>{tag}</Link>
            ))}
          </div>
        )}
      </header>

      <div className="prose-literary">
        <MDXContent />
      </div>

      {item.type !== 'extract' && (
        <aside className="article-author" aria-label="About the author">
          <p><strong>Bob Mazzei</strong></p>
          <p>Writer and author of <em>Declan&apos;s Lost Race</em> and <em>The Ghost of Highgate</em>.</p>
          <Link href="/about/">About Bob →</Link>
        </aside>
      )}

      {related.length > 0 && (
        <section className="related-writing" aria-labelledby="related-writing-title">
          <h2 id="related-writing-title">Related writing</h2>
          <ul>
            {related.map(relatedItem => (
              <li key={relatedItem.slug}>
                <span>{writingTypeLabel(relatedItem.type)}</span>
                <Link href={'/writing/' + relatedItem.slug + '/'}>{relatedItem.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="article-footer">
        <Link className="button-link button-text" href="/writing/">Back to writing</Link>
        {item.type !== 'extract' && (
          <span className="article-copyright">© {new Date().getFullYear()} Bob Mazzei. All rights reserved.</span>
        )}
      </footer>
    </article>
  )
}

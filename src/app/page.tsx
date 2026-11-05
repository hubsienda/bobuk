import Image from 'next/image'
import Link from 'next/link'
import { BookCover } from '@/components/BookCover'
import { ButtonLink } from '@/components/ButtonLink'
import { WritingList } from '@/components/WritingList'
import { declan, ghost } from '@/data/books'
import { premiumPublications } from '@/data/premiumPublications'
import { freeResources } from '@/data/resources'
import { site } from '@/data/site'
import {
  formatWritingDate,
  getAllTags,
  getAllWriting,
  tagToSlug,
  writingTypeLabel
} from '@/lib/writing'

const areas = [
  { label: 'Artificial Intelligence', tag: 'artificial-intelligence' },
  { label: 'Business & Technology', tag: 'business-and-technology' },
  { label: 'Philosophy', tag: 'philosophy' },
  { label: 'Political Economy', tag: 'political-economy' },
  { label: 'Evidence & Reasoning', tag: 'evidence-and-reasoning' },
  { label: 'Human Behaviour', tag: 'human-behaviour' },
  { label: 'Literature & Fiction', tag: 'literature-and-fiction' }
] as const

export default async function HomePage() {
  const [writing, tags] = await Promise.all([getAllWriting(), getAllTags()])
  const latest = writing[0]
  const featured = writing.find(item => item.featured) ?? latest
  const latestWriting = writing.slice(0, 5)
  const liveTagSlugs = new Set(tags.map(tag => tag.slug))

  return (
    <>
      <section className="platform-hero">
        <div className="shell platform-hero-inner">
          <div className="platform-hero-copy">
            <p className="eyebrow">Bob Mazzei · Author</p>
            <h1>Independent writing, analysis and books.</h1>
            <p className="platform-hero-lede">
              Technology, business, artificial intelligence and the ideas that shape how organisations and societies work.
            </p>
            <div className="credibility-line" aria-label="Professional background">
              <strong>Author · Business Engineer · AI Consultant</strong>
              <span>More than three decades across technology, business and international commerce.</span>
            </div>
            <div className="hero-actions">
              <ButtonLink href={latest ? '/writing/' + latest.slug + '/' : '/writing/'}>
                Read the latest
              </ButtonLink>
              <ButtonLink href="/writing/" variant="secondary">Explore writing</ButtonLink>
            </div>
          </div>
          <div className="platform-hero-rule" aria-hidden="true">
            <span>Writing</span>
            <span>Analysis</span>
            <span>Books</span>
          </div>
        </div>
      </section>

      {featured && (
        <section className="section editorial-section home-featured-section">
          <div className="shell">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">Featured</p>
                <h2>Selected writing.</h2>
              </div>
            </div>
            <article className="home-featured-writing">
              <div className="home-featured-meta">
                <span>{writingTypeLabel(featured.type)}</span>
                <span>{formatWritingDate(featured.date)}</span>
                <span>{featured.readingMinutes} min read</span>
              </div>
              <div className="home-featured-copy">
                <h3><Link href={'/writing/' + featured.slug + '/'}>{featured.title}</Link></h3>
                <p>{featured.description}</p>
                {featured.tags.length > 0 && (
                  <div className="writing-tags">
                    {featured.tags.slice(0, 3).map(tag => (
                      <Link key={tagToSlug(tag)} href={'/writing/tag/' + tagToSlug(tag) + '/'}>{tag}</Link>
                    ))}
                  </div>
                )}
              </div>
              <Link className="writing-row-link" href={'/writing/' + featured.slug + '/'}>Read →</Link>
            </article>
          </div>
        </section>
      )}

      <section className="section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Latest writing</p>
              <h2>New work from the publishing desk.</h2>
            </div>
            <ButtonLink href="/writing/" variant="text">View all writing</ButtonLink>
          </div>
          <WritingList items={latestWriting} />
        </div>
      </section>

      <section className="section editorial-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Areas of interest</p>
              <h2>Follow the questions, not the categories.</h2>
            </div>
          </div>
          <nav className="interest-links" aria-label="Areas of interest">
            {areas.map(area => {
              const href = liveTagSlugs.has(area.tag)
                ? '/writing/tag/' + area.tag + '/'
                : '/writing/?q=' + encodeURIComponent(area.label)
              return <Link key={area.label} href={href}>{area.label}<span aria-hidden="true">→</span></Link>
            })}
          </nav>
        </div>
      </section>

      <section className="section free-resources-section">
        <div className="shell">
          <div className="free-resources-intro">
            <p className="eyebrow">Free resources</p>
            <h2>Free guides &amp; practical resources</h2>
            <p>Some ideas are more useful when you can take them away and use them.</p>
            <p>Download free guides, ebooks and practical resources on artificial intelligence, business engineering, operations and better decision-making — published by Sienda Media from the work and experience of Sienda Ltd.</p>
          </div>

          <div className="free-resource-list">
            {freeResources.map(resource => (
              <article key={resource.title} className="free-resource-item">
                <p className="resource-source">Published by {resource.source}</p>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <ButtonLink href={resource.url} variant="text">View free guide →</ButtonLink>
              </article>
            ))}
          </div>

          <div className="free-resources-all">
            <ButtonLink href="https://siendamedia.com/" variant="secondary">Explore all free resources →</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section professional-section">
        <div className="shell">
          <div className="professional-intro">
            <p className="eyebrow">Professional</p>
            <h2>Experience applied to difficult decisions.</h2>
            <p>
              Independent analysis at the intersection of business, technology and artificial intelligence, informed by more than three decades of commercial and technical experience.
            </p>
          </div>
          <div className="professional-areas">
            <div>
              <h3>AI &amp; Technology</h3>
              <p>Independent assessment of artificial intelligence, automation, technology choices and the claims made around them.</p>
            </div>
            <div>
              <h3>Business &amp; Decision Analysis</h3>
              <p>Analysis of commercial problems, operating decisions, projects and the assumptions on which they depend.</p>
            </div>
            <div>
              <h3>Executive Briefings</h3>
              <p>Focused research and independent analysis for decisions that require more than a sales presentation or a dashboard.</p>
            </div>
          </div>
          <div className="action-group">
            <ButtonLink href="/advisory/">Work with Bob</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section home-books-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Books</p>
              <h2>Stories for readers who prefer a mystery that thinks back.</h2>
            </div>
          </div>

          <article className="home-book-primary">
            <BookCover book={declan} />
            <div>
              <p className="eyebrow">Latest novel</p>
              <h3>{declan.title}</h3>
              <p className="home-book-hook">{declan.hook.join(' ')}</p>
              <p>{declan.shortDescription}</p>
              <div className="action-group">
                <ButtonLink href={'/books/' + declan.slug + '/'} variant="secondary">Discover the book</ButtonLink>
                {declan.amazonUrl && <ButtonLink href={declan.amazonUrl}>Buy on Amazon</ButtonLink>}
              </div>
            </div>
          </article>

          <article className="home-book-secondary">
            <div className="home-book-secondary-cover"><BookCover book={ghost} /></div>
            <div>
              <p className="eyebrow">Earlier work</p>
              <h3>{ghost.title}</h3>
              <p className="genre-line">Philosophical satire · 2023</p>
              <p>{ghost.shortDescription}</p>
              <div className="action-group">
                <ButtonLink href={'/books/' + ghost.slug + '/'} variant="secondary">Discover the book</ButtonLink>
                {ghost.amazonUrl && <ButtonLink href={ghost.amazonUrl}>Buy on Amazon</ButtonLink>}
              </div>
            </div>
          </article>

          <div className="home-books-more">
            <ButtonLink href="/books/" variant="text">View all books</ButtonLink>
          </div>
        </div>
      </section>

      {premiumPublications.length > 0 && (
        <section className="section editorial-section">
          <div className="shell">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">Briefings &amp; guides</p>
                <h2>Premium publications.</h2>
              </div>
            </div>
            <div className="premium-publications">
              {premiumPublications.map(publication => (
                <article key={publication.slug}>
                  <p className="eyebrow">{publication.kind}</p>
                  <h3>{publication.title}</h3>
                  <p>{publication.description}</p>
                  <ButtonLink href={publication.url} variant="secondary">View publication</ButtonLink>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section socratic-section">
        <div className="shell socratic-grid">
          <div className="socratic-marker" aria-hidden="true">?</div>
          <div className="socratic-copy">
            <p className="eyebrow">The Socratic Shrug</p>
            <h2>{site.socraticShrug.tagline}</h2>
            <p>
              I also publish The Socratic Shrug on Substack — essays and arguments on evidence, certainty, power and human behaviour.
            </p>
            <div className="action-group">
              <ButtonLink href={site.socraticShrug.url} variant="secondary">Read The Socratic Shrug ↗</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell about-preview-grid">
          <div className="about-preview-photo">
            <Image
              src="/pics/bob-photo.jpg"
              alt="Bob Mazzei"
              width={760}
              height={950}
              className="author-image"
              sizes="(max-width: 900px) 80vw, 390px"
            />
          </div>
          <div className="about-preview-copy">
            <p className="eyebrow">About Bob</p>
            <h2>Bob Mazzei</h2>
            <p>
              Bob Mazzei is an author, business engineer and AI consultant whose work spans fiction, technology, business, political economy and questions of evidence, reasoning and human behaviour.
            </p>
            <p>
              His professional career began in 1987 and has crossed business engineering, technology, commercial management, software, data, project work and professional education in international markets.
            </p>
            <div className="action-group">
              <ButtonLink href="/about/" variant="text">About Bob</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

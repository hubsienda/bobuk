import Image from 'next/image'
import { BookCover } from '@/components/BookCover'
import { ButtonLink } from '@/components/ButtonLink'
import { WritingList } from '@/components/WritingList'
import { declan } from '@/data/books'
import { site } from '@/data/site'
import { getAllWriting } from '@/lib/writing'

export default async function HomePage() {
  const latestWriting = (await getAllWriting()).slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Bob Mazzei · Fiction</p>
            <h1 className="hero-title">Stories for readers who prefer a mystery that thinks back.</h1>
            <p className="hero-lede">
              Crime, memory, identity, evidence and the uncomfortable space between what happened and what can be proved.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/books/declans-lost-race/">Explore Declan&apos;s Lost Race</ButtonLink>
              <ButtonLink href="/writing/" variant="secondary">Read my writing</ButtonLink>
            </div>
          </div>
          <div className="hero-book">
            <BookCover book={declan} priority />
          </div>
        </div>
      </section>

      <section className="hook-band" aria-label="Declan's Lost Race hook">
        <div className="shell hook-inner">
          <div className="hook-mark" aria-hidden="true" />
          <p className="hook-text"><span>One dead man.</span><span>Two male DNA profiles.</span></p>
        </div>
      </section>

      <section className="section">
        <div className="shell feature-grid">
          <BookCover book={declan} />
          <div className="feature-copy">
            <p className="eyebrow">Featured book</p>
            <h2>Declan&apos;s Lost Race</h2>
            <p>
              A dead man is found on the Costa del Sol. Most of the body produces one male DNA profile. A mouth swab produces another.
            </p>
            <div className="feature-points">
              <div className="feature-point"><span>01</span><span>The second profile matches evidence from a London murder committed thirty-two years earlier.</span></div>
              <div className="feature-point"><span>02</span><span>An old university photograph points towards Declan.</span></div>
              <div className="feature-point"><span>03</span><span>The investigation moves between London and southern Spain.</span></div>
            </div>
            <div className="action-group">
              {declan.amazonUrl && <ButtonLink href={declan.amazonUrl}>Buy on Amazon</ButtonLink>}
              <ButtonLink href="/books/declans-lost-race/" variant="secondary">Discover the book</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Latest writing</p>
              <h2>Essays, fiction and extracts.</h2>
            </div>
            <ButtonLink href="/writing/" variant="text">View all writing</ButtonLink>
          </div>
          <WritingList items={latestWriting} />
        </div>
      </section>

      <section className="section socratic-section">
        <div className="shell socratic-grid">
          <div className="socratic-marker" aria-hidden="true">?</div>
          <div className="socratic-copy">
            <p className="eyebrow">The Socratic Shrug</p>
            <h2>{site.socraticShrug.tagline}</h2>
            <p>
              My philosophical and essayistic writing lives at The Socratic Shrug — essays on evidence, power, human behaviour and the stories we tell ourselves, returning again and again to a simple question: what are we entitled to claim we know?
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
            <p className="eyebrow">About</p>
            <h2>Bob Mazzei</h2>
            <p>
              Bob Mazzei writes fiction in which mystery meets questions of memory, identity, evidence and certainty. His work moves between Britain and southern Europe and is shaped by an interest in how people reason, what they believe and what the evidence actually permits them to know.
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

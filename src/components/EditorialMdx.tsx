import Image from 'next/image'
import type { ReactNode } from 'react'
import { ButtonLink } from '@/components/ButtonLink'

export function PullQuote({ children }: { children: ReactNode }) {
  return <blockquote className="pull-quote">{children}</blockquote>
}

export function Note({ children }: { children: ReactNode }) {
  return <aside className="article-note">{children}</aside>
}

export function ArticleImage({
  src,
  alt,
  caption,
  width,
  height
}: {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
}) {
  return (
    <figure className="article-image">
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 760px) 100vw, 760px" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export function BookCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="article-book-cta">
      <ButtonLink href={href}>{children}</ButtonLink>
    </div>
  )
}


export function ProductCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="article-product-cta">
      <ButtonLink href={href}>{children}</ButtonLink>
    </div>
  )
}

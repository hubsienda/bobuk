import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import type { ComponentPropsWithoutRef } from 'react'
import { ArticleImage, BookCTA, ExternalLink, Note, ProductCTA, PullQuote } from '@/components/EditorialMdx'

const defaultComponents = getNextraComponents()

export function useMDXComponents(components = {}) {
  return {
    ...defaultComponents,
    h2: (props: ComponentPropsWithoutRef<'h2'>) => <h2 {...props} />,
    h3: (props: ComponentPropsWithoutRef<'h3'>) => <h3 {...props} />,
    a: (props: ComponentPropsWithoutRef<'a'>) => {
      const external = typeof props.href === 'string' && /^https?:\/\//.test(props.href)
      return <a {...props} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} />
    },
    PullQuote,
    ArticleImage,
    Note,
    BookCTA,
    ProductCTA,
    ExternalLink,
    ...components
  }
}

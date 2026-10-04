export type Book = {
  slug: string
  title: string
  cover: string
  coverAlt: string
  genres: string[]
  hook: string[]
  shortDescription: string
  amazonUrl?: string
  year?: number
  category?: string
  location?: string
  series?: string
  seriesNumber?: number
}

export const books: Book[] = [
  {
    slug: 'declans-lost-race',
    title: "Declan's Lost Race",
    cover: '/covers/declan-cover-1.jpg',
    coverAlt: "Cover of Declan's Lost Race by Bob Mazzei",
    genres: ['Crime', 'Mystery', 'Forensic Mystery'],
    hook: ['One dead man.', 'Two male DNA profiles.'],
    shortDescription:
      'A body on the Costa del Sol, two incompatible DNA profiles and a second profile that reaches back to a London murder committed thirty-two years earlier.',
    amazonUrl: 'https://www.amazon.com/dp/B0HDJY28W5'
  },
  {
    slug: 'the-ghost-of-highgate',
    title: 'The Ghost of Highgate',
    cover: '/covers/the-ghost-of-highgate.jpg',
    coverAlt: 'Cover of The Ghost of Highgate by Bob Mazzei',
    genres: ['Philosophical satire', 'Comic fiction', 'Political/philosophical satire'],
    hook: ['Karl Marx is back. He is not pleased.'],
    shortDescription:
      'Karl Marx is back — although he prefers to describe himself as an enduring idea, temporarily manifest.',
    amazonUrl: 'https://www.amazon.com/dp/B0CJRV854G',
    year: 2023,
    category: 'Philosophical satire',
    location: 'London'
  }
]

export const declan = books[0]
export const ghost = books[1]

export type Book = {
  slug: string
  title: string
  cover: string
  coverAlt: string
  genres: string[]
  hook: string[]
  shortDescription: string
  amazonUrl?: string
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
  }
]

export const declan = books[0]

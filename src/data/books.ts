export type Book = {
  slug: string
  title: string
  cover: string
  coverAlt: string
  genres: string[]
  hook: string[]
  shortDescription: string
  amazonUrl?: string
  downloadUrl?: string
  downloadLabel?: string
  writingUrl?: string
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
  },
  {
    slug: 'the-missing-hour',
    title: 'The Missing Hour',
    cover: '/covers/the-missing-hour.jpg',
    coverAlt: 'Cover of The Missing Hour by Bob Mazzei',
    genres: ['Philosophical fiction', 'Satirical fiction', 'Allegorical fiction'],
    hook: ['The missing hour was never really missing.', 'Someone was using it.'],
    shortDescription:
      "In an unnamed Italian seaside city, an hour has vanished into queues, procedures, private lanes and the machinery of everyday life. A satirical novel about time, inequality, merit, freedom and the institutions that quietly decide whose life must wait.",
    downloadUrl:
      'https://drive.google.com/file/d/1KsHqkL3HGsFZc7PL5IdeDJL9IKcufPV1/view?usp=drive_link',
    downloadLabel: 'Download free PDF',
    writingUrl: '/writing/the-missing-hour/',
    year: 2025,
    category: 'Philosophical satire',
    location: 'Unnamed Italian seaside city'
  }
]

export const declan = books[0]
export const ghost = books[1]
export const missingHour = books[2]

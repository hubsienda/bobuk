export const site = {
  name: 'Bob Mazzei',
  descriptor: 'Author',
  url: 'https://www.bobmazzei.co.uk',
  contactEmail: 'bob@bobmazzei.co.uk',
  socraticShrug: {
    name: 'The Socratic Shrug',
    tagline: 'Where certainty goes to be questioned.',
    url: 'https://bobmazzei.substack.com/'
  },
  description:
    'The official website of Bob Mazzei — author, business engineer and AI consultant. Essays, analysis, fiction and books on technology, business, artificial intelligence, evidence, ideas and contemporary life.',
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/writing/', label: 'Writing' },
    { href: '/books/', label: 'Books' },
    { href: '/advisory/', label: 'Advisory' },
    { href: '/about/', label: 'About' },
    { href: '/contact/', label: 'Contact' }
  ]
} as const

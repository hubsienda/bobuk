export const site = {
  name: 'Bob Mazzei',
  descriptor: 'Writer',
  url: 'https://bobmazzei.co.uk',
  contactEmail: 'bob@bobmazzei.co.uk',
  socraticShrug: {
    name: 'The Socratic Shrug',
    tagline: 'Where certainty goes to be questioned.',
    url: 'https://bobmazzei.substack.com/'
  },
  description:
    'The official website of Bob Mazzei, writer of crime and literary fiction exploring memory, identity, evidence and certainty.',
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/books/', label: 'Books' },
    { href: '/writing/', label: 'Writing' },
    { href: '/about/', label: 'About' },
    { href: '/contact/', label: 'Contact' }
  ]
} as const

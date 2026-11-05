export type Resource = {
  title: string
  description: string
  url: string
  source: 'Sienda Media'
  free: true
}

export const freeResources: Resource[] = [
  {
    title: 'The AI Theatre Detector',
    description: 'A practical guide to separating useful artificial intelligence from expensive theatre.',
    url: 'https://siendamedia.com/b/the-ai-theatre-detector?gi=2f4fddd30de50bb4c51e84b661635e071c1fa0db',
    source: 'Sienda Media',
    free: true
  },
  {
    title: "When the Problem Isn't Where It Appears",
    description: 'A practical framework for diagnosing the real problem before choosing the solution.',
    url: 'https://siendamedia.com/b/wfEho',
    source: 'Sienda Media',
    free: true
  },
  {
    title: 'AI Myth-Buster',
    description: 'A practical field guide to what artificial intelligence can do, what it cannot do and where the hype gets in the way.',
    url: 'https://siendamedia.com/',
    source: 'Sienda Media',
    free: true
  }
]

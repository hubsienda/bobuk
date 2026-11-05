import { promises as fs } from 'node:fs'
import type { Dirent } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type WritingType = 'article' | 'essay' | 'fiction' | 'extract'

export type WritingItem = {
  slug: string
  title: string
  subtitle?: string
  description: string
  seoDescription?: string
  date: string
  updated?: string
  type: WritingType
  tags: string[]
  featured: boolean
  draft: boolean
  readingMinutes: number
  chapter?: string
  image?: string
  imageAlt?: string
  series?: string
  canonical?: string
  bookTitle?: string
  searchText: string
}

export type WritingTag = {
  name: string
  slug: string
  count: number
}

const contentRoot = path.join(process.cwd(), 'src', 'content')
const supportedTypes = new Set<WritingType>(['article', 'essay', 'fiction', 'extract'])

const tagAliases: Record<string, string> = {
  ai: 'Artificial Intelligence',
  'artificial intelligence': 'Artificial Intelligence',
  saas: 'SaaS'
}

async function listMdxFiles(directory: string): Promise<string[]> {
  let entries: Dirent[]
  try {
    entries = await fs.readdir(directory, { withFileTypes: true })
  } catch {
    return []
  }

  const files = await Promise.all(
    entries.map(async entry => {
      const fullPath = path.join(directory, entry.name)
      if (entry.isDirectory()) return listMdxFiles(fullPath)
      if (entry.isFile() && entry.name.endsWith('.mdx')) return [fullPath]
      return []
    })
  )

  return files.flat()
}

function cleanMdxText(body: string) {
  return body
    .replace(/^\s*(import|export)\s.+$/gm, ' ')
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~{}|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function wordsToReadingMinutes(body: string) {
  const words = cleanMdxText(body).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
}

function fileToSlug(file: string) {
  const relative = path.relative(contentRoot, file).replace(/\\/g, '/')
  return relative.replace(/\.mdx$/, '').replace(/\/index$/, '')
}

function titleCase(value: string) {
  return value
    .split(/\s+/)
    .map(word => {
      if (!word) return word
      if (/^[A-Z0-9]{2,}$/.test(word)) return word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}

export function normaliseTagName(value: string) {
  const trimmed = value.trim().replace(/\s+/g, ' ')
  if (!trimmed) return ''
  const alias = tagAliases[trimmed.toLowerCase()]
  return alias || titleCase(trimmed)
}

export function tagToSlug(value: string) {
  return normaliseTagName(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function normaliseTags(values: unknown) {
  if (!Array.isArray(values)) return []
  const seen = new Set<string>()
  const tags: string[] = []

  for (const value of values) {
    const name = normaliseTagName(String(value))
    const slug = tagToSlug(name)
    if (!name || !slug || seen.has(slug)) continue
    seen.add(slug)
    tags.push(name)
  }

  return tags
}

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

export function isWritingPublic(item: Pick<WritingItem, 'draft' | 'date'>) {
  return !item.draft && Boolean(item.date) && item.date <= todayKey()
}

async function readWritingFile(file: string): Promise<WritingItem> {
  const raw = await fs.readFile(file, 'utf8')
  const { data, content } = matter(raw)
  const rawType = String(data.type ?? '')
  const type = supportedTypes.has(rawType as WritingType) ? (rawType as WritingType) : 'essay'
  const title = String(data.title ?? '')
  const description = String(data.description ?? '')
  const tags = normaliseTags(data.tags)
  const bodyText = cleanMdxText(content)

  return {
    slug: fileToSlug(file),
    title,
    subtitle: data.subtitle ? String(data.subtitle) : undefined,
    description,
    seoDescription: data.seoDescription ? String(data.seoDescription) : undefined,
    date: String(data.date ?? ''),
    updated: data.updated ? String(data.updated) : undefined,
    type,
    tags,
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    readingMinutes: wordsToReadingMinutes(content),
    chapter: data.chapter ? String(data.chapter) : undefined,
    image: data.image ? String(data.image) : undefined,
    imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
    series: data.series ? String(data.series) : undefined,
    canonical: data.canonical ? String(data.canonical) : undefined,
    bookTitle: data.bookTitle ? String(data.bookTitle) : undefined,
    searchText: [title, description, data.subtitle, tags.join(' '), bodyText]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
  }
}

export async function getAllWriting(options?: { includeDrafts?: boolean; includeFuture?: boolean }) {
  const files = await listMdxFiles(contentRoot)
  const items = await Promise.all(files.map(readWritingFile))

  return items
    .filter(item => item.title && item.description && item.date)
    .filter(item => options?.includeDrafts || !item.draft)
    .filter(item => options?.includeFuture || item.date <= todayKey())
    .sort((a, b) => {
      const dateOrder = b.date.localeCompare(a.date)
      if (dateOrder !== 0) return dateOrder
      if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured)
      return a.slug.localeCompare(b.slug)
    })
}

export async function getWritingBySlug(slug: string) {
  const items = await getAllWriting({ includeDrafts: true, includeFuture: true })
  return items.find(item => item.slug === slug)
}

export function searchWriting(items: WritingItem[], query: string) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return items
  return items.filter(item => terms.every(term => item.searchText.includes(term)))
}

export async function getAllTags() {
  const items = await getAllWriting()
  const counts = new Map<string, WritingTag>()

  for (const item of items) {
    for (const tag of item.tags) {
      const slug = tagToSlug(tag)
      const current = counts.get(slug)
      counts.set(slug, { name: tag, slug, count: (current?.count ?? 0) + 1 })
    }
  }

  return Array.from(counts.values()).sort((a, b) => a.name.localeCompare(b.name))
}

export async function getTagBySlug(slug: string) {
  const tags = await getAllTags()
  return tags.find(tag => tag.slug === slug)
}

export async function getWritingByTag(slug: string) {
  const items = await getAllWriting()
  return items.filter(item => item.tags.some(tag => tagToSlug(tag) === slug))
}

export async function getArchiveGroups() {
  const items = await getAllWriting()
  const years = new Map<string, WritingItem[]>()

  for (const item of items) {
    const year = item.date.slice(0, 4)
    years.set(year, [...(years.get(year) ?? []), item])
  }

  return Array.from(years.entries()).sort(([a], [b]) => b.localeCompare(a))
}

export async function getRelatedWriting(item: WritingItem, limit = 3) {
  const tagSlugs = new Set(item.tags.map(tagToSlug))
  if (!tagSlugs.size) return []

  const items = await getAllWriting()
  return items
    .filter(candidate => candidate.slug !== item.slug)
    .map(candidate => ({
      candidate,
      score: candidate.tags.reduce((total, tag) => total + (tagSlugs.has(tagToSlug(tag)) ? 1 : 0), 0)
    }))
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || b.candidate.date.localeCompare(a.candidate.date))
    .slice(0, limit)
    .map(result => result.candidate)
}

export function writingTypeLabel(type: WritingType) {
  if (type === 'article') return 'Article'
  if (type === 'essay') return 'Essay'
  if (type === 'fiction') return 'Fiction'
  return 'Extract'
}

export function formatWritingDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date + 'T12:00:00Z'))
}

export function hasMeaningfulUpdate(item: Pick<WritingItem, 'date' | 'updated'>) {
  return Boolean(item.updated && item.updated > item.date)
}

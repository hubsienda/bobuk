import { promises as fs } from 'node:fs'
import type { Dirent } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type WritingType = 'essay' | 'fiction' | 'extract'

export type WritingItem = {
  slug: string
  title: string
  description: string
  date: string
  type: WritingType
  tags: string[]
  featured: boolean
  draft: boolean
  readingMinutes: number
}

const contentRoot = path.join(process.cwd(), 'src', 'content')
const supportedTypes = new Set<WritingType>(['essay', 'fiction', 'extract'])

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

function wordsToReadingMinutes(body: string) {
  const cleaned = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`\[\](){}-]/g, ' ')
  const words = cleaned.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
}

function fileToSlug(file: string) {
  const relative = path.relative(contentRoot, file).replace(/\\/g, '/')
  return relative.replace(/\.mdx$/, '').replace(/\/index$/, '')
}

export async function getAllWriting(options?: { includeDrafts?: boolean }) {
  const files = await listMdxFiles(contentRoot)
  const items = await Promise.all(
    files.map(async file => {
      const raw = await fs.readFile(file, 'utf8')
      const { data, content } = matter(raw)
      const type = supportedTypes.has(data.type) ? (data.type as WritingType) : 'essay'

      return {
        slug: fileToSlug(file),
        title: String(data.title ?? ''),
        description: String(data.description ?? ''),
        date: String(data.date ?? ''),
        type,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        featured: Boolean(data.featured),
        draft: Boolean(data.draft),
        readingMinutes: wordsToReadingMinutes(content)
      } satisfies WritingItem
    })
  )

  return items
    .filter(item => item.title && item.date)
    .filter(item => options?.includeDrafts || !item.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export async function getWritingBySlug(slug: string) {
  const items = await getAllWriting({ includeDrafts: true })
  return items.find(item => item.slug === slug)
}

export function writingTypeLabel(type: WritingType) {
  if (type === 'essay') return 'Essay'
  if (type === 'fiction') return 'Fiction'
  return 'Extract'
}

export function formatWritingDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(`${date}T12:00:00Z`))
}

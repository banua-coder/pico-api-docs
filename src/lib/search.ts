import { endpoints } from '@/data/endpoints'
import { sections } from '@/data/sections'

export interface SearchItem {
  id: string
  kind: 'section' | 'endpoint'
  /** Main text: section title or endpoint path */
  label: string
  /** Secondary text */
  hint: string
  /** Route to open */
  to: string
}

type Translate = (key: string) => string

/** Built from the same data as the sidebar and the Endpoints index. */
export function buildSearchItems(t: Translate): SearchItem[] {
  const items: SearchItem[] = sections.map((s) => ({
    id: `section:${s.slug}`,
    kind: 'section',
    label: t(`docs.pages.${s.key}.nav`),
    hint: t(`docs.groups.${s.group}`),
    to: `/docs/${s.slug}`,
  }))
  for (const e of endpoints) {
    items.push({
      id: `endpoint:${e.id}`,
      kind: 'endpoint',
      label: e.path,
      hint: t(`endpoints.${e.id}`),
      to: `/docs/${e.section}`,
    })
  }
  return items
}

const norm = (s: string) => s.toLowerCase()

/** All query words must appear in label or hint; label hits rank first. Empty query returns everything. */
export function searchItems(items: SearchItem[], query: string, limit = 40): SearchItem[] {
  const words = norm(query).split(/\s+/).filter(Boolean)
  if (!words.length) return items.slice(0, limit)
  const scored: { item: SearchItem; score: number }[] = []
  for (const item of items) {
    const label = norm(item.label)
    const hay = `${label} ${norm(item.hint)}`
    if (!words.every((w) => hay.includes(w))) continue
    let score = 0
    for (const w of words) score += label.startsWith(w) ? 3 : label.includes(w) ? 2 : 1
    scored.push({ item, score })
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.item)
}

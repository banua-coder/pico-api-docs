import { describe, it, expect } from 'vitest'
import en from '@/locales/en.json'
import { endpoints } from '@/data/endpoints'
import { sections } from '@/data/sections'
import { buildSearchItems, searchItems } from '@/lib/search'

const get = (key: string): string =>
  key.split('.').reduce<unknown>((o, k) => (o as Record<string, unknown>)?.[k], en) as string

const items = buildSearchItems(get)

describe('search index', () => {
  it('is built from every section and every endpoint', () => {
    expect(items.filter((i) => i.kind === 'section')).toHaveLength(sections.length)
    expect(items.filter((i) => i.kind === 'endpoint')).toHaveLength(endpoints.length)
  })

  it('has a translated label for every item', () => {
    for (const i of items) {
      expect(i.label, i.id).toBeTruthy()
      expect(i.hint, i.id).toBeTruthy()
    }
  })

  it('finds an endpoint by path and links to its section page', () => {
    const [first] = searchItems(items, '/national/latest')
    expect(first.label).toBe('/api/v1/national/latest')
    expect(first.to).toBe('/docs/national-latest')
  })

  it('finds a page by title and requires every word to match', () => {
    expect(searchItems(items, 'data methods')[0].to).toBe('/docs/glossary')
    expect(searchItems(items, 'zzzz nothing')).toEqual([])
  })
})

/**
 * Ordered list of documentation pages. Drives the sidebar, previous/next links,
 * routing (/docs/:section), page titles and the search palette.
 * Locale keys: docs.pages.<key>.{nav,title,description}, docs.groups.<group>.
 */
export type SectionGroup = 'start' | 'basics' | 'service' | 'national' | 'regions' | 'facilities' | 'statistics' | 'vaccination'

export interface DocSection {
  slug: string
  /** camelCase locale key */
  key: string
  group: SectionGroup
  kind: 'guide' | 'endpoint'
}

export const SECTION_GROUPS: SectionGroup[] = ['start', 'basics', 'service', 'national', 'regions', 'facilities', 'statistics', 'vaccination']

export const sections: DocSection[] = [
  { slug: 'overview', key: 'overview', group: 'start', kind: 'guide' },
  { slug: 'endpoints', key: 'endpoints', group: 'start', kind: 'guide' },
  { slug: 'glossary', key: 'glossary', group: 'start', kind: 'guide' },

  { slug: 'authentication', key: 'authentication', group: 'basics', kind: 'guide' },
  { slug: 'errors', key: 'errors', group: 'basics', kind: 'guide' },
  { slug: 'pagination', key: 'pagination', group: 'basics', kind: 'guide' },

  { slug: 'health', key: 'health', group: 'service', kind: 'endpoint' },
  { slug: 'api-index', key: 'apiIndex', group: 'service', kind: 'endpoint' },

  { slug: 'national-latest', key: 'nationalLatest', group: 'national', kind: 'endpoint' },
  { slug: 'national-historical', key: 'nationalHistorical', group: 'national', kind: 'endpoint' },

  { slug: 'provinces', key: 'provinces', group: 'regions', kind: 'endpoint' },
  { slug: 'province-cases', key: 'provinceCases', group: 'regions', kind: 'endpoint' },
  { slug: 'regencies', key: 'regencies', group: 'regions', kind: 'endpoint' },

  { slug: 'hospitals', key: 'hospitals', group: 'facilities', kind: 'endpoint' },
  { slug: 'task-forces', key: 'taskForces', group: 'facilities', kind: 'endpoint' },

  { slug: 'gender-stats', key: 'genderStats', group: 'statistics', kind: 'endpoint' },
  { slug: 'test-statistics', key: 'testStatistics', group: 'statistics', kind: 'endpoint' },
  { slug: 'test-types', key: 'testTypes', group: 'statistics', kind: 'endpoint' },

  { slug: 'vaccination-national', key: 'vaccinationNational', group: 'vaccination', kind: 'endpoint' },
  { slug: 'vaccination-province', key: 'vaccinationProvince', group: 'vaccination', kind: 'endpoint' },
  { slug: 'vaccination-locations', key: 'vaccinationLocations', group: 'vaccination', kind: 'endpoint' },
]

export const DEFAULT_SECTION = 'overview'

export const findSection = (slug: unknown): DocSection | undefined =>
  sections.find((s) => s.slug === slug)

export const isSectionSlug = (slug: unknown): slug is string => !!findSection(slug)

export const neighbours = (slug: string): { prev?: DocSection; next?: DocSection } => {
  const i = sections.findIndex((s) => s.slug === slug)
  return { prev: i > 0 ? sections[i - 1] : undefined, next: i >= 0 ? sections[i + 1] : undefined }
}

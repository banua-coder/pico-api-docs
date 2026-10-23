import { API_BASE_URL } from '@/config/api'

/**
 * Single source of truth for every endpoint the docs mention.
 * The Endpoints index, the per-section "also in this section" list, the home
 * resource ledger and the search palette are all built from this list.
 *
 * paging (verified against the live API, see PaginationSection):
 *   'page'   -> page, per_page (max 100), load_all=true
 *   'offset' -> limit (max 1000), offset, all=true
 *   null     -> not paginated
 */
export type Paging = 'page' | 'offset' | null

export interface Endpoint {
  id: string
  method: 'GET'
  /** Path from the host root, e.g. /api/v1/national/latest */
  path: string
  /** Slug of the docs section that documents it */
  section: string
  paging: Paging
  /** Resource group for the home ledger and the index */
  group: GroupId
}

export type GroupId = 'service' | 'national' | 'regions' | 'facilities' | 'statistics' | 'vaccination'

export const GROUP_IDS: GroupId[] = ['service', 'national', 'regions', 'facilities', 'statistics', 'vaccination']

export const endpoints: Endpoint[] = [
  { id: 'root', method: 'GET', path: '/', section: 'overview', paging: null, group: 'service' },
  { id: 'apiIndex', method: 'GET', path: '/api/v1', section: 'api-index', paging: null, group: 'service' },
  { id: 'health', method: 'GET', path: '/api/v1/health', section: 'health', paging: null, group: 'service' },

  { id: 'national', method: 'GET', path: '/api/v1/national', section: 'national-historical', paging: 'offset', group: 'national' },
  { id: 'nationalLatest', method: 'GET', path: '/api/v1/national/latest', section: 'national-latest', paging: null, group: 'national' },
  { id: 'nationalDay', method: 'GET', path: '/api/v1/national/{day}', section: 'national-historical', paging: null, group: 'national' },

  { id: 'provinces', method: 'GET', path: '/api/v1/provinces', section: 'provinces', paging: null, group: 'regions' },
  { id: 'provinceDetail', method: 'GET', path: '/api/v1/provinces/{code}', section: 'provinces', paging: null, group: 'regions' },
  { id: 'provincesCases', method: 'GET', path: '/api/v1/provinces/cases', section: 'province-cases', paging: 'offset', group: 'regions' },
  { id: 'provinceCases', method: 'GET', path: '/api/v1/provinces/{provinceId}/cases', section: 'province-cases', paging: 'offset', group: 'regions' },
  { id: 'regencies', method: 'GET', path: '/api/v1/regencies', section: 'regencies', paging: 'page', group: 'regions' },
  { id: 'regencyDetail', method: 'GET', path: '/api/v1/regencies/{code}', section: 'regencies', paging: null, group: 'regions' },
  { id: 'regencyCases', method: 'GET', path: '/api/v1/regencies/{code}/cases', section: 'regencies', paging: null, group: 'regions' },

  { id: 'hospitals', method: 'GET', path: '/api/v1/hospitals', section: 'hospitals', paging: 'page', group: 'facilities' },
  { id: 'hospitalDetail', method: 'GET', path: '/api/v1/hospitals/{code}', section: 'hospitals', paging: null, group: 'facilities' },
  { id: 'taskForces', method: 'GET', path: '/api/v1/task-forces', section: 'task-forces', paging: 'page', group: 'facilities' },

  { id: 'genderStats', method: 'GET', path: '/api/v1/stats/gender', section: 'gender-stats', paging: null, group: 'statistics' },
  { id: 'genderLatest', method: 'GET', path: '/api/v1/stats/gender/latest', section: 'gender-stats', paging: null, group: 'statistics' },
  { id: 'testStats', method: 'GET', path: '/api/v1/stats/tests', section: 'test-statistics', paging: null, group: 'statistics' },
  { id: 'testTypes', method: 'GET', path: '/api/v1/stats/test-types', section: 'test-types', paging: null, group: 'statistics' },

  { id: 'vaccinationNational', method: 'GET', path: '/api/v1/vaccination/national', section: 'vaccination-national', paging: 'page', group: 'vaccination' },
  { id: 'vaccinationProvince', method: 'GET', path: '/api/v1/vaccination/province', section: 'vaccination-province', paging: 'page', group: 'vaccination' },
  { id: 'vaccinationLocations', method: 'GET', path: '/api/v1/vaccination/locations', section: 'vaccination-locations', paging: 'page', group: 'vaccination' },
]

export const endpointUrl = (ep: Endpoint): string => `${API_BASE_URL}${ep.path}`

/** One real example path per resource group (home ledger). */
export const groupExamples: Record<GroupId, string> = {
  service: 'health',
  national: 'nationalLatest',
  regions: 'provincesCases',
  facilities: 'hospitals',
  statistics: 'genderLatest',
  vaccination: 'vaccinationProvince',
}

export const endpointsOfSection = (slug: string): Endpoint[] => endpoints.filter((e) => e.section === slug)

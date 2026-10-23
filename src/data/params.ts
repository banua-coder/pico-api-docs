/**
 * Query parameters the live API accepts, verified with curl against
 * https://pico-api.banuacoder.com/api/v1. Locale keys: docs.params.<key>.
 * This is the one definition of pagination: PaginationSection, every
 * ParamsTable and the examples read from here.
 */
export interface ParamDef {
  name: string
  type: string
  /** Where it goes: query string (default) or path segment */
  in?: 'query' | 'path'
  required?: boolean
  deprecated?: boolean
  /** Locale key under docs.params */
  key: string
  default?: string
}

export const PAGE_PARAMS: ParamDef[] = [
  { name: 'page', type: 'integer', key: 'page', default: '1' },
  { name: 'per_page', type: 'integer', key: 'perPage', default: '10' },
  { name: 'load_all', type: 'boolean', key: 'loadAll', default: 'false' },
]

export const OFFSET_PARAMS: ParamDef[] = [
  { name: 'limit', type: 'integer', key: 'limit', default: '50' },
  { name: 'offset', type: 'integer', key: 'offset', default: '0' },
  { name: 'all', type: 'boolean', key: 'all', default: 'false' },
]

export const DATE_PARAMS: ParamDef[] = [
  { name: 'start_date', type: 'string', key: 'startDate' },
  { name: 'end_date', type: 'string', key: 'endDate' },
]

export const SORT_PARAM: ParamDef = { name: 'sort', type: 'string', key: 'sort', default: 'date:asc' }

export const pathParam = (name: string, key: string, type = 'integer'): ParamDef => ({
  name, type, key, in: 'path', required: true,
})

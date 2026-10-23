import { API_V1_URL } from '@/config/api'
import * as r from '@/data/responses'
import { DATE_PARAMS, OFFSET_PARAMS, PAGE_PARAMS, SORT_PARAM, pathParam, type ParamDef } from '@/data/params'

/** Per-page content for endpoint sections: params, a runnable cURL and an example body. */
export interface EndpointDoc {
  /** Endpoint id from endpoints.ts shown on the endpoint line */
  primary: string
  params: ParamDef[]
  curl: string
  response: string
}

const c = (path: string, query = '') => `curl "${API_V1_URL}${path}${query}"`

export const sectionDocs: Record<string, EndpointDoc> = {
  health: { primary: 'health', params: [], curl: c('/health'), response: r.healthResponse },
  'api-index': { primary: 'apiIndex', params: [], curl: c(''), response: r.apiIndexResponse },

  'national-latest': { primary: 'nationalLatest', params: [], curl: c('/national/latest'), response: r.nationalLatestResponse },
  'national-historical': {
    primary: 'national',
    params: [...OFFSET_PARAMS, ...DATE_PARAMS, SORT_PARAM],
    curl: c('/national', '?limit=10&sort=date:desc'),
    response: r.nationalHistoricalResponse,
  },

  provinces: {
    primary: 'provinces',
    params: [{ name: 'exclude_latest_case', type: 'boolean', key: 'excludeLatestCase', default: 'false' }],
    curl: c('/provinces', '?exclude_latest_case=true'),
    response: r.provincesResponse,
  },
  'province-cases': {
    primary: 'provinceCases',
    params: [pathParam('provinceId', 'provinceId', 'string'), ...OFFSET_PARAMS, ...DATE_PARAMS],
    curl: c('/provinces/72/cases', '?limit=1'),
    response: r.provinceCasesResponse,
  },
  regencies: { primary: 'regencies', params: PAGE_PARAMS, curl: c('/regencies', '?per_page=5'), response: r.regenciesResponse },

  hospitals: { primary: 'hospitals', params: PAGE_PARAMS, curl: c('/hospitals', '?per_page=5'), response: r.hospitalsResponse },
  'task-forces': { primary: 'taskForces', params: PAGE_PARAMS, curl: c('/task-forces', '?per_page=5'), response: r.taskForcesResponse },

  'gender-stats': { primary: 'genderStats', params: [], curl: c('/stats/gender'), response: r.genderStatsResponse },
  'test-statistics': { primary: 'testStats', params: [], curl: c('/stats/tests'), response: r.testStatsResponse },
  'test-types': { primary: 'testTypes', params: [], curl: c('/stats/test-types'), response: r.testTypesResponse },

  'vaccination-national': { primary: 'vaccinationNational', params: PAGE_PARAMS, curl: c('/vaccination/national', '?per_page=5'), response: r.vaccinationNationalResponse },
  'vaccination-province': { primary: 'vaccinationProvince', params: PAGE_PARAMS, curl: c('/vaccination/province', '?per_page=5'), response: r.vaccinationProvinceResponse },
  'vaccination-locations': { primary: 'vaccinationLocations', params: PAGE_PARAMS, curl: c('/vaccination/locations', '?per_page=5'), response: r.vaccinationLocationsResponse },
}

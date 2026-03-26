<template>
  <div class="min-h-screen bg-white dark:bg-gray-950">
    <!-- Top nav -->
    <Navigation />

    <div class="flex pt-14">
      <!-- Sidebar -->
      <DocSidebar
        :active-section="activeSection"
        :open="sidebarOpen"
        @update:active-section="activeSection = $event"
        @close="sidebarOpen = false"
      />

      <!-- Mobile sidebar toggle -->
      <button
        @click="sidebarOpen = true"
        class="lg:hidden fixed bottom-4 right-4 z-50 p-3 bg-[#635bff] text-white rounded-full shadow-lg"
        aria-label="Open navigation"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Main content -->
      <main class="flex-1 lg:ml-[260px] min-w-0">
        <!-- Introduction sections (full-width, prose style) -->
        <div class="max-w-3xl px-6 py-10 space-y-16">
          <!-- Overview -->
          <section id="overview">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ t('documentation.overview.title') }}</h1>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ t('documentation.overview.description') }}</p>
            <div class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm mb-4">
              <span class="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase mr-2">Base URL</span>
              <code class="font-mono text-gray-800 dark:text-gray-200">{{ API_BASE_URL }}</code>
            </div>
            <!-- Attribution notice -->
            <div class="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg text-sm">
              <svg class="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <div>
                <p class="font-semibold text-amber-800 dark:text-amber-400 mb-1">{{ t('documentation.overview.attribution.title') }}</p>
                <p class="text-amber-700 dark:text-amber-300">{{ t('documentation.overview.attribution.description') }}</p>
              </div>
            </div>
          </section>

          <!-- Authentication -->
          <section id="authentication">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('docs.authentication.title') }}</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ t('docs.authentication.description') }}</p>
            <div class="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm">
              <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span class="text-blue-800 dark:text-blue-300">{{ t('docs.authentication.noKeyNote') }}</span>
            </div>
          </section>

          <!-- Errors -->
          <section id="errors">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('docs.errors.title') }}</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ t('docs.errors.description', { field: 'message' }) }}</p>
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <table class="params-table">
                <thead>
                  <tr>
                    <th>{{ t('docs.errors.codeHeader') }}</th>
                    <th>{{ t('docs.errors.meaningHeader') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="err in errorCodes" :key="err.code">
                    <td><code class="text-xs font-mono text-gray-700 dark:text-gray-300">{{ err.code }}</code></td>
                    <td class="text-xs text-gray-600 dark:text-gray-400">{{ t(`docs.errors.codes.${err.code}`) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Pagination -->
          <section id="pagination">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('docs.paginationSection.title') }}</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ t('docs.paginationSection.description', { page: 'page', perPage: 'per_page', loadAll: 'load_all' }) }}</p>
            <div class="code-panel">
              <pre><code>{{ paginationExample }}</code></pre>
            </div>
          </section>
        </div>

        <!-- API endpoint sections -->
        <div class="border-t border-gray-200 dark:border-gray-800">

          <!-- National Latest -->
          <ApiSection section-id="national-latest" method="GET" :endpoint="`${API_V1_URL}/national/latest`" :description="t('docs.sections.nationalLatest.description')">
            <template #left>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('docs.sections.nationalLatest.leftText') }}</p>
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: nationalLatestResponse, [t('docs.common.curl')]: `curl -X GET &quot;${API_V1_URL}/national/latest&quot; \\\n  -H &quot;Accept: application/json&quot;` }" />
            </template>
          </ApiSection>

          <!-- National Historical -->
          <ApiSection section-id="national-historical" method="GET" :endpoint="`${API_V1_URL}/national`" :description="t('docs.sections.nationalHistorical.description')">
            <template #left>
              <ParamsTable :params="nationalParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: nationalHistoricalResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/national?page=1&per_page=10&quot;` }" />
            </template>
          </ApiSection>

          <!-- Provinces -->
          <ApiSection section-id="provinces" method="GET" :endpoint="`${API_V1_URL}/provinces`" :description="t('docs.sections.provinces.description')">
            <template #left>
              <ParamsTable :params="provincesParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: provincesResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/provinces&quot;` }" />
            </template>
          </ApiSection>

          <!-- Province Cases -->
          <ApiSection section-id="province-cases" method="GET" :endpoint="`${API_V1_URL}/province-cases`" :description="t('docs.sections.provinceCases.description')">
            <template #left>
              <ParamsTable :params="nationalParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: provinceCasesResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/province-cases?page=1&per_page=10&quot;` }" />
            </template>
          </ApiSection>

          <!-- Regencies -->
          <ApiSection section-id="regencies" method="GET" :endpoint="`${API_V1_URL}/regencies`" :description="t('docs.sections.regencies.description')">
            <template #left>
              <ParamsTable :params="paginationParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: regenciesResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/regencies&quot;` }" />
            </template>
          </ApiSection>

          <!-- Hospitals -->
          <ApiSection section-id="hospitals" method="GET" :endpoint="`${API_V1_URL}/hospitals`" :description="t('docs.sections.hospitals.description')">
            <template #left>
              <ParamsTable :params="paginationParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: hospitalsResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/hospitals&quot;` }" />
            </template>
          </ApiSection>

          <!-- Task Forces -->
          <ApiSection section-id="task-forces" method="GET" :endpoint="`${API_V1_URL}/task-forces`" :description="t('docs.sections.taskForces.description')">
            <template #left>
              <ParamsTable :params="paginationParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: taskForcesResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/task-forces&quot;` }" />
            </template>
          </ApiSection>

          <!-- Gender Stats -->
          <ApiSection section-id="gender-stats" method="GET" :endpoint="`${API_V1_URL}/stats/gender`" :description="t('docs.sections.genderStats.description')">
            <template #left>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('docs.sections.genderStats.leftText') }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 italic mt-2">No query parameters.</p>
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: genderStatsResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/stats/gender&quot;` }" />
            </template>
          </ApiSection>

          <!-- Test Statistics -->
          <ApiSection section-id="test-statistics" method="GET" :endpoint="`${API_V1_URL}/stats/tests`" :description="t('docs.sections.testStats.description')">
            <template #left>
              <p class="text-sm text-gray-500 dark:text-gray-400 italic">No query parameters.</p>
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: testStatsResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/stats/tests&quot;` }" />
            </template>
          </ApiSection>

          <!-- Test Types -->
          <ApiSection section-id="test-types" method="GET" :endpoint="`${API_V1_URL}/stats/test-types`" :description="t('docs.sections.testTypes.description')">
            <template #left>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('docs.sections.testTypes.leftText') }}</p>
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: testTypesResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/stats/test-types&quot;` }" />
            </template>
          </ApiSection>

          <!-- Vaccination National -->
          <ApiSection section-id="vaccination-national" method="GET" :endpoint="`${API_V1_URL}/vaccination/national`" :description="t('docs.sections.vaccinationNational.description')">
            <template #left>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ t('docs.sections.vaccinationNational.leftText') }}</p>
              <ParamsTable :params="paginationParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: vaccinationNationalResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/vaccination/national?page=1&per_page=10&quot;` }" />
            </template>
          </ApiSection>

          <!-- Vaccination Province -->
          <ApiSection section-id="vaccination-province" method="GET" :endpoint="`${API_V1_URL}/vaccination/province`" :description="t('docs.sections.vaccinationProvince.description')">
            <template #left>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('docs.sections.vaccinationProvince.leftText') }}</p>
              <ParamsTable :params="vaccinationProvinceParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: vaccinationProvinceResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/vaccination/province?page=1&per_page=10&quot;` }" />
            </template>
          </ApiSection>

          <!-- Vaccination Locations -->
          <ApiSection section-id="vaccination-locations" method="GET" :endpoint="`${API_V1_URL}/vaccination/locations`" :description="t('docs.sections.vaccinationLocations.description')">
            <template #left>
              <ParamsTable :params="paginationParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: vaccinationLocationsResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/vaccination/locations?load_all=true&quot;` }" />
            </template>
          </ApiSection>

          <!-- Glossary -->
          <GlossarySection :is-active="true" />

        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Navigation from '@/components/Navigation.vue'
import DocSidebar from '@/components/DocSidebar.vue'
import ApiSection from '@/components/ApiSection.vue'
import CodePanel from '@/components/CodePanel.vue'
import ParamsTable from '@/components/ParamsTable.vue'
import GlossarySection from '@/components/documentation/GlossarySection.vue'
import type { Param } from '@/components/ParamsTable.vue'
import { API_BASE_URL, API_V1_URL } from '@/config/api'

const { t } = useI18n()
const activeSection = ref('overview')
const sidebarOpen = ref(false)

// --- Scroll spy via IntersectionObserver ---
const sectionIds = [
  'overview', 'authentication', 'errors', 'pagination',
  'national-latest', 'national-historical',
  'provinces', 'province-cases', 'regencies',
  'hospitals', 'task-forces',
  'gender-stats', 'test-statistics', 'test-types',
  'vaccination-national', 'vaccination-province', 'vaccination-locations',
  'glossary',
]

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      // Pick the topmost visible section
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible.length > 0) {
        activeSection.value = visible[0].target.id
      }
    },
    { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
  )
  sectionIds.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer!.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

const errorCodes = [
  { code: '200' },
  { code: '400' },
  { code: '404' },
  { code: '500' },
]

const paginationParams = computed<Param[]>(() => [
  { name: 'page', type: 'integer', required: false, description: t('docs.params.page.description'), default: t('docs.params.page.default') },
  { name: 'per_page', type: 'integer', required: false, description: t('docs.params.perPage.description'), default: t('docs.params.perPage.default') },
  { name: 'load_all', type: 'boolean', required: false, description: t('docs.params.loadAll.description'), default: t('docs.params.loadAll.default') },
])

const nationalParams = computed<Param[]>(() => [
  { name: 'limit', type: 'integer', required: false, description: t('docs.params.limit.description'), default: '50' },
  { name: 'offset', type: 'integer', required: false, description: t('docs.params.offset.description'), default: '0' },
  { name: 'page', type: 'integer', required: false, description: t('docs.params.page.description'), default: t('docs.params.page.default') },
  { name: 'all', type: 'boolean', required: false, description: t('docs.params.all.description'), default: 'false' },
  { name: 'start_date', type: 'string', required: false, description: t('docs.params.startDate.description'), default: '' },
  { name: 'end_date', type: 'string', required: false, description: t('docs.params.endDate.description'), default: '' },
  { name: 'sort', type: 'string', required: false, description: t('docs.params.sort.description'), default: 'date:desc' },
])

const provincesParams = computed<Param[]>(() => [
  { name: 'exclude_latest_case', type: 'boolean', required: false, description: t('docs.params.excludeLatestCase.description'), default: 'false' },
])

const vaccinationProvinceParams = computed<Param[]>(() => [
  { name: 'page', type: 'integer', required: false, description: t('docs.params.page.description'), default: t('docs.params.page.default') },
  { name: 'per_page', type: 'integer', required: false, description: t('docs.params.perPage.description'), default: t('docs.params.perPage.default') },
  { name: 'load_all', type: 'boolean', required: false, description: t('docs.params.loadAll.description'), default: t('docs.params.loadAll.default') },
  { name: 'province_id', type: 'integer', required: false, description: t('docs.params.provinceId.description'), default: '' },
])

const paginationExample = `curl "${API_V1_URL}/provinces?page=2&per_page=5" \\
  -H "Accept: application/json"`

// --- Response examples ---

const nationalLatestResponse = `{
  "status": "success",
  "data": {
    "day": 883,
    "date": "2022-12-18T16:37:54+07:00",
    "daily": {
      "positive": 860,
      "recovered": 2035,
      "deceased": 14,
      "active": -1189
    },
    "cumulative": {
      "positive": 6295729,
      "recovered": 6126860,
      "deceased": 157730,
      "active": 11139
    },
    "statistics": {
      "percentages": {
        "active": 0.177,
        "recovered": 97.318,
        "deceased": 2.505
      },
      "reproduction_rate": {
        "value": null,
        "upper_bound": null,
        "lower_bound": null
      }
    }
  }
}`

const nationalHistoricalResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "day": 1,
        "date": "2020-03-02T00:00:00+07:00",
        "daily": {
          "positive": 2,
          "recovered": 0,
          "deceased": 0,
          "active": 2
        },
        "cumulative": {
          "positive": 2,
          "recovered": 0,
          "deceased": 0,
          "active": 2
        },
        "statistics": {
          "percentages": {
            "active": 100,
            "recovered": 0,
            "deceased": 0
          },
          "reproduction_rate": {
            "value": null,
            "upper_bound": null,
            "lower_bound": null
          }
        }
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 883,
      "total_pages": 89,
      "has_next": true,
      "has_prev": false
    }
  }
}`

const provincesResponse = `{
  "status": "success",
  "data": [
    {
      "id": "11",
      "name": "Aceh",
      "latest_case": {
        "day": 538,
        "date": "2021-08-21T18:17:00+07:00",
        "daily": {
          "positive": 382,
          "recovered": 255,
          "deceased": 29,
          "active": 98
        },
        "cumulative": {
          "positive": 29742,
          "recovered": 22261,
          "deceased": 1275,
          "active": 6206
        }
      }
    }
  ]
}`

const provinceCasesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "day": 729,
        "date": "2022-02-27T18:11:00+07:00",
        "daily": {
          "positive": 1,
          "recovered": 463,
          "deceased": 3,
          "active": -465
        },
        "cumulative": {
          "positive": 101028,
          "recovered": 88841,
          "deceased": 1852,
          "active": 10335
        },
        "statistics": {
          "percentages": {
            "active": 10.23,
            "recovered": 87.94,
            "deceased": 1.83
          }
        }
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 729,
      "total_pages": 73,
      "has_next": true,
      "has_prev": false
    }
  }
}`

const regenciesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 7202,
        "province_id": 72,
        "name": "Banggai",
        "created_at": "2021-07-12T16:35:40+07:00",
        "updated_at": "2021-07-12T16:35:40+07:00"
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 13,
      "total_pages": 2,
      "has_next": true,
      "has_prev": false
    }
  }
}`

const hospitalsResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 19,
        "regency_id": 7271,
        "name": "RS Tk.III 14.06.01 Dr. Sindhu Trisno",
        "hospital_code": "7271025",
        "address": "Jl. Sisingamangaraja No.4, Palu",
        "latitude": -0.8959781,
        "longitude": 119.8874783,
        "contacts": [
          {
            "id": 132,
            "contact_type_id": 2,
            "contact_type_name": "Telepon",
            "contact_type_icon": "fas fa-phone",
            "contact": "081213756763"
          }
        ]
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 32,
      "total_pages": 4,
      "has_next": true,
      "has_prev": false
    }
  }
}`

const taskForcesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "regency_id": 7202,
        "regency_name": "Banggai",
        "task_forces": [
          {
            "id": 1,
            "regency_id": 7202,
            "name": "dr. Anang (Kepala Dinkes Banggai)",
            "contacts": [
              {
                "id": 31,
                "contact_type_id": 2,
                "contact_type_name": "Telepon",
                "contact_type_icon": "fas fa-phone",
                "contact": "081241415651"
              }
            ]
          }
        ]
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 13,
      "total_pages": 2,
      "has_next": true,
      "has_prev": false
    }
  }
}`

const genderStatsResponse = `{
  "status": "success",
  "data": {
    "id": 810,
    "day": 799,
    "province_id": 72,
    "positive": {
      "male": {
        "total": 10199,
        "age_groups": {
          "0_14": 263,
          "15_19": 898,
          "20_24": 2888,
          "25_49": 3180,
          "50_54": 1978,
          "55_plus": 991
        }
      },
      "female": {
        "total": 12585,
        "age_groups": {
          "0_14": 324,
          "15_19": 1107,
          "20_24": 3564,
          "25_49": 3924,
          "50_54": 2441,
          "55_plus": 1223
        }
      }
    },
    "recovered": {
      "male": { "total": 8921, "age_groups": { "0_14": 230, "15_19": 780, "20_24": 2510, "25_49": 2780, "50_54": 1720, "55_plus": 901 } },
      "female": { "total": 11002, "age_groups": { "0_14": 290, "15_19": 970, "20_24": 3120, "25_49": 3430, "50_54": 2130, "55_plus": 1062 } }
    },
    "deceased": {
      "male": { "total": 987, "age_groups": { "0_14": 12, "15_19": 45, "20_24": 123, "25_49": 298, "50_54": 301, "55_plus": 208 } },
      "female": { "total": 865, "age_groups": { "0_14": 10, "15_19": 38, "20_24": 107, "25_49": 261, "50_54": 263, "55_plus": 186 } }
    }
  }
}`

const testStatsResponse = `{
  "status": "success",
  "data": [
    {
      "id": 1,
      "test_type_id": 1,
      "day": 1,
      "province_id": 72,
      "date_from": "2020-03-03T00:00:00+07:00",
      "process": 0,
      "invalid": 0,
      "positive": 0,
      "negative": 0,
      "test_type": {
        "id": 1,
        "key": "pcr",
        "name": "Polymerase Chain Reaction",
        "sample": "Spesimen saluran pernapasan (swab hidung, tenggorokan, dahak, dsb), tinja",
        "duration": "Tergantung banyak antrian sampel",
        "is_recommended": true
      }
    }
  ]
}`

const testTypesResponse = `{
  "status": "success",
  "data": [
    {
      "id": 1,
      "key": "pcr",
      "name": "Polymerase Chain Reaction",
      "sample": "Spesimen saluran pernapasan (swab hidung, tenggorokan, dahak, dsb), tinja",
      "duration": "Tergantung banyak antrian sampel",
      "is_recommended": true
    },
    {
      "id": 2,
      "key": "rdt",
      "name": "Rapid Diagnostic Test",
      "sample": "Tergantung tes (Antibodi atau Antigen)",
      "duration": "Tergantung tes (Antibodi atau Antigen)",
      "is_recommended": false
    }
  ]
}`

const vaccinationNationalResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "day": 1,
        "date": "2021-02-01T18:21:00+07:00",
        "target": 208265720,
        "total": {
          "daily": { "dose_1": 0, "dose_2": 0 },
          "cumulative": { "dose_1": 0, "dose_2": 0 },
          "coverage": { "dose_1": 0, "dose_2": 0 }
        },
        "groups": {
          "elderly": {
            "target": 21553118,
            "daily": { "dose_1": 0, "dose_2": 0 },
            "cumulative": { "dose_1": 0, "dose_2": 0 },
            "coverage": { "dose_1": 0, "dose_2": 0 }
          },
          "health_worker": {
            "target": 1468764,
            "daily": { "dose_1": 0, "dose_2": 0 },
            "cumulative": { "dose_1": 0, "dose_2": 0 },
            "coverage": { "dose_1": 0, "dose_2": 0 }
          },
          "public": {
            "target": 0,
            "daily": { "dose_1": 0, "dose_2": 0 },
            "cumulative": { "dose_1": 0, "dose_2": 0 },
            "coverage": { "dose_1": 0, "dose_2": 0 }
          },
          "public_officer": {
            "target": 17327167,
            "daily": { "dose_1": 0, "dose_2": 0 },
            "cumulative": { "dose_1": 0, "dose_2": 0 },
            "coverage": { "dose_1": 0, "dose_2": 0 }
          },
          "teenager": {
            "target": 0,
            "daily": { "dose_1": 0, "dose_2": 0 },
            "cumulative": { "dose_1": 0, "dose_2": 0 },
            "coverage": { "dose_1": 0, "dose_2": 0 }
          }
        }
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 418,
      "total_pages": 42,
      "has_next": true,
      "has_prev": false
    }
  }
}`

const vaccinationProvinceResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "day": 93,
        "date": "2021-05-04T00:00:00+07:00",
        "province_id": 72,
        "target": 2240548,
        "total": {
          "daily": { "dose_1": 473, "dose_2": 1535 },
          "cumulative": { "dose_1": 81885, "dose_2": 61974 },
          "coverage": { "dose_1": 3.65, "dose_2": 2.77 }
        },
        "groups": {
          "elderly": {
            "target": 25292,
            "daily": { "dose_1": 37, "dose_2": 295 },
            "cumulative": { "dose_1": 4210, "dose_2": 3180 },
            "coverage": { "dose_1": 16.65, "dose_2": 12.57 }
          },
          "health_worker": {
            "target": 24698,
            "daily": { "dose_1": 12, "dose_2": 85 },
            "cumulative": { "dose_1": 22140, "dose_2": 19870 },
            "coverage": { "dose_1": 89.64, "dose_2": 80.45 }
          }
        }
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 365,
      "total_pages": 37,
      "has_next": true,
      "has_prev": false
    }
  }
}`

const vaccinationLocationsResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "regency_id": 7271,
        "name": "Gerai Vaksinasi Presisi Mapolda",
        "address": "Jl. Soekarno-Hatta, Palu",
        "operational_time": "08:00 - 12:00",
        "is_first_vaccination": false,
        "is_second_vaccination": false,
        "daily_vaccination_quota": null,
        "vaccination_stock_remaining": null,
        "notes": null
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 36,
      "total_pages": 4,
      "has_next": true,
      "has_prev": false
    }
  }
}`

// Glossary data

</script>

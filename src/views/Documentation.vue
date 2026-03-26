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
            <div class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm">
              <span class="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase mr-2">Base URL</span>
              <code class="font-mono text-gray-800 dark:text-gray-200">{{ API_BASE_URL }}</code>
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
              <ParamsTable :params="paginationParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: nationalHistoricalResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/national?page=1&per_page=10&quot;` }" />
            </template>
          </ApiSection>

          <!-- Provinces -->
          <ApiSection section-id="provinces" method="GET" :endpoint="`${API_V1_URL}/provinces`" :description="t('docs.sections.provinces.description')">
            <template #left>
              <ParamsTable :params="paginationParams" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: provincesResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/provinces&quot;` }" />
            </template>
          </ApiSection>

          <!-- Province Cases -->
          <ApiSection section-id="province-cases" method="GET" :endpoint="`${API_V1_URL}/province-cases`" :description="t('docs.sections.provinceCases.description')">
            <template #left>
              <ParamsTable :params="paginationParams" />
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
              <ParamsTable :params="paginationParams" :title="t('docs.table.parameters')" />
            </template>
            <template #right>
              <CodePanel :code-map="{ [t('docs.common.response')]: genderStatsResponse, [t('docs.common.curl')]: `curl &quot;${API_V1_URL}/stats/gender&quot;` }" />
            </template>
          </ApiSection>

          <!-- Test Statistics -->
          <ApiSection section-id="test-statistics" method="GET" :endpoint="`${API_V1_URL}/stats/tests`" :description="t('docs.sections.testStats.description')">
            <template #left>
              <ParamsTable :params="paginationParams" />
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
              <ParamsTable :params="paginationParams" />
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
          <div id="glossary" class="border-b border-gray-200 dark:border-gray-800">
            <!-- Section header -->
            <div class="px-6 py-6 border-b border-gray-200 dark:border-gray-800">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('documentation.glossary.title') }}</h2>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.subtitle') }}</p>
            </div>

            <!-- Two-column layout -->
            <div class="api-section-grid">
              <!-- Left column: glossary content -->
              <div class="px-6 py-6 border-r border-gray-200 dark:border-gray-800 space-y-8">

                <!-- Reproduction Rate -->
                <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold">Rt</span>
                    {{ t('documentation.glossary.reproductionRate.title') }}
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('documentation.glossary.reproductionRate.definitionText') }}</p>
                  <div class="space-y-1.5 text-sm">
                    <div class="flex items-center gap-2 px-3 py-2 rounded border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                      <span class="font-mono font-bold text-red-600 dark:text-red-400 shrink-0">Rt &gt; 1</span>
                      <span class="text-gray-700 dark:text-gray-300">{{ t('documentation.glossary.reproductionRate.growing') }}</span>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-2 rounded border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
                      <span class="font-mono font-bold text-yellow-600 dark:text-yellow-400 shrink-0">Rt = 1</span>
                      <span class="text-gray-700 dark:text-gray-300">{{ t('documentation.glossary.reproductionRate.stable') }}</span>
                    </div>
                    <div class="flex items-center gap-2 px-3 py-2 rounded border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                      <span class="font-mono font-bold text-green-600 dark:text-green-400 shrink-0">Rt &lt; 1</span>
                      <span class="text-gray-700 dark:text-gray-300">{{ t('documentation.glossary.reproductionRate.declining') }}</span>
                    </div>
                  </div>
                </div>

                <!-- Case Classifications -->
                <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-3">{{ t('documentation.glossary.caseClassifications.title') }}</h3>
                  <div class="grid grid-cols-2 gap-2">
                    <div v-for="cls in caseClassList" :key="cls.key" class="p-3 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                      <div class="flex items-center gap-2 mb-1">
                        <span :class="cls.dot" class="w-2 h-2 rounded-full shrink-0"></span>
                        <span class="text-sm font-medium text-gray-900 dark:text-white">{{ t(`documentation.glossary.caseClassifications.${cls.key}.title`) }}</span>
                      </div>
                      <p class="text-xs text-gray-500 dark:text-gray-400">{{ t(`documentation.glossary.caseClassifications.${cls.key}.description`) }}</p>
                    </div>
                  </div>
                </div>

                <!-- Data Types -->
                <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-3">{{ t('documentation.glossary.dataTypes.title') }}</h3>
                  <div class="space-y-2">
                    <div v-for="dt in dataTypeList" :key="dt.key" class="p-3 rounded border border-gray-200 dark:border-gray-700">
                      <span class="text-sm font-medium text-gray-900 dark:text-white">{{ t(`documentation.glossary.dataTypes.${dt.key}.title`) }}</span>
                      <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ t(`documentation.glossary.dataTypes.${dt.key}.description`) }}</p>
                    </div>
                  </div>
                </div>

                <!-- Indonesian Terminology -->
                <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-1">{{ t('documentation.glossary.indonesianTerminology.title') }}</h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">{{ t('documentation.glossary.indonesianTerminology.subtitle') }}</p>
                  <div class="space-y-4">
                    <div>
                      <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{{ t('documentation.glossary.indonesianTerminology.currentTerms') }}</p>
                      <div class="space-y-1.5">
                        <div v-for="term in currentTermsList" :key="term" class="flex items-start gap-3 px-3 py-2 rounded border border-gray-200 dark:border-gray-700 text-sm">
                          <code class="font-mono text-[#635bff] dark:text-[#7b74ff] shrink-0 text-xs">{{ t(`documentation.glossary.indonesianTerminology.${term}.name`) }}</code>
                          <span class="text-gray-600 dark:text-gray-400 text-xs">{{ t(`documentation.glossary.indonesianTerminology.${term}.translation`) }}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{{ t('documentation.glossary.indonesianTerminology.legacyTerms') }}</p>
                      <div class="space-y-1.5">
                        <div v-for="term in legacyTermsList" :key="term" class="flex items-start gap-3 px-3 py-2 rounded border border-gray-200 dark:border-gray-700 text-sm opacity-75">
                          <code class="font-mono text-gray-500 dark:text-gray-400 shrink-0 text-xs">{{ t(`documentation.glossary.indonesianTerminology.${term}.acronym`) }}</code>
                          <span class="text-gray-500 dark:text-gray-500 text-xs">{{ t(`documentation.glossary.indonesianTerminology.${term}.translation`) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Right column: formulas & code examples -->
              <div class="px-6 py-6 bg-gray-50 dark:bg-[#0d1b2e]">
                <CodePanel :code-map="{
                  'Rt Formula': rtFormulaCode,
                  'Active Cases': 'active = positive - recovered - deceased'
                }" />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Navigation from '@/components/Navigation.vue'
import DocSidebar from '@/components/DocSidebar.vue'
import ApiSection from '@/components/ApiSection.vue'
import CodePanel from '@/components/CodePanel.vue'
import ParamsTable from '@/components/ParamsTable.vue'
import type { Param } from '@/components/ParamsTable.vue'
import { API_BASE_URL, API_V1_URL } from '@/config/api'

const { t } = useI18n()
const activeSection = ref('overview')
const sidebarOpen = ref(false)

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

const paginationExample = `curl "${API_V1_URL}/provinces?page=2&per_page=5" \\
  -H "Accept: application/json"`

// --- Response examples ---

const nationalLatestResponse = `{
  "status": "success",
  "data": {
    "id": 365,
    "date": "2022-03-01",
    "positive": 5619727,
    "recovered": 5398060,
    "deaths": 149737,
    "active": 71930
  }
}`

const nationalHistoricalResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "date": "2020-03-02",
        "positive": 2,
        "recovered": 0,
        "deaths": 0,
        "active": 2
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

const provincesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 72,
        "key": "sulawesi_tengah",
        "name": "Sulawesi Tengah",
        "latitude": -1.4300254,
        "longitude": 121.4456179
      }
    ],
    "pagination": { "page": 1, "per_page": 10, "total": 34 }
  }
}`

const provinceCasesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "province_id": 72,
        "date": "2021-08-01",
        "positive": 12842,
        "recovered": 11045,
        "deaths": 320,
        "active": 1477
      }
    ],
    "pagination": { "page": 1, "per_page": 10, "total": 540 }
  }
}`

const regenciesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 7271,
        "province_id": 72,
        "key": "kota_palu",
        "name": "Kota Palu"
      }
    ],
    "pagination": { "page": 1, "per_page": 10, "total": 13 }
  }
}`

const hospitalsResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "regency_id": 7271,
        "name": "RSUD Undata Palu",
        "address": "Jl. R.E. Martadinata, Palu",
        "phone": "+62 451-457746",
        "type": "rujukan",
        "total_beds": 200,
        "available_beds": 45
      }
    ],
    "pagination": { "page": 1, "per_page": 10, "total": 32 }
  }
}`

const taskForcesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "regency_id": 7271,
        "name": "Satgas COVID-19 Kota Palu",
        "phone": "119 ext 9",
        "address": "Jl. Samratulangi No.1, Palu"
      }
    ],
    "pagination": { "page": 1, "per_page": 10, "total": 13 }
  }
}`

const genderStatsResponse = `{
  "status": "success",
  "data": {
    "positive": {
      "male": {
        "total": 8452,
        "age_groups": {
          "0_14": 312,
          "15_19": 445,
          "20_29": 1205,
          "30_39": 1876,
          "40_49": 1654,
          "50_59": 1432,
          "60_69": 876,
          "70_plus": 652
        }
      },
      "female": {
        "total": 7231,
        "age_groups": {
          "0_14": 298,
          "15_19": 412,
          "20_29": 1105,
          "30_39": 1654,
          "40_49": 1432,
          "50_59": 1198,
          "60_69": 765,
          "70_plus": 367
        }
      }
    },
    "pdp": {
      "male": { "total": 3210, "age_groups": { "0_14": 120, "15_19": 230, "20_29": 540 } },
      "female": { "total": 2890, "age_groups": { "0_14": 110, "15_19": 198, "20_29": 487 } }
    },
    "recovered": {
      "male": { "total": 7890, "age_groups": {} },
      "female": { "total": 6754, "age_groups": {} }
    },
    "deaths": {
      "male": { "total": 245, "age_groups": {} },
      "female": { "total": 198, "age_groups": {} }
    }
  }
}`

const testStatsResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "province_id": 72,
        "date": "2021-08-01",
        "total_specimen": 1500,
        "total_positive_specimen": 50,
        "total_negative_specimen": 1450
      }
    ],
    "pagination": { "page": 1, "per_page": 10, "total": 480 }
  }
}`

const testTypesResponse = `{
  "status": "success",
  "data": [
    { "id": 1, "key": "pcr", "name": "PCR" },
    { "id": 2, "key": "antigen", "name": "Rapid Antigen" },
    { "id": 3, "key": "antibody", "name": "Rapid Antibody" }
  ]
}`

const vaccinationNationalResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "date": "2021-01-13",
        "target": 2240548,
        "total": {
          "daily": {
            "dose_1": 473,
            "dose_2": 1535
          },
          "cumulative": {
            "dose_1": 81885,
            "dose_2": 61974
          }
        },
        "groups": {
          "health_worker": {
            "target": 24698,
            "daily": { "dose_1": 120, "dose_2": 340 },
            "cumulative": { "dose_1": 18540, "dose_2": 16230 }
          },
          "elderly": {
            "target": 289032,
            "daily": { "dose_1": 85, "dose_2": 210 },
            "cumulative": { "dose_1": 12340, "dose_2": 9870 }
          },
          "public_officer": {
            "target": 198450,
            "daily": { "dose_1": 98, "dose_2": 345 },
            "cumulative": { "dose_1": 15670, "dose_2": 13240 }
          },
          "public": {
            "target": 1620000,
            "daily": { "dose_1": 150, "dose_2": 590 },
            "cumulative": { "dose_1": 28900, "dose_2": 18940 }
          },
          "teenager": {
            "target": 108368,
            "daily": { "dose_1": 20, "dose_2": 50 },
            "cumulative": { "dose_1": 6435, "dose_2": 3694 }
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

const vaccinationProvinceResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "province_id": 72,
        "date": "2021-01-13",
        "target": 2240548,
        "total": {
          "daily": { "dose_1": 473, "dose_2": 1535 },
          "cumulative": { "dose_1": 81885, "dose_2": 61974 }
        },
        "groups": {
          "health_worker": {
            "target": 24698,
            "daily": { "dose_1": 120, "dose_2": 340 },
            "cumulative": { "dose_1": 18540, "dose_2": 16230 }
          },
          "elderly": {
            "target": 289032,
            "daily": { "dose_1": 85, "dose_2": 210 },
            "cumulative": { "dose_1": 12340, "dose_2": 9870 }
          }
        }
      }
    ],
    "pagination": { "page": 1, "per_page": 10, "total": 365 }
  }
}`

const vaccinationLocationsResponse = `{
  "status": "success",
  "data": [
    {
      "id": 1,
      "regency_id": 7271,
      "name": "Puskesmas Tipo",
      "address": "Jl. Basuki Rahmat, Palu",
      "operational_time": "08:00 - 16:00",
      "is_first_vaccination": true,
      "is_second_vaccination": true,
      "daily_vaccination_quota": 100,
      "vaccination_stock_remaining": 50,
      "notes": ""
    }
  ]
}`

// Glossary data
const caseClassList = [
  { key: 'positive', dot: 'bg-blue-500' },
  { key: 'active', dot: 'bg-yellow-500' },
  { key: 'recovered', dot: 'bg-green-500' },
  { key: 'deceased', dot: 'bg-gray-500' },
]

const dataTypeList = [
  { key: 'daily' },
  { key: 'cumulative' },
  { key: 'percentages' },
]

const currentTermsList = ['kasusKonfirmasi', 'kasusProbable', 'kontakErat', 'kasusSuspect']
const legacyTermsList = ['odp', 'pdp']


const rtFormulaCode = `# EpiEstim Bayesian Estimation
# 1. Total infectiousness:
λ_t = Σ(I_{t-s} × w_s)   for s=1..t-1

# 2. Where:
#   I_{t-s} = incidence at time (t-s)
#   w_s     = serial interval probability

# 3. Posterior distribution:
R_t | data ~ Gamma(a + ΣI_t, b + Σλ_t)

# 4. Point estimate:
R̂_t = (a + ΣI_t) / (b + Σλ_t)`
</script>

<template>
  <section v-show="isActive" id="province-cases" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.provinceCases.title') }}</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">{{ t('documentation.provinceCases.description') }}</p>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('documentation.provinceCases.endpoints') }}</h2>
        <p class="text-purple-100">{{ t('documentation.provinceCases.description') }}</p>
      </div>
      
      <div class="p-8">
        <div class="grid lg:grid-cols-2 gap-8 mb-8">
          <div class="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.provinceCases.endpoints') }}</h3>
            <div class="space-y-3">
              <CodeBlock 
                :code="provinceCasesEndpoint"
                language="bash"
                title="All Provinces"
              />
              <CodeBlock 
                :code="specificProvinceEndpoint"
                language="bash"
                title="Specific Province"
              />
            </div>
          </div>
          
          <div class="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.provinceCases.features') }}</h3>
            <ul class="space-y-2">
              <li v-for="(feature, index) in featuresList" :key="index" class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Parameters Table -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Parameters</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead class="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Parameter</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Type</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Description</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Required</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">limit</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Number of records per page for pagination</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">offset</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Number of records to skip</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">all</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Return all data without pagination</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">start_date</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Filter data from this date (YYYY-MM-DD)</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">end_date</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Filter data until this date (YYYY-MM-DD)</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">sort</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Sorting options (e.g., date:desc, date:asc)</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Response Fields Table -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Response Fields</h3>
          
          <!-- Province Structure Note -->
          <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4 border-l-4 border-blue-400 dark:border-blue-800">
            <div class="flex">
              <svg class="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div class="text-blue-800 dark:text-blue-400">
                <p class="font-medium">Provincial Data Structure</p>
                <p class="text-sm text-blue-700 dark:text-blue-400">Returns array of province COVID-19 data with enhanced ODP/PDP tracking. Each object includes:</p>
              </div>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead class="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Field</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Type</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Description</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">date</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Date of the case report (YYYY-MM-DD format)</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">day</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Day number since first case reported</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">province.id</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Province ID (e.g., '72' for Sulawesi Tengah)</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">province.name</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Province name</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">daily.positive</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Daily new confirmed cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">daily.recovered</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Daily new recovered cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">daily.deceased</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Daily new death cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">daily.odp.active</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Daily active ODP (Orang Dalam Pengawasan)</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">daily.odp.finished</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Daily finished ODP observations</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">daily.pdp.active</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Daily active PDP (Pasien Dalam Pengawasan)</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">daily.pdp.finished</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Daily finished PDP supervisions</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">cumulative.positive</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Total confirmed cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">cumulative.recovered</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Total recovered cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">cumulative.deceased</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Total death cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">cumulative.active</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Current active cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">cumulative.odp.total</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Total ODP cases (active + finished)</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">cumulative.pdp.total</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Total PDP cases (active + finished)</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">statistics.percentages.*</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">float</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Percentage breakdown (active, recovered, deceased)</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">statistics.reproduction_rate.*</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">object</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Reproduction rate with confidence bounds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Response Example -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Response Example</h3>
          <CodeBlock 
            :code="provinceCasesResponse"
            language="json"
            title="Province Cases Response (Array)"
          />
        </div>

        <!-- Try It Button -->
        <div class="text-center">
          <a 
            href="https://pico-api.banuacoder.com/swagger/index.html" 
            target="_blank"
            class="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            {{ t('documentation.nationalLatest.tryLiveApi') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeBlock from '@/components/CodeBlock.vue'

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t, tm } = useI18n()

const featuresList = computed(() => tm('documentation.provinceCases.featuresList') as string[])

const provinceCasesEndpoint = `curl -X GET \\
  "https://pico-api.banuacoder.com/api/v1/provinces/cases?limit=10"`

const specificProvinceEndpoint = `curl -X GET \\
  "https://pico-api.banuacoder.com/api/v1/provinces/72/cases?limit=5&start_date=2024-01-01"`

const provinceCasesResponse = `[
  {
    "date": "2024-09-07T00:00:00Z",
    "day": 1247,
    "province": {
      "id": "72",
      "name": "Sulawesi Tengah"
    },
    "daily": {
      "positive": 12,
      "recovered": 15,
      "deceased": 0,
      "active": -3,
      "odp": {
        "active": 5,
        "finished": 8
      },
      "pdp": {
        "active": 2,
        "finished": 3
      }
    },
    "cumulative": {
      "positive": 89543,
      "recovered": 87234,
      "deceased": 1876,
      "active": 433,
      "odp": {
        "active": 25,
        "finished": 1250,
        "total": 1275
      },
      "pdp": {
        "active": 8,
        "finished": 567,
        "total": 575
      }
    },
    "statistics": {
      "percentages": {
        "positive": 100.0,
        "recovered": 97.42,
        "deceased": 2.09,
        "active": 0.48
      },
      "reproduction_rate": {
        "value": 0.78,
        "lower_bound": 0.68,
        "upper_bound": 0.88
      }
    }
  },
  {
    "date": "2024-09-06T00:00:00Z",
    "day": 1246,
    "province": {
      "id": "72", 
      "name": "Sulawesi Tengah"
    },
    "daily": {
      "positive": 8,
      "recovered": 12,
      "deceased": 1,
      "active": -5,
      "odp": {
        "active": 3,
        "finished": 7
      },
      "pdp": {
        "active": 1,
        "finished": 4
      }
    },
    "cumulative": {
      "positive": 89531,
      "recovered": 87219,
      "deceased": 1876,
      "active": 436,
      "odp": {
        "active": 20,
        "finished": 1242,
        "total": 1262
      },
      "pdp": {
        "active": 6,
        "finished": 564,
        "total": 570
      }
    },
    "statistics": {
      "percentages": {
        "positive": 100.0,
        "recovered": 97.41,
        "deceased": 2.09,
        "active": 0.49
      },
      "reproduction_rate": {
        "value": 0.76,
        "lower_bound": 0.66,
        "upper_bound": 0.86
      }
    }
  }
]`
</script>

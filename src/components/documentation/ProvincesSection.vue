<template>
  <section v-show="isActive" id="provinces" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.provinces.title') }}</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">{{ t('documentation.provinces.description') }}</p>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('documentation.provinces.endpoint') }}</h2>
        <p class="text-indigo-100">{{ t('documentation.provinces.description') }}</p>
      </div>
      
      <div class="p-8">
        <!-- Parameters Table -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Parameters</h3>
          <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center text-gray-500 dark:text-gray-400">
            No parameters required
          </div>
        </div>

        <!-- Response Fields Table -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Response Fields</h3>
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
                  <td class="py-3 px-4 font-mono text-pico-deep">id</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Unique province identifier</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">name</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Province name</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">latest_case</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">object</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Latest COVID-19 case data for the province (always included)</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">coordinates</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">object</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Province geographic coordinates (lat, lng)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Code Examples -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
          <div class="grid lg:grid-cols-2 gap-6">
            <div>
              <CodeBlock 
                :code="curlExample"
                language="bash"
                title="cURL Request"
              />
            </div>
            <div>
              <CodeBlock 
                :code="responseExample"
                language="json"
                title="Response"
              />
            </div>
          </div>
        </div>

        <!-- Try It Button -->
        <div class="text-center">
          <a 
            href="https://pico-api.banuacoder.com/swagger/index.html" 
            target="_blank"
            class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
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
import { useI18n } from 'vue-i18n'
import CodeBlock from '@/components/CodeBlock.vue'

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t } = useI18n()

const curlExample = `curl -X GET \\
  "https://pico-api.banuacoder.com/api/v1/provinces"`

const responseExample = `[
  {
    "id": "72",
    "name": "Sulawesi Tengah",
    "latest_case": {
      "date": "2024-09-07T00:00:00Z",
      "day": 1247,
      "province": {
        "id": "72",
        "name": "Sulawesi Tengah"
      },
      "daily": {
        "positive": 12,
        "recovered": 8,
        "deceased": 0,
        "active": 0,
        "odp": {
          "active": 5,
          "finished": 45
        },
        "pdp": {
          "active": 2,
          "finished": 23
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
    }
  },
  {
    "id": "73", 
    "name": "Sulawesi Selatan",
    "latest_case": {
      "date": "2024-09-07T00:00:00Z",
      "day": 1247,
      "province": {
        "id": "73",
        "name": "Sulawesi Selatan"
      },
      "daily": {
        "positive": 45,
        "recovered": 52,
        "deceased": 1,
        "active": 0,
        "odp": {
          "active": 12,
          "finished": 89
        },
        "pdp": {
          "active": 7,
          "finished": 34
        }
      },
      "cumulative": {
        "positive": 198765,
        "recovered": 195123,
        "deceased": 3098,
        "active": 544,
        "odp": {
          "active": 67,
          "finished": 2890,
          "total": 2957
        },
        "pdp": {
          "active": 23,
          "finished": 1234,
          "total": 1257
        }
      },
      "statistics": {
        "percentages": {
          "positive": 100.0,
          "recovered": 98.17,
          "deceased": 1.56,
          "active": 0.27
        },
        "reproduction_rate": {
          "value": 0.82,
          "lower_bound": 0.72,
          "upper_bound": 0.92
        }
      }
    }
  }
]`
</script>

<template>
  <section v-show="isActive" id="national-historical" class="mb-16">
    <div class="mb-8">
      <div class="flex items-center mb-4">
        <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ t('documentation.nationalHistorical.title') }}</h1>
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-400 mb-4">{{ t('documentation.nationalHistorical.description') }}</p>
      
      <!-- Usage Note -->
      <div class="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 border-l-4 border-green-400 dark:border-green-800 mb-6">
        <div class="flex">
          <svg class="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div class="text-green-800 dark:text-green-400">
            <p class="font-medium mb-1">When to use this endpoint</p>
            <p class="text-sm text-green-700 dark:text-green-400">{{ t('documentation.nationalHistorical.usageNote') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Endpoint Details -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
        <div class="flex items-center gap-4">
          <span class="bg-white text-purple-700 px-3 py-1 rounded-lg font-mono text-sm font-bold">GET</span>
          <code class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-mono text-sm">/national</code>
        </div>
        <p class="text-white/90 mt-2">{{ t('documentation.nationalHistorical.description') }}</p>
      </div>
      
      <div class="p-8">
        <!-- Query Parameters -->
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
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Records per page (default: 50, max: 1000)</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">offset</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Records to skip (default: 0)</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">page</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Page number (1-based, alternative to offset)</td>
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
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Start date for filtering data (YYYY-MM-DD format)</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">end_date</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">End date for filtering data (YYYY-MM-DD format)</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">sort</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Sort by field:order (e.g., date:desc, positive:asc). Default: date:asc</td>
                  <td class="py-3 px-4 text-gray-500 dark:text-gray-500">Optional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Response Fields Table -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Response Fields</h3>
          
          <!-- Array Structure Note -->
          <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4 border-l-4 border-blue-400 dark:border-blue-800">
            <div class="flex">
              <svg class="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div class="text-blue-800 dark:text-blue-400">
                <p class="font-medium">Array Response</p>
                <p class="text-sm text-blue-700 dark:text-blue-400">Returns an array of daily COVID-19 data objects. Each object contains the following fields:</p>
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
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Date of the COVID-19 case report (YYYY-MM-DD)</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">day</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Day number since first case reported</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">cumulative.positive</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Total confirmed COVID-19 cases</td>
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
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Current active cases (positive - recovered - deceased)</td>
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
                  <td class="py-3 px-4 font-mono text-pico-deep">daily.active</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Daily change in active cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">statistics.percentages.active</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">float</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Percentage of active cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">statistics.percentages.recovered</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">float</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Percentage of recovered cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">statistics.percentages.deceased</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">float</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Percentage of deceased cases</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">statistics.reproduction_rate.value</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">float</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Reproduction rate (Rt) estimate</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">statistics.reproduction_rate.upper_bound</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">float</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Upper confidence bound for reproduction rate</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">statistics.reproduction_rate.lower_bound</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">float</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Lower confidence bound for reproduction rate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Code Examples -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Requests</h3>
          <div class="grid lg:grid-cols-2 gap-6 mb-6">
            <div>
              <CodeBlock 
                :code="basicExample"
                language="bash"
                title="Basic Request"
              />
            </div>
            <div>
              <CodeBlock 
                :code="paginatedExample"
                language="bash"
                title="With Pagination & Date Filter"
              />
            </div>
          </div>
          <div>
            <CodeBlock 
              :code="responseExample"
              language="json"
              title="Response (Array)"
            />
          </div>
        </div>

        <!-- Try It Button -->
        <div class="text-center">
          <a href="https://pico-api.banuacoder.com/swagger/index.html" 
             target="_blank" 
             class="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            {{ t('documentation.nationalHistorical.testInBrowser') }}
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

const basicExample = `curl -X GET \\
  "https://pico-api.banuacoder.com/api/v1/national/historical"`

const paginatedExample = `curl -X GET \\
  "https://pico-api.banuacoder.com/api/v1/national/historical?limit=10&offset=0&start_date=2024-01-01&end_date=2024-01-31"`

const responseExample = `[
  {
    "date": "2024-01-01T00:00:00Z",
    "day": 1218,
    "daily": {
      "positive": 85,
      "recovered": 142,
      "deceased": 1
    },
    "cumulative": {
      "positive": 6753956,
      "recovered": 6589234,
      "deceased": 161025,
      "active": 3697
    },
    "statistics": {
      "percentages": {
        "positive": 100.0,
        "recovered": 97.56,
        "deceased": 2.38,
        "active": 0.05
      },
      "reproduction_rate": {
        "value": 0.82,
        "lower_bound": 0.72,
        "upper_bound": 0.92
      }
    }
  },
  {
    "date": "2024-01-02T00:00:00Z",
    "day": 1219,
    "daily": {
      "positive": 98,
      "recovered": 156,
      "deceased": 2
    },
    "cumulative": {
      "positive": 6754054,
      "recovered": 6589390,
      "deceased": 161027,
      "active": 3637
    },
    "statistics": {
      "percentages": {
        "positive": 100.0,
        "recovered": 97.56,
        "deceased": 2.38,
        "active": 0.05
      },
      "reproduction_rate": {
        "value": 0.84,
        "lower_bound": 0.74,
        "upper_bound": 0.94
      }
    }
  }
]`
</script>

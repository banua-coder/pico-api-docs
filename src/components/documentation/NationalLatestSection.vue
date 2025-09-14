<template>
  <section v-show="isActive" id="national-latest" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.nationalLatest.title') }}</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">{{ t('documentation.nationalLatest.description') }}</p>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Endpoint Header -->
      <div class="bg-gradient-to-r from-pico-blue to-pico-deep px-8 py-6">
        <div class="flex items-center gap-4">
          <span class="bg-white text-pico-deep px-3 py-1 rounded-lg font-mono text-sm font-bold">GET</span>
          <code class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-mono text-sm">/national/latest</code>
        </div>
        <p class="text-white/90 mt-2">{{ t('documentation.nationalLatest.description') }}</p>
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
                  <td class="py-3 px-4 font-mono text-pico-deep">daily.*</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Daily new cases for each category</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">statistics.percentages.*</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">number</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Percentage distribution of cases</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">statistics.reproduction_rate</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">object</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">COVID-19 reproduction rate with confidence bounds</td>
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
            class="inline-flex items-center px-6 py-3 bg-pico-blue hover:bg-pico-deep text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
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
  "https://pico-api.banuacoder.com/api/v1/national/latest"`

const responseExample = `{
  "status": "success",
  "data": {
    "day": 1247,
    "date": "2024-09-07T00:00:00Z",
    "daily": {
      "positive": 127,
      "recovered": 98,
      "deceased": 2
    },
    "cumulative": {
      "positive": 6754298,
      "recovered": 6589567,
      "deceased": 161031,
      "active": 3700
    },
    "statistics": {
      "percentages": {
        "positive": 100.0,
        "recovered": 97.56,
        "deceased": 2.38,
        "active": 0.05
      },
      "reproduction_rate": {
        "value": 0.85,
        "lower_bound": 0.75,
        "upper_bound": 0.95
      }
    }
  }
}`
</script>

<template>
  <section v-show="isActive" id="province-cases" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ t('documentation.provinceCases.title') }}</h1>
      <p class="text-lg text-gray-600">{{ t('documentation.provinceCases.description') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('documentation.provinceCases.endpoints') }}</h2>
        <p class="text-purple-100">{{ t('documentation.provinceCases.description') }}</p>
      </div>
      
      <div class="p-8">
        <div class="grid lg:grid-cols-2 gap-8 mb-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.provinceCases.endpoints') }}</h3>
            <div class="space-y-3">
              <div class="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                <span class="text-green-400">GET</span> 
                <span class="text-white">/provinces/cases</span>
              </div>
              <div class="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                <span class="text-green-400">GET</span> 
                <span class="text-white">/provinces/{provinceId}/cases</span>
              </div>
            </div>
          </div>
          
          <div class="bg-purple-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.provinceCases.features') }}</h3>
            <ul class="space-y-2">
              <li v-for="(feature, index) in featuresList" :key="index" class="flex items-center text-sm text-gray-600">
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
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Parameters</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead class="bg-gray-50">
                <tr>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 border-b">Parameter</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 border-b">Type</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 border-b">Description</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 border-b">Required</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">limit</td>
                  <td class="py-3 px-4 text-gray-600">integer</td>
                  <td class="py-3 px-4 text-gray-600">Number of records per page for pagination</td>
                  <td class="py-3 px-4 text-gray-500">Optional</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">offset</td>
                  <td class="py-3 px-4 text-gray-600">integer</td>
                  <td class="py-3 px-4 text-gray-600">Number of records to skip</td>
                  <td class="py-3 px-4 text-gray-500">Optional</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">all</td>
                  <td class="py-3 px-4 text-gray-600">boolean</td>
                  <td class="py-3 px-4 text-gray-600">Return all data without pagination</td>
                  <td class="py-3 px-4 text-gray-500">Optional</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">start_date</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">Filter data from this date (YYYY-MM-DD)</td>
                  <td class="py-3 px-4 text-gray-500">Optional</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">end_date</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">Filter data until this date (YYYY-MM-DD)</td>
                  <td class="py-3 px-4 text-gray-500">Optional</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">sort</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">Sorting options (e.g., date:desc, date:asc)</td>
                  <td class="py-3 px-4 text-gray-500">Optional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Response Fields Table -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Response Fields</h3>
          <div class="bg-gray-50 rounded-lg p-4 text-gray-600">
            <p>Returns paginated province case data. Each province object contains the same COVID-19 case structure as national data with province-specific information.</p>
          </div>
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

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t, tm } = useI18n()

const featuresList = computed(() => tm('documentation.provinceCases.featuresList') as string[])
</script>
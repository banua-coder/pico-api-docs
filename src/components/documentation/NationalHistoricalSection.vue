<template>
  <section v-show="isActive" id="national-historical" class="mb-16">
    <div class="mb-8">
      <div class="flex items-center mb-4">
        <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900">{{ t('documentation.nationalHistorical.title') }}</h1>
      </div>
      <p class="text-lg text-gray-600 mb-6">{{ t('documentation.nationalHistorical.description') }}</p>
    </div>

    <!-- Endpoint Details -->
    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
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
                  <td class="py-3 px-4 font-mono text-pico-deep">start_date</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">Start date for filtering data (YYYY-MM-DD format)</td>
                  <td class="py-3 px-4 text-gray-500">Optional</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">end_date</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">End date for filtering data (YYYY-MM-DD format)</td>
                  <td class="py-3 px-4 text-gray-500">Optional</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">sort</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">Sort by field:order (e.g., date:desc, positive:asc). Default: date:asc</td>
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
            <p>Returns an array of national COVID-19 data objects. Each object has the same structure as the <strong>/national/latest</strong> endpoint response.</p>
          </div>
        </div>

        <!-- Try It Button -->
        <div class="text-center">
          <a href="https://pico-api.banuacoder.com/swagger/index.html" 
             target="_blank" 
             class="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
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

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t } = useI18n()
</script>
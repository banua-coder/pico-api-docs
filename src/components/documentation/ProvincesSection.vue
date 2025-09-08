<template>
  <section v-show="isActive" id="provinces" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ t('documentation.provinces.title') }}</h1>
      <p class="text-lg text-gray-600">{{ t('documentation.provinces.description') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('documentation.provinces.endpoint') }}</h2>
        <p class="text-indigo-100">{{ t('documentation.provinces.description') }}</p>
      </div>
      
      <div class="p-8">
        <!-- Parameters Table -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Parameters</h3>
          <div class="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
            No parameters required
          </div>
        </div>

        <!-- Response Fields Table -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Response Fields</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead class="bg-gray-50">
                <tr>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 border-b">Field</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 border-b">Type</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 border-b">Description</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">id</td>
                  <td class="py-3 px-4 text-gray-600">integer</td>
                  <td class="py-3 px-4 text-gray-600">Unique province identifier</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">name</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">Province name</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">latest_case</td>
                  <td class="py-3 px-4 text-gray-600">object</td>
                  <td class="py-3 px-4 text-gray-600">Latest COVID-19 case data for the province (always included)</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">coordinates</td>
                  <td class="py-3 px-4 text-gray-600">object</td>
                  <td class="py-3 px-4 text-gray-600">Province geographic coordinates (lat, lng)</td>
                </tr>
              </tbody>
            </table>
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

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t } = useI18n()
</script>
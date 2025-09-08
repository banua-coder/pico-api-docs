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
                <span class="text-white">{{ apiBaseUrl }}/provinces/cases</span>
              </div>
              <div class="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                <span class="text-green-400">GET</span> 
                <span class="text-white">{{ apiBaseUrl }}/provinces/{provinceId}/cases</span>
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

        <div class="bg-blue-50 rounded-xl p-6 mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Query Parameters</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white rounded-lg">
              <thead class="bg-gray-100">
                <tr>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900">Parameter</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr v-for="(param, index) in parametersList" :key="index" class="border-b">
                  <td class="py-3 px-4 font-mono text-purple-600">{{ param.name }}</td>
                  <td class="py-3 px-4 text-gray-600">{{ param.type }}</td>
                  <td class="py-3 px-4 text-gray-600">{{ param.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <button 
            @click="testLiveApi"
            :disabled="loading"
            class="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors"
          >
            {{ loading ? t('common.loading') : t('documentation.nationalLatest.tryLiveApi') }}
          </button>
        </div>

        <div v-if="apiResponse" class="mt-8 bg-gray-900 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">{{ t('documentation.nationalLatest.response') }}</h3>
          <pre class="text-green-400 text-sm overflow-x-auto"><code>{{ apiResponse }}</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t, tm } = useI18n()

const apiBaseUrl = 'https://pico-api.banuacoder.com/api/v1'
const apiResponse = ref<string | null>(null)
const loading = ref(false)

const featuresList = computed(() => tm('documentation.provinceCases.featuresList') as string[])
const parametersList = [
  { name: 'limit', type: 'integer', description: 'Records per page for pagination' },
  { name: 'offset', type: 'integer', description: 'Number of records to skip' },
  { name: 'all', type: 'boolean', description: 'Return all data without pagination' },
  { name: 'start_date', type: 'string', description: 'Filter data from this date (YYYY-MM-DD)' },
  { name: 'end_date', type: 'string', description: 'Filter data until this date (YYYY-MM-DD)' },
  { name: 'sort', type: 'string', description: 'Sorting options (e.g., date:desc, date:asc)' }
]

const testLiveApi = async () => {
  loading.value = true
  apiResponse.value = null
  
  try {
    const response = await fetch(`${apiBaseUrl}/provinces/cases?limit=5`)
    const data = await response.json()
    apiResponse.value = JSON.stringify(data, null, 2)
  } catch (error) {
    apiResponse.value = `Error: ${error}`
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <section v-show="isActive" id="health-check" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ t('documentation.healthCheck.title') }}</h1>
      <p class="text-lg text-gray-600">{{ t('documentation.healthCheck.description') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <!-- Endpoint Header -->
      <div class="bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-6">
        <div class="flex items-center gap-4">
          <span class="bg-white text-emerald-700 px-3 py-1 rounded-lg font-mono text-sm font-bold">GET</span>
          <code class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-mono text-sm">/health</code>
        </div>
        <p class="text-white/90 mt-2">{{ t('documentation.healthCheck.description') }}</p>
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
                  <td class="py-3 px-4 font-mono text-pico-deep">status</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">API health status ("healthy" or "degraded")</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">database</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">Database connectivity status</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">timestamp</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">Timestamp of health check</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">version</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">API version information</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Status Codes Table -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">HTTP Status Codes</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead class="bg-gray-50">
                <tr>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 border-b">Status</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 border-b">Meaning</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b">
                  <td class="py-3 px-4">
                    <span class="bg-green-100 text-green-700 px-2 py-1 rounded font-mono text-sm">200</span>
                  </td>
                  <td class="py-3 px-4 text-gray-600">{{ t('documentation.healthCheck.status200') }}</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <span class="bg-orange-100 text-orange-700 px-2 py-1 rounded font-mono text-sm">503</span>
                  </td>
                  <td class="py-3 px-4 text-gray-600">{{ t('documentation.healthCheck.status503') }}</td>
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
            class="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
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

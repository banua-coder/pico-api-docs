<template>
  <section v-show="isActive" id="health-check" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.healthCheck.title') }}</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">{{ t('documentation.healthCheck.description') }}</p>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
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
                  <td class="py-3 px-4 font-mono text-pico-deep">status</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">API health status ("healthy" or "degraded")</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">database</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Database connectivity status</td>
                </tr>
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4 font-mono text-pico-deep">timestamp</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Timestamp of health check</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">version</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">API version information</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Status Codes Table -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">HTTP Status Codes</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead class="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Status</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Meaning</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b dark:border-gray-600">
                  <td class="py-3 px-4">
                    <span class="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded font-mono text-sm">200</span>
                  </td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">{{ t('documentation.healthCheck.status200') }}</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <span class="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-1 rounded font-mono text-sm">503</span>
                  </td>
                  <td class="py-3 px-4 text-gray-600 dark:text-gray-400">{{ t('documentation.healthCheck.status503') }}</td>
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
import CodeBlock from '@/components/CodeBlock.vue'

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t } = useI18n()

const curlExample = `curl -X GET \\
  "https://pico-api.banuacoder.com/api/v1/health"`

const responseExample = `{
  "status": "healthy",
  "timestamp": "2024-09-07T10:30:45Z",
  "services": {
    "database": "connected",
    "cache": "active"
  },
  "version": "1.0.0",
  "uptime": "72h 15m 30s"
}`
</script>

<template>
  <section v-show="isActive" id="root-endpoint" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ t('documentation.rootEndpoint.title') }}</h1>
      <p class="text-lg text-gray-600">{{ t('documentation.rootEndpoint.description') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <!-- Endpoint Header -->
      <div class="bg-gradient-to-r from-pico-sky to-pico-blue px-8 py-6">
        <div class="flex items-center gap-4">
          <span class="bg-white text-pico-deep px-3 py-1 rounded-lg font-mono text-sm font-bold">GET</span>
          <code class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-mono text-sm">/</code>
        </div>
        <p class="text-white/90 mt-2">{{ t('documentation.rootEndpoint.description') }}</p>
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
                  <td class="py-3 px-4 font-mono text-pico-deep">endpoints</td>
                  <td class="py-3 px-4 text-gray-600">object</td>
                  <td class="py-3 px-4 text-gray-600">List of all available API endpoints</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">version</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">Current API version</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-pico-deep">description</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">API description and purpose</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-pico-deep">documentation</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">URL to API documentation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Code Examples -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Example Request</h3>
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
  "https://pico-api.banuacoder.com/api/v1/"`

const responseExample = `{
  "status": "success",
  "message": "Welcome to PICO SulTeng API",
  "version": "1.0.0",
  "documentation": "https://pico-api.banuacoder.com/docs",
  "endpoints": {
    "health": "/health",
    "national": {
      "latest": "/national/latest",
      "historical": "/national/historical"
    },
    "provinces": {
      "list": "/provinces",
      "cases": "/provinces/cases",
      "specific": "/provinces/{id}/cases"
    }
  }
}`
</script>

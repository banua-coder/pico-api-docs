<template>
  <section v-show="isActive" id="overview" class="mb-16">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ t('documentation.overview.title') }}</h1>
      <p class="text-xl text-gray-600 mb-6">
        {{ t('documentation.overview.subtitle') }}
      </p>
      
      <!-- API Status -->
      <div class="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 mb-8">
        <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
        <span class="text-sm font-medium">{{ t('documentation.overview.apiStatus') }}</span>
      </div>
    </div>

    <!-- Getting Started Card -->
    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('documentation.overview.gettingStarted') }}</h2>
        <p class="text-blue-100">{{ t('documentation.overview.gettingStartedSub') }}</p>
      </div>
      
      <div class="p-8">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.overview.baseUrl') }}</h3>
            <div class="bg-gray-50 rounded-lg p-4 font-mono text-sm border">
              <code class="text-blue-600">https://pico-api.banuacoder.com/api/v1</code>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">{{ t('documentation.overview.contentType') }}</h3>
            <div class="bg-gray-50 rounded-lg p-4 font-mono text-sm border">
              <code class="text-green-600">application/json</code>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.overview.quickExample') }}</h3>
            <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <div class="text-green-400 mb-2">
                <span class="text-gray-500">$</span> curl -X GET \\
              </div>
              <div class="text-blue-300 ml-4">
                "https://pico-api.banuacoder.com/api/v1/national/latest"
              </div>
            </div>
            
            <div class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div class="flex items-center text-green-800">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-sm font-medium">{{ t('documentation.overview.noAuthRequired') }}</span>
              </div>
            </div>
          </div>
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

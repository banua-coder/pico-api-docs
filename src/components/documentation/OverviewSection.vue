<template>
  <section v-show="isActive" id="overview" class="mb-12 md:mb-16">
    <div class="mb-6 md:mb-8">
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{{ t('documentation.overview.title') }}</h1>
      <p class="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 md:mb-6 leading-relaxed">
        {{ t('documentation.overview.subtitle') }}
      </p>
      
      <!-- API Status -->
      <div class="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 border border-green-200 rounded-full text-green-700 mb-6 md:mb-8">
        <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
        <span class="text-xs sm:text-sm font-medium">{{ t('documentation.overview.apiStatus') }}</span>
      </div>
    </div>

    <!-- Getting Started Card -->
    <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">{{ t('documentation.overview.gettingStarted') }}</h2>
        <p class="text-sm sm:text-base text-blue-100">{{ t('documentation.overview.gettingStartedSub') }}</p>
      </div>
      
      <div class="p-3 sm:p-4 md:p-6 lg:p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div>
            <h3 class="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">{{ t('documentation.overview.baseUrl') }}</h3>
            <div class="bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm border overflow-x-auto">
              <code class="text-blue-600 whitespace-nowrap block">https://pico-api.banuacoder.com/api/v1</code>
            </div>
            
            <h3 class="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-3 sm:mt-4 md:mt-6 mb-2 sm:mb-3 md:mb-4">{{ t('documentation.overview.contentType') }}</h3>
            <div class="bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm border">
              <code class="text-green-600">application/json</code>
            </div>
          </div>
          
          <div>
            <h3 class="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">{{ t('documentation.overview.quickExample') }}</h3>
            <div class="bg-gray-900 rounded-lg p-2 sm:p-3 md:p-4 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto">
              <div class="text-green-400 mb-1 sm:mb-2">
                <span class="text-gray-500">$</span> curl -X GET \
              </div>
              <div class="text-blue-300 ml-2 sm:ml-3 md:ml-4 break-all">
                "https://pico-api.banuacoder.com/api/v1/national/latest"
              </div>
            </div>
            
            <div class="mt-2 sm:mt-3 md:mt-4 p-2 sm:p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg">
              <div class="flex items-start sm:items-center text-green-800">
                <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-[11px] sm:text-xs md:text-sm font-medium">{{ t('documentation.overview.noAuthRequired') }}</span>
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

<template>
  <section v-show="isActive" id="health-check" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ t('documentation.healthCheck.title') }}</h1>
      <p class="text-lg text-gray-600">{{ t('documentation.healthCheck.description') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('documentation.healthCheck.endpoint') }}</h2>
        <p class="text-blue-100">{{ t('documentation.healthCheck.description') }}</p>
      </div>
      
      <div class="p-8">
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.healthCheck.endpoint') }}</h3>
            <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <span class="text-green-400">GET</span> 
              <span class="text-white">{{ apiBaseUrl }}/health</span>
            </div>
          </div>
          
          <div class="bg-green-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.healthCheck.responses') }}</h3>
            <div class="space-y-2 text-sm">
              <div class="flex items-center">
                <span class="bg-green-500 text-white px-2 py-1 rounded mr-2 font-mono">200</span>
                <span class="text-gray-700">{{ t('documentation.healthCheck.status200') }}</span>
              </div>
              <div class="flex items-center">
                <span class="bg-orange-500 text-white px-2 py-1 rounded mr-2 font-mono">503</span>
                <span class="text-gray-700">{{ t('documentation.healthCheck.status503') }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <button 
            @click="testHealthCheck"
            :disabled="loading"
            class="bg-pico-blue hover:bg-pico-deep disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors"
          >
            {{ loading ? t('common.loading') : t('documentation.nationalLatest.tryLiveApi') }}
          </button>
          
          <div v-if="healthStatus" class="flex items-center">
            <div :class="healthStatus.color" class="w-3 h-3 rounded-full mr-2"></div>
            <span :class="healthStatus.textColor" class="font-medium">{{ healthStatus.text }}</span>
          </div>
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
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t } = useI18n()

const apiBaseUrl = 'https://pico-api.banuacoder.com/api/v1'
const apiResponse = ref<string | null>(null)
const loading = ref(false)
const healthStatus = ref<{color: string, textColor: string, text: string} | null>(null)

const testHealthCheck = async () => {
  loading.value = true
  healthStatus.value = null
  apiResponse.value = null
  
  try {
    const response = await fetch(`${apiBaseUrl}/health`)
    const data = await response.json()
    apiResponse.value = JSON.stringify(data, null, 2)
    
    if (response.status === 200) {
      healthStatus.value = {
        color: 'bg-green-500',
        textColor: 'text-green-700',
        text: t('documentation.healthCheck.status200')
      }
    } else if (response.status === 503) {
      healthStatus.value = {
        color: 'bg-orange-500',
        textColor: 'text-orange-700',
        text: t('documentation.healthCheck.status503')
      }
    }
  } catch (error) {
    apiResponse.value = `Error: ${error}`
    healthStatus.value = {
      color: 'bg-red-500',
      textColor: 'text-red-700',
      text: 'Connection Error'
    }
  } finally {
    loading.value = false
  }
}
</script>
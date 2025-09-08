<template>
  <section v-show="isActive" id="root-endpoint" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ t('documentation.rootEndpoint.title') }}</h1>
      <p class="text-lg text-gray-600">{{ t('documentation.rootEndpoint.description') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('documentation.rootEndpoint.endpoint') }}</h2>
        <p class="text-green-100">{{ t('documentation.rootEndpoint.description') }}</p>
      </div>
      
      <div class="p-8">
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.rootEndpoint.endpoint') }}</h3>
            <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <span class="text-green-400">GET</span> 
              <span class="text-white">{{ apiBaseUrl }}/</span>
            </div>
          </div>
          
          <div class="bg-blue-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.rootEndpoint.response') }}</h3>
            <p class="text-gray-600 mb-3">{{ t('documentation.rootEndpoint.responseDescription') }}</p>
            <button 
              @click="testLiveApi"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {{ t('documentation.nationalLatest.tryLiveApi') }}
            </button>
          </div>
        </div>

        <div v-if="apiResponse" class="mt-8 bg-gray-900 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-white mb-4">{{ t('documentation.rootEndpoint.response') }}</h3>
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

const testLiveApi = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/`)
    const data = await response.json()
    apiResponse.value = JSON.stringify(data, null, 2)
  } catch (error) {
    apiResponse.value = `Error: ${error}`
  }
}
</script>
<template>
  <section v-show="isActive" id="error-handling" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ t('documentation.errorHandling.title') }}</h1>
      <p class="text-lg text-gray-600">{{ t('documentation.errorHandling.subtitle') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-red-600 to-rose-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('documentation.errorHandling.title') }}</h2>
        <p class="text-red-100">{{ t('documentation.errorHandling.subtitle') }}</p>
      </div>
      
      <div class="p-8">
        <!-- Status Codes -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.errorHandling.httpStatusCodes') }}</h3>
          <div class="grid gap-4">
            <div class="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
              <div class="w-16 h-8 bg-green-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">200</div>
              <div>
                <div class="font-semibold text-gray-900">{{ t('documentation.errorHandling.statusCodes.200.title') }}</div>
                <div class="text-sm text-gray-600">{{ t('documentation.errorHandling.statusCodes.200.description') }}</div>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="w-16 h-8 bg-red-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">400</div>
              <div>
                <div class="font-semibold text-gray-900">{{ t('documentation.errorHandling.statusCodes.400.title') }}</div>
                <div class="text-sm text-gray-600">{{ t('documentation.errorHandling.statusCodes.400.description') }}</div>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="w-16 h-8 bg-red-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">404</div>
              <div>
                <div class="font-semibold text-gray-900">{{ t('documentation.errorHandling.statusCodes.404.title') }}</div>
                <div class="text-sm text-gray-600">{{ t('documentation.errorHandling.statusCodes.404.description') }}</div>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div class="w-16 h-8 bg-yellow-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">429</div>
              <div>
                <div class="font-semibold text-gray-900">{{ t('documentation.errorHandling.statusCodes.429.title') }}</div>
                <div class="text-sm text-gray-600">{{ t('documentation.errorHandling.statusCodes.429.description') }}</div>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="w-16 h-8 bg-red-600 text-white text-sm font-bold rounded flex items-center justify-center mr-4">500</div>
              <div>
                <div class="font-semibold text-gray-900">{{ t('documentation.errorHandling.statusCodes.500.title') }}</div>
                <div class="text-sm text-gray-600">{{ t('documentation.errorHandling.statusCodes.500.description') }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Error Response Format -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.errorHandling.errorResponseFormat') }}</h3>
          <div class="bg-gray-50 rounded-xl p-6">
            <div class="grid lg:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('documentation.errorHandling.errorResponse') }}</h4>
                <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div class="text-blue-400">{</div>
                  <div class="ml-2">
                    <div><span class="text-yellow-400">"status"</span>: <span class="text-red-300">"error"</span>,</div>
                    <div><span class="text-yellow-400">"error"</span>: {</div>
                    <div class="ml-2">
                      <div><span class="text-yellow-400">"code"</span>: <span class="text-orange-400">400</span>,</div>
                      <div><span class="text-yellow-400">"message"</span>: <span class="text-green-300">"Invalid page parameter"</span>,</div>
                      <div><span class="text-yellow-400">"details"</span>: <span class="text-green-300">"Page must be a positive integer"</span></div>
                    </div>
                    <div>}</div>
                  </div>
                  <div class="text-blue-400">}</div>
                </div>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('documentation.errorHandling.errorFields') }}</h4>
                <div class="space-y-3 text-sm">
                  <div class="flex">
                    <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">status</code>
                    <span class="text-gray-600">{{ t('documentation.errorHandling.fieldDescriptions.status') }}</span>
                  </div>
                  <div class="flex">
                    <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">code</code>
                    <span class="text-gray-600">{{ t('documentation.errorHandling.fieldDescriptions.code') }}</span>
                  </div>
                  <div class="flex">
                    <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">message</code>
                    <span class="text-gray-600">{{ t('documentation.errorHandling.fieldDescriptions.message') }}</span>
                  </div>
                  <div class="flex">
                    <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">details</code>
                    <span class="text-gray-600">{{ t('documentation.errorHandling.fieldDescriptions.details') }}</span>
                  </div>
                </div>
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
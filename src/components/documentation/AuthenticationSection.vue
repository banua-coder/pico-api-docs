<template>
  <section v-show="isActive" id="authentication" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ t('documentation.authentication.title') }}</h1>
      <p class="text-lg text-gray-600">{{ t('documentation.authentication.subtitle') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-yellow-600 to-orange-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('documentation.authentication.title') }}</h2>
        <p class="text-yellow-100">{{ t('documentation.authentication.subtitle') }}</p>
      </div>
      
      <div class="p-8">
        <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <div class="flex items-center">
            <svg class="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 class="text-lg font-semibold text-green-800 mb-1">{{ t('documentation.authentication.noAuthRequired') }}</h3>
              <p class="text-green-700">{{ t('documentation.authentication.noAuthDescription') }}</p>
            </div>
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-blue-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.authentication.rateLimiting') }}</h3>
            <ul class="space-y-2 text-gray-600">
              <li v-for="(detail, index) in rateLimitDetails" :key="index" class="flex items-center">
                <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ detail }}
              </li>
            </ul>
          </div>
          
          <div class="bg-purple-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('documentation.authentication.bestPractices') }}</h3>
            <ul class="space-y-2 text-gray-600">
              <li v-for="(practice, index) in practiceDetails" :key="index" class="flex items-center">
                <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path>
                </svg>
                {{ practice }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Rate Limit Headers -->
        <div class="mt-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Rate Limit Response Headers</h3>
          <div class="bg-gray-50 rounded-lg p-6">
            <div class="grid md:grid-cols-1 gap-4">
              <div class="space-y-3">
                <div class="flex justify-between items-center py-2 border-b border-gray-200">
                  <code class="text-sm font-mono text-gray-800">X-RateLimit-Limit</code>
                  <span class="text-sm text-gray-600">Request limit per window</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-gray-200">
                  <code class="text-sm font-mono text-gray-800">X-RateLimit-Remaining</code>
                  <span class="text-sm text-gray-600">Requests remaining in current window</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-gray-200">
                  <code class="text-sm font-mono text-gray-800">X-RateLimit-Reset</code>
                  <span class="text-sm text-gray-600">Unix timestamp when rate limit resets</span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <code class="text-sm font-mono text-gray-800">Retry-After</code>
                  <span class="text-sm text-gray-600">Seconds to wait before retrying (on 429 errors)</span>
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t, tm } = useI18n()

const rateLimitDetails = computed(() => tm('documentation.authentication.rateLimitDetails') as string[])
const practiceDetails = computed(() => tm('documentation.authentication.practiceDetails') as string[])
</script>

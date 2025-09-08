<template>
  <section v-show="isActive" id="authentication" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Authentication</h1>
      <p class="text-lg text-gray-600">API access and security information</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-yellow-600 to-orange-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">Authentication</h2>
        <p class="text-yellow-100">API access and security</p>
      </div>
      
      <div class="p-8">
        <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <div class="flex items-center">
            <svg class="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 class="text-lg font-semibold text-green-800 mb-1">No Authentication Required</h3>
              <p class="text-green-700">All PICO SulTeng API endpoints are publicly accessible and do not require authentication keys or tokens.</p>
            </div>
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-blue-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Rate Limiting</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                1000 requests per hour per IP
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                No API key required
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                CORS enabled for all origins
              </li>
            </ul>
          </div>
          
          <div class="bg-purple-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path>
                </svg>
                Cache responses appropriately
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path>
                </svg>
                Use HTTPS for secure connections
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path>
                </svg>
                Handle rate limit responses
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  isActive: boolean
}

defineProps<Props>()
</script>
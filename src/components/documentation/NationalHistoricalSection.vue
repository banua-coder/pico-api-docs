<template>
  <section v-show="isActive" id="national-historical" class="mb-16">
    <div class="mb-8">
      <div class="flex items-center mb-4">
        <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900">Get Historical National Data</h1>
      </div>
      <p class="text-lg text-gray-600 mb-6">Access historical national COVID-19 data with pagination support. Returns an array of data objects with the same structure as the latest endpoint.</p>
    </div>

    <!-- Endpoint Details -->
    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
        <div class="flex flex-wrap items-center gap-4">
          <span class="bg-white text-purple-800 px-4 py-2 rounded-lg text-sm font-bold">GET</span>
          <code class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-mono text-sm">/national</code>
        </div>
      </div>
      
      <div class="p-8">
        <!-- Query Parameters -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Query Parameters</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-gray-50 rounded-lg">
              <thead class="bg-gray-100">
                <tr>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900">Parameter</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                  <th class="text-left py-3 px-4 font-semibold text-gray-900">Default</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-purple-600">page</td>
                  <td class="py-3 px-4 text-gray-600">integer</td>
                  <td class="py-3 px-4 text-gray-600">Page number (1-based)</td>
                  <td class="py-3 px-4 text-gray-600">1</td>
                </tr>
                <tr class="border-b">
                  <td class="py-3 px-4 font-mono text-purple-600">limit</td>
                  <td class="py-3 px-4 text-gray-600">integer</td>
                  <td class="py-3 px-4 text-gray-600">Items per page (1-100)</td>
                  <td class="py-3 px-4 text-gray-600">10</td>
                </tr>
                <tr>
                  <td class="py-3 px-4 font-mono text-purple-600">sort</td>
                  <td class="py-3 px-4 text-gray-600">string</td>
                  <td class="py-3 px-4 text-gray-600">Sort order: "asc" or "desc"</td>
                  <td class="py-3 px-4 text-gray-600">desc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Example Request</h3>
            <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <div class="text-green-400">GET /api/v1/national?page=1&limit=5&sort=desc</div>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Try It</h3>
            <a href="https://pico-api.banuacoder.com/api/v1/national?page=1&limit=5" 
               target="_blank" 
               class="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              Test in Browser
            </a>
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
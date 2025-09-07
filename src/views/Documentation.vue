<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation (same as home) -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-bold gradient-text">PICO SulTeng</router-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link to="/" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
              <router-link to="/docs" class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Documentation</router-link>
              <router-link to="/api" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">API Reference</router-link>
              <a href="https://pico-api.banuacoder.com/api/v1" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Live API
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="prose prose-lg max-w-none">
        <h1>Documentation</h1>
        <p class="lead">Comprehensive guide for using the PICO SulTeng COVID-19 API</p>
        
        <!-- Documentation content will go here -->
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-yellow-700">
                This documentation page is under construction. For now, please refer to the 
                <a href="https://pico-api.banuacoder.com/swagger/index.html" target="_blank" class="font-medium underline text-yellow-700 hover:text-yellow-600">
                  Interactive Swagger Documentation
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Documentation page component
</script>
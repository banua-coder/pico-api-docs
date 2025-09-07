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
              <router-link to="/docs" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Documentation</router-link>
              <router-link to="/api" class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">API Reference</router-link>
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
        <h1>API Reference</h1>
        <p class="lead">Complete API endpoint reference for PICO SulTeng</p>
        
        <!-- API Reference content will go here -->
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-blue-700">
                For the most up-to-date API reference with interactive examples, visit our
                <a href="https://pico-api.banuacoder.com/swagger/index.html" target="_blank" class="font-medium underline text-blue-700 hover:text-blue-600">
                  Swagger UI Documentation
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
// API Reference page component
</script>
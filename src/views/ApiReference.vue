<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <!-- Navigation -->
    <Navigation variant="solid" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <div class="prose prose-lg max-w-none dark:prose-invert">
        <h1 class="text-gray-900 dark:text-gray-100">API Reference</h1>
        <p class="lead text-gray-600 dark:text-gray-400">Complete API endpoint reference for PICO SulTeng</p>
        
        <!-- API Reference content will go here -->
        <div class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-500 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-400 dark:text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-blue-700 dark:text-blue-300">
                For the most up-to-date API reference with interactive examples, visit our
                <a href="https://pico-api.banuacoder.com/swagger/index.html" target="_blank" class="font-medium underline text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200 transition-colors">
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
import Navigation from '@/components/Navigation.vue'
</script>

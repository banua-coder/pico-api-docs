<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="text-center">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pico-sky"></div>
      <p class="mt-4 text-gray-600 dark:text-gray-400">{{ $t('loading') || 'Loading...' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Simple loading component for route transitions
</script>

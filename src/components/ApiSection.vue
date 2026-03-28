<template>
  <div :id="sectionId" class="border-b border-gray-200 dark:border-gray-800">
    <!-- Section header (full width) -->
    <div class="px-6 py-6 border-b border-gray-200 dark:border-gray-800">
      <div class="flex items-center gap-2 flex-wrap min-w-0">
        <span :class="method === 'GET' ? 'badge-get' : 'badge-post'" class="shrink-0">{{ method }}</span>
        <code class="text-sm font-mono text-gray-700 dark:text-gray-300 break-all min-w-0">{{ endpoint }}</code>
      </div>
      <p v-if="description" class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ description }}</p>
    </div>

    <!-- Two-column body -->
    <div class="api-section-grid">
      <!-- Left: description + params -->
      <div class="px-6 py-6 border-r border-gray-200 dark:border-gray-800">
        <slot name="left" />
      </div>
      <!-- Right: code examples -->
      <div class="px-6 py-6 bg-gray-50 dark:bg-[#0d1b2e]">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sectionId: string
  method?: string
  endpoint?: string
  description?: string
}>()
</script>

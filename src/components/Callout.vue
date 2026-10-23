<template>
  <div class="callout" :class="{ 'callout-warning': tone === 'warning' }" role="note">
    <Icon :name="tone === 'warning' ? 'alert' : 'info'" :size="20" />
    <div class="min-w-0">
      <p v-if="title" class="mb-1 font-semibold">{{ title }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue'

// The tone changes the icon (triangle vs circle) and the title, never only the colour.
withDefaults(defineProps<{ tone?: 'note' | 'warning'; title?: string }>(), { tone: 'note', title: '' })
</script>

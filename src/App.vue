<template>
  <div id="app" class="transition-colors duration-200">
    <PageTransition>
      <router-view />
    </PageTransition>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import PageTransition from '@/components/PageTransition.vue'
import { useTheme } from '@/composables/useTheme'

// Initialize theme on app start
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<style>
#app {
  min-height: 100vh;
}
</style>

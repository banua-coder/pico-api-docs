<template>
  <div v-if="mounted">
    <ApiPlaygroundInner
      :method="method"
      :endpoint="endpoint"
      :params="params"
      :pathParams="pathParams"
    />
  </div>
  <div v-else class="playground-skeleton">
    <div class="skeleton-bar" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

const ApiPlaygroundInner = defineAsyncComponent(() => import('./ApiPlayground.vue'))

defineProps<{
  method?: string
  endpoint: string
  params?: any[]
  pathParams?: any[]
}>()

const mounted = ref(false)
onMounted(() => { mounted.value = true })
</script>

<style scoped>
.playground-skeleton {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  margin: 1.5rem 0;
}
.skeleton-bar {
  height: 40px;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>

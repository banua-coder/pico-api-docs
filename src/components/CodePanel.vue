<template>
  <div class="space-y-2">
    <!-- Tabs -->
    <div v-if="tabs.length > 1" class="flex space-x-1 border-b border-gray-700/30">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="text-xs px-3 py-1.5 transition-colors"
        :class="activeTab === tab
          ? 'text-white border-b-2 border-[#635bff]'
          : 'text-gray-400 hover:text-gray-200'"
      >{{ tab }}</button>
    </div>
    <div class="code-panel">
      <pre><code>{{ currentCode }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  codeMap: Record<string, string>
}>()

const tabs = computed(() => Object.keys(props.codeMap))
const activeTab = ref(tabs.value[0])
const currentCode = computed(() => props.codeMap[activeTab.value] ?? '')
</script>

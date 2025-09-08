<template>
  <span v-html="renderedMath" class="katex-formula"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface Props {
  formula: string
  displayMode?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  displayMode: true
})

const renderedMath = computed(() => {
  try {
    return katex.renderToString(props.formula, {
      displayMode: props.displayMode,
      throwOnError: false
    })
  } catch (error) {
    console.error('KaTeX rendering error:', error)
    return props.formula
  }
})
</script>

<style scoped>
.katex-formula {
  display: block;
  text-align: center;
}
</style>
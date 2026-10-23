<template>
  <svg
    class="bark-border block"
    :class="[vertical ? 'h-full' : 'w-full', { 'weave-in': animate }]"
    :width="vertical ? height : undefined"
    :height="vertical ? undefined : height"
    aria-hidden="true"
    focusable="false"
    role="presentation"
  >
    <defs>
      <!-- Strict repeat: one 32x16 tile of dyed triangles and diamonds, scaled to the band height. -->
      <pattern :id="id" :width="tileW" :height="height" patternUnits="userSpaceOnUse" :patternTransform="vertical ? 'rotate(90)' : undefined">
        <g :transform="`scale(${k})`">
          <rect width="32" height="16" class="bb-bg" />
          <path class="bb-madder" d="M0 0h6L0 6zM26 0h6v6zM0 16h6L0 10zM26 16h6v-6z" />
          <path class="bb-bark" d="M16 1l9 7-9 7-9-7z" />
          <path class="bb-indigo" d="M16 4l5 4-5 4-5-4z" />
          <path class="bb-madder" d="M16 6.4l1.6 1.6-1.6 1.6-1.6-1.6z" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" :height="vertical ? '100%' : height" :fill="`url(#${id})`" />
  </svg>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'

const props = withDefaults(defineProps<{ height?: number; animate?: boolean; vertical?: boolean }>(), {
  height: 16,
  vertical: false,
  animate: false,
})

/** `height` is the band thickness; `vertical` rotates the band to run top to bottom. */
const id = `bark-${useId()}`
const k = computed(() => props.height / 16)
const tileW = computed(() => 32 * k.value)
</script>

<style scoped>
.bark-border {
  --bb-bg: 43 26 18;
  --bb-bark: 201 163 107;
  --bb-madder: 168 40 31;
  --bb-indigo: 52 92 142;
}
:global(.dark) .bark-border {
  --bb-madder: 196 62 51;
  --bb-indigo: 74 112 168;
}
.bb-bg { fill: rgb(var(--bb-bg)); }
.bb-bark { fill: rgb(var(--bb-bark)); }
.bb-madder { fill: rgb(var(--bb-madder)); }
.bb-indigo { fill: rgb(var(--bb-indigo)); }
</style>

<template>
  <div :class="containerClasses" v-bind="$attrs">
    <!-- Card Skeleton -->
    <div v-if="type === 'card'" class="space-y-4">
      <div v-if="showHeader" class="flex items-center space-x-4">
        <div class="skeleton-item w-12 h-12 rounded-xl"></div>
        <div class="flex-1 space-y-2">
          <div class="skeleton-item h-4 w-3/4 rounded"></div>
          <div class="skeleton-item h-3 w-1/2 rounded"></div>
        </div>
      </div>
      <div class="space-y-2">
        <div v-for="i in lines" :key="i" class="skeleton-item h-3 rounded" :class="getLineWidth(i)"></div>
      </div>
    </div>

    <!-- Text Skeleton -->
    <div v-else-if="type === 'text'" class="space-y-2">
      <div v-for="i in lines" :key="i" class="skeleton-item rounded" :class="[heightClass, getLineWidth(i)]"></div>
    </div>

    <!-- Avatar Skeleton -->
    <div v-else-if="type === 'avatar'" :class="avatarClasses">
      <div class="skeleton-item w-full h-full rounded-full"></div>
    </div>

    <!-- Button Skeleton -->
    <div v-else-if="type === 'button'" :class="buttonClasses">
      <div class="skeleton-item w-full h-full rounded-lg"></div>
    </div>

    <!-- Image Skeleton -->
    <div v-else-if="type === 'image'" :class="imageClasses">
      <div class="skeleton-item w-full h-full rounded-lg flex items-center justify-center">
        <svg class="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
        </svg>
      </div>
    </div>

    <!-- Custom Skeleton -->
    <div v-else :class="customClasses">
      <div class="skeleton-item w-full h-full" :class="roundedClass"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'card' | 'text' | 'avatar' | 'button' | 'image' | 'custom'
  lines?: number
  width?: string | number
  height?: string | number
  showHeader?: boolean
  animated?: boolean
  rounded?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  lines: 3,
  showHeader: true,
  animated: true,
  rounded: true,
  size: 'md'
})

// Size mappings for different types
const avatarSizes = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20'
}

const buttonSizes = {
  xs: 'h-6 w-16',
  sm: 'h-8 w-20',
  md: 'h-10 w-24',
  lg: 'h-12 w-32',
  xl: 'h-14 w-40'
}

const textHeights = {
  xs: 'h-2',
  sm: 'h-3',
  md: 'h-4',
  lg: 'h-5',
  xl: 'h-6'
}

const imageSizes = {
  xs: 'w-16 h-12',
  sm: 'w-20 h-16',
  md: 'w-32 h-24',
  lg: 'w-48 h-36',
  xl: 'w-64 h-48'
}

// Computed classes
const containerClasses = computed(() => [
  'relative',
  {
    'animate-pulse': props.animated
  }
])

const heightClass = computed(() => textHeights[props.size])

const avatarClasses = computed(() => [
  'relative',
  avatarSizes[props.size]
])

const buttonClasses = computed(() => [
  'relative',
  buttonSizes[props.size]
])

const imageClasses = computed(() => [
  'relative bg-gray-200',
  props.width ? `w-[${props.width}]` : imageSizes[props.size].split(' ')[0],
  props.height ? `h-[${props.height}]` : imageSizes[props.size].split(' ')[1]
])

const customClasses = computed(() => [
  'relative',
  props.width ? `w-[${props.width}]` : 'w-full',
  props.height ? `h-[${props.height}]` : 'h-4'
])

const roundedClass = computed(() => 
  props.rounded ? 'rounded' : ''
)

// Generate random widths for text lines to make it look more natural
const getLineWidth = (lineNumber: number) => {
  const widths = ['w-full', 'w-5/6', 'w-4/5', 'w-3/4', 'w-2/3', 'w-1/2']
  const lastLineWidths = ['w-1/2', 'w-2/3', 'w-3/5']
  
  if (lineNumber === props.lines && props.lines > 1) {
    return lastLineWidths[lineNumber % lastLineWidths.length]
  }
  
  return widths[lineNumber % widths.length]
}
</script>

<style scoped>
.skeleton-item {
  @apply bg-gray-200 animate-pulse;
  background: linear-gradient(90deg, #f0f0f0 25%, transparent 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Disable animation when user prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .skeleton-item {
    animation: none;
    background: #f0f0f0;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .skeleton-item {
    @apply bg-gray-700;
    background: linear-gradient(90deg, #374151 25%, transparent 50%, #374151 75%);
    background-size: 200% 100%;
  }
}
</style>
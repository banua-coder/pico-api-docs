<template>
  <div ref="containerRef" :class="containerClasses">
    <Transition
      name="lazy-image"
      enter-active-class="transition-opacity duration-300 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <img
        v-if="loaded && !error"
        :src="actualSrc"
        :alt="alt"
        :width="width"
        :height="height"
        :class="imageClasses"
        @load="onLoad"
        @error="onError"
      />
    </Transition>

    <!-- Loading skeleton -->
    <div
      v-if="!loaded && !error"
      :class="skeletonClasses"
      :aria-label="loadingText"
    >
      <BaseSkeleton 
        type="image" 
        :size="skeletonSize"
        :width="width"
        :height="height"
      />
    </div>

    <!-- Error state -->
    <div
      v-if="error"
      :class="errorClasses"
      :aria-label="errorText"
    >
      <svg class="w-8 h-8 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
      </svg>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">{{ errorText }}</p>
    </div>

    <!-- Loading indicator overlay for slow connections -->
    <div
      v-if="showLoadingIndicator && !loaded && !error"
      class="absolute inset-0 flex items-center justify-center bg-gray-100/50 dark:bg-gray-800/50"
    >
      <div class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-sm">{{ loadingText }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import BaseSkeleton from './BaseSkeleton.vue'

interface Props {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  placeholder?: string
  lazy?: boolean
  threshold?: number
  errorText?: string
  loadingText?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none'
  rounded?: boolean
  shadow?: boolean
  skeletonSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  lazy: true,
  threshold: 0.1,
  errorText: 'Failed to load image',
  loadingText: 'Loading...',
  objectFit: 'cover',
  rounded: false,
  shadow: false,
  skeletonSize: 'md'
})

const containerRef = ref<HTMLElement>()
const loaded = ref(false)
const error = ref(false)
const inView = ref(!props.lazy) // If not lazy, assume in view
const showLoadingIndicator = ref(false)
let observer: IntersectionObserver | null = null
let loadingTimer: ReturnType<typeof setTimeout> | null = null

// Use placeholder if provided, otherwise use actual src when in view
const actualSrc = computed(() => {
  if (!inView.value) return props.placeholder || ''
  return props.src
})

const containerClasses = computed(() => [
  'relative overflow-hidden',
  {
    'rounded': props.rounded,
    'shadow-md': props.shadow
  }
])

const imageClasses = computed(() => [
  'w-full h-full transition-all duration-300',
  {
    'object-cover': props.objectFit === 'cover',
    'object-contain': props.objectFit === 'contain',
    'object-fill': props.objectFit === 'fill',
    'object-scale-down': props.objectFit === 'scale-down',
    'object-none': props.objectFit === 'none'
  }
])

const skeletonClasses = computed(() => [
  'w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800'
])

const errorClasses = computed(() => [
  'w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500',
  'min-h-[100px]' // Minimum height for error state
])

const setupIntersectionObserver = () => {
  if (!containerRef.value || !props.lazy) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        inView.value = true
        observer?.disconnect()
      }
    },
    {
      threshold: props.threshold,
      rootMargin: '50px' // Start loading 50px before the image enters the viewport
    }
  )

  observer.observe(containerRef.value)
}

const onLoad = () => {
  loaded.value = true
  error.value = false
  showLoadingIndicator.value = false
  
  if (loadingTimer) {
    clearTimeout(loadingTimer)
    loadingTimer = null
  }
}

const onError = () => {
  error.value = true
  loaded.value = false
  showLoadingIndicator.value = false
  
  if (loadingTimer) {
    clearTimeout(loadingTimer)
    loadingTimer = null
  }
}

// Show loading indicator after a delay for slow connections
const startLoadingTimer = () => {
  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }
  
  loadingTimer = setTimeout(() => {
    if (!loaded.value && !error.value) {
      showLoadingIndicator.value = true
    }
  }, 1000) // Show loading indicator after 1 second
}

// Watch for src changes to reset state
watch(() => props.src, () => {
  loaded.value = false
  error.value = false
  showLoadingIndicator.value = false
  
  if (props.lazy && !inView.value) {
    // Reset intersection observer for new src
    setupIntersectionObserver()
  }
})

// Watch for inView changes to start loading
watch(inView, (isInView) => {
  if (isInView && props.src) {
    startLoadingTimer()
  }
})

onMounted(() => {
  setupIntersectionObserver()
  
  // If not lazy loading or already in view, start loading timer
  if (!props.lazy || inView.value) {
    startLoadingTimer()
  }
})

onUnmounted(() => {
  observer?.disconnect()
  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }
})
</script>

<style scoped>
.lazy-image-enter-active {
  transition: opacity 0.3s ease-in-out;
}

.lazy-image-enter-from {
  opacity: 0;
}

.lazy-image-enter-to {
  opacity: 1;
}
</style>
<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      :class="buttonClasses"
      :aria-label="`Current theme: ${theme}. Click to change theme.`"
      :aria-expanded="dropdownOpen"
      aria-haspopup="true"
      ref="toggleButton"
    >
      <!-- Sun icon for light theme -->
      <svg 
        v-if="theme === 'light'" 
        class="w-4 h-4 transition-transform duration-200" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>

      <!-- Moon icon for dark theme -->
      <svg 
        v-else-if="theme === 'dark'" 
        class="w-4 h-4 transition-transform duration-200" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
      </svg>

      <!-- Monitor icon for system theme -->
      <svg 
        v-else 
        class="w-4 h-4 transition-transform duration-200" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line x1="8" y1="21" x2="16" y2="21" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line x1="12" y1="17" x2="12" y2="21" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>

      <!-- Dropdown arrow -->
      <svg 
        v-if="variant === 'default'"
        class="w-3 h-3 ml-1 transition-transform duration-200" 
        :class="{ 'rotate-180': dropdownOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <!-- Dropdown menu -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div 
        v-if="dropdownOpen"
        :class="dropdownClasses"
        role="menu"
        aria-orientation="vertical"
        ref="dropdown"
      >
        <button
          v-for="option in themeOptions"
          :key="option.value"
          @click="selectTheme(option.value)"
          :class="getOptionClasses(option.value)"
          role="menuitem"
        >
          <component :is="option.icon" class="w-4 h-4" />
          <span>{{ option.label }}</span>
          <svg 
            v-if="theme === option.value"
            class="w-4 h-4 text-blue-600 ml-auto" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </button>
      </div>
    </Transition>

    <!-- Backdrop -->
    <div
      v-if="dropdownOpen"
      class="fixed inset-0 z-10"
      @click="closeDropdown"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, h } from 'vue'
import { useTheme } from '@/composables/useTheme'

interface Props {
  variant?: 'default' | 'compact'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const { theme, setTheme } = useTheme()

const dropdownOpen = ref(false)
const toggleButton = ref<HTMLElement>()
const dropdown = ref<HTMLElement>()

const themeOptions = [
  {
    value: 'light' as const,
    label: 'Light',
    icon: h('svg', {
      class: 'w-4 h-4',
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
      })
    ])
  },
  {
    value: 'dark' as const,
    label: 'Dark',
    icon: h('svg', {
      class: 'w-4 h-4',
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
      })
    ])
  },
  {
    value: 'system' as const,
    label: 'System',
    icon: h('svg', {
      class: 'w-4 h-4',
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('rect', {
        x: '2',
        y: '3',
        width: '20',
        height: '14',
        rx: '2',
        ry: '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2'
      }),
      h('line', {
        x1: '8',
        y1: '21',
        x2: '16',
        y2: '21',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2'
      }),
      h('line', {
        x1: '12',
        y1: '17',
        x2: '12',
        y2: '21',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2'
      })
    ])
  }
]

const buttonClasses = computed(() => [
  'flex items-center justify-center rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
  {
    'px-3 py-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-500 hover:text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300': props.variant === 'default',
    'p-2 border-gray-200 hover:border-gray-300 bg-white text-gray-500 hover:text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-400': props.variant === 'compact'
  }
])

const dropdownClasses = computed(() => [
  'absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1',
  'dark:bg-gray-800 dark:border-gray-700'
])

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const closeDropdown = () => {
  dropdownOpen.value = false
}

const selectTheme = (selectedTheme: 'light' | 'dark' | 'system') => {
  setTheme(selectedTheme)
  closeDropdown()
}

const getOptionClasses = (optionValue: string) => [
  'flex items-center w-full px-3 py-2 text-sm text-left transition-colors duration-150 space-x-2',
  {
    'text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-400': theme.value === optionValue,
    'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700': theme.value !== optionValue
  }
]

// Handle clicks outside the dropdown
const handleClickOutside = (event: MouseEvent) => {
  if (
    dropdownOpen.value &&
    toggleButton.value &&
    dropdown.value &&
    !toggleButton.value.contains(event.target as Node) &&
    !dropdown.value.contains(event.target as Node)
  ) {
    closeDropdown()
  }
}

// Handle escape key
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && dropdownOpen.value) {
    closeDropdown()
    toggleButton.value?.focus()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeyDown)
})
</script>
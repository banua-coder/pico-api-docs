<template>
  <component 
    :is="tag" 
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedby"
    @click="handleClick"
    v-bind="$attrs"
  >
    <span v-if="loading" class="flex items-center justify-center mr-2" aria-hidden="true">
      <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span class="sr-only">Loading...</span>
    </span>

    <span v-if="$slots.icon && !loading" class="flex items-center mr-2" aria-hidden="true">
      <slot name="icon" />
    </span>

    <span :class="{ 'opacity-75': loading }">
      <slot />
    </span>

    <span v-if="$slots.iconRight && !loading" class="flex items-center ml-2" aria-hidden="true">
      <slot name="iconRight" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  tag?: 'button' | 'a' | 'router-link'
  to?: string | object
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  block?: boolean
  rounded?: boolean
  shadow?: boolean
  ariaLabel?: string
  ariaDescribedby?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
  type: 'button',
  disabled: false,
  loading: false,
  block: false,
  rounded: false,
  shadow: true
})

const emit = defineEmits<{
  click: [event: Event]
}>()

// Base classes
const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

// Size classes
const sizeClasses = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg'
}

// Variant classes
const variantClasses = {
  primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white focus:ring-blue-500',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500',
  outline: 'border-2 border-gray-300 hover:border-blue-600 bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 focus:ring-blue-500',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900 focus:ring-gray-500',
  danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
}

// Computed classes
const buttonClasses = computed(() => [
  baseClasses,
  sizeClasses[props.size],
  variantClasses[props.variant],
  {
    'w-full': props.block,
    'rounded-xl': props.rounded || props.size === 'lg' || props.size === 'xl',
    'rounded-lg': !props.rounded && (props.size === 'md' || props.size === 'sm'),
    'rounded-md': !props.rounded && props.size === 'xs',
    'shadow-lg hover:shadow-xl transform hover:-translate-y-0.5': props.shadow && props.variant === 'primary',
    'shadow-md hover:shadow-lg': props.shadow && props.variant !== 'primary',
    'cursor-wait': props.loading
  }
])

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
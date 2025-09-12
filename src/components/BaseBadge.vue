<template>
  <span :class="badgeClasses" v-bind="$attrs">
    <span v-if="$slots.icon || dot" class="flex items-center mr-1" :class="{ 'mr-0': !$slots.default }" aria-hidden="true">
      <slot name="icon">
        <div v-if="dot" :class="dotClasses"></div>
      </slot>
    </span>
    
    <span v-if="$slots.default">
      <slot />
    </span>
    
    <span v-if="$slots.iconRight" class="flex items-center ml-1" aria-hidden="true">
      <slot name="iconRight" />
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  dot?: boolean
  rounded?: boolean
  outline?: boolean
  pulse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  dot: false,
  rounded: false,
  outline: false,
  pulse: false
})

// Base classes
const baseClasses = 'inline-flex items-center font-medium transition-all duration-200'

// Size classes
const sizeClasses = {
  xs: 'px-2 py-0.5 text-xs',
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-sm'
}

// Variant classes (filled)
const variantClasses = {
  default: 'bg-gray-100 text-gray-700',
  primary: 'bg-blue-100 text-blue-700',
  secondary: 'bg-gray-100 text-gray-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700',
  info: 'bg-cyan-100 text-cyan-700'
}

// Outline variant classes
const outlineVariantClasses = {
  default: 'border border-gray-300 text-gray-700 bg-white',
  primary: 'border border-blue-300 text-blue-700 bg-white',
  secondary: 'border border-gray-300 text-gray-700 bg-white',
  success: 'border border-green-300 text-green-700 bg-white',
  warning: 'border border-yellow-300 text-yellow-700 bg-white',
  danger: 'border border-red-300 text-red-700 bg-white',
  info: 'border border-cyan-300 text-cyan-700 bg-white'
}

// Dot color classes
const dotColorClasses = {
  default: 'bg-gray-400',
  primary: 'bg-blue-500',
  secondary: 'bg-gray-400',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
  info: 'bg-cyan-500'
}

// Computed classes
const badgeClasses = computed(() => [
  baseClasses,
  sizeClasses[props.size],
  props.outline ? outlineVariantClasses[props.variant] : variantClasses[props.variant],
  {
    'rounded-full': props.rounded || props.size === 'xs',
    'rounded-lg': !props.rounded && props.size !== 'xs',
    'animate-pulse': props.pulse
  }
])

const dotClasses = computed(() => [
  'rounded-full',
  dotColorClasses[props.variant],
  {
    'w-1.5 h-1.5': props.size === 'xs',
    'w-2 h-2': props.size === 'sm' || props.size === 'md',
    'w-2.5 h-2.5': props.size === 'lg',
    'animate-pulse': props.pulse
  }
])
</script>
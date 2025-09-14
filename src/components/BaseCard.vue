<template>
  <div :class="cardClasses" v-bind="$attrs">
    <!-- Card Header -->
    <header v-if="$slots.header || title" :class="headerClasses">
      <slot name="header">
        <div v-if="icon || $slots.icon" class="flex items-center space-x-4">
          <div :class="iconContainerClasses" v-if="icon || $slots.icon">
            <slot name="icon">
              <component :is="icon" :class="iconClasses" v-if="icon" />
            </slot>
          </div>
          <div class="flex-1">
            <h3 v-if="title" :class="titleClasses">{{ title }}</h3>
            <p v-if="subtitle" :class="subtitleClasses">{{ subtitle }}</p>
          </div>
        </div>
        <div v-else>
          <h3 v-if="title" :class="titleClasses">{{ title }}</h3>
          <p v-if="subtitle" :class="subtitleClasses">{{ subtitle }}</p>
        </div>
      </slot>
    </header>

    <!-- Card Content -->
    <div :class="contentClasses">
      <slot />
    </div>

    <!-- Card Footer -->
    <footer v-if="$slots.footer" :class="footerClasses">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  hover?: boolean
  clickable?: boolean
  title?: string
  subtitle?: string
  icon?: string
  gradient?: 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'gray'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  hover: false,
  clickable: false,
  rounded: 'lg',
  padding: 'md'
})

const slots = useSlots()

// Base classes
const baseClasses = 'relative transition-all duration-300'

// Variant classes
const variantClasses = {
  default: 'bg-white border border-gray-200',
  elevated: 'bg-white shadow-lg',
  outlined: 'bg-white border-2 border-gray-200',
  ghost: 'bg-gray-50/50 border border-gray-100'
}

// Gradient classes for background
const gradientClasses = {
  blue: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-blue-100/50',
  green: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-green-100/50',
  purple: 'bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 border-purple-100/50',
  yellow: 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-yellow-100/50',
  red: 'bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 border-red-100/50',
  gray: 'bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 border-gray-200/50'
}

// Icon container gradient classes
const iconGradientClasses = {
  blue: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  green: 'bg-gradient-to-br from-green-500 to-emerald-600',
  purple: 'bg-gradient-to-br from-purple-500 to-violet-600',
  yellow: 'bg-gradient-to-br from-yellow-500 to-amber-600',
  red: 'bg-gradient-to-br from-red-500 to-rose-600',
  gray: 'bg-gradient-to-br from-gray-700 to-slate-800'
}

// Size classes
const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}

// Padding classes
const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}

// Rounded classes
const roundedClasses = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl'
}

// Computed classes
const cardClasses = computed(() => [
  baseClasses,
  props.gradient ? gradientClasses[props.gradient] : variantClasses[props.variant],
  sizeClasses[props.size],
  roundedClasses[props.rounded],
  {
    'hover:shadow-lg group': props.hover && !props.gradient,
    'hover:shadow-xl group': props.hover && props.gradient,
    'cursor-pointer': props.clickable,
    'hover:border-blue-200/70': props.hover && props.gradient === 'blue',
    'hover:border-green-200/70': props.hover && props.gradient === 'green',
    'hover:border-purple-200/70': props.hover && props.gradient === 'purple',
    'hover:border-yellow-200/70': props.hover && props.gradient === 'yellow',
    'hover:border-red-200/70': props.hover && props.gradient === 'red',
    'hover:border-gray-300/70': props.hover && props.gradient === 'gray'
  }
])

const headerClasses = computed(() => [
  paddingClasses[props.padding],
  {
    'pb-0': props.padding !== 'none'
  }
])

const contentClasses = computed(() => [
  {
    [paddingClasses[props.padding]]: props.padding !== 'none',
    'pt-0': (slots.header || props.title) && props.padding !== 'none'
  }
])

const footerClasses = computed(() => [
  paddingClasses[props.padding],
  {
    'pt-0': props.padding !== 'none'
  }
])

const titleClasses = computed(() => [
  'font-bold text-gray-900 mb-2',
  {
    'text-lg': props.size === 'sm',
    'text-xl': props.size === 'md', 
    'text-2xl': props.size === 'lg'
  }
])

const subtitleClasses = 'text-gray-600 leading-relaxed'

const iconContainerClasses = computed(() => [
  'flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300',
  props.gradient ? iconGradientClasses[props.gradient] : 'bg-gray-100',
  {
    'w-12 h-12': props.size === 'sm',
    'w-16 h-16': props.size === 'md',
    'w-20 h-20': props.size === 'lg'
  }
])

const iconClasses = computed(() => [
  'text-white',
  {
    'w-6 h-6': props.size === 'sm',
    'w-8 h-8': props.size === 'md',
    'w-10 h-10': props.size === 'lg'
  }
])
</script>
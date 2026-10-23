<template>
  <component :is="tag" :type="tag === 'button' ? type : undefined" :class="classes">
    <slot name="icon" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /** primary = logo-blue fill, secondary = outlined */
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md'
    as?: 'button' | 'a' | 'router-link'
    type?: 'button' | 'submit'
  }>(),
  { variant: 'primary', size: 'md', as: 'button', type: 'button' },
)

const tag = computed(() => (props.as === 'router-link' ? RouterLink : props.as))

const variants = {
  primary: 'border-brand-solid bg-brand-solid text-on-brand shadow-[0_1px_2px_rgb(15_27_45/0.2)] hover:border-brand-solid-hover hover:bg-brand-solid-hover',
  secondary: 'border-rule-strong/60 bg-surface text-ink hover:bg-sunk',
}
const sizes = { sm: 'h-9 px-3 text-sm', md: 'h-12 px-6 text-[15px]' }

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50',
  variants[props.variant],
  sizes[props.size],
])
</script>

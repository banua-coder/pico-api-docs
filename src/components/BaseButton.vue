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
    /** solid = indigo field, madder = madder field, outline = hairline box */
    variant?: 'solid' | 'madder' | 'outline'
    size?: 'sm' | 'md'
    as?: 'button' | 'a' | 'router-link'
    type?: 'button' | 'submit'
  }>(),
  { variant: 'solid', size: 'md', as: 'button', type: 'button' },
)

const tag = computed(() => (props.as === 'router-link' ? RouterLink : props.as))

const variants = {
  solid: 'bg-field-indigo text-field-ink border-field-indigo on-field hover:bg-ink hover:border-ink',
  madder: 'bg-field-madder text-field-ink border-field-madder on-field hover:bg-ink hover:border-ink',
  outline: 'bg-transparent text-ink border-rule-strong hover:bg-sunk',
}
const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2.5 text-sm' }

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2 border font-semibold transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed',
  variants[props.variant],
  sizes[props.size],
])
</script>

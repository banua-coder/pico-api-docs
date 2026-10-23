<template>
  <button
    type="button"
    class="touch-target inline-flex h-9 w-9 items-center justify-center btn-ghost transition-colors"
    :aria-label="t('ui.theme.label', { current: t(`ui.theme.${theme}`), next: t(`ui.theme.${next}`) })"
    @click="toggleTheme"
  >
    <Icon :name="icon" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/icons/Icon.vue'
import { useTheme } from '@/composables/useTheme'

const { t } = useI18n()
const { theme, toggleTheme } = useTheme()

// Cycle: light -> dark -> system -> light
const next = computed(() => (theme.value === 'light' ? 'dark' : theme.value === 'dark' ? 'system' : 'light'))
const icon = computed(() => (theme.value === 'light' ? 'sun' : theme.value === 'dark' ? 'moon' : 'monitor'))
</script>

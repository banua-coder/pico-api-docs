<template>
  <button
    type="button"
    class="touch-target inline-flex h-10 items-center justify-center rounded-md px-2.5 text-sm font-semibold text-ink-soft transition-colors hover:bg-sunk hover:text-ink"
    :aria-label="t('ui.language.label', { current: t(`ui.language.${locale}`), next: t(`ui.language.${other}`) })"
    @click="toggleLanguage"
  >
    {{ locale.toUpperCase() }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useI18n()
const { locale, toggleLanguage } = useLanguage()
const other = computed(() => (locale.value === 'en' ? 'id' : 'en'))
</script>

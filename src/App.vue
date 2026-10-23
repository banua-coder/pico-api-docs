<template>
  <div class="flex min-h-screen flex-col pt-nav">
    <a href="#main-content" class="skip-link">{{ t('ui.skip') }}</a>
    <Navigation />
    <router-view />
    <SiteFooter />
    <SearchPalette />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Navigation from '@/components/Navigation.vue'
import SearchPalette from '@/components/SearchPalette.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useTheme } from '@/composables/useTheme'

const { t } = useI18n()
useTheme().initTheme()
usePageMeta()
</script>

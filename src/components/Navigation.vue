<template>
  <header class="on-field fixed inset-x-0 top-0 z-50 bg-field-indigo text-field-ink">
    <BarkBorder :height="14" animate />
    <nav :aria-label="t('nav.primary')" class="mx-auto flex h-[3.25rem] max-w-[90rem] items-center gap-4 px-4 sm:px-6">
      <router-link to="/" class="flex shrink-0 items-center gap-2.5" :aria-label="t('nav.homeLogo')">
        <img src="/pico-api-logo.webp" alt="" width="28" height="28" class="h-7 w-7 bg-field-ink p-0.5" />
        <span class="ledger-title text-xl">PICO SulTeng</span>
      </router-link>

      <ul class="ml-6 hidden items-center gap-1 md:flex">
        <li v-for="link in links" :key="link.to">
          <router-link :to="link.to" :class="linkClass" :aria-current="link.active ? 'page' : undefined" :data-active="link.active">
            {{ link.label }}
          </router-link>
        </li>
        <li>
          <a :href="SWAGGER_URL" target="_blank" rel="noopener noreferrer" :class="linkClass" class="inline-flex items-center gap-1.5">
            {{ t('nav.swagger') }}
            <Icon name="external" :size="14" />
            <span class="sr-only">{{ t('ui.opensNewTab') }}</span>
          </a>
        </li>
      </ul>

      <div class="ml-auto flex items-center gap-2">
        <button
          type="button"
          class="btn-ghost touch-target inline-flex h-9 items-center gap-2 px-2.5 text-sm md:min-w-48 md:justify-between"
          :aria-label="t('search.open')"
          aria-keyshortcuts="/ Control+K Meta+K"
          @click="openSearch"
        >
          <span class="inline-flex items-center gap-2"><Icon name="search" /><span class="hidden md:inline">{{ t('search.button') }}</span></span>
          <kbd class="hidden border border-field-ink/40 px-1.5 text-xs md:inline">/</kbd>
        </button>
        <div class="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <button
          type="button"
          class="btn-ghost touch-target inline-flex h-9 w-9 items-center justify-center md:hidden"
          :aria-label="mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon :name="mobileOpen ? 'close' : 'menu'" />
        </button>
      </div>
    </nav>

    <div v-show="mobileOpen" id="mobile-menu" class="border-t border-field-ink/25 md:hidden">
      <ul class="mx-auto max-w-[90rem] px-4 py-2">
        <li v-for="link in links" :key="link.to" class="border-b border-field-ink/15">
          <router-link :to="link.to" class="block py-3 text-base font-semibold" :aria-current="link.active ? 'page' : undefined" @click="mobileOpen = false">
            {{ link.label }}
          </router-link>
        </li>
        <li class="border-b border-field-ink/15">
          <a :href="SWAGGER_URL" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 py-3 text-base font-semibold">
            {{ t('nav.swagger') }} <Icon name="external" :size="16" />
            <span class="sr-only">{{ t('ui.opensNewTab') }}</span>
          </a>
        </li>
        <li class="flex items-center gap-2 py-3">
          <LanguageToggle />
          <ThemeToggle />
        </li>
      </ul>
    </div>
    <div class="h-px bg-field-ink/20" aria-hidden="true" />
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BarkBorder from '@/components/BarkBorder.vue'
import Icon from '@/components/icons/Icon.vue'
import LanguageToggle from '@/components/LanguageToggle.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { useSearch } from '@/composables/useSearch'
import { SWAGGER_URL } from '@/config/api'

const { t } = useI18n()
const route = useRoute()
const { openSearch } = useSearch()
const mobileOpen = ref(false)

const section = computed(() => (route.name === 'docs' ? String(route.params.section) : ''))

const links = computed(() => [
  { to: '/', label: t('nav.home'), active: route.path === '/' },
  { to: '/docs', label: t('nav.documentation'), active: route.name === 'docs' && section.value !== 'glossary' },
  { to: '/docs/glossary', label: t('nav.glossary'), active: section.value === 'glossary' },
])

watch(() => route.fullPath, () => (mobileOpen.value = false))

const linkClass =
  'block px-3 py-2 text-sm font-semibold hover:bg-field-ink/15 data-[active=true]:bg-field-ink data-[active=true]:text-field-indigo'
</script>

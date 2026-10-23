<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-rule bg-surface">
    <nav :aria-label="t('nav.primary')" class="mx-auto flex h-[calc(var(--nav-h)-1px)] max-w-[90rem] items-center gap-3 px-4 md:px-8 lg:px-16">
      <router-link to="/" class="mr-2 flex shrink-0 items-center gap-3 rounded-md md:mr-10" :aria-label="t('nav.homeLogo')">
        <img src="/pico-api-logo.webp" alt="" width="40" height="40" class="h-10 w-10" />
        <span class="text-[17px] font-bold tracking-[-0.01em]">PICO SulTeng</span>
      </router-link>

      <ul class="hidden items-center gap-2 md:flex">
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

      <div class="ml-auto flex items-center gap-2 md:gap-4">
        <button
          type="button"
          class="touch-target inline-flex h-10 items-center gap-2 rounded-lg border border-rule bg-ground px-3 text-sm text-muted transition-colors hover:border-rule-strong md:w-60"
          :aria-label="t('search.open')"
          aria-keyshortcuts="/ Control+K Meta+K"
          @click="openSearch"
        >
          <Icon name="search" :size="16" />
          <span class="hidden flex-1 text-left md:inline">{{ t('search.button') }}</span>
          <kbd class="hidden rounded border border-b-2 border-rule bg-surface/60 px-1.5 text-xs leading-4 text-muted md:inline">/</kbd>
        </button>
        <div class="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <button
          type="button"
          class="btn-ghost touch-target inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          :aria-label="mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon :name="mobileOpen ? 'close' : 'menu'" />
        </button>
      </div>
    </nav>

    <div v-show="mobileOpen" id="mobile-menu" class="border-t border-rule bg-surface md:hidden">
      <ul class="mx-auto max-w-[90rem] px-4 py-2">
        <li v-for="link in links" :key="link.to">
          <router-link
            :to="link.to"
            class="block rounded-md px-3 py-3 text-base font-medium data-[active=true]:bg-brand-tint"
            :data-active="link.active"
            :aria-current="link.active ? 'page' : undefined"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </router-link>
        </li>
        <li>
          <a :href="SWAGGER_URL" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium">
            {{ t('nav.swagger') }} <Icon name="external" :size="16" />
            <span class="sr-only">{{ t('ui.opensNewTab') }}</span>
          </a>
        </li>
        <li class="flex items-center gap-2 border-t border-rule px-1 py-3">
          <LanguageToggle />
          <ThemeToggle />
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
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
  'block rounded-md px-3 py-2 text-sm font-medium leading-6 text-ink-soft transition-colors hover:bg-sunk hover:text-ink data-[active=true]:bg-brand-tint data-[active=true]:text-ink'
</script>

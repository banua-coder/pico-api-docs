<template>
  <nav class="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-14">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <img src="/pico-api-logo.webp" alt="PICO API Logo" class="h-7 w-auto">
          <router-link to="/" class="text-base font-semibold text-gray-900 dark:text-white">PICO SulTeng</router-link>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link to="/" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" :class="{ 'text-gray-900 dark:text-white font-medium': $route.path === '/' }">
            {{ t('nav.home') }}
          </router-link>
          <router-link to="/docs" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" :class="{ 'text-gray-900 dark:text-white font-medium': $route.path === '/docs' }">
            {{ t('nav.documentation') }}
          </router-link>
          <a :href="SWAGGER_URL" target="_blank" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            {{ t('nav.swaggerUi') }}
          </a>
          <div class="flex items-center space-x-2 ml-2 pl-4 border-l border-gray-200 dark:border-gray-700">
            <button @click="toggleLanguage" class="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1 rounded border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500">
              {{ locale === 'en' ? 'EN' : 'ID' }}
            </button>
            <ThemeToggle />
          </div>
        </div>

        <!-- Mobile hamburger -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2 text-gray-600 dark:text-gray-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-4 py-3 space-y-2">
      <router-link to="/" @click="mobileOpen = false" class="block text-sm py-2 text-gray-700 dark:text-gray-300">{{ t('nav.home') }}</router-link>
      <router-link to="/docs" @click="mobileOpen = false" class="block text-sm py-2 text-gray-700 dark:text-gray-300">{{ t('nav.documentation') }}</router-link>
      <a :href="SWAGGER_URL" target="_blank" class="block text-sm py-2 text-gray-700 dark:text-gray-300">{{ t('nav.swaggerUi') }}</a>
      <div class="flex items-center space-x-3 pt-2 border-t border-gray-100 dark:border-gray-800">
        <button @click="toggleLanguage" class="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
          {{ locale === 'en' ? 'EN' : 'ID' }}
        </button>
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ThemeToggle from './ThemeToggle.vue'
import { SWAGGER_URL } from '@/config/api'

const { t, locale } = useI18n()
const mobileOpen = ref(false)

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'id' : 'en'
  localStorage.setItem('pico-language', locale.value)
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <Navigation />

    <!-- Hero -->
    <section id="main-content" class="pt-14">
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <!-- Status pill -->
        <div class="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full mb-8">
          <span class="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
          <span>All systems operational</span>
        </div>

        <img src="/pico-api-logo.webp" alt="PICO API" class="w-20 h-20 mx-auto mb-6 rounded-2xl" />
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
          PICO SulTeng COVID-19 API
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
          {{ t('hero.tagline') }}
        </p>

        <!-- Base URL -->
        <div class="inline-flex items-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 mb-8 font-mono text-sm text-gray-700 dark:text-gray-300">
          <span class="text-gray-400 dark:text-gray-500 mr-2">BASE URL</span>
          <span>{{ API_BASE_URL }}</span>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <router-link to="/docs" class="inline-flex items-center justify-center px-5 py-2.5 bg-[#635bff] hover:bg-[#4f46e5] text-white text-sm font-medium rounded-lg transition-colors">
            Get Started →
          </router-link>
          <a :href="SWAGGER_URL" target="_blank" class="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 text-sm font-medium rounded-lg transition-colors">
            Swagger UI
          </a>
        </div>
      </div>
    </section>

    <!-- Feature highlights -->
    <section class="border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-5xl mx-auto px-6 py-16">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="feature in features" :key="feature.title" class="space-y-2">
            <div class="text-2xl">{{ feature.icon }}</div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick start code -->
    <section class="bg-gray-50 dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-3xl mx-auto px-6 py-12">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Start</h2>
        <div class="code-panel">
          <div class="flex items-center space-x-2 px-4 py-2 border-b border-gray-700/50 text-xs text-gray-400">
            <span>cURL</span>
          </div>
          <pre><code>curl -X GET "{{ API_V1_URL }}/national/latest" \
  -H "Accept: application/json"</code></pre>
        </div>
      </div>
    </section>

    <!-- Data Sources -->
    <section class="max-w-5xl mx-auto px-6 py-16">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ t('dataSources.title') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-8">{{ t('dataSources.subtitle') }}</p>
      <div class="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
        <div v-for="source in dataSourceLogos" :key="source.name" class="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <img :src="source.logo" :alt="source.name" class="h-12 w-12 object-contain rounded-lg" />
          <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">{{ source.name }}</span>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 px-6 py-8">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>© {{ new Date().getFullYear() }} Banua Coders. PICO SulTeng COVID-19 API.</span>
        <div class="flex items-center space-x-4">
          <router-link to="/docs" class="hover:text-gray-900 dark:hover:text-white transition-colors">Documentation</router-link>
          <a :href="SWAGGER_URL" target="_blank" class="hover:text-gray-900 dark:hover:text-white transition-colors">Swagger UI</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Navigation from '@/components/Navigation.vue'
import { API_BASE_URL, API_V1_URL, SWAGGER_URL } from '@/config/api'

const { t } = useI18n()

const features = [
  { icon: '⚡', title: 'Fast & Reliable', desc: 'Built with Go for sub-100ms response times and high availability.' },
  { icon: '🗺️', title: 'Regional Focus', desc: 'Specialized COVID-19 data for Central Sulawesi (Sulawesi Tengah).' },
  { icon: '📦', title: 'RESTful JSON', desc: 'Standard REST API with JSON responses and CORS support.' },
  { icon: '📖', title: 'Well Documented', desc: 'Comprehensive docs with examples for every endpoint.' },
]

const dataSourceLogos = [
  { name: 'InaCOVID-19', logo: '/inacovid.webp' },
  { name: 'Dinkes Sulteng', logo: '/dinkes-sulteng.webp' },
  { name: 'Sulteng Lawan COVID', logo: '/sulteng-lawan-covid.webp' },
  { name: 'Detexi', logo: '/detexi.webp' },
  { name: 'Banua Coder', logo: '/banua-coder.webp' },
  { name: 'Ethical Hacker ID', logo: '/ethical-hacker-indonesia.webp' },
]
</script>

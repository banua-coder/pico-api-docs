<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 fixed left-0 top-0 bottom-0 z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">
        <!-- Fixed Header -->
        <div class="flex-shrink-0 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-3 mb-4">
            <img src="/pico-api-logo.webp" alt="PICO API Logo" class="h-8 w-auto logo-dark-mode">
            <router-link to="/" class="text-xl font-bold gradient-text">PICO SulTeng</router-link>
          </div>
          <h2 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">API Documentation</h2>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">PICO SulTeng COVID-19 API</p>
          
          <!-- Theme & Language Controls -->
          <div class="flex items-center space-x-2">
            <!-- Language Toggle -->
            <button 
              @click="toggleLanguage"
              class="flex items-center justify-center px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 bg-white hover:bg-gray-50 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
              :aria-label="`Switch to ${locale === 'en' ? 'Indonesian' : 'English'} language`"
            >
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
              </svg>
              <span class="ml-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">{{ locale === 'en' ? 'EN' : 'ID' }}</span>
            </button>
            
            <!-- Theme Toggle -->
            <ThemeToggle />
          </div>
        </div>

        <!-- Scrollable Navigation Menu -->
        <div class="flex-1 overflow-y-auto p-4 sm:p-6">
          <nav class="space-y-2">
            <!-- Getting Started -->
            <div>
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Getting Started</h3>
              <ul class="space-y-1">
                <li>
                  <a href="#overview" @click="setActiveSection('overview')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'overview' ? 'bg-pico-sky/20 dark:bg-pico-sky/30 text-pico-deep dark:text-pico-sky font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#authentication" @click="setActiveSection('authentication')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'authentication' ? 'bg-pico-sky/20 dark:bg-pico-sky/30 text-pico-deep dark:text-pico-sky font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    Authentication
                  </a>
                </li>
                <li>
                  <a href="#error-handling" @click="setActiveSection('error-handling')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'error-handling' ? 'bg-pico-sky/20 dark:bg-pico-sky/30 text-pico-deep dark:text-pico-sky font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Error Handling
                  </a>
                </li>
                <li>
                  <a href="#glossary" @click="setActiveSection('glossary')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'glossary' ? 'bg-pico-sky/20 dark:bg-pico-sky/30 text-pico-deep dark:text-pico-sky font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    Glossary
                  </a>
                </li>
              </ul>
            </div>

            <!-- API Endpoints -->
            <div class="pt-6">
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">API Endpoints</h3>
              <ul class="space-y-1">
                <!-- National Endpoints -->
                <li>
                  <div class="flex items-center justify-between">
                    <button @click="toggleSection('national')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex-1 text-left">
                      <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      National Data
                    </button>
                    <svg class="w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform" :class="expandedSections.national ? 'rotate-90' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                  <ul v-show="expandedSections.national" class="ml-7 mt-2 space-y-1">
                    <li>
                      <a href="#national-latest" @click="setActiveSection('national-latest')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'national-latest' ? 'bg-pico-sky/20 dark:bg-pico-sky/30 text-pico-deep dark:text-pico-sky font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'">
                        Latest Data
                      </a>
                    </li>
                    <li>
                      <a href="#national-historical" @click="setActiveSection('national-historical')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'national-historical' ? 'bg-pico-sky/20 dark:bg-pico-sky/30 text-pico-deep dark:text-pico-sky font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'">
                        Historical Data
                      </a>
                    </li>
                  </ul>
                </li>

                <!-- Core Endpoints -->
                <li>
                  <a href="#root-endpoint" @click="setActiveSection('root-endpoint')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'root-endpoint' ? 'bg-pico-sky/20 dark:bg-pico-sky/30 text-pico-deep dark:text-pico-sky font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Root Endpoint
                  </a>
                </li>
                <li>
                  <a href="#health-check" @click="setActiveSection('health-check')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'health-check' ? 'bg-pico-sky/20 dark:bg-pico-sky/30 text-pico-deep dark:text-pico-sky font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Health Check
                  </a>
                </li>

                <!-- Province Endpoints -->
                <li>
                  <div class="flex items-center justify-between">
                    <button @click="toggleSection('provinces')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex-1 text-left">
                      <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      Province Data
                    </button>
                    <svg class="w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform" :class="expandedSections.provinces ? 'rotate-90' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                  <ul v-show="expandedSections.provinces" class="ml-7 mt-2 space-y-1">
                    <li>
                      <a href="#provinces" @click="setActiveSection('provinces')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'provinces' ? 'bg-pico-sky/20 dark:bg-pico-sky/30 text-pico-deep dark:text-pico-sky font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'">
                        All Provinces
                      </a>
                    </li>
                    <li>
                      <a href="#province-cases" @click="setActiveSection('province-cases')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'province-cases' ? 'bg-pico-sky/20 dark:bg-pico-sky/30 text-pico-deep dark:text-pico-sky font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'">
                        Province Cases
                      </a>
                    </li>
                  </ul>
                </li>

                <!-- Regional Endpoints -->
                <li>
                  <div class="flex items-center justify-between opacity-60">
                    <div class="flex items-center px-3 py-2 text-sm rounded-lg flex-1 text-left cursor-not-allowed">
                      <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span class="text-gray-500 dark:text-gray-400">Regional Data</span>
                      <span class="ml-auto text-xs bg-pico-sky/30 dark:bg-pico-sky/40 text-pico-deep dark:text-pico-sky px-2 py-1 rounded-md font-medium">Coming Soon</span>
                    </div>
                  </div>
                  <div class="ml-7 mt-1 text-xs text-gray-400 dark:text-gray-500 px-3">
                    Central Sulawesi • City/Regency Data
                  </div>
                </li>

                <!-- Healthcare Endpoints -->
                <li>
                  <div class="flex items-center justify-between opacity-60">
                    <div class="flex items-center px-3 py-2 text-sm rounded-lg flex-1 text-left cursor-not-allowed">
                      <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <span class="text-gray-500 dark:text-gray-400">Healthcare Data</span>
                      <span class="ml-auto text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-md font-medium">Coming Soon</span>
                    </div>
                  </div>
                  <div class="ml-7 mt-1 text-xs text-gray-400 dark:text-gray-500 px-3">
                    Hospital Beds • Vaccines • Testing Centers
                  </div>
                </li>
              </ul>
            </div>

            <!-- External Links -->
            <div class="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Resources</h3>
              <ul class="space-y-1">
                <li>
                  <a href="https://pico-api.banuacoder.com/swagger/index.html" target="_blank" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Interactive API
                  </a>
                </li>
                <li>
                  <a href="https://github.com/banua-coder/pico-api-go" target="_blank" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <svg class="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    Source Code
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <!-- Fixed Footer -->
        <div class="flex-shrink-0 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <div class="text-center">
            <div class="flex items-center justify-center space-x-2 mb-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4M7 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4H17M7 4H17M9 9H15M9 13H12"></path>
              </svg>
              <span class="text-xs font-medium text-gray-600 dark:text-gray-400">Version {{ version }}</span>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-500">
              Built with ❤️ by 
              <a href="https://github.com/banua-coder" target="_blank" class="text-pico-blue hover:text-pico-deep dark:text-pico-sky dark:hover:text-pico-blue font-medium transition-colors">
                Banua Coder
              </a>
            </p>
          </div>
        </div>
      </aside>

      <!-- Mobile sidebar backdrop -->
      <div v-if="sidebarOpen" @click="closeSidebar" class="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"></div>

      <!-- Main content -->
      <main class="flex-1 lg:ml-64 w-full min-w-0 pt-0">
        <!-- Mobile header with sidebar toggle -->
        <div class="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-4">
          <button @click="openSidebar" class="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            Menu
          </button>
        </div>

        <div class="p-3 sm:p-4 md:p-6 lg:p-8">
          <!-- Dynamic Section Components -->
          <OverviewSection :isActive="activeSection === 'overview'" />
          <RootEndpointSection :isActive="activeSection === 'root-endpoint'" />
          <HealthCheckSection :isActive="activeSection === 'health-check'" />
          <NationalLatestSection :isActive="activeSection === 'national-latest'" />
          <NationalHistoricalSection :isActive="activeSection === 'national-historical'" />
          <ProvincesSection :isActive="activeSection === 'provinces'" />
          <ProvinceCasesSection :isActive="activeSection === 'province-cases'" />
          <AuthenticationSection :isActive="activeSection === 'authentication'" />
          <ErrorHandlingSection :isActive="activeSection === 'error-handling'" />
          <GlossarySection :isActive="activeSection === 'glossary'" />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ThemeToggle from '@/components/ThemeToggle.vue'
import packageJson from '../../package.json'
import OverviewSection from '@/components/documentation/OverviewSection.vue'
import NationalLatestSection from '@/components/documentation/NationalLatestSection.vue'
import NationalHistoricalSection from '@/components/documentation/NationalHistoricalSection.vue'
import RootEndpointSection from '@/components/documentation/RootEndpointSection.vue'
import HealthCheckSection from '@/components/documentation/HealthCheckSection.vue'
import ProvincesSection from '@/components/documentation/ProvincesSection.vue'
import ProvinceCasesSection from '@/components/documentation/ProvinceCasesSection.vue'
import AuthenticationSection from '@/components/documentation/AuthenticationSection.vue'
import ErrorHandlingSection from '@/components/documentation/ErrorHandlingSection.vue'
import GlossarySection from '@/components/documentation/GlossarySection.vue'

const { locale } = useI18n()

// Version from package.json
const version = packageJson.version

// Sidebar state
const sidebarOpen = ref(false)
const activeSection = ref('overview')

// Expandable sections
const expandedSections = reactive({
  national: true,
  provinces: false,
  regional: false,
  healthcare: false
})

// Functions
const openSidebar = () => {
  sidebarOpen.value = true
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

const setActiveSection = (section: string) => {
  activeSection.value = section
  closeSidebar()
}

const toggleSection = (section: keyof typeof expandedSections) => {
  expandedSections[section] = !expandedSections[section]
}

// Toggle language function
const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'id' : 'en'
  locale.value = newLocale
  localStorage.setItem('pico-language', newLocale)
}

// Initialize
onMounted(() => {
  // Set default active section based on URL hash
  const hash = window.location.hash.substring(1)
  if (hash) {
    activeSection.value = hash
  }
  
  // Expand the national section by default since it has content
  expandedSections.national = true
})
</script>

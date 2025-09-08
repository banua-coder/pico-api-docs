<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <Navigation variant="solid" />

    <div class="flex min-h-screen pt-16">
      <!-- Sidebar -->
      <aside class="w-64 bg-white shadow-lg border-r border-gray-200 fixed left-0 top-16 bottom-0 overflow-y-auto z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">
        <div class="p-6">
          <!-- Header -->
          <div class="mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-2">API Documentation</h2>
            <p class="text-sm text-gray-600">PICO SulTeng COVID-19 API</p>
          </div>

          <!-- Navigation Menu -->
          <nav class="space-y-2">
            <!-- Getting Started -->
            <div>
              <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Getting Started</h3>
              <ul class="space-y-1">
                <li>
                  <a href="#overview" @click="setActiveSection('overview')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'overview' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#authentication" @click="setActiveSection('authentication')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'authentication' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    Authentication
                  </a>
                </li>
                <li>
                  <a href="#error-handling" @click="setActiveSection('error-handling')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'error-handling' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Error Handling
                  </a>
                </li>
                <li>
                  <a href="#glossary" @click="setActiveSection('glossary')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'glossary' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'">
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
              <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">API Endpoints</h3>
              <ul class="space-y-1">
                <!-- National Endpoints -->
                <li>
                  <div class="flex items-center justify-between">
                    <button @click="toggleSection('national')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 flex-1 text-left">
                      <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      National Data
                    </button>
                    <svg class="w-4 h-4 text-gray-400 transition-transform" :class="expandedSections.national ? 'rotate-90' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                  <ul v-show="expandedSections.national" class="ml-7 mt-2 space-y-1">
                    <li>
                      <a href="#national-latest" @click="setActiveSection('national-latest')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'national-latest' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-50'">
                        Latest Data
                      </a>
                    </li>
                    <li>
                      <a href="#national-historical" @click="setActiveSection('national-historical')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors" :class="activeSection === 'national-historical' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-50'">
                        Historical Data
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
                      <span class="text-gray-500">Regional Data</span>
                      <span class="ml-auto text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md font-medium">Coming Soon</span>
                    </div>
                  </div>
                  <div class="ml-7 mt-1 text-xs text-gray-400 px-3">
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
                      <span class="text-gray-500">Healthcare Data</span>
                      <span class="ml-auto text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md font-medium">Coming Soon</span>
                    </div>
                  </div>
                  <div class="ml-7 mt-1 text-xs text-gray-400 px-3">
                    Hospital Beds • Vaccines • Testing Centers
                  </div>
                </li>
              </ul>
            </div>

            <!-- External Links -->
            <div class="pt-6 border-t border-gray-200">
              <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Resources</h3>
              <ul class="space-y-1">
                <li>
                  <a href="https://pico-api.banuacoder.com/swagger/index.html" target="_blank" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50">
                    <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Interactive API
                  </a>
                </li>
                <li>
                  <a href="https://github.com/banua-coder/pico-api-go" target="_blank" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50">
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
      </aside>

      <!-- Mobile sidebar backdrop -->
      <div v-if="sidebarOpen" @click="closeSidebar" class="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"></div>

      <!-- Main content -->
      <main class="flex-1 lg:ml-64 w-full min-w-0">
        <!-- Mobile header with sidebar toggle -->
        <div class="lg:hidden bg-white border-b border-gray-200 px-4 py-4">
          <button @click="openSidebar" class="flex items-center text-gray-600 hover:text-gray-900">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            Menu
          </button>
        </div>

        <div class="p-4 sm:p-6 lg:p-8">
          <!-- Dynamic Section Components -->
          <OverviewSection :isActive="activeSection === 'overview'" />
          <NationalLatestSection :isActive="activeSection === 'national-latest'" />
          <NationalHistoricalSection :isActive="activeSection === 'national-historical'" />
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
import Navigation from '@/components/Navigation.vue'
import OverviewSection from '@/components/documentation/OverviewSection.vue'
import NationalLatestSection from '@/components/documentation/NationalLatestSection.vue'
import NationalHistoricalSection from '@/components/documentation/NationalHistoricalSection.vue'
import AuthenticationSection from '@/components/documentation/AuthenticationSection.vue'
import ErrorHandlingSection from '@/components/documentation/ErrorHandlingSection.vue'
import GlossarySection from '@/components/documentation/GlossarySection.vue'

// Sidebar state
const sidebarOpen = ref(false)
const activeSection = ref('overview')

// Expandable sections
const expandedSections = reactive({
  national: true,
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
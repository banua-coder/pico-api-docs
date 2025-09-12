<template>
  <nav ref="navbar" class="fixed w-full top-0 z-50 transition-all duration-500 ease-out" :class="navbarClass">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center space-x-3">
            <img src="/pico-api-logo.webp" alt="PICO API Logo" class="h-10 w-auto">
            <router-link to="/" class="text-2xl font-bold gradient-text">PICO SulTeng</router-link>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link 
              to="/" 
              class="text-gray-600 hover:text-pico-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-gray-900': $route.path === '/' }"
            >
              {{ t('nav.home') }}
            </router-link>
            <router-link 
              to="/docs" 
              class="text-gray-600 hover:text-pico-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-gray-900': $route.path === '/docs' }"
            >
              {{ t('nav.documentation') }}
            </router-link>
            <router-link 
              to="/api" 
              class="text-gray-600 hover:text-pico-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-gray-900': $route.path === '/api' }"
            >
              {{ t('nav.apiReference') }}
            </router-link>
            <a href="https://pico-api.banuacoder.com/api/v1" target="_blank" class="bg-pico-blue hover:bg-pico-deep text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              {{ t('nav.liveApi') }}
            </a>
            <!-- Theme & Language Controls -->
            <div class="flex items-center space-x-2 ml-4">
              <!-- Theme Toggle -->
              <ThemeToggle />
              
              <!-- Language Toggle -->
              <button 
                @click="toggleLanguage"
                class="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-pico-sky transition-colors bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:border-gray-600 dark:hover:border-pico-sky"
                :aria-label="`Switch to ${locale === 'en' ? 'Indonesian' : 'English'} language`"
              >
                <svg class="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-200">{{ locale === 'en' ? 'ID' : 'EN' }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-2">
          <!-- Theme Toggle for Mobile -->
          <ThemeToggle variant="compact" />
          
          <!-- Language Toggle for Mobile -->
          <button 
            @click="toggleLanguage"
            class="flex items-center space-x-1 px-2 py-1.5 rounded-lg border border-gray-200 hover:border-pico-sky transition-colors bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:border-gray-600"
            :aria-label="`Switch to ${locale === 'en' ? 'Indonesian' : 'English'} language`"
          >
            <svg class="w-3 h-3 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
            </svg>
            <span class="text-xs font-medium text-gray-700 dark:text-gray-200">{{ locale === 'en' ? 'ID' : 'EN' }}</span>
          </button>
          
          <!-- Hamburger button -->
          <button 
            @click="toggleMobileMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-pico-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pico-blue transition-colors"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle mobile navigation menu"
            :aria-controls="mobileMenuOpen ? 'mobile-menu' : undefined"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger icon -->
            <svg 
              class="block h-5 w-5 transition-transform duration-200"
              :class="{ 'rotate-90': mobileMenuOpen }"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu overlay -->
    <div 
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-200 md:hidden"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile menu -->
    <div 
      id="mobile-menu"
      class="fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden"
      :class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      role="navigation"
      :aria-hidden="!mobileMenuOpen"
    >
      <div class="p-6 pt-20">
        <div class="space-y-4">
          <router-link 
            to="/" 
            @click="closeMobileMenu"
            class="block text-gray-600 hover:text-pico-blue px-3 py-2 rounded-md text-base font-medium border-b border-gray-100 transition-colors"
            :class="{ 'text-gray-900': $route.path === '/' }"
          >
            {{ t('nav.home') }}
          </router-link>
          <router-link 
            to="/docs" 
            @click="closeMobileMenu"
            class="block text-gray-600 hover:text-pico-blue px-3 py-2 rounded-md text-base font-medium border-b border-gray-100 transition-colors"
            :class="{ 'text-gray-900': $route.path === '/docs' }"
          >
            {{ t('nav.documentation') }}
          </router-link>
          <router-link 
            to="/api" 
            @click="closeMobileMenu"
            class="block text-gray-600 hover:text-pico-blue px-3 py-2 rounded-md text-base font-medium border-b border-gray-100 transition-colors"
            :class="{ 'text-gray-900': $route.path === '/api' }"
          >
            {{ t('nav.apiReference') }}
          </router-link>
          <a 
            href="https://pico-api.banuacoder.com/api/v1" 
            target="_blank" 
            @click="closeMobileMenu"
            class="block bg-pico-blue hover:bg-pico-deep text-white px-4 py-3 rounded-lg text-base font-medium transition-colors text-center"
          >
            {{ t('nav.liveApi') }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ThemeToggle from './ThemeToggle.vue'

const { t, locale } = useI18n()

// Props for styling variants
interface Props {
  variant?: 'transparent' | 'solid'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'transparent'
})

// Navigation scroll behavior
const navbar = ref<HTMLElement | null>(null)
const scrollY = ref(0)
const isScrolled = ref(false)

// Mobile menu state
const mobileMenuOpen = ref(false)

const navbarClass = computed(() => {
  if (props.variant === 'solid') {
    return 'bg-white shadow-sm'
  }
  
  return isScrolled.value 
    ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
    : 'bg-transparent'
})

// Scroll handler
const handleScroll = () => {
  scrollY.value = window.scrollY
  isScrolled.value = scrollY.value > 50
}

// Toggle language function
const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'id' : 'en'
  locale.value = newLocale
  localStorage.setItem('pico-language', newLocale)
}

// Mobile menu functions
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Prevent body scroll when menu is open
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : 'auto'
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

onMounted(() => {
  if (props.variant === 'transparent') {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  if (props.variant === 'transparent') {
    window.removeEventListener('scroll', handleScroll)
  }
  // Restore body scroll on component unmount
  document.body.style.overflow = 'auto'
})
</script>

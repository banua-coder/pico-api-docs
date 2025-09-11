<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
    <!-- Skip Navigation -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Navigation -->
    <Navigation />

    <!-- Hero Section -->
    <div class="relative overflow-hidden min-h-screen flex items-center pt-16 pb-8">
      <!-- Background Pattern -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Gradient mesh background -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        </div>

        <!-- COVID-themed pattern overlay -->
        <div class="absolute inset-0 opacity-30">
          <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <!-- Subtle grid pattern -->
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgb(99 102 241)" stroke-width="0.5" opacity="0.1" />
              </pattern>

              <!-- Virus-like pattern -->
              <pattern id="virus-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
                <!-- Central core -->
                <circle cx="60" cy="60" r="8" fill="rgb(79 70 229)" opacity="0.08" />
                <!-- Spike proteins as small dots -->
                <circle cx="45" cy="45" r="2" fill="rgb(79 70 229)" opacity="0.06" />
                <circle cx="75" cy="45" r="2" fill="rgb(79 70 229)" opacity="0.06" />
                <circle cx="45" cy="75" r="2" fill="rgb(79 70 229)" opacity="0.06" />
                <circle cx="75" cy="75" r="2" fill="rgb(79 70 229)" opacity="0.06" />
                <circle cx="60" cy="35" r="1.5" fill="rgb(79 70 229)" opacity="0.05" />
                <circle cx="85" cy="60" r="1.5" fill="rgb(79 70 229)" opacity="0.05" />
                <circle cx="60" cy="85" r="1.5" fill="rgb(79 70 229)" opacity="0.05" />
                <circle cx="35" cy="60" r="1.5" fill="rgb(79 70 229)" opacity="0.05" />
              </pattern>

              <!-- Molecular connection pattern -->
              <pattern id="molecules" width="160" height="160" patternUnits="userSpaceOnUse">
                <!-- Connected nodes -->
                <circle cx="80" cy="80" r="3" fill="rgb(59 130 246)" opacity="0.1" />
                <circle cx="40" cy="40" r="2" fill="rgb(59 130 246)" opacity="0.08" />
                <circle cx="120" cy="40" r="2" fill="rgb(59 130 246)" opacity="0.08" />
                <circle cx="40" cy="120" r="2" fill="rgb(59 130 246)" opacity="0.08" />
                <circle cx="120" cy="120" r="2" fill="rgb(59 130 246)" opacity="0.08" />
                <!-- Connection lines -->
                <line x1="80" y1="80" x2="40" y2="40" stroke="rgb(59 130 246)" stroke-width="0.5" opacity="0.05" />
                <line x1="80" y1="80" x2="120" y2="40" stroke="rgb(59 130 246)" stroke-width="0.5" opacity="0.05" />
                <line x1="80" y1="80" x2="40" y2="120" stroke="rgb(59 130 246)" stroke-width="0.5" opacity="0.05" />
                <line x1="80" y1="80" x2="120" y2="120" stroke="rgb(59 130 246)" stroke-width="0.5" opacity="0.05" />
              </pattern>
            </defs>

            <!-- Layer the patterns -->
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#virus-pattern)" />
            <rect width="100%" height="100%" fill="url(#molecules)" />
          </svg>
        </div>

        <!-- Floating elements -->
        <div
          class="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse">
        </div>
        <div
          class="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse animation-delay-2000">
        </div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-pink-600/20 rounded-full blur-2xl animate-pulse animation-delay-4000">
        </div>

        <!-- Floating geometric shapes -->
        <div class="absolute top-20 left-1/4 w-8 h-8 bg-blue-500/20 rotate-45 animate-bounce animation-delay-1000">
        </div>
        <div
          class="absolute bottom-32 right-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse animation-delay-2000">
        </div>
        <div class="absolute top-1/3 right-20 w-6 h-6 bg-purple-500/20 rotate-12 animate-spin"
          style="animation-duration: 8s;"></div>
        <div
          class="absolute bottom-20 left-20 w-10 h-10 bg-cyan-500/20 rounded-lg rotate-45 animate-bounce animation-delay-3000">
        </div>
      </div>

      <div id="main-content" class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          <!-- Left Content -->
          <div class="text-center lg:text-left">
            <!-- Badge -->
            <div
              class="inline-flex items-center px-3 py-1.5 mb-6 text-xs sm:text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              {{ t('hero.badge') }}
            </div>

            <!-- Main heading with improved typography and mobile-responsive sizing -->
            <h1
              class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-[1.15] animate-slide-right">
              <span class="block">
                <span class="gradient-text inline-block animate-fade-in-up">{{ t('hero.title').split(' ')[0] }}</span>
                <span
                  class="text-gray-800 dark:text-gray-200 inline-block animate-fade-in-up animation-delay-200 ml-1 sm:ml-2">{{
                    t('hero.title').split(' ')[1] }}</span>
              </span>
              <span
                class="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-600 dark:text-gray-400 mt-1 md:mt-2 font-bold animate-fade-in-up animation-delay-400">{{
                  t('hero.subtitle') }}</span>
            </h1>

            <!-- Enhanced subtitle with better typography -->
            <div class="space-y-2 sm:space-y-3 mb-6 md:mb-8 animate-fade-in-up animation-delay-600">
              <p
                class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-xl lg:max-w-none">
                <span
                  v-html="t('hero.description', { region: `<span class='font-bold text-blue-600'>${t('common.centralSulawesi')}</span>` })"></span>
                <span class="block mt-1"
                  v-html="t('hero.descriptionSub', { context: `<span class='font-semibold text-indigo-600'>${t('common.nationalContext')}</span>` })"></span>
              </p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ t('hero.tagline') }}
              </p>
            </div>

            <!-- Interactive CTA Buttons with enhanced animations -->
            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start animate-on-scroll">
              <router-link to="/docs"
                class="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 text-sm sm:text-base hover:rotate-1">
                <span class="flex items-center justify-center">
                  {{ t('hero.getStarted') }}
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                    </path>
                  </svg>
                </span>
              </router-link>
              <a href="https://pico-api.banuacoder.com/swagger/index.html" target="_blank"
                class="group border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-500 backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 hover:bg-white/90 dark:hover:bg-gray-800/90 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 text-sm sm:text-base hover:-rotate-1">
                <span class="flex items-center justify-center">
                  <svg class="w-4 h-4 mr-2 group-hover:scale-110 transition-all duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  {{ t('hero.apiDocs') }}
                </span>
              </a>
            </div>

            <!-- PICO App Download Section & API Status -->
            <div class="mt-8 space-y-4 animate-fade-in-up animation-delay-900">
              <div class="flex items-center justify-center lg:justify-start space-x-4">
                <div class="flex items-center space-x-2">
                  <img src="/pico-app-logo.webp" alt="PICO App" class="w-6 h-6 logo-dark-mode">
                  <span class="text-gray-600 dark:text-gray-400 text-sm">
                    {{ locale === 'en' ? 'Also available:' : 'Juga tersedia:' }}
                  </span>
                </div>
                <a href="https://banuacoders.com/app/pico/" target="_blank"
                  class="group inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                  <span>{{ t('hero.downloadApp') }}</span>
                  <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>

              <!-- API Status indicator -->
              <div
                class="inline-flex items-center px-2 py-1 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full text-green-700 dark:text-green-400 text-xs">
                <div class="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                <span class="font-medium">
                  {{ t('hero.apiStatus') }}
                </span>
              </div>
            </div>
          </div>

          <!-- Right Content - API Demo -->
          <div class="order-first lg:order-last animate-fade-in-up animation-delay-1200 mt-8 lg:mt-0">
            <div class="relative">
              <!-- Interactive floating decoration elements - COVID virus-inspired shapes -->
              <!-- Virus-like shape 1 - Interactive with complex floating animation -->
              <div class="absolute -top-4 -right-4 opacity-15 animate-virus-float virus-interactive cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 32 32"
                  class="text-blue-500 hover:text-blue-400 transition-colors duration-300">
                  <defs>
                    <linearGradient id="virus1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <!-- Central core -->
                  <circle cx="16" cy="16" r="8" fill="url(#virus1)" />
                  <!-- Spike proteins -->
                  <circle cx="8" cy="8" r="2.5" fill="url(#virus1)" />
                  <circle cx="24" cy="8" r="2.5" fill="url(#virus1)" />
                  <circle cx="8" cy="24" r="2.5" fill="url(#virus1)" />
                  <circle cx="24" cy="24" r="2.5" fill="url(#virus1)" />
                  <circle cx="16" cy="4" r="2" fill="url(#virus1)" />
                  <circle cx="28" cy="16" r="2" fill="url(#virus1)" />
                  <circle cx="16" cy="28" r="2" fill="url(#virus1)" />
                  <circle cx="4" cy="16" r="2" fill="url(#virus1)" />
                </svg>
              </div>

              <!-- Virus-like shape 2 - Interactive molecular drift animation -->
              <div
                class="absolute -bottom-4 -left-4 opacity-12 animate-molecular-drift particle-interactive cursor-pointer"
                style="animation-delay: 1.5s;">
                <svg width="24" height="24" viewBox="0 0 24 24"
                  class="text-green-500 hover:text-green-400 transition-colors duration-300">
                  <defs>
                    <linearGradient id="virus2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#10B981;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <!-- Central core -->
                  <circle cx="12" cy="12" r="6" fill="url(#virus2)" />
                  <!-- Simplified spike proteins -->
                  <circle cx="6" cy="6" r="1.8" fill="url(#virus2)" />
                  <circle cx="18" cy="6" r="1.8" fill="url(#virus2)" />
                  <circle cx="6" cy="18" r="1.8" fill="url(#virus2)" />
                  <circle cx="18" cy="18" r="1.8" fill="url(#virus2)" />
                  <circle cx="12" cy="2" r="1.5" fill="url(#virus2)" />
                  <circle cx="22" cy="12" r="1.5" fill="url(#virus2)" />
                  <circle cx="12" cy="22" r="1.5" fill="url(#virus2)" />
                  <circle cx="2" cy="12" r="1.5" fill="url(#virus2)" />
                </svg>
              </div>

              <!-- Abstract molecular structure - Interactive organic pulse -->
              <div class="absolute top-1/4 -right-8 animate-organic-pulse virus-interactive cursor-pointer"
                style="animation-delay: 2.5s;">
                <svg width="20" height="20" viewBox="0 0 20 20"
                  class="text-purple-500 hover:text-purple-400 transition-colors duration-300">
                  <defs>
                    <linearGradient id="molecule" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#EC4899;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <!-- Connected nodes representing molecular structure -->
                  <circle cx="10" cy="10" r="3" fill="url(#molecule)" />
                  <circle cx="4" cy="4" r="2" fill="url(#molecule)" />
                  <circle cx="16" cy="4" r="2" fill="url(#molecule)" />
                  <circle cx="4" cy="16" r="2" fill="url(#molecule)" />
                  <circle cx="16" cy="16" r="2" fill="url(#molecule)" />
                  <!-- Connection lines -->
                  <line x1="10" y1="10" x2="4" y2="4" stroke="url(#molecule)" stroke-width="1" opacity="0.6" />
                  <line x1="10" y1="10" x2="16" y2="4" stroke="url(#molecule)" stroke-width="1" opacity="0.6" />
                  <line x1="10" y1="10" x2="4" y2="16" stroke="url(#molecule)" stroke-width="1" opacity="0.6" />
                  <line x1="10" y1="10" x2="16" y2="16" stroke="url(#molecule)" stroke-width="1" opacity="0.6" />
                </svg>
              </div>

              <!-- Interactive floating virus particles -->
              <div
                class="absolute top-1/2 -left-6 opacity-8 animate-spiral-rotation particle-interactive cursor-pointer"
                style="animation-delay: 3s;">
                <svg width="16" height="16" viewBox="0 0 16 16"
                  class="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                  <defs>
                    <linearGradient id="particle1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#6366F1;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#06B6D4;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <circle cx="8" cy="8" r="4" fill="url(#particle1)" />
                  <circle cx="4" cy="4" r="1.2" fill="url(#particle1)" />
                  <circle cx="12" cy="4" r="1.2" fill="url(#particle1)" />
                  <circle cx="4" cy="12" r="1.2" fill="url(#particle1)" />
                  <circle cx="12" cy="12" r="1.2" fill="url(#particle1)" />
                </svg>
              </div>

              <div class="absolute bottom-1/3 -right-12 opacity-6 animate-virus-float virus-interactive cursor-pointer"
                style="animation-delay: 4s; animation-duration: 8s;">
                <svg width="14" height="14" viewBox="0 0 14 14"
                  class="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  <defs>
                    <linearGradient id="particle2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#06B6D4;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <circle cx="7" cy="7" r="3.5" fill="url(#particle2)" />
                  <circle cx="7" cy="2" r="1" fill="url(#particle2)" />
                  <circle cx="12" cy="7" r="1" fill="url(#particle2)" />
                  <circle cx="7" cy="12" r="1" fill="url(#particle2)" />
                  <circle cx="2" cy="7" r="1" fill="url(#particle2)" />
                </svg>
              </div>

              <div class="relative">
                <div class="relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700/50">
                  <!-- Subtle gradient overlay -->
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5 pointer-events-none">
                  </div>

                  <!-- Terminal Header -->
                  <div
                    class="bg-gray-800/90 px-2 sm:px-4 py-2 sm:py-3 flex items-center space-x-2 border-b border-gray-700/50">
                    <div class="flex space-x-1">
                      <div
                        class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer">
                      </div>
                      <div
                        class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer">
                      </div>
                      <div
                        class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer">
                      </div>
                    </div>
                    <div class="flex-1 text-center">
                      <span class="text-gray-300 text-[10px] sm:text-xs font-medium">PICO API Terminal</span>
                    </div>
                    <div class="flex items-center px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                      <div class="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></div>
                      <span class="text-xs text-green-400 font-medium">Live</span>
                    </div>
                  </div>

                  <!-- Code Content -->
                  <div
                    class="p-1 sm:p-2 md:p-4 font-mono text-[8px] sm:text-xs relative bg-gray-900/50 overflow-x-auto">
                    <!-- Request -->
                    <div class="mb-2 sm:mb-4">
                      <div class="text-green-400 mb-1 sm:mb-2 typing-animation overflow-x-auto">
                        <div class="whitespace-nowrap">
                          <span class="text-gray-500">$</span> curl
                          https://pico-api.banuacoder.com/api/v1/national/latest
                        </div>
                      </div>
                    </div>

                    <!-- Response -->
                    <div
                      class="text-gray-300 leading-none sm:leading-tight md:leading-relaxed response-animation opacity-0 overflow-x-auto">
                      <div class="text-blue-400">{</div>
                      <div class="pl-1 sm:pl-2 md:pl-4">
                        <span class="text-yellow-400">"status"</span>: <span class="text-green-300">"success"</span>,
                      </div>
                      <div class="pl-1 sm:pl-2 md:pl-4">
                        <span class="text-yellow-400">"data"</span>: <div class="text-blue-400 inline">{</div>
                      </div>
                      <div class="pl-2 sm:pl-4 md:pl-8">
                        <span class="text-yellow-400">"day"</span>: <span class="text-orange-400">1247</span>,
                      </div>
                      <div class="pl-2 sm:pl-4 md:pl-8">
                        <span class="text-yellow-400">"date"</span>: <span
                          class="text-green-300">"2024-09-07T00:00:00Z"</span>,
                      </div>
                      <div class="pl-2 sm:pl-4 md:pl-8">
                        <span class="text-yellow-400">"daily"</span>: <div class="text-blue-400 inline">{</div>
                      </div>
                      <div class="pl-3 sm:pl-6 md:pl-12">
                        <span class="text-yellow-400">"positive"</span>: <span class="text-orange-400">127</span>,
                      </div>
                      <div class="pl-3 sm:pl-6 md:pl-12">
                        <span class="text-yellow-400">"recovered"</span>: <span class="text-orange-400">98</span>,
                      </div>
                      <div class="pl-3 sm:pl-6 md:pl-12">
                        <span class="text-yellow-400">"deceased"</span>: <span class="text-orange-400">2</span>
                      </div>
                      <div class="pl-2 sm:pl-4 md:pl-8 text-blue-400">},</div>
                      <div class="pl-2 sm:pl-4 md:pl-8">
                        <span class="text-yellow-400">"cumulative"</span>: <div class="text-blue-400 inline">{</div>
                      </div>
                      <div class="pl-3 sm:pl-6 md:pl-12">
                        <span class="text-yellow-400">"positive"</span>: <span class="text-orange-400">6754298</span>,
                      </div>
                      <div class="pl-3 sm:pl-6 md:pl-12">
                        <span class="text-yellow-400">"recovered"</span>: <span class="text-orange-400">6589567</span>,
                      </div>
                      <div class="pl-3 sm:pl-6 md:pl-12">
                        <span class="text-yellow-400">"deceased"</span>: <span class="text-orange-400">161031</span>
                      </div>
                      <div class="pl-2 sm:pl-4 md:pl-8 text-blue-400">}</div>
                      <div class="pl-1 sm:pl-2 md:pl-4 text-blue-400">}</div>
                      <div class="text-blue-400">}</div>

                      <!-- Typing cursor -->
                      <div class="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse typing-cursor opacity-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Data sources section integrated in hero -->
        <DataSources />
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12 md:mb-20">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 md:mb-6">
            {{ t('features.title') }}
          </h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            {{ t('features.subtitle') }}
          </p>
        </div>

        <!-- Interactive Bento Grid with scroll animations -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto animate-stagger">
          <!-- Large Feature Card with enhanced interactions -->
          <div
            class="sm:col-span-2 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-blue-100/50 hover:border-blue-200/70 transition-all duration-500 feature-card-hover group cursor-pointer animate-on-scroll stagger-item dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 dark:border-blue-800/50 dark:hover:border-blue-700/70">
            <div
              class="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                </path>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 md:mb-4">
              {{ t('features.realTimeData.title') }}
            </h3>
            <p
              class="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-snug sm:leading-normal md:leading-relaxed">
              {{ t('features.realTimeData.description') }}
            </p>
            <div class="mt-4 sm:mt-6 flex items-center text-xs sm:text-sm text-blue-600 font-medium">
              <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              {{ t('features.realTimeData.badge') }}
            </div>
          </div>

          <!-- Performance Card -->
          <div
            class="sm:col-span-2 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-green-100/50 hover:border-green-200/70 transition-all duration-500 feature-card-hover group cursor-pointer animate-on-scroll stagger-item dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 dark:border-green-800/50 dark:hover:border-green-700/70">
            <div
              class="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 md:mb-4">
              High Performance</h3>
            <p
              class="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-snug sm:leading-normal md:leading-relaxed">
              Built with Go for lightning-fast API responses with intelligent hybrid pagination system</p>
            <div class="mt-4 sm:mt-6 text-xs sm:text-sm text-green-600 font-medium">
              <span class="bg-green-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                < 100ms avg response</span>
            </div>
          </div>

          <!-- Security Card -->
          <div
            class="sm:col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-purple-100/50 hover:border-purple-200/70 transition-all duration-500 feature-card-hover group cursor-pointer animate-on-scroll stagger-item dark:from-purple-900/20 dark:via-violet-900/20 dark:to-indigo-900/20 dark:border-purple-800/50 dark:hover:border-purple-700/70">
            <div
              class="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 sm:w-5.5 md:w-6 h-5 sm:h-5.5 md:h-6 text-white" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                </path>
              </svg>
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2 md:mb-3">
              Secure & Reliable</h3>
            <p class="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Robust error handling and secure
              data access</p>
          </div>

          <!-- Documentation Card -->
          <div
            class="sm:col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-yellow-100/50 hover:border-yellow-200/70 transition-all duration-500 feature-card-hover group cursor-pointer animate-on-scroll stagger-item dark:from-yellow-900/20 dark:via-amber-900/20 dark:to-orange-900/20 dark:border-yellow-800/50 dark:hover:border-yellow-700/70">
            <div
              class="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 sm:w-5.5 md:w-6 h-5 sm:h-5.5 md:h-6 text-white" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                </path>
              </svg>
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2 md:mb-3">
              Rich Documentation</h3>
            <p class="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Interactive Swagger UI with
              examples</p>
          </div>

          <!-- Regional Focus Card -->
          <div
            class="sm:col-span-2 md:col-span-4 lg:col-span-2 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-red-100/50 hover:border-red-200/70 transition-all duration-500 feature-card-hover group cursor-pointer animate-on-scroll stagger-item dark:from-red-900/20 dark:via-rose-900/20 dark:to-pink-900/20 dark:border-red-800/50 dark:hover:border-red-700/70">
            <div
              class="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 sm:w-5.5 md:w-6 h-5 sm:h-5.5 md:h-6 text-white" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3
              class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2 md:mb-3">
              Regional Focus</h3>
            <p class="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Specialized for Central Sulawesi
              data</p>
          </div>

          <!-- Developer Friendly - Full width -->
          <div
            class="sm:col-span-2 md:col-span-4 lg:col-span-6 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-200/50 hover:border-gray-300/70 transition-all duration-500 feature-card-hover group cursor-pointer animate-on-scroll stagger-item dark:from-gray-800/50 dark:via-slate-800/50 dark:to-gray-800/50 dark:border-gray-700/50 dark:hover:border-gray-600/70">
            <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div class="flex flex-col sm:flex-row items-start sm:items-center mb-4 md:mb-0">
                <div
                  class="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-gray-700 to-slate-800 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 sm:w-7 h-6 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2">
                    Developer Friendly</h3>
                  <p class="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">RESTful API with JSON
                    responses, CORS support, and flexible query parameters</p>
                </div>
              </div>
              <div class="flex flex-wrap sm:flex-nowrap gap-2 sm:space-x-3">
                <span
                  class="bg-blue-100 text-blue-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">REST</span>
                <span
                  class="bg-green-100 text-green-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">JSON</span>
                <span
                  class="bg-purple-100 text-purple-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">CORS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="relative bg-gradient-to-b from-gray-900 to-black dark:from-gray-950 dark:to-black overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <!-- Brand Section -->
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <div class="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <img src="/pico-api-logo.webp" alt="PICO API Logo" class="h-8 w-auto brightness-0 invert">
              </div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {{ t('hero.title') }} API
              </h3>
            </div>
            <p class="text-gray-400 mb-6 max-w-md leading-relaxed">
              {{ t('footer.description') }}
            </p>

            <!-- Social Links -->
            <div class="flex items-center space-x-4 mb-6">
              <a href="https://github.com/banua-coder/pico-api-go" target="_blank"
                class="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-200 group">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://github.com/ryanaidilp" target="_blank"
                class="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-200 group">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </a>
              <a href="https://banuacoder.com" target="_blank"
                class="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-200 group">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
                  </path>
                </svg>
              </a>
            </div>

            <!-- Creator Info -->
            <div class="text-sm text-gray-500">
              <span
                v-html="t('footer.createdBy', { author: `<a href='https://github.com/ryanaidilp' target='_blank' class='text-blue-400 hover:text-blue-300 transition-colors'>${t('common.author')}</a>` })"></span>
              <span class="mx-2">•</span>
              <a href="https://banuacoder.com" target="_blank"
                class="text-blue-400 hover:text-blue-300 transition-colors">Banua Coder</a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-white font-semibold mb-4 flex items-center">
              <span class="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></span>
              {{ t('footer.quickLinks') }}
            </h4>
            <ul class="space-y-3">
              <li>
                <router-link to="/docs"
                  class="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span class="w-1 h-1 bg-gray-600 group-hover:bg-blue-400 rounded-full mr-2 transition-colors"></span>
                  {{ t('nav.documentation') }}
                </router-link>
              </li>
              <li>
                <router-link to="/api"
                  class="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span class="w-1 h-1 bg-gray-600 group-hover:bg-blue-400 rounded-full mr-2 transition-colors"></span>
                  {{ t('nav.apiReference') }}
                </router-link>
              </li>
              <li>
                <a href="https://pico-api.banuacoder.com/swagger/index.html" target="_blank"
                  class="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span class="w-1 h-1 bg-gray-600 group-hover:bg-blue-400 rounded-full mr-2 transition-colors"></span>
                  Swagger UI
                  <svg class="w-3 h-3 ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://banuacoders.com/app/pico/" target="_blank"
                  class="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span class="w-1 h-1 bg-gray-600 group-hover:bg-blue-400 rounded-full mr-2 transition-colors"></span>
                  {{ t('footer.picoApp') }}
                  <svg class="w-3 h-3 ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- API Info -->
          <div>
            <h4 class="text-white font-semibold mb-4 flex items-center">
              <span class="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mr-3"></span>
              {{ t('footer.apiBaseUrl') }}
            </h4>
            <div class="api-card-container">
              <!-- Neon walking light effect on hover -->
              <div
                class="relative bg-white/5 dark:bg-gray-800/20 backdrop-filter backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/20 dark:border-gray-700/30 rounded-xl p-4 hover:border-white/30 dark:hover:border-gray-600/40 hover:bg-white/10 dark:hover:bg-gray-800/30 transition-all duration-200">
                <div class="flex items-center justify-between">
                  <code
                    class="text-xs lg:text-[10px] xl:text-xs font-mono text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text whitespace-nowrap">
                  pico-api.banuacoder.com/api/v1
                </code>
                  <button @click="copyApiUrl" class="p-1.5 hover:bg-gray-700/50 rounded-lg transition-colors group">
                    <svg v-if="!apiUrlCopied" class="w-4 h-4 text-gray-400 group-hover:text-white" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                      </path>
                    </svg>
                    <svg v-else class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="mt-12 pt-8 border-t border-gray-800/50">
          <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p class="text-sm text-gray-500">
              {{ t('footer.copyright') }}
            </p>
            <div class="flex items-center space-x-6 text-sm text-gray-500">
              <a href="https://github.com/banua-coder/pico-api-go/blob/main/LICENSE" target="_blank"
                class="hover:text-gray-300 transition-colors">
                License
              </a>
              <a href="https://github.com/banua-coder/pico-api-go/issues" target="_blank"
                class="hover:text-gray-300 transition-colors">
                Report Issue
              </a>
              <span class="text-gray-600">v{{ version }}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Navigation from '@/components/Navigation.vue'
import DataSources from '@/components/DataSources.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import packageJson from '../../package.json'

const { t, locale } = useI18n()
const version = packageJson.version
const { initScrollAnimations } = useScrollAnimation()

const apiUrlCopied = ref(false)

const copyApiUrl = async () => {
  try {
    await navigator.clipboard.writeText('https://pico-api.banuacoder.com/api/v1')
    apiUrlCopied.value = true
    setTimeout(() => {
      apiUrlCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

onMounted(() => {
  // Initialize scroll animations after component is mounted
  initScrollAnimations()
})
</script>

<style scoped>
/* Liquid Glass Effect Enhancements */
.feature-card-hover {
  transition: all 0.3s ease;
}

.feature-card-hover:hover {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .feature-card-hover:hover {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Enhanced gradient overlays for liquid glass look */
.bg-gradient-to-br {
  position: relative;
}

.bg-gradient-to-br::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
}

/* Subtle glass reflection on hover */
@media (hover: hover) {
  .feature-card-hover:hover::before {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%);
  }
}
</style>

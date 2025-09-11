<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <Navigation />

    <!-- Hero Section -->
    <div class="relative overflow-hidden min-h-screen flex items-center pt-16 pb-8">
      <!-- Background Pattern -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Gradient mesh background -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        
        <!-- Geometric pattern overlay -->
        <div class="absolute inset-0 opacity-40">
          <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(99 102 241)" stroke-width="1" opacity="0.1"/>
              </pattern>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="rgb(79 70 229)" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        
        <!-- Floating elements -->
        <div class="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-pink-600/20 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
        
        <!-- Floating geometric shapes -->
        <div class="absolute top-20 left-1/4 w-8 h-8 bg-blue-500/20 rotate-45 animate-bounce animation-delay-1000"></div>
        <div class="absolute bottom-32 right-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse animation-delay-2000"></div>
        <div class="absolute top-1/3 right-20 w-6 h-6 bg-purple-500/20 rotate-12 animate-spin" style="animation-duration: 8s;"></div>
        <div class="absolute bottom-20 left-20 w-10 h-10 bg-cyan-500/20 rounded-lg rotate-45 animate-bounce animation-delay-3000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          <!-- Left Content -->
          <div class="text-center lg:text-left">
            <!-- Badge -->
            <div class="inline-flex items-center px-3 py-1.5 mb-6 text-xs sm:text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              {{ t('hero.badge') }}
            </div>
            
            <!-- Main heading with improved typography -->
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 leading-[1.15]">
              <span class="block">
                <span class="gradient-text inline-block animate-fade-in-up">{{ t('hero.title').split(' ')[0] }}</span>
                <span class="text-gray-800 inline-block animate-fade-in-up animation-delay-200 ml-1 sm:ml-2">{{ t('hero.title').split(' ')[1] }}</span>
              </span>
              <span class="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mt-1 md:mt-2 font-bold animate-fade-in-up animation-delay-400">{{ t('hero.subtitle') }}</span>
            </h1>
            
            <!-- Enhanced subtitle with better typography -->
            <div class="space-y-2 sm:space-y-3 mb-6 md:mb-8 animate-fade-in-up animation-delay-600">
              <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed max-w-xl lg:max-w-none">
                <span v-html="t('hero.description', { region: `<span class='font-bold text-blue-600'>${t('common.centralSulawesi')}</span>` })"></span>
                <span class="block mt-1" v-html="t('hero.descriptionSub', { context: `<span class='font-semibold text-indigo-600'>${t('common.nationalContext')}</span>` })"></span>
              </p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                {{ t('hero.tagline') }}
              </p>
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
              <router-link to="/docs" class="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                <span class="flex items-center justify-center">
                  {{ t('hero.getStarted') }}
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
              </router-link>
              <a href="https://pico-api.banuacoder.com/swagger/index.html" target="_blank" class="group border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm bg-white/70 hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                <span class="flex items-center justify-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  {{ t('hero.apiDocs') }}
                </span>
              </a>
            </div>

            <!-- PICO App Download Section & API Status -->
            <div class="mt-8 space-y-4 animate-fade-in-up animation-delay-900">
              <div class="flex items-center justify-center lg:justify-start space-x-4">
                <div class="flex items-center space-x-2">
                  <img src="/pico-app-logo.webp" alt="PICO App" class="w-6 h-6">
                  <span class="text-gray-600 text-sm">
                    {{ locale === 'en' ? 'Also available:' : 'Juga tersedia:' }}
                  </span>
                </div>
                <a href="https://banuacoders.com/app/pico/" target="_blank" class="group inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                  <span>{{ t('hero.downloadApp') }}</span>
                  <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
              
              <!-- API Status indicator -->
              <div class="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span class="text-sm font-medium">
                  {{ t('hero.apiStatus') }}
                </span>
                <a href="https://pico-api.banuacoder.com/api/v1/health" target="_blank" class="ml-2 text-green-600 hover:text-green-700">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Right Content - API Demo -->
          <div class="order-first lg:order-last animate-fade-in-up animation-delay-1200 mt-8 lg:mt-0">
            <div class="relative">
              <!-- Floating decoration elements -->
              <div class="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div class="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg rotate-45 opacity-20 animate-bounce"></div>
              
              <div class="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm relative">
                <!-- Subtle gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5 pointer-events-none"></div>
                
                <!-- Terminal Header -->
                <div class="bg-gray-800/90 backdrop-blur-sm px-2 sm:px-4 py-2 sm:py-3 flex items-center space-x-2 border-b border-gray-700/50">
                  <div class="flex space-x-1">
                    <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                    <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                    <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                  </div>
                  <div class="flex-1 text-center">
                    <span class="text-gray-300 text-[10px] sm:text-xs font-medium">PICO API Terminal</span>
                  </div>
                  <div class="flex items-center space-x-1 text-[10px] sm:text-xs text-gray-500">
                    <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live</span>
                  </div>
                </div>
              
                <!-- Code Content -->
                <div class="p-1 sm:p-2 md:p-4 font-mono text-[8px] sm:text-xs relative bg-gray-900/50 overflow-x-auto">
                <!-- Request -->
                <div class="mb-2 sm:mb-4">
                  <div class="text-green-400 mb-1 sm:mb-2 typing-animation overflow-x-auto">
                    <div class="whitespace-nowrap">
                      <span class="text-gray-500">$</span> curl https://pico-api.banuacoder.com/api/v1/national/latest
                    </div>
                  </div>
                </div>
                
                <!-- Response -->
                <div class="text-gray-300 leading-none sm:leading-tight md:leading-relaxed response-animation opacity-0 overflow-x-auto">
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
                    <span class="text-yellow-400">"date"</span>: <span class="text-green-300">"2024-09-07T00:00:00Z"</span>,
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
        
        <!-- Data sources section integrated in hero -->
        <DataSources />
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-20">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {{ t('features.title') }}
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {{ t('features.subtitle') }}
          </p>
        </div>
        
        <!-- Bento Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
          <!-- Large Feature Card -->
          <div class="sm:col-span-2 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 md:p-8 rounded-3xl border border-blue-100/50 hover:border-blue-200/70 transition-all duration-300 hover:shadow-lg group">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              {{ t('features.realTimeData.title') }}
            </h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              {{ t('features.realTimeData.description') }}
            </p>
            <div class="mt-6 flex items-center text-sm text-blue-600 font-medium">
              <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              {{ t('features.realTimeData.badge') }}
            </div>
          </div>

          <!-- Performance Card -->
          <div class="sm:col-span-2 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6 md:p-8 rounded-3xl border border-green-100/50 hover:border-green-200/70 transition-all duration-300 hover:shadow-lg group">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">High Performance</h3>
            <p class="text-gray-600 text-lg leading-relaxed">Built with Go for lightning-fast API responses with intelligent hybrid pagination system</p>
            <div class="mt-6 text-sm text-green-600 font-medium">
              <span class="bg-green-100 px-3 py-1 rounded-full">< 100ms avg response</span>
            </div>
          </div>

          <!-- Security Card -->
          <div class="sm:col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 p-4 md:p-6 rounded-3xl border border-purple-100/50 hover:border-purple-200/70 transition-all duration-300 hover:shadow-lg group">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Secure & Reliable</h3>
            <p class="text-sm md:text-base text-gray-600">Robust error handling and secure data access</p>
          </div>

          <!-- Documentation Card -->
          <div class="sm:col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 p-4 md:p-6 rounded-3xl border border-yellow-100/50 hover:border-yellow-200/70 transition-all duration-300 hover:shadow-lg group">
            <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Rich Documentation</h3>
            <p class="text-sm md:text-base text-gray-600">Interactive Swagger UI with examples</p>
          </div>

          <!-- Regional Focus Card -->
          <div class="sm:col-span-2 md:col-span-4 lg:col-span-2 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 p-4 md:p-6 rounded-3xl border border-red-100/50 hover:border-red-200/70 transition-all duration-300 hover:shadow-lg group">
            <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Regional Focus</h3>
            <p class="text-sm md:text-base text-gray-600">Specialized for Central Sulawesi data</p>
          </div>

          <!-- Developer Friendly - Full width -->
          <div class="sm:col-span-2 md:col-span-4 lg:col-span-6 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200/50 hover:border-gray-300/70 transition-all duration-300 hover:shadow-lg group">
            <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div class="flex items-center mb-4 md:mb-0">
                <div class="w-14 h-14 bg-gradient-to-br from-gray-700 to-slate-800 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Developer Friendly</h3>
                  <p class="text-gray-600 text-lg">RESTful API with JSON responses, CORS support, and flexible query parameters</p>
                </div>
              </div>
              <div class="flex space-x-3">
                <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">REST</span>
                <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">JSON</span>
                <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">CORS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- API Endpoints Preview -->
    <div class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick API Overview</h2>
          <p class="text-xl text-gray-600">Essential endpoints to get you started</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Health Check</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
              GET /api/v1/health
            </div>
            <p class="text-gray-600 mt-4">Check API status and database connectivity</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">National Data</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
              GET /api/v1/national<br/>
              GET /api/v1/national/latest
            </div>
            <p class="text-gray-600 mt-4">National COVID-19 statistics and latest data</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Province Data</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
              GET /api/v1/provinces<br/>
              GET /api/v1/provinces/cases
            </div>
            <p class="text-gray-600 mt-4">Province information and case data with pagination</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Specific Province</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
              GET /api/v1/provinces/72/cases
            </div>
            <p class="text-gray-600 mt-4">Central Sulawesi specific COVID-19 data</p>
          </div>
        </div>
      </div>
    </div>


    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <img src="/pico-api-logo.webp" alt="PICO API Logo" class="h-8 w-auto">
              <h3 class="text-2xl font-bold">{{ t('hero.title') }} API</h3>
            </div>
            <p class="text-gray-400 mb-4">
              {{ t('footer.description') }}
            </p>
            <p class="text-gray-400 text-sm">
              <span v-html="t('footer.createdBy', { author: `<a href='https://github.com/ryanaidilp' target='_blank' class='text-blue-400 hover:text-blue-300'>${t('common.author')}</a>` })"></span><br/>
              <a href="https://banuacoder.com" target="_blank" class="text-blue-400 hover:text-blue-300">Banua Coder</a>
            </p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">{{ t('footer.quickLinks') }}</h4>
            <ul class="space-y-2">
              <li><router-link to="/docs" class="text-gray-400 hover:text-white">{{ t('nav.documentation') }}</router-link></li>
              <li><router-link to="/api" class="text-gray-400 hover:text-white">{{ t('nav.apiReference') }}</router-link></li>
              <li><a href="https://pico-api.banuacoder.com/swagger/index.html" target="_blank" class="text-gray-400 hover:text-white">Swagger UI</a></li>
              <li><a href="https://banuacoders.com/app/pico/" target="_blank" class="text-gray-400 hover:text-white">{{ t('footer.picoApp') }}</a></li>
              <li><a href="https://github.com/banua-coder/pico-api-go" target="_blank" class="text-gray-400 hover:text-white">API Source Code</a></li>
              <li><a href="https://github.com/ryanaidilp" target="_blank" class="text-gray-400 hover:text-white">Developer GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">{{ t('footer.apiBaseUrl') }}</h4>
            <div class="bg-gray-800 rounded-lg p-4 font-mono text-sm text-green-400">
              https://pico-api.banuacoder.com/api/v1
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{{ t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Navigation from '@/components/Navigation.vue'
import DataSources from '@/components/DataSources.vue'

const { t, locale } = useI18n()
</script>

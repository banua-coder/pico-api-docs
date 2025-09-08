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
                  <div class="flex items-center justify-between">
                    <button @click="toggleSection('regional')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 flex-1 text-left">
                      <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      Regional Data
                      <span class="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Coming Soon</span>
                    </button>
                    <svg class="w-4 h-4 text-gray-400 transition-transform" :class="expandedSections.regional ? 'rotate-90' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                  <ul v-show="expandedSections.regional" class="ml-7 mt-2 space-y-1">
                    <li>
                      <span class="flex items-center px-3 py-2 text-sm text-gray-400 cursor-not-allowed">
                        Central Sulawesi
                      </span>
                    </li>
                    <li>
                      <span class="flex items-center px-3 py-2 text-sm text-gray-400 cursor-not-allowed">
                        City/Regency Data
                      </span>
                    </li>
                  </ul>
                </li>

                <!-- Healthcare Endpoints -->
                <li>
                  <div class="flex items-center justify-between">
                    <button @click="toggleSection('healthcare')" class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 flex-1 text-left">
                      <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                      </svg>
                      Healthcare Data
                      <span class="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Coming Soon</span>
                    </button>
                    <svg class="w-4 h-4 text-gray-400 transition-transform" :class="expandedSections.healthcare ? 'rotate-90' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                  <ul v-show="expandedSections.healthcare" class="ml-7 mt-2 space-y-1">
                    <li>
                      <span class="flex items-center px-3 py-2 text-sm text-gray-400 cursor-not-allowed">
                        Hospital Beds
                      </span>
                    </li>
                    <li>
                      <span class="flex items-center px-3 py-2 text-sm text-gray-400 cursor-not-allowed">
                        Vaccine Status
                      </span>
                    </li>
                    <li>
                      <span class="flex items-center px-3 py-2 text-sm text-gray-400 cursor-not-allowed">
                        Testing Centers
                      </span>
                    </li>
                  </ul>
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
      <main class="flex-1 lg:ml-64">
        <!-- Mobile header with sidebar toggle -->
        <div class="lg:hidden bg-white border-b border-gray-200 px-4 py-4">
          <button @click="openSidebar" class="flex items-center text-gray-600 hover:text-gray-900">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            Menu
          </button>
        </div>

        <div class="p-6 lg:p-8">
          <!-- Overview Section -->
          <section v-show="activeSection === 'overview'" id="overview" class="mb-16">
            <div class="mb-8">
              <h1 class="text-4xl font-bold text-gray-900 mb-4">API Documentation</h1>
              <p class="text-xl text-gray-600 mb-6">
                Comprehensive guide for integrating with the PICO SulTeng COVID-19 API. 
                Get real-time Indonesian COVID-19 data with our RESTful endpoints.
              </p>
              
              <!-- API Status -->
              <div class="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 mb-8">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span class="text-sm font-medium">API Status: Operational</span>
              </div>
            </div>

            <!-- Getting Started Card -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
                <h2 class="text-2xl font-bold text-white mb-2">Getting Started</h2>
                <p class="text-blue-100">Quick start guide to using the PICO SulTeng API</p>
              </div>
              
              <div class="p-8">
                <div class="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Base URL</h3>
                    <div class="bg-gray-50 rounded-lg p-4 font-mono text-sm border">
                      <code class="text-blue-600">https://pico-api.banuacoder.com/api/v1</code>
                    </div>
                    
                    <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">Content Type</h3>
                    <div class="bg-gray-50 rounded-lg p-4 font-mono text-sm border">
                      <code class="text-green-600">application/json</code>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Quick Example</h3>
                    <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                      <div class="text-green-400 mb-2">
                        <span class="text-gray-500">$</span> curl -X GET \\
                      </div>
                      <div class="text-blue-300 ml-4">
                        "https://pico-api.banuacoder.com/api/v1/national/latest"
                      </div>
                    </div>
                    
                    <div class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div class="flex items-center text-green-800">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-sm font-medium">No authentication required for public endpoints</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- National Latest Section -->
          <section v-show="activeSection === 'national-latest'" id="national-latest" class="mb-16">
            <div class="mb-8">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h1 class="text-3xl font-bold text-gray-900">Get Latest National Data</h1>
              </div>
              <p class="text-lg text-gray-600 mb-6">Retrieve the most recent national COVID-19 statistics for Indonesia.</p>
            </div>

            <!-- Endpoint Details Card -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div class="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
                <div class="flex flex-wrap items-center gap-4">
                  <span class="bg-white text-green-800 px-4 py-2 rounded-lg text-sm font-bold">GET</span>
                  <code class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-mono text-sm">/national/latest</code>
                </div>
              </div>
              
              <div class="p-8">
                <div class="grid lg:grid-cols-2 gap-8">
                  <!-- Request Example -->
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Request</h3>
                    <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div class="text-green-400 mb-1">GET /api/v1/national/latest HTTP/1.1</div>
                      <div class="text-blue-300 mb-1">Host: pico-api.banuacoder.com</div>
                      <div class="text-yellow-300">Accept: application/json</div>
                    </div>
                  </div>
                  
                  <!-- Response Example -->
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Response</h3>
                    <div class="bg-gray-900 rounded-lg p-4 font-mono text-xs overflow-x-auto max-h-96">
                      <div class="text-blue-400">{</div>
                      <div class="ml-2">
                        <div><span class="text-yellow-400">"status"</span>: <span class="text-green-300">"success"</span>,</div>
                        <div><span class="text-yellow-400">"data"</span>: {</div>
                        <div class="ml-2">
                          <div><span class="text-yellow-400">"day"</span>: <span class="text-orange-400">883</span>,</div>
                          <div><span class="text-yellow-400">"date"</span>: <span class="text-green-300">"2022-12-18T16:37:54Z"</span>,</div>
                          <div><span class="text-yellow-400">"daily"</span>: {</div>
                          <div class="ml-2">
                            <div><span class="text-yellow-400">"positive"</span>: <span class="text-orange-400">860</span>,</div>
                            <div><span class="text-yellow-400">"recovered"</span>: <span class="text-orange-400">2035</span>,</div>
                            <div><span class="text-yellow-400">"deceased"</span>: <span class="text-orange-400">14</span>,</div>
                            <div><span class="text-yellow-400">"active"</span>: <span class="text-orange-400">-1189</span></div>
                          </div>
                          <div>},</div>
                          <div><span class="text-yellow-400">"cumulative"</span>: {</div>
                          <div class="ml-2">
                            <div><span class="text-yellow-400">"positive"</span>: <span class="text-orange-400">6295729</span>,</div>
                            <div><span class="text-yellow-400">"recovered"</span>: <span class="text-orange-400">6126860</span>,</div>
                            <div><span class="text-yellow-400">"deceased"</span>: <span class="text-orange-400">157730</span>,</div>
                            <div><span class="text-yellow-400">"active"</span>: <span class="text-orange-400">11139</span></div>
                          </div>
                          <div>},</div>
                          <div><span class="text-yellow-400">"statistics"</span>: {</div>
                          <div class="ml-2">
                            <div><span class="text-yellow-400">"percentages"</span>: {</div>
                            <div class="ml-2">
                              <div><span class="text-yellow-400">"active"</span>: <span class="text-orange-400">0.177</span>,</div>
                              <div><span class="text-yellow-400">"recovered"</span>: <span class="text-orange-400">97.318</span>,</div>
                              <div><span class="text-yellow-400">"deceased"</span>: <span class="text-orange-400">2.505</span></div>
                            </div>
                            <div>},</div>
                            <div><span class="text-yellow-400">"reproduction_rate"</span>: {</div>
                            <div class="ml-2">
                              <div><span class="text-yellow-400">"value"</span>: <span class="text-gray-400">null</span>,</div>
                              <div><span class="text-yellow-400">"upper_bound"</span>: <span class="text-gray-400">null</span>,</div>
                              <div><span class="text-yellow-400">"lower_bound"</span>: <span class="text-gray-400">null</span></div>
                            </div>
                            <div>}</div>
                          </div>
                          <div>}</div>
                        </div>
                        <div>}</div>
                      </div>
                      <div class="text-blue-400">}</div>
                    </div>
                  </div>
                </div>

                <!-- Response Fields -->
                <div class="mt-8 bg-blue-50 rounded-xl p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Response Fields</h3>
                  <div class="overflow-x-auto">
                    <table class="min-w-full">
                      <thead>
                        <tr class="border-b border-blue-200">
                          <th class="text-left py-3 pr-4 font-semibold text-gray-900">Field</th>
                          <th class="text-left py-3 pr-4 font-semibold text-gray-900">Type</th>
                          <th class="text-left py-3 font-semibold text-gray-900">Description</th>
                        </tr>
                      </thead>
                      <tbody class="text-sm">
                        <tr class="border-b border-blue-100">
                          <td class="py-3 pr-4 font-mono text-blue-600">status</td>
                          <td class="py-3 pr-4 text-gray-600">string</td>
                          <td class="py-3 text-gray-600">Response status ("success" or "error")</td>
                        </tr>
                        <tr class="border-b border-blue-100">
                          <td class="py-3 pr-4 font-mono text-blue-600">data.day</td>
                          <td class="py-3 pr-4 text-gray-600">integer</td>
                          <td class="py-3 text-gray-600">Days since pandemic start</td>
                        </tr>
                        <tr class="border-b border-blue-100">
                          <td class="py-3 pr-4 font-mono text-blue-600">data.date</td>
                          <td class="py-3 pr-4 text-gray-600">string</td>
                          <td class="py-3 text-gray-600">ISO 8601 date of the data</td>
                        </tr>
                        <tr class="border-b border-blue-100">
                          <td class="py-3 pr-4 font-mono text-blue-600">data.daily.*</td>
                          <td class="py-3 pr-4 text-gray-600">integer</td>
                          <td class="py-3 text-gray-600">Daily new cases (positive, recovered, deceased, active)</td>
                        </tr>
                        <tr class="border-b border-blue-100">
                          <td class="py-3 pr-4 font-mono text-blue-600">data.cumulative.*</td>
                          <td class="py-3 pr-4 text-gray-600">integer</td>
                          <td class="py-3 text-gray-600">Cumulative totals (positive, recovered, deceased, active)</td>
                        </tr>
                        <tr class="border-b border-blue-100">
                          <td class="py-3 pr-4 font-mono text-blue-600">data.statistics.percentages.*</td>
                          <td class="py-3 pr-4 text-gray-600">float</td>
                          <td class="py-3 text-gray-600">Percentage breakdown (active, recovered, deceased)</td>
                        </tr>
                        <tr>
                          <td class="py-3 pr-4 font-mono text-blue-600">data.statistics.reproduction_rate.*</td>
                          <td class="py-3 pr-4 text-gray-600">float|null</td>
                          <td class="py-3 text-gray-600">Reproduction rate data (value, upper_bound, lower_bound)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Try It Button -->
                <div class="mt-6 text-center">
                  <a href="https://pico-api.banuacoder.com/api/v1/national/latest" 
                     target="_blank" 
                     class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Try Live API
                  </a>
                </div>
              </div>
            </div>
          </section>

          <!-- National Historical Section -->
          <section v-show="activeSection === 'national-historical'" id="national-historical" class="mb-16">
            <div class="mb-8">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h1 class="text-3xl font-bold text-gray-900">Get Historical National Data</h1>
              </div>
              <p class="text-lg text-gray-600 mb-6">Access historical national COVID-19 data with pagination support. Returns an array of data objects with the same structure as the latest endpoint.</p>
            </div>

            <!-- Endpoint Details -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div class="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
                <div class="flex flex-wrap items-center gap-4">
                  <span class="bg-white text-purple-800 px-4 py-2 rounded-lg text-sm font-bold">GET</span>
                  <code class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-mono text-sm">/national</code>
                </div>
              </div>
              
              <div class="p-8">
                <!-- Query Parameters -->
                <div class="mb-8">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Query Parameters</h3>
                  <div class="overflow-x-auto">
                    <table class="min-w-full bg-gray-50 rounded-lg">
                      <thead class="bg-gray-100">
                        <tr>
                          <th class="text-left py-3 px-4 font-semibold text-gray-900">Parameter</th>
                          <th class="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                          <th class="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                          <th class="text-left py-3 px-4 font-semibold text-gray-900">Default</th>
                        </tr>
                      </thead>
                      <tbody class="text-sm">
                        <tr class="border-b">
                          <td class="py-3 px-4 font-mono text-purple-600">page</td>
                          <td class="py-3 px-4 text-gray-600">integer</td>
                          <td class="py-3 px-4 text-gray-600">Page number (1-based)</td>
                          <td class="py-3 px-4 text-gray-600">1</td>
                        </tr>
                        <tr class="border-b">
                          <td class="py-3 px-4 font-mono text-purple-600">limit</td>
                          <td class="py-3 px-4 text-gray-600">integer</td>
                          <td class="py-3 px-4 text-gray-600">Items per page (1-100)</td>
                          <td class="py-3 px-4 text-gray-600">10</td>
                        </tr>
                        <tr>
                          <td class="py-3 px-4 font-mono text-purple-600">sort</td>
                          <td class="py-3 px-4 text-gray-600">string</td>
                          <td class="py-3 px-4 text-gray-600">Sort order: "asc" or "desc"</td>
                          <td class="py-3 px-4 text-gray-600">desc</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Example Request</h3>
                    <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                      <div class="text-green-400">GET /api/v1/national?page=1&limit=5&sort=desc</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Try It</h3>
                    <a href="https://pico-api.banuacoder.com/api/v1/national?page=1&limit=5" 
                       target="_blank" 
                       class="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Test in Browser
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Authentication Section -->
          <section v-show="activeSection === 'authentication'" id="authentication" class="mb-16">
            <div class="mb-8">
              <h1 class="text-3xl font-bold text-gray-900 mb-4">Authentication</h1>
              <p class="text-lg text-gray-600">API access and security information</p>
            </div>

            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div class="bg-gradient-to-r from-yellow-600 to-orange-600 px-8 py-6">
                <h2 class="text-2xl font-bold text-white mb-2">Authentication</h2>
                <p class="text-yellow-100">API access and security</p>
              </div>
              
              <div class="p-8">
                <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h3 class="text-lg font-semibold text-green-800 mb-1">No Authentication Required</h3>
                      <p class="text-green-700">All PICO SulTeng API endpoints are publicly accessible and do not require authentication keys or tokens.</p>
                    </div>
                  </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-8">
                  <div class="bg-blue-50 rounded-xl p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Rate Limiting</h3>
                    <ul class="space-y-2 text-gray-600">
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        1000 requests per hour per IP
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        No API key required
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        CORS enabled for all origins
                      </li>
                    </ul>
                  </div>
                  
                  <div class="bg-purple-50 rounded-xl p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
                    <ul class="space-y-2 text-gray-600">
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path>
                        </svg>
                        Cache responses appropriately
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path>
                        </svg>
                        Use HTTPS for secure connections
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path>
                        </svg>
                        Handle rate limit responses
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Error Handling Section -->
          <section v-show="activeSection === 'error-handling'" id="error-handling" class="mb-16">
            <div class="mb-8">
              <h1 class="text-3xl font-bold text-gray-900 mb-4">Error Handling</h1>
              <p class="text-lg text-gray-600">HTTP status codes and error responses</p>
            </div>

            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div class="bg-gradient-to-r from-red-600 to-rose-600 px-8 py-6">
                <h2 class="text-2xl font-bold text-white mb-2">Error Handling</h2>
                <p class="text-red-100">HTTP status codes and error responses</p>
              </div>
              
              <div class="p-8">
                <!-- Status Codes -->
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">HTTP Status Codes</h3>
                  <div class="grid gap-4">
                    <div class="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div class="w-16 h-8 bg-green-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">200</div>
                      <div>
                        <div class="font-semibold text-gray-900">OK</div>
                        <div class="text-sm text-gray-600">Request successful</div>
                      </div>
                    </div>
                    
                    <div class="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div class="w-16 h-8 bg-red-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">400</div>
                      <div>
                        <div class="font-semibold text-gray-900">Bad Request</div>
                        <div class="text-sm text-gray-600">Invalid parameters or malformed request</div>
                      </div>
                    </div>
                    
                    <div class="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div class="w-16 h-8 bg-red-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">404</div>
                      <div>
                        <div class="font-semibold text-gray-900">Not Found</div>
                        <div class="text-sm text-gray-600">Endpoint or resource not found</div>
                      </div>
                    </div>
                    
                    <div class="flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div class="w-16 h-8 bg-yellow-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">429</div>
                      <div>
                        <div class="font-semibold text-gray-900">Too Many Requests</div>
                        <div class="text-sm text-gray-600">Rate limit exceeded</div>
                      </div>
                    </div>
                    
                    <div class="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div class="w-16 h-8 bg-red-600 text-white text-sm font-bold rounded flex items-center justify-center mr-4">500</div>
                      <div>
                        <div class="font-semibold text-gray-900">Internal Server Error</div>
                        <div class="text-sm text-gray-600">Server encountered an unexpected error</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Error Response Format -->
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">Error Response Format</h3>
                  <div class="bg-gray-50 rounded-xl p-6">
                    <div class="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-3">Error Response</h4>
                        <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                          <div class="text-blue-400">{</div>
                          <div class="ml-2">
                            <div><span class="text-yellow-400">"status"</span>: <span class="text-red-300">"error"</span>,</div>
                            <div><span class="text-yellow-400">"error"</span>: {</div>
                            <div class="ml-2">
                              <div><span class="text-yellow-400">"code"</span>: <span class="text-orange-400">400</span>,</div>
                              <div><span class="text-yellow-400">"message"</span>: <span class="text-green-300">"Invalid page parameter"</span>,</div>
                              <div><span class="text-yellow-400">"details"</span>: <span class="text-green-300">"Page must be a positive integer"</span></div>
                            </div>
                            <div>}</div>
                          </div>
                          <div class="text-blue-400">}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-3">Error Fields</h4>
                        <div class="space-y-3 text-sm">
                          <div class="flex">
                            <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">status</code>
                            <span class="text-gray-600">Always "error" for error responses</span>
                          </div>
                          <div class="flex">
                            <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">code</code>
                            <span class="text-gray-600">HTTP status code</span>
                          </div>
                          <div class="flex">
                            <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">message</code>
                            <span class="text-gray-600">Human-readable error message</span>
                          </div>
                          <div class="flex">
                            <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">details</code>
                            <span class="text-gray-600">Additional error information</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Navigation from '@/components/Navigation.vue'

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
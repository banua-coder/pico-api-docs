<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <Navigation variant="solid" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          API Documentation
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Comprehensive guide for integrating with the PICO SulTeng COVID-19 API. 
          Get real-time Indonesian COVID-19 data with our RESTful endpoints.
        </p>
        
        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <a href="#national-endpoints" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            National Endpoints
          </a>
          <a href="#authentication" class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors">
            Authentication
          </a>
          <a href="#error-handling" class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors">
            Error Handling
          </a>
          <a href="https://pico-api.banuacoder.com/swagger/index.html" target="_blank" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Interactive Swagger
          </a>
        </div>
        
        <!-- API Status -->
        <div class="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700">
          <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span class="text-sm font-medium">API Status: Operational</span>
        </div>
      </div>

      <!-- Getting Started -->
      <section class="mb-16">
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

      <!-- National Endpoints Section -->
      <section id="national-endpoints" class="mb-16">
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div class="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
            <h2 class="text-2xl font-bold text-white mb-2">National Endpoints</h2>
            <p class="text-green-100">Access Indonesian national COVID-19 statistics</p>
          </div>
          
          <div class="p-8">
            <!-- Latest National Data -->
            <div class="mb-12">
              <div class="flex items-center mb-6">
                <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span class="text-white font-bold text-sm">1</span>
                </div>
                <h3 class="text-2xl font-semibold text-gray-900">Get Latest National Data</h3>
              </div>
              
              <p class="text-gray-600 mb-6">Retrieve the most recent national COVID-19 statistics for Indonesia.</p>
              
              <!-- Endpoint Details -->
              <div class="bg-gray-50 rounded-xl p-6 mb-6">
                <div class="flex flex-wrap items-center gap-4 mb-4">
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">GET</span>
                  <code class="bg-white px-4 py-2 rounded-lg border font-mono text-sm">/national/latest</code>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-6">
                  <!-- Request Example -->
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-3">Request</h4>
                    <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <div class="text-green-400 mb-1">GET /api/v1/national/latest HTTP/1.1</div>
                      <div class="text-blue-300 mb-1">Host: pico-api.banuacoder.com</div>
                      <div class="text-yellow-300">Accept: application/json</div>
                    </div>
                  </div>
                  
                  <!-- Response Example -->
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-3">Response</h4>
                    <div class="bg-gray-900 rounded-lg p-4 font-mono text-xs overflow-x-auto">
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
              </div>
              
              <!-- Response Fields -->
              <div class="bg-blue-50 rounded-xl p-6">
                <h4 class="font-semibold text-gray-900 mb-4">Response Fields</h4>
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
                        <td class="py-3 pr-4 font-mono text-blue-600">data.daily.positive</td>
                        <td class="py-3 pr-4 text-gray-600">integer</td>
                        <td class="py-3 text-gray-600">Daily new positive cases</td>
                      </tr>
                      <tr class="border-b border-blue-100">
                        <td class="py-3 pr-4 font-mono text-blue-600">data.daily.recovered</td>
                        <td class="py-3 pr-4 text-gray-600">integer</td>
                        <td class="py-3 text-gray-600">Daily new recovered cases</td>
                      </tr>
                      <tr class="border-b border-blue-100">
                        <td class="py-3 pr-4 font-mono text-blue-600">data.daily.deceased</td>
                        <td class="py-3 pr-4 text-gray-600">integer</td>
                        <td class="py-3 text-gray-600">Daily new deceased cases</td>
                      </tr>
                      <tr class="border-b border-blue-100">
                        <td class="py-3 pr-4 font-mono text-blue-600">data.daily.active</td>
                        <td class="py-3 pr-4 text-gray-600">integer</td>
                        <td class="py-3 text-gray-600">Daily change in active cases (can be negative)</td>
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
            </div>

            <!-- Historical National Data -->
            <div class="mb-12">
              <div class="flex items-center mb-6">
                <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span class="text-white font-bold text-sm">2</span>
                </div>
                <h3 class="text-2xl font-semibold text-gray-900">Get Historical National Data</h3>
              </div>
              
              <p class="text-gray-600 mb-6">Access historical national COVID-19 data with pagination support. Returns an array of data objects with the same structure as the latest endpoint.</p>
              
              <div class="bg-gray-50 rounded-xl p-6 mb-6">
                <div class="flex flex-wrap items-center gap-4 mb-4">
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">GET</span>
                  <code class="bg-white px-4 py-2 rounded-lg border font-mono text-sm">/national</code>
                </div>
                
                <!-- Query Parameters -->
                <div class="mb-6">
                  <h4 class="font-semibold text-gray-900 mb-3">Query Parameters</h4>
                  <div class="overflow-x-auto">
                    <table class="min-w-full bg-white rounded-lg">
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
                          <td class="py-3 px-4 font-mono text-blue-600">page</td>
                          <td class="py-3 px-4 text-gray-600">integer</td>
                          <td class="py-3 px-4 text-gray-600">Page number (1-based)</td>
                          <td class="py-3 px-4 text-gray-600">1</td>
                        </tr>
                        <tr class="border-b">
                          <td class="py-3 px-4 font-mono text-blue-600">limit</td>
                          <td class="py-3 px-4 text-gray-600">integer</td>
                          <td class="py-3 px-4 text-gray-600">Items per page (1-100)</td>
                          <td class="py-3 px-4 text-gray-600">10</td>
                        </tr>
                        <tr>
                          <td class="py-3 px-4 font-mono text-blue-600">sort</td>
                          <td class="py-3 px-4 text-gray-600">string</td>
                          <td class="py-3 px-4 text-gray-600">Sort order: "asc" or "desc"</td>
                          <td class="py-3 px-4 text-gray-600">desc</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-3">Example Request</h4>
                    <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                      <div class="text-green-400">GET /api/v1/national?page=1&limit=5&sort=desc</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-3">Try It</h4>
                    <a href="https://pico-api.banuacoder.com/api/v1/national?page=1&limit=5" 
                       target="_blank" 
                       class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Test in Browser
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Authentication Section -->
      <section id="authentication" class="mb-16">
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div class="bg-gradient-to-r from-yellow-600 to-orange-600 px-8 py-6">
            <h2 class="text-2xl font-bold text-white mb-2">Authentication</h2>
            <p class="text-yellow-100">API access and security</p>
          </div>
          
          <div class="p-8">
            <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
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
      <section id="error-handling" class="mb-16">
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

      <!-- Support Section -->
      <section class="mb-16">
        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 class="text-3xl font-bold mb-4">Need Help?</h2>
          <p class="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Check out our interactive Swagger documentation or contact our development team for support.
          </p>
          
          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://pico-api.banuacoder.com/swagger/index.html" 
               target="_blank" 
               class="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Interactive API Docs
            </a>
            <a href="https://banuacoder.com" 
               target="_blank" 
               class="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-indigo-400">
              Contact Support
            </a>
            <a href="https://github.com/banua-coder/pico-api-go" 
               target="_blank" 
               class="bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/30">
              View Source Code
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
</script>
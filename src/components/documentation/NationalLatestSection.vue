<template>
  <section v-show="isActive" id="national-latest" class="mb-16">
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
</template>

<script setup lang="ts">
interface Props {
  isActive: boolean
}

defineProps<Props>()
</script>
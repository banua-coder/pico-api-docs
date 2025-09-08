<template>
  <section v-show="isActive" id="glossary" class="mb-16">
    <div class="mb-8">
      <div class="flex items-center mb-4">
        <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900">Glossary</h1>
      </div>
      <p class="text-lg text-gray-600">Key terms and concepts used in the PICO SulTeng COVID-19 API</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">API Terms & Concepts</h2>
        <p class="text-indigo-100">Understanding key terminology and calculations</p>
      </div>
      
      <div class="p-8 space-y-8">
        <!-- Reproduction Rate -->
        <div class="border-b border-gray-200 pb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <div class="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">Rt</div>
            Reproduction Rate (Rt)
          </h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-900 mb-3">Definition</h4>
              <p class="text-gray-600 mb-4">
                The effective reproduction number representing the average number of secondary infections caused by one infected individual at time t.
              </p>
              
              <h4 class="font-semibold text-gray-900 mb-3">Interpretation</h4>
              <div class="space-y-2 text-sm">
                <div class="flex items-center p-2 bg-red-50 rounded-lg">
                  <span class="font-mono font-bold text-red-600 mr-2">Rt > 1:</span>
                  <span class="text-gray-700">Epidemic is growing (each case infects >1 person)</span>
                </div>
                <div class="flex items-center p-2 bg-yellow-50 rounded-lg">
                  <span class="font-mono font-bold text-yellow-600 mr-2">Rt = 1:</span>
                  <span class="text-gray-700">Epidemic is stable</span>
                </div>
                <div class="flex items-center p-2 bg-green-50 rounded-lg">
                  <span class="font-mono font-bold text-green-600 mr-2">Rt < 1:</span>
                  <span class="text-gray-700">Epidemic is declining</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-gray-900 mb-3">Calculation Method</h4>
              <div class="bg-blue-50 rounded-lg p-4 text-sm">
                <p class="font-semibold text-blue-900 mb-2">EpiEstim Approach (Cori et al. 2013)</p>
                <ul class="space-y-1 text-blue-800">
                  <li>• Bayesian framework with Gamma priors</li>
                  <li>• Serial interval: 5.0 ± 3.0 days</li>
                  <li>• 7-day sliding window</li>
                  <li>• 95% credible intervals</li>
                </ul>
              </div>
              
              <h4 class="font-semibold text-gray-900 mt-4 mb-3">Data Availability</h4>
              <div class="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                <p>Values may be <code class="bg-white px-1 rounded">null</code> during the first 7 days or when there's insufficient data for reliable calculation.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Terms -->
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Case Classifications</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-gray-900">Positive Cases</h4>
                <p class="text-sm text-gray-600">Confirmed COVID-19 infections through testing</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">Recovered Cases</h4>
                <p class="text-sm text-gray-600">Patients who have recovered from COVID-19</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">Deceased Cases</h4>
                <p class="text-sm text-gray-600">Deaths attributed to COVID-19</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">Active Cases</h4>
                <p class="text-sm text-gray-600">Currently infected patients (positive - recovered - deceased)</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Data Types</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-gray-900">Daily Data</h4>
                <p class="text-sm text-gray-600">New cases reported for a specific day</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">Cumulative Data</h4>
                <p class="text-sm text-gray-600">Total cases accumulated since the start of tracking</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">Percentages</h4>
                <p class="text-sm text-gray-600">Distribution of cases as percentage of total positive cases</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">Serial Interval</h4>
                <p class="text-sm text-gray-600">Time between symptom onset in successive cases in a chain of transmission</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Indonesian Terminology -->
        <div class="mt-8 pt-8 border-t border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Indonesian COVID-19 Terminology</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 rounded-lg p-4">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span class="text-sm font-bold">ODP</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Orang Dalam Pemantauan</h4>
                  <p class="text-sm text-blue-700 font-medium mb-2">Person Under Observation</p>
                  <p class="text-sm text-gray-600">
                    Individuals who have been exposed to COVID-19 or have traveled from affected areas but show no symptoms. 
                    They are monitored for 14 days for potential symptom development.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="bg-orange-50 rounded-lg p-4">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span class="text-sm font-bold">PDP</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Pasien Dalam Pengawasan</h4>
                  <p class="text-sm text-orange-700 font-medium mb-2">Patient Under Supervision</p>
                  <p class="text-sm text-gray-600">
                    Individuals showing COVID-19 symptoms (fever, cough, breathing difficulties) with a history of 
                    exposure or travel from affected areas. They require medical supervision and testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">Classification Progression</h4>
            <div class="flex items-center space-x-2 text-sm">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">ODP</span>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">PDP</span>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Positive/Negative</span>
            </div>
            <p class="text-xs text-gray-500 mt-2">
              Individuals may progress from ODP to PDP if symptoms develop, then receive testing for final diagnosis
            </p>
          </div>
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
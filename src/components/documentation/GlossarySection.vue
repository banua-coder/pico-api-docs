<template>
  <section v-show="isActive" id="glossary" class="mb-12 md:mb-16">
    <div class="mb-6 md:mb-8">
      <div class="flex items-center mb-3 md:mb-4">
        <div class="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
          <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">{{ t('documentation.glossary.title') }}</h1>
      </div>
      <p class="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.subtitle') }}</p>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">{{ t('documentation.glossary.cardTitle') }}</h2>
        <p class="text-sm sm:text-base text-indigo-100">{{ t('documentation.glossary.cardSubtitle') }}</p>
      </div>
      
      <div class="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
        <!-- Reproduction Rate -->
        <div class="border-b border-gray-200 dark:border-gray-700 pb-6 sm:pb-8">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 flex items-center">
            <div class="w-5 h-5 sm:w-6 sm:h-6 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm font-bold">Rt</div>
            {{ t('documentation.glossary.reproductionRate.title') }}
          </h3>
          
          <div class="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div class="space-y-4 sm:space-y-6">
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">{{ t('documentation.glossary.reproductionRate.definition') }}</h4>
                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">{{ t('documentation.glossary.reproductionRate.definitionText') }}</p>
              </div>
              
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">{{ t('documentation.glossary.reproductionRate.interpretation') }}</h4>
                <div class="space-y-2 text-xs sm:text-sm">
                  <div class="flex items-center p-2 bg-red-50 dark:bg-red-900/30 rounded-lg">
                    <span class="font-mono font-bold text-red-600 dark:text-red-400 mr-2">Rt > 1:</span>
                    <span class="text-gray-700 dark:text-gray-300">{{ t('documentation.glossary.reproductionRate.growing') }}</span>
                  </div>
                  <div class="flex items-center p-2 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                    <span class="font-mono font-bold text-yellow-600 dark:text-yellow-400 mr-2">Rt = 1:</span>
                    <span class="text-gray-700 dark:text-gray-300">{{ t('documentation.glossary.reproductionRate.stable') }}</span>
                  </div>
                  <div class="flex items-center p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <span class="font-mono font-bold text-green-600 dark:text-green-400 mr-2">Rt < 1:</span>
                    <span class="text-gray-700 dark:text-gray-300">{{ t('documentation.glossary.reproductionRate.declining') }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">{{ t('documentation.glossary.reproductionRate.calculationMethod') }}</h4>
                <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 sm:p-4 text-xs sm:text-sm">
                  <p class="font-semibold text-blue-900 dark:text-blue-400 mb-2">{{ t('documentation.glossary.reproductionRate.epiEstimTitle') }}</p>
                  <ul class="space-y-1 text-blue-800 dark:text-blue-300">
                    <li v-for="(detail, index) in methodDetails" :key="index">
                      • {{ detail }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">{{ t('documentation.glossary.reproductionRate.dataAvailability') }}</h4>
                <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <p>{{ t('documentation.glossary.reproductionRate.dataAvailabilityText') }}</p>
                </div>
              </div>
              
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">{{ t('documentation.glossary.reproductionRate.formula') }}</h4>
                <div class="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-3 sm:p-4">
                  <p class="font-semibold text-purple-900 dark:text-purple-400 mb-2 sm:mb-3 text-sm sm:text-base">{{ t('documentation.glossary.reproductionRate.formulaTitle') }}</p>
                  <p class="text-purple-800 dark:text-purple-300 text-xs sm:text-sm mb-3 sm:mb-4">{{ t('documentation.glossary.reproductionRate.formulaDescription') }}</p>
                  
                  <div class="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-purple-200 dark:border-purple-700 overflow-x-auto">
                    <div class="space-y-3 sm:space-y-4 text-xs sm:text-sm min-w-0">
                      <div class="text-purple-900 dark:text-purple-300 bg-purple-25 dark:bg-purple-900/20 p-2 sm:p-3 rounded border-l-4 border-purple-300 dark:border-purple-600">
                        <div class="font-semibold mb-2 sm:mb-3">1. {{ t('documentation.glossary.reproductionRate.formulaSteps.0') }}</div>
                        <div class="overflow-x-auto">
                          <MathFormula formula="\lambda_t = \sum_{s=1}^{t-1} I_{t-s} \cdot w_s" />
                        </div>
                      </div>
                      <div class="text-purple-900 dark:text-purple-300 bg-purple-25 dark:bg-purple-900/20 p-2 sm:p-3 rounded border-l-4 border-purple-300 dark:border-purple-600">
                        <div class="font-semibold mb-2 sm:mb-3">2. {{ t('documentation.glossary.reproductionRate.formulaSteps.1') }}</div>
                        <div class="space-y-2 overflow-x-auto">
                          <MathFormula formula="I_{t-s} = \text{incidence at time } (t-s)" />
                          <MathFormula formula="w_s = \text{serial interval probability}" />
                        </div>
                      </div>
                      <div class="text-purple-900 dark:text-purple-300 bg-purple-25 dark:bg-purple-900/20 p-2 sm:p-3 rounded border-l-4 border-purple-300 dark:border-purple-600">
                        <div class="font-semibold mb-2 sm:mb-3">3. {{ t('documentation.glossary.reproductionRate.formulaSteps.2') }}</div>
                        <div class="overflow-x-auto">
                          <MathFormula formula="R_t | \text{data} \sim \text{Gamma}\left(a + \sum I_t, \, b + \sum \lambda_t\right)" />
                        </div>
                      </div>
                      <div class="text-purple-900 dark:text-purple-300 bg-purple-25 dark:bg-purple-900/20 p-2 sm:p-3 rounded border-l-4 border-purple-300 dark:border-purple-600">
                        <div class="font-semibold mb-2 sm:mb-3">4. {{ t('documentation.glossary.reproductionRate.formulaSteps.3') }}</div>
                        <div class="overflow-x-auto">
                          <MathFormula formula="\mathbb{E}[R_t | \text{data}] = \frac{a + \sum I_t}{b + \sum \lambda_t}" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div class="space-y-4 sm:space-y-6">
              
              <!-- Practical Example Section -->
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">{{ t('documentation.glossary.reproductionRate.practicalExample.title') }}</h4>
                <div class="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-3 sm:p-4 text-xs sm:text-sm">
                  <p class="font-semibold text-orange-900 dark:text-orange-400 mb-2 sm:mb-3">{{ t('documentation.glossary.reproductionRate.practicalExample.subtitle') }}</p>
                  
                  <!-- Time Series Data Table -->
                  <div class="overflow-x-auto mb-3">
                    <table class="w-full text-xs border border-orange-200 dark:border-orange-700 rounded">
                      <thead class="bg-orange-100 dark:bg-orange-800/50">
                        <tr>
                          <th class="px-2 py-1 text-left border-r border-orange-200 dark:border-orange-700">{{ t('documentation.glossary.reproductionRate.practicalExample.table.day') }}</th>
                          <th class="px-2 py-1 text-left border-r border-orange-200 dark:border-orange-700">{{ t('documentation.glossary.reproductionRate.practicalExample.table.date') }}</th>
                          <th class="px-2 py-1 text-left">{{ t('documentation.glossary.reproductionRate.practicalExample.table.newCases') }}</th>
                        </tr>
                      </thead>
                      <tbody class="text-orange-800 dark:text-orange-300">
                        <tr v-for="(row, index) in exampleData" :key="index" 
                            class="border-t border-orange-200 dark:border-orange-700"
                            :class="row.current ? 'bg-orange-200 dark:bg-orange-800/30' : ''">
                          <td class="px-2 py-1 border-r border-orange-200 dark:border-orange-700" :class="row.current ? 'font-semibold' : ''">{{ row.day }}</td>
                          <td class="px-2 py-1 border-r border-orange-200 dark:border-orange-700" :class="row.current ? 'font-semibold' : ''">{{ row.date }}</td>
                          <td class="px-2 py-1 font-mono" :class="row.current ? 'font-semibold' : ''">{{ row.cases }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <!-- Step by Step Calculation -->
                  <div class="space-y-2">
                    <div class="text-orange-900 dark:text-orange-400 font-medium text-xs">{{ t('documentation.glossary.reproductionRate.practicalExample.calculationTitle') }}</div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded p-2 border border-orange-200 dark:border-orange-700">
                      <div class="font-mono text-xs text-orange-800 dark:text-orange-300 space-y-1">
                        <div><strong>{{ t('documentation.glossary.reproductionRate.practicalExample.step1.title') }}</strong></div>
                        <div class="pl-2">{{ t('documentation.glossary.reproductionRate.practicalExample.step1.formula') }}</div>
                        <div class="pl-2">{{ t('documentation.glossary.reproductionRate.practicalExample.step1.calculation') }}</div>
                        
                        <div class="mt-2"><strong>{{ t('documentation.glossary.reproductionRate.practicalExample.step2.title') }}</strong></div>
                        <div class="pl-2">{{ t('documentation.glossary.reproductionRate.practicalExample.step2.formula') }}</div>
                        <div class="pl-2">{{ t('documentation.glossary.reproductionRate.practicalExample.step2.calculation') }}</div>
                        
                        <div class="mt-2"><strong>{{ t('documentation.glossary.reproductionRate.practicalExample.step3.title') }}</strong></div>
                        <div class="pl-2 text-blue-700 dark:text-blue-300 italic">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.explanation') }}</div>
                        
                        <!-- Gamma Quantile Formula -->
                        <div class="bg-purple-50 dark:bg-purple-900/20 rounded p-2 border-l-2 border-purple-400 mb-2">
                          <div class="font-semibold text-purple-800 dark:text-purple-300 text-xs">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.gammaQuantileFormula.title') }}</div>
                          <div class="pl-1 font-mono text-xs text-purple-700 dark:text-purple-400 mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.gammaQuantileFormula.formula') }}</div>
                          <div class="pl-1 text-xs text-purple-600 dark:text-purple-400 mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.gammaQuantileFormula.description') }}</div>
                        </div>
                        
                        <!-- Detailed Calculations -->
                        <div class="pl-2 mt-2">
                          <div class="font-semibold text-indigo-800 dark:text-indigo-300 text-xs mb-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.title') }}</div>
                          
                          <!-- Lower Bound Calculation -->
                          <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded p-2 border-l-2 border-indigo-400 mb-2">
                            <div class="font-semibold text-indigo-800 dark:text-indigo-300 text-xs">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.title') }}</div>
                            <div class="pl-1 font-mono text-xs text-indigo-700 dark:text-indigo-400 mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.formula') }}</div>
                            <div class="pl-1 text-xs text-indigo-600 dark:text-indigo-400 mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.approximation') }}</div>
                            <div class="pl-1 font-mono text-xs text-indigo-700 dark:text-indigo-400 mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.wilsonHilfertyFormula') }}</div>
                            <div class="pl-1 font-mono text-xs text-indigo-700 dark:text-indigo-400 mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.substitution') }}</div>
                            <div class="pl-1 font-mono text-xs text-indigo-800 dark:text-indigo-300 mt-1 font-semibold">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.lowerBoundStep.calculation') }}</div>
                          </div>
                          
                          <!-- Upper Bound Calculation -->
                          <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded p-2 border-l-2 border-indigo-400">
                            <div class="font-semibold text-indigo-800 dark:text-indigo-300 text-xs">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.upperBoundStep.title') }}</div>
                            <div class="pl-1 font-mono text-xs text-indigo-700 dark:text-indigo-400 mt-1">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.upperBoundStep.formula') }}</div>
                            <div class="pl-1 font-mono text-xs text-indigo-800 dark:text-indigo-300 mt-1 font-semibold">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.detailedCalculations.upperBoundStep.calculation') }}</div>
                          </div>
                        </div>
                        
                        <!-- Summary -->
                        <div class="pl-2 mt-2">
                          <div class="text-xs">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.formulas.lowerBound') }}</div>
                          <div class="text-xs">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.formulas.upperBound') }}</div>
                          <div class="mt-1 font-semibold text-blue-800 dark:text-blue-300 text-xs">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.confidenceInterval') }}</div>
                          <div class="mt-2 text-xs italic text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.reproductionRate.practicalExample.step3.mathematicalNote') }}</div>
                        </div>
                        
                        <div class="mt-2 p-1 bg-red-50 dark:bg-red-900/30 rounded border-l-2 border-red-400">
                          <strong>{{ t('documentation.glossary.reproductionRate.practicalExample.result.title') }}</strong> {{ t('documentation.glossary.reproductionRate.practicalExample.result.interpretation') }}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="mt-3 text-xs text-orange-700 dark:text-orange-400">
                    <strong>{{ t('documentation.glossary.reproductionRate.practicalExample.note.title') }}</strong> {{ t('documentation.glossary.reproductionRate.practicalExample.note.content') }}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">{{ t('documentation.glossary.reproductionRate.references') }}</h4>
                <div class="space-y-2 sm:space-y-3">
                  <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-3 sm:p-4 border-l-4 border-indigo-300 dark:border-indigo-600">
                    <p class="font-semibold text-gray-900 dark:text-gray-100 text-xs sm:text-sm">Cori, A., Ferguson, N. M., Fraser, C., & Cauchemez, S. (2013)</p>
                    <p class="text-indigo-700 dark:text-indigo-400 font-medium text-xs">American Journal of Epidemiology</p>
                    <p class="text-gray-600 dark:text-gray-400 text-xs mt-1">A new framework and software to estimate time-varying reproduction numbers during epidemics. 178(9), 1505-1512.</p>
                    <p class="text-blue-600 text-xs mt-1 break-all">
                      DOI: <a href="https://doi.org/10.1093/aje/kwt133" target="_blank" class="hover:underline">10.1093/aje/kwt133</a>
                    </p>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-3 sm:p-4 border-l-4 border-indigo-300 dark:border-indigo-600">
                    <p class="font-semibold text-gray-900 dark:text-gray-100 text-xs sm:text-sm">Thompson, R. N., et al. (2019)</p>
                    <p class="text-indigo-700 dark:text-indigo-400 font-medium text-xs">Epidemics</p>
                    <p class="text-gray-600 dark:text-gray-400 text-xs mt-1">Improved inference of time-varying reproduction numbers during infectious disease outbreaks. 29, 100356.</p>
                    <p class="text-blue-600 text-xs mt-1 break-all">
                      DOI: <a href="https://doi.org/10.1016/j.epidem.2019.100356" target="_blank" class="hover:underline">10.1016/j.epidem.2019.100356</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Terms -->
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.glossary.caseClassifications.title') }}</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-gray-900 dark:text-gray-100">{{ t('documentation.glossary.caseClassifications.positive.title') }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.caseClassifications.positive.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-gray-100">{{ t('documentation.glossary.caseClassifications.recovered.title') }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.caseClassifications.recovered.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-gray-100">{{ t('documentation.glossary.caseClassifications.deceased.title') }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.caseClassifications.deceased.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-gray-100">{{ t('documentation.glossary.caseClassifications.active.title') }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.caseClassifications.active.description') }}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.glossary.dataTypes.title') }}</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-gray-900 dark:text-gray-100">{{ t('documentation.glossary.dataTypes.daily.title') }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.dataTypes.daily.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-gray-100">{{ t('documentation.glossary.dataTypes.cumulative.title') }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.dataTypes.cumulative.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-gray-100">{{ t('documentation.glossary.dataTypes.percentages.title') }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.dataTypes.percentages.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-gray-100">{{ t('documentation.glossary.dataTypes.serialInterval.title') }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.dataTypes.serialInterval.description') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Indonesian Terminology -->
        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.glossary.indonesianTerminology.title') }}</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">{{ t('documentation.glossary.indonesianTerminology.subtitle') }}</p>
          <div class="mb-6 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-400 dark:border-blue-600">
            <p class="text-sm text-blue-800 dark:text-blue-400 font-medium">{{ t('documentation.glossary.indonesianTerminology.officialNote') }}</p>
          </div>
          
          <!-- Current Terms -->
          <div class="mb-6">
            <h4 class="text-md font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
              <div class="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-xs font-bold">✓</div>
              {{ t('documentation.glossary.indonesianTerminology.currentTerms') }}
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 border-l-4 border-green-400 dark:border-green-600">
                <h5 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">{{ t('documentation.glossary.indonesianTerminology.kasusSuspect.name') }}</h5>
                <p class="text-sm text-green-700 dark:text-green-400 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.kasusSuspect.translation') }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.indonesianTerminology.kasusSuspect.description') }}</p>
              </div>
              
              <div class="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 border-l-4 border-green-400 dark:border-green-600">
                <h5 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">{{ t('documentation.glossary.indonesianTerminology.kasusProbable.name') }}</h5>
                <p class="text-sm text-green-700 dark:text-green-400 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.kasusProbable.translation') }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.indonesianTerminology.kasusProbable.description') }}</p>
              </div>
              
              <div class="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 border-l-4 border-green-400 dark:border-green-600">
                <h5 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">{{ t('documentation.glossary.indonesianTerminology.kontakErat.name') }}</h5>
                <p class="text-sm text-green-700 dark:text-green-400 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.kontakErat.translation') }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.indonesianTerminology.kontakErat.description') }}</p>
              </div>
              
              <div class="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 border-l-4 border-green-400 dark:border-green-600">
                <h5 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">{{ t('documentation.glossary.indonesianTerminology.kasusKonfirmasi.name') }}</h5>
                <p class="text-sm text-green-700 dark:text-green-400 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.kasusKonfirmasi.translation') }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('documentation.glossary.indonesianTerminology.kasusKonfirmasi.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Legacy Terms -->
          <div class="mb-6">
            <h4 class="text-md font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
              <div class="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center mr-2 text-xs font-bold">📋</div>
              {{ t('documentation.glossary.indonesianTerminology.legacyTerms') }}
            </h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 opacity-75 border-l-4 border-blue-300 dark:border-blue-600">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span class="text-sm font-bold">{{ t('documentation.glossary.indonesianTerminology.odp.acronym') }}</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">{{ t('documentation.glossary.indonesianTerminology.odp.fullName') }}</h5>
                    <p class="text-sm text-blue-700 dark:text-blue-400 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.odp.translation') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ t('documentation.glossary.indonesianTerminology.odp.description') }}</p>
                    <div class="mt-2">
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                        → {{ t('documentation.glossary.indonesianTerminology.odp.replacedBy') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-4 opacity-75 border-l-4 border-orange-300 dark:border-orange-600">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span class="text-sm font-bold">{{ t('documentation.glossary.indonesianTerminology.pdp.acronym') }}</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">{{ t('documentation.glossary.indonesianTerminology.pdp.fullName') }}</h5>
                    <p class="text-sm text-orange-700 dark:text-orange-400 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.pdp.translation') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ t('documentation.glossary.indonesianTerminology.pdp.description') }}</p>
                    <div class="mt-2">
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                        → {{ t('documentation.glossary.indonesianTerminology.pdp.replacedBy') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 opacity-75 border-l-4 border-purple-300 dark:border-purple-600">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span class="text-sm font-bold">{{ t('documentation.glossary.indonesianTerminology.otg.acronym') }}</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">{{ t('documentation.glossary.indonesianTerminology.otg.fullName') }}</h5>
                    <p class="text-sm text-purple-700 dark:text-purple-400 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.otg.translation') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ t('documentation.glossary.indonesianTerminology.otg.description') }}</p>
                    <div class="mt-2">
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                        → {{ t('documentation.glossary.indonesianTerminology.otg.replacedBy') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Classification Evolution -->
          <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-indigo-400 dark:border-indigo-600">
            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">{{ t('documentation.glossary.indonesianTerminology.classificationProgression.title') }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ t('documentation.glossary.indonesianTerminology.classificationProgression.description') }}</p>
            
            <!-- Official Quote -->
            <div class="mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border-l-4 border-indigo-300 dark:border-indigo-600">
              <p class="text-sm text-indigo-800 dark:text-indigo-400 font-medium italic">
                "{{ t('documentation.glossary.indonesianTerminology.classificationProgression.officialQuote') }}"
              </p>
              <p class="text-xs text-indigo-600 dark:text-indigo-400 mt-1">— Kementerian Kesehatan RI</p>
            </div>
            
            <div class="space-y-4">
              <div>
                <h5 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">{{ t('documentation.glossary.indonesianTerminology.classificationProgression.currentFlow') }}</h5>
                <div class="overflow-x-auto">
                  <div class="flex items-center space-x-1 sm:space-x-2 text-[10px] sm:text-xs min-w-max">
                    <span class="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded font-medium whitespace-nowrap">Suspect</span>
                    <span class="text-gray-400">→</span>
                    <span class="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded font-medium whitespace-nowrap">Probable</span>
                    <span class="text-gray-400">→</span>
                    <span class="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded font-medium whitespace-nowrap">Confirmed</span>
                    <span class="text-gray-400">→</span>
                    <span class="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded font-medium whitespace-nowrap">Recovery/Death</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">{{ t('documentation.glossary.indonesianTerminology.classificationProgression.legacyFlow') }}</h5>
                <div class="overflow-x-auto opacity-75">
                  <div class="flex items-center space-x-1 sm:space-x-2 text-[10px] sm:text-xs min-w-max">
                    <span class="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded font-medium whitespace-nowrap">ODP</span>
                    <span class="text-gray-400">→</span>
                    <span class="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded font-medium whitespace-nowrap">PDP</span>
                    <span class="text-gray-400">→</span>
                    <span class="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded font-medium whitespace-nowrap">OTG</span>
                    <span class="text-gray-400">→</span>
                    <span class="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded font-medium whitespace-nowrap">Confirmed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MathFormula from '@/components/MathFormula.vue'

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t, tm } = useI18n()

const methodDetails = computed(() => tm('documentation.glossary.reproductionRate.methodDetails') as string[])

const exampleData = computed(() => [
  { day: 't-6', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan1'), cases: '12', current: false },
  { day: 't-5', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan2'), cases: '18', current: false },
  { day: 't-4', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan3'), cases: '25', current: false },
  { day: 't-3', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan4'), cases: '31', current: false },
  { day: 't-2', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan5'), cases: '28', current: false },
  { day: 't-1', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan6'), cases: '35', current: false },
  { day: 't', date: t('documentation.glossary.reproductionRate.practicalExample.dates.jan7'), cases: '42', current: true }
])
</script>

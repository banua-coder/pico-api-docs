<template>
  <section v-show="isActive" id="glossary" class="mb-16">
    <div class="mb-8">
      <div class="flex items-center mb-4">
        <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900">{{ t('documentation.glossary.title') }}</h1>
      </div>
      <p class="text-lg text-gray-600">{{ t('documentation.glossary.subtitle') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('documentation.glossary.cardTitle') }}</h2>
        <p class="text-indigo-100">{{ t('documentation.glossary.cardSubtitle') }}</p>
      </div>
      
      <div class="p-8 space-y-8">
        <!-- Reproduction Rate -->
        <div class="border-b border-gray-200 pb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <div class="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">Rt</div>
            {{ t('documentation.glossary.reproductionRate.title') }}
          </h3>
          
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('documentation.glossary.reproductionRate.definition') }}</h4>
                <p class="text-gray-600 mb-4">{{ t('documentation.glossary.reproductionRate.definitionText') }}</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('documentation.glossary.reproductionRate.interpretation') }}</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center p-2 bg-red-50 rounded-lg">
                    <span class="font-mono font-bold text-red-600 mr-2">Rt > 1:</span>
                    <span class="text-gray-700">{{ t('documentation.glossary.reproductionRate.growing') }}</span>
                  </div>
                  <div class="flex items-center p-2 bg-yellow-50 rounded-lg">
                    <span class="font-mono font-bold text-yellow-600 mr-2">Rt = 1:</span>
                    <span class="text-gray-700">{{ t('documentation.glossary.reproductionRate.stable') }}</span>
                  </div>
                  <div class="flex items-center p-2 bg-green-50 rounded-lg">
                    <span class="font-mono font-bold text-green-600 mr-2">Rt < 1:</span>
                    <span class="text-gray-700">{{ t('documentation.glossary.reproductionRate.declining') }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('documentation.glossary.reproductionRate.calculationMethod') }}</h4>
                <div class="bg-blue-50 rounded-lg p-4 text-sm">
                  <p class="font-semibold text-blue-900 mb-2">{{ t('documentation.glossary.reproductionRate.epiEstimTitle') }}</p>
                  <ul class="space-y-1 text-blue-800">
                    <li v-for="(detail, index) in methodDetails" :key="index">
                      • {{ detail }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('documentation.glossary.reproductionRate.dataAvailability') }}</h4>
                <div class="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                  <p>{{ t('documentation.glossary.reproductionRate.dataAvailabilityText') }}</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('documentation.glossary.reproductionRate.formula') }}</h4>
                <div class="bg-purple-50 rounded-lg p-4">
                  <p class="font-semibold text-purple-900 mb-3">{{ t('documentation.glossary.reproductionRate.formulaTitle') }}</p>
                  <p class="text-purple-800 text-sm mb-4">{{ t('documentation.glossary.reproductionRate.formulaDescription') }}</p>
                  
                  <div class="bg-white rounded-lg p-4 border border-purple-200">
                    <div class="space-y-4 text-sm">
                      <div class="text-purple-900 bg-purple-25 p-3 rounded border-l-4 border-purple-300">
                        <div class="font-semibold mb-3">1. {{ t('documentation.glossary.reproductionRate.formulaSteps.0') }}</div>
                        <MathFormula formula="\lambda_t = \sum_{s=1}^{t-1} I_{t-s} \cdot w_s" />
                      </div>
                      <div class="text-purple-900 bg-purple-25 p-3 rounded border-l-4 border-purple-300">
                        <div class="font-semibold mb-3">2. {{ t('documentation.glossary.reproductionRate.formulaSteps.1') }}</div>
                        <div class="space-y-2">
                          <MathFormula formula="I_{t-s} = \text{incidence at time } (t-s)" />
                          <MathFormula formula="w_s = \text{serial interval probability}" />
                        </div>
                      </div>
                      <div class="text-purple-900 bg-purple-25 p-3 rounded border-l-4 border-purple-300">
                        <div class="font-semibold mb-3">3. {{ t('documentation.glossary.reproductionRate.formulaSteps.2') }}</div>
                        <MathFormula formula="R_t | \text{data} \sim \text{Gamma}\left(a + \sum I_t, \, b + \sum \lambda_t\right)" />
                      </div>
                      <div class="text-purple-900 bg-purple-25 p-3 rounded border-l-4 border-purple-300">
                        <div class="font-semibold mb-3">4. {{ t('documentation.glossary.reproductionRate.formulaSteps.3') }}</div>
                        <MathFormula formula="\mathbb{E}[R_t | \text{data}] = \frac{a + \sum I_t}{b + \sum \lambda_t}" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('documentation.glossary.reproductionRate.references') }}</h4>
                <div class="space-y-3">
                  <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-indigo-300">
                    <p class="font-semibold text-gray-900 text-sm">Cori, A., Ferguson, N. M., Fraser, C., & Cauchemez, S. (2013)</p>
                    <p class="text-indigo-700 font-medium text-xs">American Journal of Epidemiology</p>
                    <p class="text-gray-600 text-xs mt-1">A new framework and software to estimate time-varying reproduction numbers during epidemics. 178(9), 1505-1512.</p>
                    <p class="text-blue-600 text-xs mt-1">
                      DOI: <a href="https://doi.org/10.1093/aje/kwt133" target="_blank" class="hover:underline">10.1093/aje/kwt133</a>
                    </p>
                  </div>
                  <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-indigo-300">
                    <p class="font-semibold text-gray-900 text-sm">Thompson, R. N., et al. (2019)</p>
                    <p class="text-indigo-700 font-medium text-xs">Epidemics</p>
                    <p class="text-gray-600 text-xs mt-1">Improved inference of time-varying reproduction numbers during infectious disease outbreaks. 29, 100356.</p>
                    <p class="text-blue-600 text-xs mt-1">
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
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ t('documentation.glossary.caseClassifications.title') }}</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-gray-900">{{ t('documentation.glossary.caseClassifications.positive.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.caseClassifications.positive.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('documentation.glossary.caseClassifications.recovered.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.caseClassifications.recovered.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('documentation.glossary.caseClassifications.deceased.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.caseClassifications.deceased.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('documentation.glossary.caseClassifications.active.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.caseClassifications.active.description') }}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ t('documentation.glossary.dataTypes.title') }}</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-gray-900">{{ t('documentation.glossary.dataTypes.daily.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.dataTypes.daily.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('documentation.glossary.dataTypes.cumulative.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.dataTypes.cumulative.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('documentation.glossary.dataTypes.percentages.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.dataTypes.percentages.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('documentation.glossary.dataTypes.serialInterval.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.dataTypes.serialInterval.description') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Indonesian Terminology -->
        <div class="mt-8 pt-8 border-t border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ t('documentation.glossary.indonesianTerminology.title') }}</h3>
          <p class="text-gray-600 mb-4">{{ t('documentation.glossary.indonesianTerminology.subtitle') }}</p>
          <div class="mb-6 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p class="text-sm text-blue-800 font-medium">{{ t('documentation.glossary.indonesianTerminology.officialNote') }}</p>
          </div>
          
          <!-- Current Terms -->
          <div class="mb-6">
            <h4 class="text-md font-semibold text-gray-900 mb-4 flex items-center">
              <div class="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-xs font-bold">✓</div>
              {{ t('documentation.glossary.indonesianTerminology.currentTerms') }}
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                <h5 class="font-semibold text-gray-900 mb-1">{{ t('documentation.glossary.indonesianTerminology.kasusSuspect.name') }}</h5>
                <p class="text-sm text-green-700 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.kasusSuspect.translation') }}</p>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.indonesianTerminology.kasusSuspect.description') }}</p>
              </div>
              
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                <h5 class="font-semibold text-gray-900 mb-1">{{ t('documentation.glossary.indonesianTerminology.kasusProbable.name') }}</h5>
                <p class="text-sm text-green-700 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.kasusProbable.translation') }}</p>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.indonesianTerminology.kasusProbable.description') }}</p>
              </div>
              
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                <h5 class="font-semibold text-gray-900 mb-1">{{ t('documentation.glossary.indonesianTerminology.kontakErat.name') }}</h5>
                <p class="text-sm text-green-700 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.kontakErat.translation') }}</p>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.indonesianTerminology.kontakErat.description') }}</p>
              </div>
              
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                <h5 class="font-semibold text-gray-900 mb-1">{{ t('documentation.glossary.indonesianTerminology.kasusKonfirmasi.name') }}</h5>
                <p class="text-sm text-green-700 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.kasusKonfirmasi.translation') }}</p>
                <p class="text-sm text-gray-600">{{ t('documentation.glossary.indonesianTerminology.kasusKonfirmasi.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Legacy Terms -->
          <div class="mb-6">
            <h4 class="text-md font-semibold text-gray-900 mb-4 flex items-center">
              <div class="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center mr-2 text-xs font-bold">📋</div>
              {{ t('documentation.glossary.indonesianTerminology.legacyTerms') }}
            </h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 rounded-lg p-4 opacity-75 border-l-4 border-blue-300">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span class="text-sm font-bold">{{ t('documentation.glossary.indonesianTerminology.odp.acronym') }}</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1">{{ t('documentation.glossary.indonesianTerminology.odp.fullName') }}</h5>
                    <p class="text-sm text-blue-700 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.odp.translation') }}</p>
                    <p class="text-sm text-gray-600 mb-2">{{ t('documentation.glossary.indonesianTerminology.odp.description') }}</p>
                    <div class="mt-2">
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        → {{ t('documentation.glossary.indonesianTerminology.odp.replacedBy') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-orange-50 rounded-lg p-4 opacity-75 border-l-4 border-orange-300">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span class="text-sm font-bold">{{ t('documentation.glossary.indonesianTerminology.pdp.acronym') }}</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1">{{ t('documentation.glossary.indonesianTerminology.pdp.fullName') }}</h5>
                    <p class="text-sm text-orange-700 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.pdp.translation') }}</p>
                    <p class="text-sm text-gray-600 mb-2">{{ t('documentation.glossary.indonesianTerminology.pdp.description') }}</p>
                    <div class="mt-2">
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        → {{ t('documentation.glossary.indonesianTerminology.pdp.replacedBy') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-purple-50 rounded-lg p-4 opacity-75 border-l-4 border-purple-300">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span class="text-sm font-bold">{{ t('documentation.glossary.indonesianTerminology.otg.acronym') }}</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1">{{ t('documentation.glossary.indonesianTerminology.otg.fullName') }}</h5>
                    <p class="text-sm text-purple-700 font-medium mb-2">{{ t('documentation.glossary.indonesianTerminology.otg.translation') }}</p>
                    <p class="text-sm text-gray-600 mb-2">{{ t('documentation.glossary.indonesianTerminology.otg.description') }}</p>
                    <div class="mt-2">
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        → {{ t('documentation.glossary.indonesianTerminology.otg.replacedBy') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Classification Evolution -->
          <div class="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-400">
            <h4 class="font-semibold text-gray-900 mb-3">{{ t('documentation.glossary.indonesianTerminology.classificationProgression.title') }}</h4>
            <p class="text-sm text-gray-600 mb-4">{{ t('documentation.glossary.indonesianTerminology.classificationProgression.description') }}</p>
            
            <!-- Official Quote -->
            <div class="mb-4 p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-300">
              <p class="text-sm text-indigo-800 font-medium italic">
                "{{ t('documentation.glossary.indonesianTerminology.classificationProgression.officialQuote') }}"
              </p>
              <p class="text-xs text-indigo-600 mt-1">— Kementerian Kesehatan RI</p>
            </div>
            
            <div class="space-y-4">
              <div>
                <h5 class="text-sm font-medium text-gray-900 mb-2">{{ t('documentation.glossary.indonesianTerminology.classificationProgression.currentFlow') }}</h5>
                <div class="flex items-center space-x-2 text-xs flex-wrap">
                  <span class="px-2 py-1 bg-green-100 text-green-700 rounded font-medium">Suspect</span>
                  <span class="text-gray-400">→</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 rounded font-medium">Probable</span>
                  <span class="text-gray-400">→</span>
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">Confirmed</span>
                  <span class="text-gray-400">→</span>
                  <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded font-medium">Recovery/Death</span>
                </div>
              </div>
              
              <div>
                <h5 class="text-sm font-medium text-gray-900 mb-2">{{ t('documentation.glossary.indonesianTerminology.classificationProgression.legacyFlow') }}</h5>
                <div class="flex items-center space-x-2 text-xs flex-wrap opacity-75">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">ODP</span>
                  <span class="text-gray-400">→</span>
                  <span class="px-2 py-1 bg-orange-100 text-orange-700 rounded font-medium">PDP</span>
                  <span class="text-gray-400">→</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded font-medium">OTG</span>
                  <span class="text-gray-400">→</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 rounded font-medium">Confirmed</span>
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
</script>

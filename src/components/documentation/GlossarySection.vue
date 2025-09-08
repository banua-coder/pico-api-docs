<template>
  <section v-show="isActive" id="glossary" class="mb-16">
    <div class="mb-8">
      <div class="flex items-center mb-4">
        <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900">{{ t('glossary.title') }}</h1>
      </div>
      <p class="text-lg text-gray-600">{{ t('glossary.subtitle') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">{{ t('glossary.cardTitle') }}</h2>
        <p class="text-indigo-100">{{ t('glossary.cardSubtitle') }}</p>
      </div>
      
      <div class="p-8 space-y-8">
        <!-- Reproduction Rate -->
        <div class="border-b border-gray-200 pb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <div class="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">Rt</div>
            {{ t('glossary.reproductionRate.title') }}
          </h3>
          
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('glossary.reproductionRate.definition') }}</h4>
                <p class="text-gray-600 mb-4">{{ t('glossary.reproductionRate.definitionText') }}</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('glossary.reproductionRate.interpretation') }}</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center p-2 bg-red-50 rounded-lg">
                    <span class="font-mono font-bold text-red-600 mr-2">Rt > 1:</span>
                    <span class="text-gray-700">{{ t('glossary.reproductionRate.growing') }}</span>
                  </div>
                  <div class="flex items-center p-2 bg-yellow-50 rounded-lg">
                    <span class="font-mono font-bold text-yellow-600 mr-2">Rt = 1:</span>
                    <span class="text-gray-700">{{ t('glossary.reproductionRate.stable') }}</span>
                  </div>
                  <div class="flex items-center p-2 bg-green-50 rounded-lg">
                    <span class="font-mono font-bold text-green-600 mr-2">Rt < 1:</span>
                    <span class="text-gray-700">{{ t('glossary.reproductionRate.declining') }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('glossary.reproductionRate.calculationMethod') }}</h4>
                <div class="bg-blue-50 rounded-lg p-4 text-sm">
                  <p class="font-semibold text-blue-900 mb-2">{{ t('glossary.reproductionRate.epiEstimTitle') }}</p>
                  <ul class="space-y-1 text-blue-800">
                    <li v-for="(detail, index) in t('glossary.reproductionRate.methodDetails')" :key="index">
                      • {{ detail }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('glossary.reproductionRate.dataAvailability') }}</h4>
                <div class="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                  <p>{{ t('glossary.reproductionRate.dataAvailabilityText', { nullCode: 'null' }) }}</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('glossary.reproductionRate.formula') }}</h4>
                <div class="bg-purple-50 rounded-lg p-4">
                  <p class="font-semibold text-purple-900 mb-3">{{ t('glossary.reproductionRate.formulaTitle') }}</p>
                  <p class="text-purple-800 text-sm mb-4">{{ t('glossary.reproductionRate.formulaDescription') }}</p>
                  
                  <div class="bg-white rounded-lg p-4 border border-purple-200">
                    <div class="space-y-3 text-sm font-mono">
                      <div v-for="(step, index) in t('glossary.reproductionRate.formulaSteps')" :key="index" 
                           class="text-purple-900 bg-purple-25 p-2 rounded border-l-4 border-purple-300">
                        {{ index + 1 }}. {{ step }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">{{ t('glossary.reproductionRate.references') }}</h4>
                <div class="space-y-3">
                  <div v-for="(reference, index) in t('glossary.reproductionRate.referenceList')" :key="index" 
                       class="bg-gray-50 rounded-lg p-4 border-l-4 border-indigo-300">
                    <p class="font-semibold text-gray-900 text-sm">{{ reference.title }}</p>
                    <p class="text-indigo-700 font-medium text-xs">{{ reference.journal }}</p>
                    <p class="text-gray-600 text-xs mt-1">{{ reference.details }}</p>
                    <p class="text-blue-600 text-xs mt-1">
                      DOI: <a :href="`https://doi.org/${reference.doi}`" target="_blank" class="hover:underline">{{ reference.doi }}</a>
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
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ t('glossary.caseClassifications.title') }}</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-gray-900">{{ t('glossary.caseClassifications.positive.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('glossary.caseClassifications.positive.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('glossary.caseClassifications.recovered.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('glossary.caseClassifications.recovered.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('glossary.caseClassifications.deceased.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('glossary.caseClassifications.deceased.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('glossary.caseClassifications.active.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('glossary.caseClassifications.active.description') }}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ t('glossary.dataTypes.title') }}</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-gray-900">{{ t('glossary.dataTypes.daily.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('glossary.dataTypes.daily.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('glossary.dataTypes.cumulative.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('glossary.dataTypes.cumulative.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('glossary.dataTypes.percentages.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('glossary.dataTypes.percentages.description') }}</p>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ t('glossary.dataTypes.serialInterval.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('glossary.dataTypes.serialInterval.description') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Indonesian Terminology -->
        <div class="mt-8 pt-8 border-t border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ t('glossary.indonesianTerminology.title') }}</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 rounded-lg p-4">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span class="text-sm font-bold">{{ t('glossary.indonesianTerminology.odp.acronym') }}</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ t('glossary.indonesianTerminology.odp.fullName') }}</h4>
                  <p class="text-sm text-blue-700 font-medium mb-2">{{ t('glossary.indonesianTerminology.odp.translation') }}</p>
                  <p class="text-sm text-gray-600">{{ t('glossary.indonesianTerminology.odp.description') }}</p>
                </div>
              </div>
            </div>
            
            <div class="bg-orange-50 rounded-lg p-4">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span class="text-sm font-bold">{{ t('glossary.indonesianTerminology.pdp.acronym') }}</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ t('glossary.indonesianTerminology.pdp.fullName') }}</h4>
                  <p class="text-sm text-orange-700 font-medium mb-2">{{ t('glossary.indonesianTerminology.pdp.translation') }}</p>
                  <p class="text-sm text-gray-600">{{ t('glossary.indonesianTerminology.pdp.description') }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">{{ t('glossary.indonesianTerminology.classificationProgression.title') }}</h4>
            <div class="flex items-center space-x-2 text-sm">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{{ t('glossary.indonesianTerminology.odp.acronym') }}</span>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">{{ t('glossary.indonesianTerminology.pdp.acronym') }}</span>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Positive/Negative</span>
            </div>
            <p class="text-xs text-gray-500 mt-2">{{ t('glossary.indonesianTerminology.classificationProgression.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  isActive: boolean
}

defineProps<Props>()
const { t } = useI18n()
</script>
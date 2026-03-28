<template>
  <section v-show="isActive" id="statistics" class="mb-10 md:mb-16">
    <div class="mb-5 md:mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.statistics.title') }}</h1>
      <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400">{{ t('documentation.statistics.description') }}</p>
    </div>

    <!-- Gender Cases -->
    <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
      <div class="bg-gradient-to-r from-violet-600 to-purple-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-base sm:text-lg">/api/v1/stats/gender</code>
        </div>
        <p class="text-violet-100">All gender-based COVID-19 case data for Sulawesi Tengah</p>
      </div>

      <div class="p-4 sm:p-6 lg:p-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
          <CodeBlock :code="genderCasesRequest" language="bash" title="cURL" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Response</h3>
          <CodeBlock :code="genderCasesResponse" language="json" title="200 OK" />
        </div>
      </div>
    </div>

    <!-- Latest Gender Case -->
    <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
      <div class="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-base sm:text-lg">/api/v1/stats/gender/latest</code>
        </div>
        <p class="text-purple-100">Latest gender-based COVID-19 case data</p>
      </div>

      <div class="p-4 sm:p-6 lg:p-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
          <CodeBlock :code="latestGenderRequest" language="bash" title="cURL" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Description</h3>
          <div class="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6">
            <p class="text-gray-600 dark:text-gray-400 text-sm">Returns the single most recent gender-based case record. Useful for dashboard-style displays that only need current data.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tests -->
    <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
      <div class="bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-base sm:text-lg">/api/v1/stats/tests</code>
        </div>
        <p class="text-fuchsia-100">COVID-19 testing statistics for Sulawesi Tengah</p>
      </div>

      <div class="p-4 sm:p-6 lg:p-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
          <CodeBlock :code="testsRequest" language="bash" title="cURL" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Response</h3>
          <CodeBlock :code="testsResponse" language="json" title="200 OK" />
        </div>
      </div>
    </div>

    <!-- Test Types -->
    <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="bg-gradient-to-r from-pink-600 to-rose-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-base sm:text-lg">/api/v1/stats/test-types</code>
        </div>
        <p class="text-pink-100">Available COVID-19 test types</p>
      </div>

      <div class="p-4 sm:p-6 lg:p-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
          <CodeBlock :code="testTypesRequest" language="bash" title="cURL" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Response</h3>
          <CodeBlock :code="testTypesResponse" language="json" title="200 OK" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { API_V1_URL } from '@/config/api'
import { useI18n } from 'vue-i18n'
import CodeBlock from '@/components/CodeBlock.vue'

defineProps<{ isActive: boolean }>()
const { t } = useI18n()

const genderCasesRequest = `curl -X GET "${API_V1_URL}/stats/gender" \\
  -H "Accept: application/json"`

const genderCasesResponse = `{
  "status": "success",
  "data": [
    {
      "id": 1,
      "province_id": 72,
      "date": "2021-08-01",
      "male_positive": 250,
      "female_positive": 210,
      "male_recovered": 200,
      "female_recovered": 180,
      "male_deceased": 15,
      "female_deceased": 10
    }
  ]
}`

const latestGenderRequest = `curl -X GET "${API_V1_URL}/stats/gender/latest" \\
  -H "Accept: application/json"`

const testsRequest = `curl -X GET "${API_V1_URL}/stats/tests" \\
  -H "Accept: application/json"`

const testsResponse = `{
  "status": "success",
  "data": [
    {
      "id": 1,
      "province_id": 72,
      "date": "2021-08-01",
      "total_specimen": 1500,
      "total_positive_specimen": 50,
      "total_negative_specimen": 1450
    }
  ]
}`

const testTypesRequest = `curl -X GET "${API_V1_URL}/stats/test-types" \\
  -H "Accept: application/json"`

const testTypesResponse = `{
  "status": "success",
  "data": [
    { "id": 1, "key": "pcr", "name": "PCR" },
    { "id": 2, "key": "antigen", "name": "Rapid Antigen" }
  ]
}`
</script>

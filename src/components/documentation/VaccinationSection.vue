<template>
  <section v-show="isActive" id="vaccination" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Vaccination</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">Endpoints for COVID-19 vaccination data including national records, Sulawesi Tengah province data, and vaccination center locations.</p>
    </div>

    <!-- National Vaccinations -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
      <div class="bg-gradient-to-r from-teal-500 to-emerald-600 px-8 py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-lg">/api/v1/vaccination/national</code>
        </div>
        <p class="text-teal-100">National vaccination data (paginated)</p>
      </div>

      <div class="p-8">
        <div class="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Query Parameters</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm">
                <thead class="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Parameter</th>
                    <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Default</th>
                    <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-gray-600">
                    <td class="py-3 px-4 font-mono text-teal-600 dark:text-teal-400">page</td>
                    <td class="py-3 px-4 text-gray-500">1</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Page number</td>
                  </tr>
                  <tr class="border-b dark:border-gray-600">
                    <td class="py-3 px-4 font-mono text-teal-600 dark:text-teal-400">per_page</td>
                    <td class="py-3 px-4 text-gray-500">10</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Items per page (max: 100)</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4 font-mono text-teal-600 dark:text-teal-400">load_all</td>
                    <td class="py-3 px-4 text-gray-500">false</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Return all records without pagination</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
            <CodeBlock :code="nationalVaccinationRequest" language="bash" title="cURL" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Response</h3>
          <CodeBlock :code="nationalVaccinationResponse" language="json" title="200 OK" />
        </div>
      </div>
    </div>

    <!-- Province Vaccinations -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
      <div class="bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-lg">/api/v1/vaccination/province</code>
        </div>
        <p class="text-emerald-100">Sulawesi Tengah vaccination data (paginated)</p>
      </div>

      <div class="p-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
          <CodeBlock :code="provinceVaccinationRequest" language="bash" title="cURL" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Description</h3>
          <div class="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-6">
            <p class="text-gray-600 dark:text-gray-400 text-sm">Returns vaccination records specifically for Sulawesi Tengah (province_id: 72). Supports the same pagination parameters as the national endpoint.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Vaccine Locations -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="bg-gradient-to-r from-green-600 to-teal-600 px-8 py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-lg">/api/v1/vaccination/locations</code>
        </div>
        <p class="text-green-100">Vaccination centers/locations in Sulawesi Tengah (paginated)</p>
      </div>

      <div class="p-8">
        <div class="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
            <CodeBlock :code="vaccineLocationsRequest" language="bash" title="cURL" />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Response</h3>
            <CodeBlock :code="vaccineLocationsResponse" language="json" title="200 OK" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

defineProps<{ isActive: boolean }>()

const nationalVaccinationRequest = `curl -X GET "https://pico-api-go.banuacoder.com/api/v1/vaccination/national?page=1&per_page=10" \\
  -H "Accept: application/json"`

const nationalVaccinationResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "day": 1,
        "date": "2021-01-13",
        "total_vaccination_target": 181554369,
        "first_vaccination_received": 3000,
        "second_vaccination_received": 0,
        "cumulative_first_vaccination_received": 3000,
        "cumulative_second_vaccination_received": 0
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 365,
      "total_pages": 37,
      "has_next": true,
      "has_prev": false
    }
  }
}`

const provinceVaccinationRequest = `curl -X GET "https://pico-api-go.banuacoder.com/api/v1/vaccination/province?page=1&per_page=10" \\
  -H "Accept: application/json"`

const vaccineLocationsRequest = `curl -X GET "https://pico-api-go.banuacoder.com/api/v1/vaccination/locations?load_all=true" \\
  -H "Accept: application/json"`

const vaccineLocationsResponse = `{
  "status": "success",
  "data": [
    {
      "id": 1,
      "regency_id": 7271,
      "name": "Puskesmas Tipo",
      "address": "Jl. Basuki Rahmat, Palu",
      "operational_time": "08:00 - 16:00",
      "is_first_vaccination": true,
      "is_second_vaccination": true,
      "daily_vaccination_quota": 100,
      "vaccination_stock_remaining": 50,
      "notes": ""
    }
  ]
}`
</script>

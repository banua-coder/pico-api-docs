<template>
  <section v-show="isActive" id="regencies" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Regencies (Kabupaten/Kota)</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">Endpoints for regency/city data and COVID-19 case statistics in Sulawesi Tengah.</p>
    </div>

    <!-- List Regencies -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-lg">/api/v1/regencies</code>
        </div>
        <p class="text-blue-100">Get all regencies/cities in Sulawesi Tengah (paginated)</p>
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
                    <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Type</th>
                    <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Default</th>
                    <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-gray-600">
                    <td class="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">page</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                    <td class="py-3 px-4 text-gray-500">1</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Page number</td>
                  </tr>
                  <tr class="border-b dark:border-gray-600">
                    <td class="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">per_page</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                    <td class="py-3 px-4 text-gray-500">10</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Items per page (max: 100)</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">load_all</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                    <td class="py-3 px-4 text-gray-500">false</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Return all data without pagination</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
            <CodeBlock :code="listRegenciesRequest" language="bash" title="cURL" />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Response</h3>
          <CodeBlock :code="listRegenciesResponse" language="json" title="200 OK" />
        </div>
      </div>
    </div>

    <!-- Get Regency by ID -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-lg">/api/v1/regencies/{code}</code>
        </div>
        <p class="text-indigo-100">Get a single regency by its ID/code</p>
      </div>

      <div class="p-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Path Parameters</h3>
          <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm">
            <thead class="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Parameter</th>
                <th class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-600">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">code</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Regency ID (e.g. 7271 for Kota Palu)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
          <CodeBlock :code="getRegencyRequest" language="bash" title="cURL" />
        </div>
      </div>
    </div>

    <!-- Get Regency Cases -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-lg">/api/v1/regencies/{code}/cases</code>
        </div>
        <p class="text-purple-100">Get COVID-19 case history for a specific regency</p>
      </div>

      <div class="p-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
          <CodeBlock :code="getRegencyCasesRequest" language="bash" title="cURL" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Response</h3>
          <CodeBlock :code="getRegencyCasesResponse" language="json" title="200 OK" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

defineProps<{ isActive: boolean }>()

const listRegenciesRequest = `curl -X GET "https://pico-api-go.banuacoder.com/api/v1/regencies?page=1&per_page=10" \\
  -H "Accept: application/json"`

const listRegenciesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 7201,
        "province_id": 72,
        "name": "Kabupaten Banggai",
        "created_at": "2021-01-01T00:00:00Z",
        "updated_at": "2021-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 13,
      "total_pages": 2,
      "has_next": true,
      "has_prev": false
    }
  }
}`

const getRegencyRequest = `curl -X GET "https://pico-api-go.banuacoder.com/api/v1/regencies/7271" \\
  -H "Accept: application/json"`

const getRegencyCasesRequest = `curl -X GET "https://pico-api-go.banuacoder.com/api/v1/regencies/7271/cases" \\
  -H "Accept: application/json"`

const getRegencyCasesResponse = `{
  "status": "success",
  "data": [
    {
      "id": 1,
      "regency_id": 7271,
      "day": 1,
      "date": "2020-03-02",
      "positive": 5,
      "recovered": 3,
      "deceased": 0,
      "active": 2
    }
  ]
}`
</script>

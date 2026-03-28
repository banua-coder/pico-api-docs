<template>
  <section v-show="isActive" id="hospitals" class="mb-10 md:mb-16">
    <div class="mb-5 md:mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.hospitals.title') }}</h1>
      <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400">{{ t('documentation.hospitals.description') }}</p>
    </div>

    <!-- List Hospitals -->
    <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
      <div class="bg-gradient-to-r from-red-500 to-pink-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-base sm:text-lg">/api/v1/hospitals</code>
        </div>
        <p class="text-red-100">Get all hospitals in Sulawesi Tengah with bed availability (paginated)</p>
      </div>

      <div class="p-4 sm:p-6 lg:p-8">
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
                    <td class="py-3 px-4 font-mono text-red-600 dark:text-red-400">page</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                    <td class="py-3 px-4 text-gray-500">1</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Page number</td>
                  </tr>
                  <tr class="border-b dark:border-gray-600">
                    <td class="py-3 px-4 font-mono text-red-600 dark:text-red-400">per_page</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                    <td class="py-3 px-4 text-gray-500">10</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Items per page (max: 100)</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4 font-mono text-red-600 dark:text-red-400">load_all</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                    <td class="py-3 px-4 text-gray-500">false</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Return all hospitals without pagination</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
            <CodeBlock :code="listHospitalsRequest" language="bash" title="cURL" />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Response</h3>
          <CodeBlock :code="listHospitalsResponse" language="json" title="200 OK" />
        </div>
      </div>
    </div>

    <!-- Get Hospital by Code -->
    <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="bg-gradient-to-r from-pink-600 to-rose-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-base sm:text-lg">/api/v1/hospitals/{code}</code>
        </div>
        <p class="text-pink-100">Get a single hospital by its code with full details</p>
      </div>

      <div class="p-4 sm:p-6 lg:p-8 grid lg:grid-cols-2 gap-8">
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
                <td class="py-3 px-4 font-mono text-red-600 dark:text-red-400">code</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Hospital code (e.g. 7200001)</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
            <CodeBlock :code="getHospitalRequest" language="bash" title="cURL" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Response</h3>
          <CodeBlock :code="getHospitalResponse" language="json" title="200 OK" />
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

const listHospitalsRequest = `curl -X GET "${API_V1_URL}/hospitals?page=1&per_page=10" \\
  -H "Accept: application/json"`

const listHospitalsResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "regency_id": 7271,
        "name": "RSUD Undata Palu",
        "hospital_code": "7200001",
        "address": "Jl. Undata No.1, Palu",
        "latitude": -0.882,
        "longitude": 119.866,
        "igd_count": 5,
        "contacts": [
          { "id": 1, "contact_type_id": 1, "contact": "0451-421820", "name": "Phone", "icon": "phone" }
        ],
        "beds": [
          { "id": 1, "hospital_bed_type_id": 1, "bed_type_name": "ICU", "available": 3, "total": 10 }
        ]
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 42,
      "total_pages": 5,
      "has_next": true,
      "has_prev": false
    }
  }
}`

const getHospitalRequest = `curl -X GET "${API_V1_URL}/hospitals/7200001" \\
  -H "Accept: application/json"`

const getHospitalResponse = `{
  "status": "success",
  "data": {
    "id": 1,
    "regency_id": 7271,
    "name": "RSUD Undata Palu",
    "hospital_code": "7200001",
    "address": "Jl. Undata No.1, Palu",
    "latitude": -0.882,
    "longitude": 119.866,
    "igd_count": 5,
    "contacts": [...],
    "beds": [...]
  }
}`
</script>

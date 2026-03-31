<template>
  <section v-show="isActive" id="task-forces" class="mb-10 md:mb-16">
    <div class="mb-5 md:mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{{ t('documentation.taskForces.title') }}</h1>
      <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400">{{ t('documentation.taskForces.description') }}</p>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-hidden">
      <div class="bg-gradient-to-r from-orange-500 to-amber-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">GET</span>
          <code class="text-white font-mono text-base sm:text-lg">/api/v1/task-forces</code>
        </div>
        <p class="text-orange-100">Get all COVID-19 task force posts grouped by regency (paginated)</p>
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
                    <td class="py-3 px-4 font-mono text-orange-600 dark:text-orange-400">page</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                    <td class="py-3 px-4 text-gray-500">1</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Page number (paginates by regency)</td>
                  </tr>
                  <tr class="border-b dark:border-gray-600">
                    <td class="py-3 px-4 font-mono text-orange-600 dark:text-orange-400">per_page</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">integer</td>
                    <td class="py-3 px-4 text-gray-500">10</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Regencies per page (max: 100)</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4 font-mono text-orange-600 dark:text-orange-400">load_all</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                    <td class="py-3 px-4 text-gray-500">false</td>
                    <td class="py-3 px-4 text-gray-600 dark:text-gray-400">Return all task forces without pagination</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Request</h3>
            <CodeBlock :code="listTaskForcesRequest" language="bash" title="cURL" />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Example Response</h3>
          <CodeBlock :code="listTaskForcesResponse" language="json" title="200 OK" />
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

const listTaskForcesRequest = `curl -X GET "${API_V1_URL}/task-forces?page=1&per_page=5" \\
  -H "Accept: application/json"`

const listTaskForcesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "regency_id": 7201,
        "regency_name": "Kabupaten Banggai",
        "task_forces": [
          {
            "id": 1,
            "regency_id": 7201,
            "name": "Satgas COVID-19 Banggai",
            "contacts": [
              {
                "id": 1,
                "contact_type_id": 1,
                "contact": "0461-21000",
                "name": "Phone",
                "icon": "phone"
              }
            ]
          }
        ]
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 5,
      "total": 13,
      "total_pages": 3,
      "has_next": true,
      "has_prev": false
    }
  }
}`
</script>

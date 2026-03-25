<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <Navigation variant="solid" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <div class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">API Reference</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">Complete reference for all PICO SulTeng API endpoints.</p>
        <div class="mt-4 flex items-center space-x-4">
          <span class="text-sm text-gray-500 dark:text-gray-400">Base URL:</span>
          <code class="bg-gray-100 dark:bg-gray-800 text-pico-deep dark:text-pico-sky px-3 py-1 rounded-lg text-sm font-mono">{{ API_V1_URL }}</code>
        </div>
      </div>

      <!-- Pagination Note -->
      <div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-2xl p-6 mb-10">
        <h2 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">📄 Pagination</h2>
        <p class="text-blue-700 dark:text-blue-300 text-sm mb-3">All list endpoints marked with <span class="bg-blue-100 dark:bg-blue-800 px-2 py-0.5 rounded text-xs font-mono">paginated</span> support these query parameters:</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white dark:bg-gray-800 rounded-lg p-3">
            <code class="text-blue-600 dark:text-blue-400 font-mono text-sm">?page=1</code>
            <p class="text-xs text-gray-500 mt-1">Page number (default: 1)</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg p-3">
            <code class="text-blue-600 dark:text-blue-400 font-mono text-sm">?per_page=10</code>
            <p class="text-xs text-gray-500 mt-1">Items per page (default: 10, max: 100)</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg p-3">
            <code class="text-blue-600 dark:text-blue-400 font-mono text-sm">?load_all=true</code>
            <p class="text-xs text-gray-500 mt-1">Return all data without pagination</p>
          </div>
        </div>
      </div>

      <!-- Endpoint Groups -->
      <div class="space-y-8">

        <!-- Core -->
        <EndpointGroup title="Core" icon="⚡" color="from-gray-600 to-slate-600" :endpoints="coreEndpoints" />

        <!-- National -->
        <EndpointGroup title="National Data" icon="🌏" color="from-blue-600 to-indigo-600" :endpoints="nationalEndpoints" />

        <!-- Provinces -->
        <EndpointGroup title="Province Data" icon="🗺️" color="from-indigo-600 to-purple-600" :endpoints="provinceEndpoints" />

        <!-- Regencies -->
        <EndpointGroup title="Regional Data (Kabupaten/Kota)" icon="📍" color="from-blue-500 to-cyan-500" :endpoints="regencyEndpoints" />

        <!-- Hospitals -->
        <EndpointGroup title="Hospitals" icon="🏥" color="from-red-500 to-pink-600" :endpoints="hospitalEndpoints" />

        <!-- Task Forces -->
        <EndpointGroup title="Task Forces (Gugus Tugas)" icon="🛡️" color="from-orange-500 to-amber-500" :endpoints="taskForceEndpoints" />

        <!-- Vaccination -->
        <EndpointGroup title="Vaccination" icon="💉" color="from-teal-500 to-emerald-600" :endpoints="vaccinationEndpoints" />

        <!-- Statistics -->
        <EndpointGroup title="Statistics" icon="📊" color="from-violet-600 to-purple-600" :endpoints="statsEndpoints" />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { API_V1_URL } from '@/config/api'
import Navigation from '@/components/Navigation.vue'
import { defineComponent, h } from 'vue'

interface Endpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  description: string
  paginated?: boolean
}

interface EndpointGroupProps {
  title: string
  icon: string
  color: string
  endpoints: Endpoint[]
}

const EndpointGroup = defineComponent({
  props: ['title', 'icon', 'color', 'endpoints'],
  setup(props: EndpointGroupProps) {
    const methodColor: Record<string, string> = {
      GET: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      POST: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      PUT: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      DELETE: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    }
    return () => h('div', { class: 'bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden' }, [
      h('div', { class: `bg-gradient-to-r ${props.color} px-6 py-4` }, [
        h('h2', { class: 'text-xl font-bold text-white' }, `${props.icon} ${props.title}`)
      ]),
      h('div', { class: 'overflow-x-auto' }, [
        h('table', { class: 'min-w-full' }, [
          h('thead', { class: 'bg-gray-50 dark:bg-gray-900' }, [
            h('tr', [
              h('th', { class: 'text-left py-3 px-6 text-sm font-semibold text-gray-600 dark:text-gray-400 w-20' }, 'Method'),
              h('th', { class: 'text-left py-3 px-6 text-sm font-semibold text-gray-600 dark:text-gray-400' }, 'Endpoint'),
              h('th', { class: 'text-left py-3 px-6 text-sm font-semibold text-gray-600 dark:text-gray-400' }, 'Description'),
            ])
          ]),
          h('tbody', { class: 'divide-y divide-gray-100 dark:divide-gray-700' },
            props.endpoints.map((ep: Endpoint) =>
              h('tr', { class: 'hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors' }, [
                h('td', { class: 'py-3 px-6' }, [
                  h('span', { class: `${methodColor[ep.method]} text-xs font-bold px-2 py-1 rounded` }, ep.method)
                ]),
                h('td', { class: 'py-3 px-6' }, [
                  h('code', { class: 'font-mono text-sm text-gray-800 dark:text-gray-200' }, ep.path),
                  ep.paginated ? h('span', { class: 'ml-2 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded' }, 'paginated') : null
                ]),
                h('td', { class: 'py-3 px-6 text-sm text-gray-600 dark:text-gray-400' }, ep.description),
              ])
            )
          )
        ])
      ])
    ])
  }
})

const coreEndpoints: Endpoint[] = [
  { method: 'GET', path: '/', description: 'Redirect to API index or docs' },
  { method: 'GET', path: '/api/v1', description: 'API index with available endpoints' },
  { method: 'GET', path: '/api/v1/health', description: 'Health check with database status' },
]

const nationalEndpoints: Endpoint[] = [
  { method: 'GET', path: '/api/v1/national', description: 'All national COVID-19 case records', paginated: true },
  { method: 'GET', path: '/api/v1/national/latest', description: 'Latest national COVID-19 case record' },
  { method: 'GET', path: '/api/v1/national/{day}', description: 'National case data for a specific day number' },
]

const provinceEndpoints: Endpoint[] = [
  { method: 'GET', path: '/api/v1/provinces', description: 'All provinces in Indonesia' },
  { method: 'GET', path: '/api/v1/provinces/{code}', description: 'Province detail by ID' },
  { method: 'GET', path: '/api/v1/provinces/cases', description: 'COVID-19 cases for all provinces' },
  { method: 'GET', path: '/api/v1/provinces/{provinceId}/cases', description: 'COVID-19 cases for a specific province' },
]

const regencyEndpoints: Endpoint[] = [
  { method: 'GET', path: '/api/v1/regencies', description: 'All regencies/cities in Sulawesi Tengah', paginated: true },
  { method: 'GET', path: '/api/v1/regencies/{code}', description: 'Regency detail by ID code' },
  { method: 'GET', path: '/api/v1/regencies/{code}/cases', description: 'COVID-19 case history for a regency' },
]

const hospitalEndpoints: Endpoint[] = [
  { method: 'GET', path: '/api/v1/hospitals', description: 'All hospitals with bed availability', paginated: true },
  { method: 'GET', path: '/api/v1/hospitals/{code}', description: 'Hospital detail by hospital code' },
]

const taskForceEndpoints: Endpoint[] = [
  { method: 'GET', path: '/api/v1/task-forces', description: 'Task force posts grouped by regency', paginated: true },
]

const vaccinationEndpoints: Endpoint[] = [
  { method: 'GET', path: '/api/v1/vaccination/national', description: 'National vaccination records', paginated: true },
  { method: 'GET', path: '/api/v1/vaccination/province', description: 'Sulawesi Tengah vaccination records', paginated: true },
  { method: 'GET', path: '/api/v1/vaccination/locations', description: 'Vaccination centers in Sulawesi Tengah', paginated: true },
]

const statsEndpoints: Endpoint[] = [
  { method: 'GET', path: '/api/v1/stats/gender', description: 'Gender-based COVID-19 case data' },
  { method: 'GET', path: '/api/v1/stats/gender/latest', description: 'Latest gender-based case data' },
  { method: 'GET', path: '/api/v1/stats/tests', description: 'COVID-19 testing statistics' },
  { method: 'GET', path: '/api/v1/stats/test-types', description: 'Available test types' },
]
</script>

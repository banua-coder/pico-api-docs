<template>
  <!-- Mobile overlay -->
  <div v-if="open" class="fixed inset-0 bg-black/30 z-30 lg:hidden" @click="$emit('close')"></div>

  <!-- Sidebar -->
  <aside
    class="fixed top-14 left-0 bottom-0 z-40 w-[260px] bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 overflow-y-auto flex-shrink-0 transition-transform duration-200"
    :class="open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
  >
    <div class="px-4 py-5">
      <!-- Language + Theme -->
      <div class="flex items-center space-x-2 mb-6">
        <button @click="toggleLanguage" class="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2 py-1 rounded border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
          {{ locale === 'en' ? 'EN' : 'ID' }}
        </button>
        <ThemeToggle />
      </div>

      <nav class="space-y-5">
        <div v-for="group in navGroups" :key="group.title">
          <div class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 px-3">
            {{ group.title }}
          </div>
          <ul class="space-y-0.5">
            <li v-for="item in group.items" :key="item.id">
              <a
                :href="`#${item.id}`"
                @click.prevent="selectSection(item.id)"
                class="sidebar-link"
                :class="{ active: activeSection === item.id }"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ThemeToggle from './ThemeToggle.vue'

defineProps<{
  activeSection: string
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'update:activeSection', val: string): void
  (e: 'close'): void
}>()

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'id' : 'en'
  localStorage.setItem('pico-language', locale.value)
}

const selectSection = (id: string) => {
  emit('update:activeSection', id)
  emit('close')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const navGroups = [
  {
    title: 'Introduction',
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'authentication', label: 'Authentication' },
      { id: 'errors', label: 'Errors' },
      { id: 'pagination', label: 'Pagination' },
    ],
  },
  {
    title: 'Core Resources',
    items: [
      { id: 'national-latest', label: 'National Cases' },
      { id: 'provinces', label: 'Provinces' },
      { id: 'province-cases', label: 'Province Cases' },
      { id: 'regencies', label: 'Regencies' },
    ],
  },
  {
    title: 'Health Infrastructure',
    items: [
      { id: 'hospitals', label: 'Hospitals' },
      { id: 'task-forces', label: 'Task Forces' },
    ],
  },
  {
    title: 'Statistics',
    items: [
      { id: 'gender-stats', label: 'Gender Stats' },
      { id: 'test-statistics', label: 'Test Statistics' },
      { id: 'test-types', label: 'Test Types' },
    ],
  },
  {
    title: 'Vaccination',
    items: [
      { id: 'vaccination-national', label: 'National' },
      { id: 'vaccination-province', label: 'Province' },
      { id: 'vaccination-locations', label: 'Locations' },
    ],
  },
]
</script>

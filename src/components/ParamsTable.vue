<template>
  <div class="mt-4">
    <h4 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{{ title || t('docs.table.queryParameters') }}</h4>
    <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <table class="params-table">
        <thead>
          <tr>
            <th>{{ t('docs.table.name') }}</th>
            <th>{{ t('docs.table.type') }}</th>
            <th>{{ t('docs.table.required') }}</th>
            <th>{{ t('docs.table.description') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="param in params" :key="param.name">
            <td><code class="text-xs font-mono text-[#635bff] dark:text-purple-400">{{ param.name }}</code></td>
            <td class="text-xs text-gray-500 dark:text-gray-400">{{ param.type }}</td>
            <td>
              <span v-if="param.required" class="text-xs text-amber-600 dark:text-amber-400 font-medium">{{ t('docs.table.requiredBadge') }}</span>
              <span v-else class="text-xs text-gray-400 dark:text-gray-500">{{ t('docs.table.optionalBadge') }}</span>
            </td>
            <td class="text-xs text-gray-600 dark:text-gray-400">{{ param.description }}<span v-if="param.default" class="ml-1 text-gray-400 dark:text-gray-500">{{ t('docs.table.default') }}: <code class="font-mono">{{ param.default }}</code></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

export interface Param {
  name: string
  type: string
  required?: boolean
  description: string
  default?: string
}

defineProps<{
  params: Param[]
  title?: string
}>()

const { t } = useI18n()
</script>

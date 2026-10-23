<template>
  <div class="min-w-0">
    <div class="table-card">
      <table class="data-table params-table">
        <caption class="sr-only">{{ title }}</caption>
        <thead>
          <tr>
            <th scope="col">{{ t('docs.table.name') }}</th>
            <th scope="col">{{ t('docs.table.type') }}</th>
            <th scope="col">{{ t('docs.table.use') }}</th>
            <th scope="col">{{ t('docs.table.description') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in params" :key="p.name">
            <td class="p-name"><code class="break-all text-[0.8125rem] font-semibold">{{ p.name }}</code></td>
            <td class="p-type text-muted">{{ p.type }} <span class="text-xs">({{ t(`docs.table.in.${p.in ?? 'query'}`) }})</span></td>
            <td class="p-req whitespace-nowrap">
              <span class="state-pill" :class="stateOf(p) === 'required' ? 'state-on' : stateOf(p) === 'deprecated' ? 'state-deprecated' : 'state-off'">{{ t(`docs.table.${stateOf(p)}`) }}</span>
            </td>
            <td class="p-desc text-muted">
              {{ t(`docs.params.${p.key}.description`) }}
              <span v-if="p.default" class="ml-1 whitespace-nowrap">{{ t('docs.table.default') }}: <code class="text-ink">{{ p.default }}</code></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-if="params.length" class="mt-2 text-xs text-muted">{{ t('docs.table.legend') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { ParamDef } from '@/data/params'

defineProps<{ params: ParamDef[]; title: string }>()
const { t } = useI18n()

// State is a pill shape plus a word: filled = required, outline = optional, dashed = deprecated.
const stateOf = (p: ParamDef) => (p.deprecated ? 'deprecated' : p.required ? 'required' : 'optional')
</script>

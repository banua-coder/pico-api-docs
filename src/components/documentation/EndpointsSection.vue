<template>
  <div class="space-y-10">
    <p class="max-w-prose leading-relaxed">{{ t('docs.endpointsIndex.intro') }}</p>
    <section v-for="g in groups" :key="g.id">
      <h2 class="h2 mb-3">{{ t(`docs.endpointGroups.${g.id}`) }}</h2>
      <div class="table-card">
        <table class="data-table params-table">
          <caption class="sr-only">{{ t(`docs.endpointGroups.${g.id}`) }}</caption>
          <thead>
            <tr>
              <th scope="col" class="w-20">{{ t('docs.endpointsIndex.method') }}</th>
              <th scope="col">{{ t('docs.endpointsIndex.path') }}</th>
              <th scope="col">{{ t('docs.table.description') }}</th>
              <th scope="col" class="w-32">{{ t('docs.endpointsIndex.paginated') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="e in g.items" :key="e.id">
              <td class="p-req"><span class="method-pill">{{ e.method }}</span></td>
              <td class="p-name">
                <router-link :to="`/docs/${e.section}`" class="break-all font-mono text-[0.8125rem] font-medium text-brand underline-offset-4 hover:underline">{{ e.path }}</router-link>
              </td>
              <td class="p-desc text-muted">{{ t(`endpoints.${e.id}`) }}</td>
              <td class="p-type whitespace-nowrap">
                <span class="state-pill" :class="e.paging ? 'state-tint' : 'state-off'">{{ t(`docs.endpointsIndex.paged.${e.paging ?? 'none'}`) }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { endpoints, GROUP_IDS } from '@/data/endpoints'

const { t } = useI18n()
const groups = computed(() => GROUP_IDS.map((id) => ({ id, items: endpoints.filter((e) => e.group === id) })))
</script>

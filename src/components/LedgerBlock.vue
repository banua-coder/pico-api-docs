<template>
  <section class="mt-6">
    <h3 class="text-xl font-bold">{{ title }}</h3>
    <p class="num mb-2 text-sm text-field-muted" :class="{ 'min-h-5': true }">
      <template v-if="record">{{ t('home.latestRecord', { date: formatDate(record.date) }) }}</template>
      <template v-else-if="loading">{{ t('home.loading') }}</template>
      <template v-else>{{ t('home.noRecord') }}</template>
    </p>
    <dl class="border-b border-field-ink/25">
      <div v-for="row in rows" :key="row.key" class="flex items-baseline justify-between gap-4 border-t border-field-ink/25 py-2">
        <dt class="text-sm sm:text-base">{{ t(`home.rows.${row.key}`) }}</dt>
        <dd class="num text-right font-bold" :class="big ? 'text-3xl' : 'text-xl'">
          <span v-if="row.value !== null">{{ nf.format(row.value) }}</span>
          <span v-else class="inline-block h-6 w-20 align-middle" :class="loading ? 'bg-field-ink/20' : ''"><span v-if="!loading" aria-label="n/a">&ndash;</span></span>
        </dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { LatestRecord } from '@/composables/useLatestRecords'

const props = defineProps<{ title: string; record: LatestRecord | null; loading: boolean; locale: string; big?: boolean }>()
const { t } = useI18n()

const nf = computed(() => new Intl.NumberFormat(props.locale))
const formatDate = (iso: string) =>
  new Intl.DateTimeFormat(props.locale, { dateStyle: 'long', timeZone: 'Asia/Jakarta' }).format(new Date(iso))

// Same four cumulative figures for every block; null renders a reserved empty cell (no layout shift).
const rows = computed(() => {
  const c = props.record?.cumulative
  return [
    { key: 'positive', value: c?.positive ?? null },
    { key: 'recovered', value: c?.recovered ?? null },
    { key: 'deceased', value: c?.deceased ?? null },
    { key: 'active', value: c?.active ?? null },
  ]
})
</script>

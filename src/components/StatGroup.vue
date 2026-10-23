<template>
  <section class="border-t border-rule px-4 pb-2 pt-6 sm:px-6 first-of-type:border-t-0">
    <div class="mb-2 flex flex-wrap items-baseline justify-between gap-x-4">
      <h3 class="text-[17px] font-[650] leading-6 tracking-[-0.01em]">{{ title }}</h3>
      <p class="num text-[13px] text-muted">
        <template v-if="record">{{ t('home.latestRecord', { date: formatDate(record.date) }) }}</template>
        <template v-else-if="loading">{{ t('home.loading') }}</template>
        <template v-else>{{ t('home.noRecord') }}</template>
      </p>
    </div>
    <dl>
      <div v-for="row in rows" :key="row.key" class="flex min-h-12 items-center justify-between gap-3 py-1.5 sm:gap-4 border-t border-rule-soft">
        <dt class="min-w-0 text-sm leading-[18px] text-ink-soft">
          {{ t(`home.rows.${row.key}`) }}
          <code class="block break-all text-[11px] leading-[14px] text-muted">{{ path }}.{{ row.key }}</code>
        </dt>
        <dd class="num text-right text-lg font-bold sm:text-[22px] leading-8 tracking-[-0.01em]">
          <span v-if="row.value !== null">{{ nf.format(row.value) }}</span>
          <span v-else class="inline-block h-6 w-20 rounded align-middle" :class="loading ? 'bg-sunk' : ''"><span v-if="!loading" aria-label="n/a">&ndash;</span></span>
        </dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { LatestRecord } from '@/composables/useLatestRecords'

const props = defineProps<{ title: string; record: LatestRecord | null; loading: boolean; locale: string; path: string }>()
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

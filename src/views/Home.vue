<template>
  <main id="main-content" tabindex="-1" class="flex-1 focus:outline-none">
    <!-- First viewport: promise and request on the left, stat card of the latest records on the right -->
    <section aria-labelledby="home-title" class="mx-auto max-w-[90rem] px-4 pb-16 pt-10 md:px-8 lg:px-16 lg:pt-12">
      <div class="grid gap-12 lg:grid-cols-[minmax(0,41rem)_minmax(0,1fr)] lg:gap-x-16">
        <div class="min-w-0">
          <h1 id="home-title" class="h1 mb-4">PICO SulTeng</h1>
          <p class="mb-6 max-w-[37.5rem] text-lg leading-7 text-ink-soft">{{ t('home.promise') }}</p>

          <div class="mb-6 flex items-center gap-2 text-[13px] text-muted">
            <span>{{ t('home.baseUrl') }}</span>
            <code class="code-chip min-w-0 break-all">{{ API_BASE_URL }}</code>
            <CopyButton :text="API_BASE_URL" :label="t('ui.copyBaseUrl')" class="!h-6 !w-6 shrink-0" />
          </div>

          <CodePanel :curl="curl" :response="nationalLatestResponse" class="mb-8" />

          <div class="flex flex-wrap gap-4">
            <BaseButton as="router-link" to="/docs">{{ t('home.cta') }}</BaseButton>
            <BaseButton as="router-link" to="/docs/glossary" variant="secondary">{{ t('nav.glossary') }}</BaseButton>
          </div>
        </div>

        <section aria-labelledby="stat-title" class="min-w-0 lg:mt-2">
          <div class="stat-card rise-in">
            <h2 id="stat-title" class="sr-only">{{ t('home.statTitle') }}</h2>
            <StatGroup path="data.data[0].cumulative" :title="t('home.province')" :record="province" :loading="state === 'loading'" :locale="locale" />
            <StatGroup path="data.cumulative" :title="t('home.national')" :record="national" :loading="state === 'loading'" :locale="locale" />

            <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-rule bg-sunk px-4 py-4 sm:px-6 text-xs leading-5 text-muted">
              <p v-if="state === 'error' || state === 'offline'" class="flex items-start gap-2 text-ink" role="alert">
                <Icon name="alert" :size="16" class="mt-0.5" />
                <span>{{ state === 'offline' ? t('home.offline') : t('home.error') }}</span>
              </p>
              <p v-else>{{ t('home.historicalNote') }}</p>
              <p class="num flex items-center gap-2" role="status">
                <Icon v-if="health === 'unavailable'" name="alert" :size="14" />
                <span v-else class="h-2 w-2 shrink-0 rounded-full" :class="health === 'healthy' ? 'bg-success' : 'border-[1.5px] border-muted'" aria-hidden="true" />
                <span v-if="health === 'checking'">{{ t('home.health.checking') }}</span>
                <span v-else-if="health === 'healthy'">{{ t('home.health.healthy', { time: checkedTime }) }}</span>
                <span v-else>{{ t('home.health.unavailable') }}</span>
              </p>
              <button v-if="state === 'error' || state === 'offline' || health === 'unavailable'" type="button" class="btn-ghost touch-target inline-flex h-8 items-center px-3 text-[13px] font-semibold" @click="retry">
                {{ t('ui.retry') }}
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- What the API covers -->
    <section aria-labelledby="covers-title" class="border-t border-rule">
      <div class="mx-auto max-w-[90rem] px-4 py-16 md:px-8 lg:px-16">
        <h2 id="covers-title" class="h2">{{ t('home.coversTitle') }}</h2>
        <p class="mt-2 max-w-prose text-muted">{{ t('home.coversText') }}</p>
        <div class="table-card mt-6">
          <table class="data-table params-table">
            <caption class="sr-only">{{ t('home.coversTitle') }}</caption>
            <thead>
              <tr>
                <th scope="col" class="w-1/4">{{ t('home.group') }}</th>
                <th scope="col">{{ t('home.examplePath') }}</th>
                <th scope="col" class="w-2/5">{{ t('home.holds') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="g in groups" :key="g.id">
                <td class="p-name font-semibold">{{ t(`docs.endpointGroups.${g.id}`) }}</td>
                <td class="p-type">
                  <router-link :to="`/docs/${g.example.section}`" class="break-all font-mono text-[0.8125rem] font-medium text-brand underline-offset-4 hover:underline">{{ g.example.path }}</router-link>
                </td>
                <td class="p-desc text-muted">{{ t(`home.groups.${g.id}`) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Data and methods -->
    <section aria-labelledby="methods-title" class="mx-auto max-w-[90rem] px-4 pb-16 md:px-8 lg:px-16">
      <div class="flex flex-col gap-6 rounded-xl border border-brand/15 bg-brand-tint p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
        <div class="max-w-2xl">
          <h2 id="methods-title" class="h2">{{ t('nav.glossary') }}</h2>
          <p class="mt-2 text-lg leading-7 text-ink-soft">{{ t('home.methodsText') }}</p>
        </div>
        <BaseButton as="router-link" to="/docs/glossary" class="shrink-0 self-start md:self-auto">
          {{ t('home.methodsCta') }} <Icon name="arrow-right" :size="16" />
        </BaseButton>
      </div>
    </section>

    <!-- Data sources -->
    <section aria-labelledby="sources-title" class="border-t border-rule">
      <div class="mx-auto max-w-[90rem] px-4 py-16 md:px-8 lg:px-16">
        <h2 id="sources-title" class="h2">{{ t('dataSources.title') }}</h2>
        <p class="mt-2 max-w-prose text-muted">{{ t('dataSources.subtitle') }}</p>
        <ul class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <li v-for="s in sources" :key="s.name">
            <a :href="s.url" target="_blank" rel="noopener noreferrer" class="flex h-full flex-col items-center gap-3 rounded-lg border border-rule bg-surface p-3 text-center transition-colors hover:border-rule-strong hover:bg-sunk">
              <span class="flex h-24 w-full items-center justify-center rounded-md bg-surface p-3 dark:bg-[#e6edf7]">
                <img :src="s.logo" :alt="s.name" width="64" height="64" loading="lazy" class="h-16 w-full object-contain" />
              </span>
              <span class="text-sm font-medium text-ink">{{ s.name }}</span>
              <span class="sr-only">{{ t('ui.opensNewTab') }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/BaseButton.vue'
import CodePanel from '@/components/CodePanel.vue'
import CopyButton from '@/components/CopyButton.vue'
import Icon from '@/components/icons/Icon.vue'
import StatGroup from '@/components/StatGroup.vue'
import { API_BASE_URL, API_V1_URL } from '@/config/api'
import { nationalLatestResponse } from '@/data/responses'
import { endpoints, GROUP_IDS, groupExamples } from '@/data/endpoints'
import { useHealth, useLatestRecords } from '@/composables/useLatestRecords'

const { t, locale } = useI18n()
const curl = `curl "${API_V1_URL}/national/latest"`

const { state, province, national, reload } = useLatestRecords()
const { state: health, checkedAt, check } = useHealth()
const retry = () => { reload(); check() }

const checkedTime = computed(() =>
  checkedAt.value ? new Intl.DateTimeFormat(locale.value, { timeStyle: 'short' }).format(checkedAt.value) : '',
)

const groups = GROUP_IDS.map((id) => ({ id, example: endpoints.find((e) => e.id === groupExamples[id])! }))

const sources = [
  { name: 'InaCOVID-19', logo: '/inacovid.webp', url: 'https://covid19.go.id/peta-sebaran' },
  { name: 'Dinkes Sulteng', logo: '/dinkes-sulteng.webp', url: 'https://dinkes.sultengprov.go.id/category/covid-19/' },
  { name: 'Sulteng Lawan COVID', logo: '/sulteng-lawan-covid.webp', url: 'https://www.instagram.com/sultenglawancovid/' },
  { name: 'Detexi', logo: '/detexi.webp', url: 'https://detexi.id' },
  { name: 'Banua Coder', logo: '/banua-coder.webp', url: 'https://banuacoder.com' },
  { name: 'Ethical Hacker Indonesia', logo: '/ethical-hacker-indonesia.webp', url: 'https://hack.co.id' },
]
</script>

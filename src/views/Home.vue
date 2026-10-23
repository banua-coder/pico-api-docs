<template>
  <main id="main-content" tabindex="-1" class="flex-1 focus:outline-none">
    <!-- First viewport: promise and request on the left, indigo ledger of the latest record on the right -->
    <section aria-labelledby="home-title">
      <div class="mx-auto grid max-w-[90rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,36rem)]">
        <div class="min-w-0 px-4 py-10 sm:px-8 lg:flex lg:flex-col lg:justify-center lg:py-14">
          <div>
          <div class="flex items-center gap-4">
            <img src="/pico-api-logo.webp" alt="" width="64" height="64" class="h-14 w-14 bg-field-ink p-1 sm:h-16 sm:w-16" />
            <h1 id="home-title" class="ledger-title text-5xl sm:text-7xl">PICO SulTeng</h1>
          </div>
          <p class="mt-6 max-w-xl text-xl leading-snug sm:text-2xl">{{ t('home.promise') }}</p>

          <div class="mt-8 flex max-w-xl items-center justify-between gap-2 border border-rule-strong bg-surface py-1 pl-3 pr-1">
            <div class="min-w-0">
              <span class="block text-xs font-semibold text-muted">{{ t('home.baseUrl') }}</span>
              <code class="whitespace-nowrap text-sm font-semibold sm:text-base">{{ API_BASE_URL }}</code>
            </div>
            <CopyButton :text="API_BASE_URL" :label="t('ui.copyBaseUrl')" />
          </div>

          <div class="mt-5 max-w-xl">
            <CodePanel :curl="curl" :response="nationalLatestResponse" />
          </div>
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <BaseButton as="router-link" to="/docs">{{ t('home.cta') }} <Icon name="arrow-right" :size="16" /></BaseButton>
            <BaseButton as="router-link" to="/docs/glossary" variant="outline">{{ t('nav.glossary') }}</BaseButton>
          </div>
        </div>

        <section aria-labelledby="ledger-title" class="on-field flex min-w-0 flex-col bg-field-indigo px-4 py-8 text-field-ink sm:px-8 lg:py-14">
          <h2 id="ledger-title" class="ledger-title text-3xl">{{ t('home.ledgerTitle') }}</h2>
          <LedgerBlock path="data.data[0].cumulative" :title="t('home.province')" :record="province" :loading="state === 'loading'" :locale="locale" big />
          <LedgerBlock path="data.cumulative" :title="t('home.national')" :record="national" :loading="state === 'loading'" :locale="locale" />

          <div class="mt-auto pt-6">
            <p v-if="state === 'error' || state === 'offline'" class="mb-3 flex min-h-12 items-start gap-2 text-sm" role="alert">
              <Icon name="alert" :size="18" />
              <span>{{ state === 'offline' ? t('home.offline') : t('home.error') }}</span>
            </p>
            <p v-else class="mb-3 min-h-12 text-sm text-field-muted">{{ t('home.historicalNote') }}</p>
            <div class="flex flex-wrap items-center justify-between gap-3 border-t border-field-ink/25 pt-3 text-sm">
              <p class="flex items-center gap-2" role="status">
                <span class="mark" :class="health === 'healthy' ? 'mark-filled' : health === 'unavailable' ? 'mark-strike' : ''" aria-hidden="true" />
                <span v-if="health === 'checking'">{{ t('home.health.checking') }}</span>
                <span v-else-if="health === 'healthy'">{{ t('home.health.healthy', { time: checkedTime }) }}</span>
                <span v-else>{{ t('home.health.unavailable') }}</span>
              </p>
              <button v-if="state === 'error' || state === 'offline' || health === 'unavailable'" type="button" class="btn-ghost inline-flex min-h-9 items-center px-3 font-semibold" @click="retry">
                {{ t('ui.retry') }}
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>

    <BarkBorder :height="14" />

    <!-- What the API covers -->
    <section aria-labelledby="covers-title" class="mx-auto max-w-[90rem] px-4 py-14 sm:px-8">
      <h2 id="covers-title" class="ledger-title text-4xl">{{ t('home.coversTitle') }}</h2>
      <p class="mt-2 max-w-prose text-muted">{{ t('home.coversText') }}</p>
      <div class="params-wrap mt-6">
        <table class="ledger params-table">
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
              <td class="p-name font-bold">{{ t(`docs.endpointGroups.${g.id}`) }}</td>
              <td class="p-type">
                <router-link :to="`/docs/${g.example.section}`" class="break-all font-mono text-[0.8125rem] font-semibold text-indigo underline underline-offset-4">{{ g.example.path }}</router-link>
              </td>
              <td class="p-desc text-muted">{{ t(`home.groups.${g.id}`) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Data and methods: a madder field -->
    <section aria-labelledby="methods-title" class="on-field bg-field-madder text-field-ink">
      <div class="mx-auto flex max-w-[90rem] flex-col gap-6 px-4 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div class="max-w-2xl">
          <h2 id="methods-title" class="ledger-title text-4xl">{{ t('nav.glossary') }}</h2>
          <p class="mt-3 text-lg leading-snug">{{ t('home.methodsText') }}</p>
        </div>
        <router-link to="/docs/glossary" class="btn-ghost inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start px-5 font-semibold md:self-auto">
          {{ t('home.methodsCta') }} <Icon name="arrow-right" :size="16" />
        </router-link>
      </div>
    </section>

    <!-- Data sources: a raw bark field -->
    <BarkBorder :height="14" />
    <section aria-labelledby="sources-title" class="on-bark bg-field-bark text-field-barkink">
     <div class="mx-auto max-w-[90rem] px-4 py-14 sm:px-8">
      <h2 id="sources-title" class="ledger-title text-4xl">{{ t('dataSources.title') }}</h2>
      <p class="mt-2 max-w-prose">{{ t('dataSources.subtitle') }}</p>
      <ul class="mt-6 grid grid-cols-2 gap-px border border-rule-strong bg-rule-strong sm:grid-cols-3 lg:grid-cols-6">
        <li v-for="s in sources" :key="s.name" class="bg-surface">
          <a :href="s.url" target="_blank" rel="noopener noreferrer" class="flex h-full flex-col items-center gap-3 p-4 text-center hover:bg-sunk">
            <span class="flex h-20 w-full items-center justify-center bg-field-ink p-2">
              <img :src="s.logo" :alt="s.name" width="64" height="64" loading="lazy" class="h-16 w-full object-contain" />
            </span>
            <span class="text-sm font-semibold text-ink">{{ s.name }}</span>
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
import BarkBorder from '@/components/BarkBorder.vue'
import BaseButton from '@/components/BaseButton.vue'
import CodePanel from '@/components/CodePanel.vue'
import CopyButton from '@/components/CopyButton.vue'
import Icon from '@/components/icons/Icon.vue'
import LedgerBlock from '@/components/LedgerBlock.vue'
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

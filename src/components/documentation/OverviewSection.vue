<template>
  <div class="space-y-12">
    <section>
      <h2 class="h2 mb-3">{{ t('docs.overview.firstRequest') }}</h2>
      <ol class="mb-5 max-w-prose list-decimal space-y-2 pl-5 leading-relaxed marker:font-bold">
        <li>{{ t('docs.overview.step1') }}</li>
        <li>{{ t('docs.overview.step2') }}</li>
        <li>{{ t('docs.overview.step3') }}</li>
      </ol>
      <CodePanel :curl="firstRequest" :response="nationalLatestResponse" />
      <p class="mt-4 max-w-prose leading-relaxed">{{ t('docs.overview.expect') }}</p>
      <Callout class="mt-4" :title="t('docs.overview.historicalTitle')">{{ t('docs.overview.historical') }}</Callout>
      <p class="mt-4 font-semibold">{{ t('docs.overview.next') }}</p>
      <ul class="mt-2 flex flex-wrap gap-x-6 gap-y-2">
        <li v-for="n in nextLinks" :key="n.to">
          <router-link :to="n.to" class="inline-flex items-center gap-1.5 font-semibold text-brand underline-offset-4 hover:underline">
            {{ n.label }} <Icon name="arrow-right" :size="16" />
          </router-link>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="h2 mb-3">{{ t('docs.overview.baseUrl') }}</h2>
      <div class="flex min-w-0 flex-wrap items-center gap-3 rounded-lg border border-rule bg-surface p-3">
        <code class="min-w-0 flex-1 [overflow-wrap:anywhere]"><template v-for="(part, i) in afterSlash(API_V1_URL)" :key="i">{{ part }}<wbr></template></code>
        <CopyButton :text="API_V1_URL" :label="t('ui.copyBaseUrl')" />
      </div>
      <dl class="mt-4 grid max-w-prose gap-x-6 gap-y-2 sm:grid-cols-[8rem_1fr]">
        <dt class="label text-muted">{{ t('docs.overview.format') }}</dt>
        <dd><code>application/json</code></dd>
        <dt class="label text-muted">{{ t('docs.overview.method') }}</dt>
        <dd>{{ t('docs.overview.methodValue') }}</dd>
        <dt class="label text-muted">{{ t('docs.overview.envelope') }}</dt>
        <dd>{{ t('docs.overview.envelopeValue') }}</dd>
      </dl>
    </section>

    <section>
      <h2 class="h2 mb-3">{{ t('docs.overview.coverage') }}</h2>
      <p class="max-w-prose leading-relaxed">{{ t('docs.overview.coverageText') }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Callout from '@/components/Callout.vue'
import CodePanel from '@/components/CodePanel.vue'
import CopyButton from '@/components/CopyButton.vue'
import Icon from '@/components/icons/Icon.vue'
import { afterSlash } from '@/lib/wrap'
import { API_V1_URL } from '@/config/api'
import { nationalLatestResponse } from '@/data/responses'

const { t } = useI18n()
const firstRequest = `curl "${API_V1_URL}/national/latest"`

const nextLinks = computed(() => [
  { to: '/docs/endpoints', label: t('docs.pages.endpoints.nav') },
  { to: '/docs/province-cases', label: t('docs.pages.provinceCases.nav') },
  { to: '/docs/pagination', label: t('docs.pages.pagination.nav') },
  { to: '/docs/glossary', label: t('nav.glossary') },
])
</script>

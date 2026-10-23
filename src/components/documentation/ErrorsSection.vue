<template>
  <div class="max-w-3xl space-y-10">
    <section>
      <h2 class="ledger-title mb-3 text-3xl">{{ t('docs.errors.shapeTitle') }}</h2>
      <p class="mb-4 max-w-prose leading-relaxed">{{ t('docs.errors.shapeText') }}</p>
      <Callout tone="warning" :title="t('docs.errors.fieldTitle')">{{ t('docs.errors.fieldText') }}</Callout>
    </section>

    <section>
      <h2 class="ledger-title mb-3 text-3xl">{{ t('docs.errors.summary') }}</h2>
      <div class="params-wrap">
        <table class="ledger params-table">
          <caption class="sr-only">{{ t('docs.errors.summary') }}</caption>
          <thead>
            <tr>
              <th scope="col">{{ t('docs.errors.codeHeader') }}</th>
              <th scope="col">{{ t('docs.errors.meaningHeader') }}</th>
              <th scope="col">{{ t('docs.errors.remedyHeader') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="e in errors" :key="e.code">
              <td class="p-name whitespace-nowrap"><code class="font-bold">{{ e.code }}</code></td>
              <td class="p-type">{{ t(`docs.errors.codes.${e.code}.meaning`) }}</td>
              <td class="p-desc text-muted">{{ t(`docs.errors.codes.${e.code}.remedy`) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 class="ledger-title mb-4 text-3xl">{{ t('docs.errors.examples') }}</h2>
      <div class="space-y-8">
        <div v-for="e in errors" :key="e.code">
          <h3 class="mb-2 text-xl font-bold"><span class="num">{{ e.code }}</span> {{ t(`docs.errors.codes.${e.code}.title`) }}</h3>
          <p class="mb-2 max-w-prose leading-relaxed">{{ t(`docs.errors.codes.${e.code}.when`) }}</p>
          <CodeBlock :code="e.cmd" language="bash" :title="t('docs.common.curl')" :copy-label="t('ui.copyCode', { name: 'cURL' })" />
          <CodeBlock class="mt-2" :code="e.body" language="json" :title="t('docs.errors.body', { code: e.code })" :copy-label="t('ui.copyCode', { name: 'JSON' })" />
          <p v-if="e.note" class="mt-2 text-sm text-muted">{{ t(e.note) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Callout from '@/components/Callout.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import { API_V1_URL } from '@/config/api'
import { errorBody400, errorBody404 } from '@/data/responses'

const { t } = useI18n()

// 400 and 404 bodies were copied from live responses. A 500 could not be provoked,
// so its body follows the same envelope and says so.
const errors = [
  { code: '200', cmd: `curl -i "${API_V1_URL}/national/latest"`, body: `{\n  "status": "success",\n  "data": { "day": 1413, "date": "2024-01-14T00:00:00+07:00", "...": "..." }\n}`, note: '' },
  { code: '400', cmd: `curl -i "${API_V1_URL}/national/abc"`, body: errorBody400, note: '' },
  { code: '404', cmd: `curl -i "${API_V1_URL}/regencies/9999"`, body: errorBody404, note: 'docs.errors.note404' },
  { code: '500', cmd: `curl -i "${API_V1_URL}/national/latest"`, body: `{\n  "status": "error",\n  "error": "..."\n}`, note: 'docs.errors.note500' },
]
</script>

<template>
  <div class="max-w-3xl space-y-10">
    <Callout :title="t('docs.authentication.noKeyTitle')">{{ t('docs.authentication.noKey') }}</Callout>

    <section>
      <h2 class="h2 mb-3">{{ t('docs.authentication.limitsTitle') }}</h2>
      <p class="mb-4 max-w-prose leading-relaxed">{{ t('docs.authentication.limitsText') }}</p>
      <div class="table-card">
      <table class="data-table">
        <caption class="sr-only">{{ t('docs.authentication.limitsTitle') }}</caption>
        <thead><tr><th scope="col">{{ t('docs.authentication.header') }}</th><th scope="col">{{ t('docs.table.description') }}</th></tr></thead>
        <tbody>
          <tr><td><code class="font-semibold">X-RateLimit-Limit</code></td><td class="text-muted">{{ t('docs.authentication.limitHeader') }}</td></tr>
          <tr><td><code class="font-semibold">X-RateLimit-Remaining</code></td><td class="text-muted">{{ t('docs.authentication.remainingHeader') }}</td></tr>
        </tbody>
      </table>
      </div>
      <CodeBlock class="mt-4" :code="headersExample" language="bash" :title="t('docs.authentication.checkHeaders')" :copy-label="t('ui.copyCode', { name: 'cURL' })" />
    </section>

    <section>
      <h2 class="h2 mb-3">{{ t('docs.authentication.practiceTitle') }}</h2>
      <ul class="max-w-prose list-disc space-y-2 pl-5 leading-relaxed">
        <li>{{ t('docs.authentication.cors') }}</li>
        <li>{{ t('docs.authentication.cache') }}</li>
        <li>{{ t('docs.authentication.https') }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Callout from '@/components/Callout.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import { API_V1_URL } from '@/config/api'

const { t } = useI18n()
const headersExample = `curl -i "${API_V1_URL}/health"`
</script>

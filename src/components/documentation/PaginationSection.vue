<template>
  <div class="space-y-12">
    <p class="max-w-prose leading-relaxed">{{ t('docs.pagination.intro') }}</p>

    <section>
      <h2 class="h2 mb-3">{{ t('docs.pagination.pageStyle') }}</h2>
      <p class="mb-4 max-w-prose leading-relaxed">{{ t('docs.pagination.pageText') }}</p>
      <ParamsTable :params="PAGE_PARAMS" :title="t('docs.pagination.pageStyle')" />
      <p class="mt-3 text-sm text-muted">{{ t('docs.pagination.pageIgnored') }}</p>
      <CodePanel class="mt-4" :curl="pageCurl" :response="pageResponse" />
      <EndpointList class="mt-4" :paging="'page'" />
    </section>

    <section>
      <h2 class="h2 mb-3">{{ t('docs.pagination.offsetStyle') }}</h2>
      <p class="mb-4 max-w-prose leading-relaxed">{{ t('docs.pagination.offsetText') }}</p>
      <ParamsTable :params="OFFSET_PARAMS" :title="t('docs.pagination.offsetStyle')" />
      <p class="mt-3 text-sm text-muted">{{ t('docs.pagination.offsetIgnored') }}</p>
      <CodePanel class="mt-4" :curl="offsetCurl" :response="offsetResponse" />
      <EndpointList class="mt-4" :paging="'offset'" />
    </section>

    <section>
      <h2 class="h2 mb-3">{{ t('docs.pagination.edge') }}</h2>
      <ul class="max-w-prose list-disc space-y-2 pl-5 leading-relaxed">
        <li>{{ t('docs.pagination.edgeAll') }}</li>
        <li>{{ t('docs.pagination.edgeInvalid') }}</li>
        <li>{{ t('docs.pagination.edgePast') }}</li>
        <li>{{ t('docs.pagination.edgeNone') }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CodePanel from '@/components/CodePanel.vue'
import ParamsTable from '@/components/ParamsTable.vue'
import { API_V1_URL } from '@/config/api'
import { endpoints, type Paging } from '@/data/endpoints'
import { OFFSET_PARAMS, PAGE_PARAMS } from '@/data/params'
import { RouterLink } from 'vue-router'

const { t } = useI18n()

const pageCurl = `curl "${API_V1_URL}/regencies?page=2&per_page=5"`
const pageResponse = `{
  "status": "success",
  "data": {
    "data": [ { "id": 7205, "name": "..." } ],
    "pagination": {
      "page": 2,
      "per_page": 5,
      "total": 13,
      "total_pages": 3,
      "has_next": true,
      "has_prev": true
    }
  }
}`
const offsetCurl = `curl "${API_V1_URL}/national?offset=2&limit=2"`
const offsetResponse = `{
  "status": "success",
  "data": {
    "data": [ { "day": 3, "date": "..." }, { "day": 4, "date": "..." } ],
    "pagination": {
      "limit": 2,
      "offset": 2,
      "total": 1414,
      "total_pages": 707,
      "page": 2,
      "has_next": true,
      "has_prev": true
    }
  }
}`

// Endpoints that use a style, taken from the shared endpoint list.
const EndpointList = defineComponent({
  props: { paging: { type: String as () => Paging, required: true } },
  setup(props) {
    const list = computed(() => endpoints.filter((e) => e.paging === props.paging))
    return () =>
      h('div', { class: 'rounded-lg border border-rule bg-surface p-3' }, [
        h('p', { class: 'label mb-2 text-muted' }, t('docs.pagination.usedBy')),
        h('ul', { class: 'flex flex-wrap gap-x-5 gap-y-1' },
          list.value.map((e) =>
            h('li', { key: e.id }, h(RouterLink, { to: `/docs/${e.section}`, class: 'font-mono text-[0.8125rem] underline-offset-4 hover:underline' }, () => e.path.replace('/api/v1', '')))),
        ),
      ])
  },
})
</script>

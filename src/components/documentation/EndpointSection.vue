<template>
  <div class="grid gap-8 min-[1600px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-[1600px]:gap-10">
    <div class="min-w-0 space-y-8 min-[1600px]:col-span-2">
      <div class="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 border border-rule-strong bg-surface p-3">
        <span class="method-mark">{{ primary.method }}</span>
        <code class="order-last min-w-0 basis-full text-sm [overflow-wrap:anywhere] sm:order-none sm:flex-1 sm:basis-auto"><template v-for="(part, i) in urlParts" :key="i">{{ part }}<wbr></template></code>
        <CopyButton :text="url" :label="t('ui.copyUrl')" class="ml-auto sm:ml-0" />
      </div>
    </div>

    <p v-if="hasBody" class="min-w-0 max-w-prose leading-relaxed min-[1600px]:col-start-1">{{ t(`docs.pages.${key}.body`) }}</p>

    <section class="min-w-0 min-[1600px]:col-start-2 min-[1600px]:row-span-3 min-[1600px]:row-start-2 min-[1600px]:sticky min-[1600px]:top-[calc(var(--nav-h)+1.5rem)] min-[1600px]:self-start">
      <h2 class="ledger-title mb-3 text-2xl">{{ t('docs.endpoint.example') }}</h2>
      <CodePanel :curl="doc.curl" :response="doc.response" />
      <p class="mt-2 text-xs text-muted">{{ t('docs.endpoint.trimmed') }}</p>
    </section>

    <section class="min-w-0 min-[1600px]:col-start-1">
        <h2 class="ledger-title mb-3 text-2xl">{{ t('docs.endpoint.parameters') }}</h2>
        <ParamsTable v-if="doc.params.length" :params="doc.params" :title="t('docs.endpoint.parameters')" />
        <p v-else class="border border-rule-strong bg-surface p-3 text-sm text-muted">{{ t('docs.endpoint.noParams') }}</p>
        <p v-if="primary.paging" class="mt-3 text-sm text-muted">
          {{ t(`docs.endpoint.paging.${primary.paging}`) }}
          <router-link to="/docs/pagination" class="font-semibold text-indigo underline underline-offset-4">{{ t('docs.endpoint.seePagination') }}</router-link>
        </p>
    </section>

    <section v-if="related.length" class="min-w-0 min-[1600px]:col-start-1">
        <h2 class="ledger-title mb-3 text-2xl">{{ t('docs.endpoint.related') }}</h2>
        <ul class="border border-rule-strong bg-surface">
          <li v-for="e in related" :key="e.id" class="border-b border-rule p-3 last:border-b-0">
            <code class="break-all text-[0.8125rem] font-semibold">{{ e.path }}</code>
            <p class="mt-1 text-sm text-muted">{{ t(`endpoints.${e.id}`) }}</p>
          </li>
        </ul>
      </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CodePanel from '@/components/CodePanel.vue'
import CopyButton from '@/components/CopyButton.vue'
import ParamsTable from '@/components/ParamsTable.vue'
import { endpoints, endpointsOfSection, endpointUrl } from '@/data/endpoints'
import { sectionDocs } from '@/data/sectionDocs'
import { findSection } from '@/data/sections'

const props = defineProps<{ slug: string }>()
const { t, te } = useI18n()

const doc = computed(() => sectionDocs[props.slug])
const key = computed(() => findSection(props.slug)?.key ?? '')
const primary = computed(() => endpoints.find((e) => e.id === doc.value.primary)!)
const url = computed(() => endpointUrl(primary.value))
const urlParts = computed(() => url.value.split(/(?<=\/)/))
const related = computed(() => endpointsOfSection(props.slug).filter((e) => e.id !== primary.value.id))
const hasBody = computed(() => te(`docs.pages.${key.value}.body`))
</script>

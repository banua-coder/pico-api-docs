<template>
  <CodeBlock :code="current.code" :language="current.language" :copy-label="copyLabel" :region-label="current.label" :panel-id="`${uid}-panel`" :labelledby="`${uid}-tab-${selectedId}`">
    <template #tabs>
      <div role="tablist" :aria-label="t('ui.codeTabs')" class="flex" @keydown="onKey">
        <button
          v-for="tab in tabs"
          :id="`${uid}-tab-${tab.id}`"
          :key="tab.id"
          ref="tabEls"
          type="button"
          role="tab"
          :aria-selected="tab.id === selectedId"
          :aria-controls="`${uid}-panel`"
          :tabindex="tab.id === selectedId ? 0 : -1"
          class="relative px-3 py-2.5 text-sm font-semibold text-code-ink/75 hover:text-code-ink aria-selected:text-code-ink aria-selected:after:absolute aria-selected:after:inset-x-0 aria-selected:after:bottom-0 aria-selected:after:h-0.5 aria-selected:after:bg-bark"
          @click="select(tab.id)"
        >{{ tab.label }}</button>
      </div>
    </template>
  </CodeBlock>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, useId } from 'vue'
import { useI18n } from 'vue-i18n'
import CodeBlock from '@/components/CodeBlock.vue'
import { useCodeTab, type CodeTabId } from '@/composables/useCodeTab'

interface Tab { id: CodeTabId; label: string; code: string; language: 'bash' | 'json' }

const props = defineProps<{ curl: string; response?: string }>()
const { t } = useI18n()
const uid = `cp-${useId()}`
const { tab: stored, setTab } = useCodeTab()

// cURL is always first; Response only exists when an example body is given.
const tabs = computed<Tab[]>(() => {
  const list: Tab[] = [{ id: 'curl', label: t('docs.common.curl'), code: props.curl, language: 'bash' }]
  if (props.response) list.push({ id: 'response', label: t('docs.common.response'), code: props.response, language: 'json' })
  return list
})

const selectedId = computed<CodeTabId>(() => (tabs.value.some((x) => x.id === stored.value) ? stored.value : 'curl'))
const current = computed(() => tabs.value.find((x) => x.id === selectedId.value) ?? tabs.value[0])
const copyLabel = computed(() => t('ui.copyCode', { name: current.value.label }))
const tabEls = ref<HTMLButtonElement[]>([])

const select = (id: CodeTabId) => setTab(id)

async function onKey(e: KeyboardEvent) {
  const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End']
  if (!keys.includes(e.key) || tabs.value.length < 2) return
  e.preventDefault()
  const i = tabs.value.findIndex((x) => x.id === selectedId.value)
  const n = tabs.value.length
  const next = e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + n) % n
  select(tabs.value[next].id)
  await nextTick()
  tabEls.value[next]?.focus()
}
</script>

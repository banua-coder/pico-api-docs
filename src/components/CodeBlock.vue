<template>
  <div class="code-block">
    <div class="flex items-center justify-between gap-2 border-b border-code-ink/20 pl-1 pr-1.5">
      <div class="min-w-0 flex-1"><slot name="tabs"><span class="ledger-label px-2.5 text-code-ink/80">{{ title }}</span></slot></div>
      <CopyButton :text="code" :label="copyLabel" show-text class="m-1 text-code-ink" />
    </div>
    <pre
      tabindex="0"
      :role="panelId ? 'tabpanel' : 'region'"
      :id="panelId"
      :aria-labelledby="labelledby"
      :aria-label="labelledby ? undefined : regionLabel"
      :class="wrap ? 'whitespace-pre-wrap [overflow-wrap:anywhere]' : ''"
    ><code :class="`language-${language}`" v-html="html" /></pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CopyButton from '@/components/CopyButton.vue'
import Prism from '@/lib/prism-setup'

const props = withDefaults(
  defineProps<{
    code: string
    language?: 'bash' | 'json' | 'python' | 'go' | 'text'
    title?: string
    copyLabel: string
    regionLabel?: string
    /** Set when used as the panel of a tablist */
    panelId?: string
    labelledby?: string
  }>(),
  { language: 'text', title: '', regionLabel: undefined, panelId: undefined, labelledby: undefined },
)

// Shell commands carry long URLs: wrap them. JSON scrolls inside the block.
const wrap = computed(() => props.language === 'bash')

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const html = computed(() => {
  const grammar = Prism.languages[props.language]
  return grammar ? Prism.highlight(props.code, grammar, props.language) : escape(props.code)
})
</script>

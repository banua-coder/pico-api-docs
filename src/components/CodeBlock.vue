<template>
  <div class="code-block-wrapper">
    <div v-if="title || language" class="code-header">
      <span v-if="title" class="code-title">{{ title }}</span>
      <span v-if="language" class="code-language">{{ language }}</span>
      <button 
        @click="copyToClipboard" 
        class="copy-button"
        :class="{ 'copied': copied }"
        :title="copied ? 'Copied!' : 'Copy code'"
      >
        <svg v-if="!copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </button>
    </div>
    <div class="code-container" :class="`language-${language}`">
      <pre><code ref="codeElement" :class="`language-${language}`">{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'

// Import commonly used languages
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-go'

// Import Prism themes (we'll use a custom theme)
import 'prismjs/themes/prism-tomorrow.css'

interface Props {
  code: string
  language?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'bash'
})

const codeElement = ref<HTMLElement>()
const copied = ref(false)

const highlightCode = () => {
  if (codeElement.value) {
    Prism.highlightElement(codeElement.value)
  }
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

onMounted(() => {
  highlightCode()
})

watch(() => props.code, () => {
  highlightCode()
})
</script>

<style scoped>
.code-block-wrapper {
  @apply rounded-lg overflow-hidden border border-gray-700 bg-gray-900 my-4;
}

.code-header {
  @apply flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700;
}

.code-title {
  @apply text-sm font-medium text-gray-300;
}

.code-language {
  @apply text-xs font-mono text-gray-500 ml-auto mr-2;
}

.copy-button {
  @apply p-1.5 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-all duration-200;
}

.copy-button.copied {
  @apply bg-green-600 text-white;
}

.code-container {
  @apply relative overflow-x-auto;
}

.code-container pre {
  @apply m-0 p-4 text-xs sm:text-sm font-mono;
  background: transparent !important;
}

.code-container code {
  @apply text-gray-300;
  background: transparent !important;
  font-family: 'Fira Code', 'JetBrains Mono', 'Monaco', 'Consolas', 'Courier New', monospace;
}

/* Customize syntax highlighting colors for better contrast */
:deep(.token.comment),
:deep(.token.prolog),
:deep(.token.doctype),
:deep(.token.cdata) {
  @apply text-gray-500;
}

:deep(.token.punctuation) {
  @apply text-gray-400;
}

:deep(.token.property),
:deep(.token.tag),
:deep(.token.boolean),
:deep(.token.number),
:deep(.token.constant),
:deep(.token.symbol),
:deep(.token.deleted) {
  @apply text-red-400;
}

:deep(.token.selector),
:deep(.token.attr-name),
:deep(.token.string),
:deep(.token.char),
:deep(.token.builtin),
:deep(.token.inserted) {
  @apply text-green-400;
}

:deep(.token.operator),
:deep(.token.entity),
:deep(.token.url),
:deep(.language-css .token.string),
:deep(.style .token.string) {
  @apply text-blue-400;
}

:deep(.token.atrule),
:deep(.token.attr-value),
:deep(.token.keyword) {
  @apply text-purple-400;
}

:deep(.token.function),
:deep(.token.class-name) {
  @apply text-yellow-400;
}

:deep(.token.regex),
:deep(.token.important),
:deep(.token.variable) {
  @apply text-orange-400;
}

/* Mobile responsive adjustments */
@media (max-width: 640px) {
  .code-container pre {
    @apply text-[10px] p-3;
  }
  
  .code-header {
    @apply px-3 py-1.5;
  }
  
  .code-title {
    @apply text-xs;
  }
  
  .copy-button {
    @apply p-1;
  }
}
</style>
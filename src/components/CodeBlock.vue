<template>
  <div class="code-block-wrapper" :class="{ 'dark-theme': isDarkMode }">
    <!-- Header -->
    <div v-if="title || detectedLanguage || showActions" class="code-header">
      <div class="flex items-center space-x-3">
        <span v-if="title" class="code-title">{{ title }}</span>
        <BaseBadge 
          v-if="detectedLanguage" 
          :variant="getBadgeVariant(detectedLanguage)"
          size="xs"
          rounded
        >
          {{ formatLanguageName(detectedLanguage) }}
        </BaseBadge>
      </div>
      
      <div class="flex items-center space-x-2" v-if="showActions">
        <!-- Theme toggle for code block -->
        <button
          v-if="supportsDarkMode"
          @click="toggleCodeTheme"
          class="action-button"
          :title="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'"
          :aria-label="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'"
        >
          <svg v-if="isDarkMode" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        </button>
        
        <!-- Copy button -->
        <button 
          @click="copyToClipboard" 
          class="copy-button"
          :class="{ 'copied': copied }"
          :title="copied ? 'Copied!' : 'Copy code'"
          :aria-label="copied ? 'Code copied to clipboard' : 'Copy code to clipboard'"
        >
          <svg v-if="!copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span v-if="copied" class="sr-only">Copied!</span>
        </button>
      </div>
    </div>
    
    <!-- Code content -->
    <div class="code-container" :class="containerClasses">
      <pre class="code-pre"><code 
        ref="codeElement" 
        :class="codeClasses"
        :data-language="detectedLanguage"
      >{{ code }}</code></pre>
      
      <!-- Line numbers (optional) -->
      <div v-if="showLineNumbers" class="line-numbers" aria-hidden="true">
        <span 
          v-for="n in lineCount" 
          :key="n" 
          class="line-number"
          :data-line="n"
        >{{ n }}</span>
      </div>
    </div>
    
    <!-- Footer with additional info -->
    <div v-if="showFooter" class="code-footer">
      <div class="flex items-center justify-between text-xs text-gray-500">
        <span>{{ lineCount }} lines</span>
        <span v-if="fileSize">{{ fileSize }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
import Prism from 'prismjs'
import BaseBadge from './BaseBadge.vue'

// Import commonly used languages
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-markup' // Must be loaded before PHP
import 'prismjs/components/prism-markup-templating' // Required for PHP
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-sql'

interface Props {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  showActions?: boolean
  showFooter?: boolean
  supportsDarkMode?: boolean
  maxHeight?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'text',
  showLineNumbers: false,
  showActions: true,
  showFooter: false,
  supportsDarkMode: true
})

const { isDark } = useTheme()
const codeElement = ref<HTMLElement>()
const copied = ref(false)
const isDarkMode = ref(false)

// Language detection patterns
const languagePatterns = {
  javascript: [/console\.(log|error)/, /function\s*\(/, /const\s+\w+\s*=/, /=>\s*{/, /import\s+.+from/, /require\(/],
  typescript: [/interface\s+\w+/, /type\s+\w+\s*=/, /:\s*(string|number|boolean)/, /export\s+(interface|type|class)/, /import\s+type/],
  python: [/def\s+\w+\s*\(/, /import\s+\w+/, /from\s+\w+\s+import/, /if\s+__name__\s*==\s*["']__main__["']/, /print\s*\(/],
  go: [/func\s+\w+\s*\(/, /package\s+\w+/, /import\s*\(/, /fmt\.Print/, /var\s+\w+\s+\w+/],
  bash: [/^#!\/bin\/bash/, /echo\s+/, /\$\{?\w+\}?/, /if\s*\[\[/, /curl\s+/],
  json: [/^\s*{/, /^\s*\[/, /"[\w-]+"\s*:/, /,\s*$/, /}\s*,?\s*$/],
  yaml: [/^\s*\w+:\s*/, /^\s*-\s+/, /^---/, /^\s*\w+:\s*$/, /\s*\|\s*/],
  php: [/<\?php/, /echo\s+/, /\$\w+/, /function\s+\w+\s*\(/, /class\s+\w+/],
  css: [/\w+\s*\{/, /[\w-]+:\s*[\w-]+;/, /@media\s/, /\.[\w-]+/, /#[\w-]+/],
  html: [/<\/?[a-zA-Z][\w-]*[^<>]*>/, /<!DOCTYPE/, /<html/, /<head/, /<body/],
  sql: [/SELECT\s+/i, /FROM\s+/i, /WHERE\s+/i, /INSERT\s+INTO/i, /UPDATE\s+/i, /DELETE\s+FROM/i]
}

// Detect language from code content
const detectLanguage = (code: string): string => {
  if (props.language && props.language !== 'text') {
    return props.language
  }

  for (const [lang, patterns] of Object.entries(languagePatterns)) {
    const matchCount = patterns.reduce((count, pattern) => {
      return count + (pattern.test(code) ? 1 : 0)
    }, 0)

    if (matchCount >= 2) {
      return lang
    }
  }

  return props.language || 'text'
}

const detectedLanguage = computed(() => detectLanguage(props.code))

const lineCount = computed(() => {
  return props.code.split('\n').length
})

const fileSize = computed(() => {
  const bytes = new Blob([props.code]).size
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${Math.round(bytes / (1024 * 1024))} MB`
})

// Format language names for display
const formatLanguageName = (lang: string): string => {
  const formatMap: Record<string, string> = {
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'python': 'Python',
    'go': 'Go',
    'bash': 'Bash',
    'json': 'JSON',
    'yaml': 'YAML',
    'php': 'PHP',
    'css': 'CSS',
    'scss': 'SCSS',
    'html': 'HTML',
    'markup': 'HTML',
    'sql': 'SQL',
    'java': 'Java',
    'c': 'C',
    'cpp': 'C++',
    'csharp': 'C#',
    'docker': 'Docker',
    'text': 'Text'
  }
  
  return formatMap[lang] || lang.toUpperCase()
}

// Get badge variant based on language
const getBadgeVariant = (lang: string): 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' => {
  const variantMap: Record<string, 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'> = {
    'javascript': 'warning',
    'typescript': 'primary',
    'python': 'success',
    'go': 'info',
    'bash': 'secondary',
    'json': 'warning',
    'yaml': 'info',
    'php': 'secondary',
    'css': 'primary',
    'html': 'danger',
    'sql': 'success'
  }

  return variantMap[lang] || 'default'
}

// Computed classes
const containerClasses = computed(() => [
  'relative overflow-x-auto',
  `language-${detectedLanguage.value}`,
  {
    'with-line-numbers': props.showLineNumbers,
    'max-height-set': props.maxHeight
  }
])

const codeClasses = computed(() => [
  `language-${detectedLanguage.value}`,
  'block w-full',
  {
    'pl-12': props.showLineNumbers
  }
])

const highlightCode = () => {
  if (codeElement.value) {
    // Check if the language is available
    if (!Prism.languages[detectedLanguage.value] && detectedLanguage.value !== 'text') {
      console.warn(`Language ${detectedLanguage.value} not available in Prism.js`)
      return
    }
    
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
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = props.code
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (fallbackErr) {
      console.error('Fallback copy failed:', fallbackErr)
    }
    document.body.removeChild(textArea)
  }
}

const toggleCodeTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

onMounted(() => {
  isDarkMode.value = isDark.value
  highlightCode()
})

watch(() => props.code, () => {
  highlightCode()
})

watch(() => detectedLanguage.value, () => {
  highlightCode()
})
</script>

<style scoped>
.code-block-wrapper {
  @apply rounded-lg overflow-hidden my-4 transition-colors duration-200;
  @apply border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900;
}

.code-block-wrapper.dark-theme {
  @apply border-gray-700 bg-gray-900;
}

.code-header {
  @apply flex items-center justify-between px-4 py-3 transition-colors duration-200;
  @apply bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700;
}

.dark-theme .code-header {
  @apply bg-gray-800 border-gray-700;
}

.code-title {
  @apply text-sm font-semibold text-gray-800 dark:text-gray-200;
}

.dark-theme .code-title {
  @apply text-gray-200;
}

.action-button {
  @apply p-2 rounded-md transition-all duration-200;
  @apply bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800;
  @apply dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-gray-200;
}

.dark-theme .action-button {
  @apply bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-gray-200;
}

.copy-button {
  @apply p-2 rounded-md transition-all duration-200;
  @apply bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800;
  @apply dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-gray-200;
}

.dark-theme .copy-button {
  @apply bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-gray-200;
}

.copy-button.copied {
  @apply bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200;
}

.dark-theme .copy-button.copied {
  @apply bg-green-800 text-green-200;
}

.code-container {
  @apply relative overflow-x-auto;
  @apply bg-white dark:bg-gray-900;
}

.dark-theme .code-container {
  @apply bg-gray-900;
}

.code-pre {
  @apply m-0 p-4 text-xs sm:text-sm font-mono leading-relaxed;
  background: transparent !important;
  font-family: 'Fira Code', 'JetBrains Mono', 'Monaco', 'Consolas', 'Courier New', monospace;
}

.code-container code {
  @apply text-gray-800 dark:text-gray-200;
  background: transparent !important;
  font-family: inherit;
}

.dark-theme .code-container code {
  @apply text-gray-200;
}

.line-numbers {
  @apply absolute left-0 top-0 p-4 text-xs font-mono select-none;
  @apply text-gray-400 bg-gray-50 border-r border-gray-200;
  @apply dark:text-gray-600 dark:bg-gray-800 dark:border-gray-700;
  width: 3rem;
}

.dark-theme .line-numbers {
  @apply text-gray-600 bg-gray-800 border-gray-700;
}

.line-number {
  @apply block text-right;
}

.code-footer {
  @apply px-4 py-2 bg-gray-50 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700;
}

.dark-theme .code-footer {
  @apply bg-gray-800 border-gray-700;
}

/* Light theme syntax highlighting */
:deep(.token.comment),
:deep(.token.prolog),
:deep(.token.doctype),
:deep(.token.cdata) {
  @apply text-gray-500 dark:text-gray-500;
}

:deep(.token.punctuation) {
  @apply text-gray-600 dark:text-gray-400;
}

:deep(.token.property),
:deep(.token.tag),
:deep(.token.boolean),
:deep(.token.number),
:deep(.token.constant),
:deep(.token.symbol),
:deep(.token.deleted) {
  @apply text-red-600 dark:text-red-400;
}

:deep(.token.selector),
:deep(.token.attr-name),
:deep(.token.string),
:deep(.token.char),
:deep(.token.builtin),
:deep(.token.inserted) {
  @apply text-green-600 dark:text-green-400;
}

:deep(.token.operator),
:deep(.token.entity),
:deep(.token.url),
:deep(.language-css .token.string),
:deep(.style .token.string) {
  @apply text-blue-600 dark:text-blue-400;
}

:deep(.token.atrule),
:deep(.token.attr-value),
:deep(.token.keyword) {
  @apply text-purple-600 dark:text-purple-400;
}

:deep(.token.function),
:deep(.token.class-name) {
  @apply text-yellow-600 dark:text-yellow-400;
}

:deep(.token.regex),
:deep(.token.important),
:deep(.token.variable) {
  @apply text-orange-600 dark:text-orange-400;
}

/* Dark theme overrides for code wrapper */
.dark-theme :deep(.token.comment),
.dark-theme :deep(.token.prolog),
.dark-theme :deep(.token.doctype),
.dark-theme :deep(.token.cdata) {
  @apply text-gray-500;
}

.dark-theme :deep(.token.punctuation) {
  @apply text-gray-400;
}

.dark-theme :deep(.token.property),
.dark-theme :deep(.token.tag),
.dark-theme :deep(.token.boolean),
.dark-theme :deep(.token.number),
.dark-theme :deep(.token.constant),
.dark-theme :deep(.token.symbol),
.dark-theme :deep(.token.deleted) {
  @apply text-red-400;
}

.dark-theme :deep(.token.selector),
.dark-theme :deep(.token.attr-name),
.dark-theme :deep(.token.string),
.dark-theme :deep(.token.char),
.dark-theme :deep(.token.builtin),
.dark-theme :deep(.token.inserted) {
  @apply text-green-400;
}

.dark-theme :deep(.token.operator),
.dark-theme :deep(.token.entity),
.dark-theme :deep(.token.url),
.dark-theme :deep(.language-css .token.string),
.dark-theme :deep(.style .token.string) {
  @apply text-blue-400;
}

.dark-theme :deep(.token.atrule),
.dark-theme :deep(.token.attr-value),
.dark-theme :deep(.token.keyword) {
  @apply text-purple-400;
}

.dark-theme :deep(.token.function),
.dark-theme :deep(.token.class-name) {
  @apply text-yellow-400;
}

.dark-theme :deep(.token.regex),
.dark-theme :deep(.token.important),
.dark-theme :deep(.token.variable) {
  @apply text-orange-400;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .code-pre {
    @apply text-[11px] p-3;
  }
  
  .code-header {
    @apply px-3 py-2 flex-col space-y-2;
  }
  
  .code-header > div {
    @apply w-full flex justify-between items-center;
  }
  
  .code-title {
    @apply text-xs;
  }
  
  .action-button,
  .copy-button {
    @apply p-1.5;
  }
  
  .line-numbers {
    @apply p-3 text-[10px];
    width: 2.5rem;
  }
  
  .with-line-numbers code {
    @apply pl-10;
  }
}

/* Scrollbar styling for code blocks */
.code-container::-webkit-scrollbar {
  height: 8px;
}

.code-container::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
}

.code-container::-webkit-scrollbar-thumb {
  @apply bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 rounded;
}

.dark-theme .code-container::-webkit-scrollbar-track {
  @apply bg-gray-800;
}

.dark-theme .code-container::-webkit-scrollbar-thumb {
  @apply bg-gray-600 hover:bg-gray-500;
}

/* Focus styles for accessibility */
.action-button:focus,
.copy-button:focus {
  @apply ring-2 ring-blue-500 ring-offset-2 outline-none;
}
</style>
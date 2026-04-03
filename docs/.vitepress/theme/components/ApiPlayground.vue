<template>
  <div class="api-playground">
    <div class="playground-header">
      <span class="method-badge" :class="method.toLowerCase()">{{ method }}</span>
      <div class="url-bar">
        <span class="base-url">{{ baseUrl }}</span>
        <span class="endpoint-path">{{ endpoint }}</span>
      </div>
    </div>

    <!-- Query Params -->
    <div v-if="params.length > 0" class="playground-section">
      <h4>Query Parameters</h4>
      <div class="params-grid">
        <div v-for="param in editableParams" :key="param.name" class="param-row">
          <div class="param-info">
            <code class="param-name">{{ param.name }}</code>
            <span class="param-type">{{ param.type }}</span>
            <span v-if="param.required" class="param-required">required</span>
            <span v-else class="param-optional">optional</span>
          </div>
          <input
            v-model="param.value"
            :placeholder="param.placeholder || param.name"
            class="param-input"
            :type="param.type === 'number' ? 'number' : 'text'"
          />
          <p v-if="param.description" class="param-desc">{{ param.description }}</p>
        </div>
      </div>
    </div>

    <!-- Path Params -->
    <div v-if="pathParams.length > 0" class="playground-section">
      <h4>Path Parameters</h4>
      <div class="params-grid">
        <div v-for="param in editablePathParams" :key="param.name" class="param-row">
          <div class="param-info">
            <code class="param-name">{{ param.name }}</code>
            <span class="param-required">required</span>
          </div>
          <input
            v-model="param.value"
            :placeholder="param.placeholder || param.name"
            class="param-input"
          />
          <p v-if="param.description" class="param-desc">{{ param.description }}</p>
        </div>
      </div>
    </div>

    <!-- Generated URL preview -->
    <div class="playground-section">
      <h4>Request URL</h4>
      <code class="request-url">{{ generatedUrl }}</code>
    </div>

    <!-- Send Button -->
    <div class="playground-actions">
      <button @click="sendRequest" :disabled="loading" class="btn-send">
        <span v-if="loading" class="loading-spinner">⏳</span>
        <span v-else>▶ Send Request</span>
      </button>
      <button v-if="response" @click="clearResponse" class="btn-clear">Clear</button>
    </div>

    <!-- Response -->
    <div v-if="response || error" class="playground-response">
      <div class="response-header">
        <span class="response-label">Response</span>
        <span v-if="statusCode" class="status-badge" :class="statusClass">
          {{ statusCode }} {{ statusText }}
        </span>
        <span v-if="responseTime" class="response-time">{{ responseTime }}ms</span>
        <button v-if="response" @click="copyResponse" class="btn-copy">
          {{ copied ? '✓ Copied' : 'Copy' }}
        </button>
      </div>
      <pre v-if="response" class="response-body"><code>{{ formattedResponse }}</code></pre>
      <div v-if="error" class="response-error">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Param {
  name: string
  type: string
  required?: boolean
  placeholder?: string
  description?: string
  default?: string
}

interface PathParam {
  name: string
  placeholder?: string
  description?: string
  default?: string
}

const props = defineProps<{
  method?: string
  endpoint: string
  params?: Param[]
  pathParams?: PathParam[]
}>()

const BASE_URL = 'https://pico-api.banuacoder.com'

const method = computed(() => props.method || 'GET')
const baseUrl = BASE_URL

const editableParams = ref<(Param & { value: string })[]>(
  (props.params || []).map(p => ({ ...p, value: p.default || '' }))
)

const editablePathParams = ref<(PathParam & { value: string })[]>(
  (props.pathParams || []).map(p => ({ ...p, value: p.default || '' }))
)

const loading = ref(false)
const response = ref<string | null>(null)
const error = ref<string | null>(null)
const statusCode = ref<number | null>(null)
const statusText = ref<string>('')
const responseTime = ref<number | null>(null)
const copied = ref(false)

const generatedUrl = computed(() => {
  // Replace path params
  let path = props.endpoint
  for (const p of editablePathParams.value) {
    if (p.value) {
      path = path.replace(`:${p.name}`, p.value)
    }
  }

  // Build query string
  const query = editableParams.value
    .filter(p => p.value !== '')
    .map(p => `${encodeURIComponent(p.name)}=${encodeURIComponent(p.value)}`)
    .join('&')

  return `${BASE_URL}${path}${query ? '?' + query : ''}`
})

const formattedResponse = computed(() => {
  if (!response.value) return ''
  try {
    return JSON.stringify(JSON.parse(response.value), null, 2)
  } catch {
    return response.value
  }
})

const statusClass = computed(() => {
  if (!statusCode.value) return ''
  if (statusCode.value >= 200 && statusCode.value < 300) return 'status-ok'
  if (statusCode.value >= 400 && statusCode.value < 500) return 'status-client-error'
  return 'status-server-error'
})

async function sendRequest() {
  loading.value = true
  error.value = null
  response.value = null
  statusCode.value = null
  statusText.value = ''
  responseTime.value = null

  const start = Date.now()
  try {
    const res = await fetch(generatedUrl.value)
    responseTime.value = Date.now() - start
    statusCode.value = res.status
    statusText.value = res.statusText
    const text = await res.text()
    response.value = text
  } catch (e) {
    responseTime.value = Date.now() - start
    error.value = `Network error: ${(e as Error).message}. (CORS may be blocking browser requests — try curl instead.)`
  } finally {
    loading.value = false
  }
}

function clearResponse() {
  response.value = null
  error.value = null
  statusCode.value = null
  responseTime.value = null
}

async function copyResponse() {
  if (!response.value) return
  await navigator.clipboard.writeText(formattedResponse.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<style scoped>
.api-playground {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 1.5rem 0;
  font-size: 14px;
}

.playground-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.method-badge {
  font-weight: 700;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  flex-shrink: 0;
}
.method-badge.get { background: #d1fae5; color: #065f46; }
.method-badge.post { background: #dbeafe; color: #1e40af; }
.method-badge.put { background: #fef3c7; color: #92400e; }
.method-badge.delete { background: #fee2e2; color: #991b1b; }

.dark .method-badge.get { background: #064e3b; color: #6ee7b7; }
.dark .method-badge.post { background: #1e3a5f; color: #93c5fd; }

.url-bar {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  overflow-x: auto;
  white-space: nowrap;
}

.base-url { color: var(--vp-c-text-3); }
.endpoint-path { color: var(--vp-c-text-1); font-weight: 500; }

.playground-section {
  padding: 12px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.playground-section h4 {
  margin: 0 0 10px 0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
  font-weight: 600;
}

.params-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.param-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  align-items: start;
}

.param-info {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.param-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.param-type {
  font-size: 11px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
}

.param-required {
  font-size: 10px;
  padding: 1px 5px;
  border-radius: 3px;
  background: #fee2e2;
  color: #991b1b;
  font-weight: 600;
}
.dark .param-required { background: #450a0a; color: #fca5a5; }

.param-optional {
  font-size: 10px;
  color: var(--vp-c-text-3);
}

.param-desc {
  grid-column: 1 / -1;
  margin: 0;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.param-input {
  width: 100%;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-family: var(--vp-font-family-mono);
  transition: border-color 0.2s;
}

.param-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.request-url {
  display: block;
  padding: 8px 12px;
  background: var(--vp-c-bg-soft);
  border-radius: 5px;
  font-size: 12px;
  word-break: break-all;
  color: var(--vp-c-brand-1);
}

.playground-actions {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.btn-send {
  padding: 8px 20px;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: opacity 0.2s;
}

.btn-send:hover:not(:disabled) { opacity: 0.85; }
.btn-send:disabled { opacity: 0.5; cursor: not-allowed; }

.btn-clear, .btn-copy {
  padding: 8px 14px;
  background: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}

.btn-clear:hover, .btn-copy:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.playground-response {
  padding: 12px 16px;
}

.response-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.response-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
  font-weight: 600;
}

.status-badge {
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
}
.status-ok { background: #d1fae5; color: #065f46; }
.status-client-error { background: #fef3c7; color: #92400e; }
.status-server-error { background: #fee2e2; color: #991b1b; }
.dark .status-ok { background: #064e3b; color: #6ee7b7; }

.response-time {
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  margin-left: auto;
}

.response-body {
  margin: 0;
  padding: 12px;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  overflow-x: auto;
  font-size: 12px;
  max-height: 400px;
  overflow-y: auto;
  line-height: 1.6;
}

.response-error {
  padding: 10px 14px;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 6px;
  font-size: 13px;
}
.dark .response-error { background: #450a0a; color: #fca5a5; }
</style>

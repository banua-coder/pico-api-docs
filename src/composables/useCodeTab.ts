import { ref } from 'vue'

export type CodeTabId = 'curl' | 'response'

const KEY = 'pico-code-tab'
const read = (): CodeTabId => {
  try { return localStorage.getItem(KEY) === 'response' ? 'response' : 'curl' } catch { return 'curl' }
}

// Shared by every code panel on the page, remembered across visits. Default: cURL.
const tab = ref<CodeTabId>(read())

export function useCodeTab() {
  const setTab = (id: CodeTabId) => {
    tab.value = id
    try { localStorage.setItem(KEY, id) } catch { /* ignore */ }
  }
  return { tab, setTab }
}

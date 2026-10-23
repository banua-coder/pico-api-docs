import { onBeforeUnmount, onMounted, ref } from 'vue'
import { API_V1_URL } from '@/config/api'

export type LoadState = 'loading' | 'ready' | 'error' | 'offline'

interface CaseCumulative { positive: number; recovered: number; deceased: number; active: number }
export interface LatestRecord {
  date: string
  daily: { positive: number }
  cumulative: CaseCumulative
}

const TIMEOUT_MS = 8000

/** GET json with an AbortController timeout. Resolves with `data` or throws. */
export async function fetchData<T>(path: string, outer?: AbortSignal): Promise<T> {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  const onOuter = () => ctrl.abort()
  outer?.addEventListener('abort', onOuter)
  try {
    const res = await fetch(`${API_V1_URL}${path}`, { signal: ctrl.signal, headers: { Accept: 'application/json' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    return json.data as T
  } finally {
    clearTimeout(timer)
    outer?.removeEventListener('abort', onOuter)
  }
}

/**
 * Latest records for the home table:
 *  - Sulawesi Tengah: /provinces/72/cases?limit=1 (newest record, default order)
 *  - Indonesia: /national/latest
 * Both carry their own date; the data is historical, never "live".
 */
export function useLatestRecords() {
  const state = ref<LoadState>('loading')
  const province = ref<LatestRecord | null>(null)
  const national = ref<LatestRecord | null>(null)
  let ctrl: AbortController | undefined

  async function load() {
    ctrl?.abort()
    const mine = (ctrl = new AbortController())
    if (!navigator.onLine) { state.value = 'offline'; return }
    state.value = 'loading'
    try {
      const [p, n] = await Promise.all([
        fetchData<{ data: LatestRecord[] }>('/provinces/72/cases?limit=1', mine.signal),
        fetchData<LatestRecord>('/national/latest', mine.signal),
      ])
      if (ctrl !== mine) return // superseded by a newer load
      province.value = p.data?.[0] ?? null
      national.value = n
      state.value = province.value && national.value ? 'ready' : 'error'
    } catch {
      if (ctrl !== mine) return
      state.value = navigator.onLine ? 'error' : 'offline'
    }
  }

  const onOnline = () => load()
  onMounted(() => {
    load()
    window.addEventListener('online', onOnline)
  })
  onBeforeUnmount(() => {
    ctrl?.abort()
    window.removeEventListener('online', onOnline)
  })

  return { state, province, national, reload: load }
}

export type HealthState = 'checking' | 'healthy' | 'unavailable'

/** Real call to /api/v1/health. */
export function useHealth() {
  const state = ref<HealthState>('checking')
  const checkedAt = ref<Date | null>(null)
  let ctrl: AbortController | undefined

  async function check() {
    ctrl?.abort()
    const mine = (ctrl = new AbortController())
    state.value = 'checking'
    let next: HealthState = 'unavailable'
    try {
      const d = await fetchData<{ status: string }>('/health', mine.signal)
      next = d.status === 'healthy' ? 'healthy' : 'unavailable'
    } catch { /* stays unavailable */ }
    if (ctrl !== mine) return
    state.value = next
    checkedAt.value = new Date()
  }

  onMounted(check)
  onBeforeUnmount(() => ctrl?.abort())
  return { state, checkedAt, check }
}

import { describe, it, expect } from 'vitest'
import router from '@/router'

describe('router', () => {
  it('redirects /api to /docs/endpoints', async () => {
    await router.push('/api')
    expect(router.currentRoute.value.fullPath).toBe('/docs/endpoints')
  })

  it('redirects /docs to /docs/overview', async () => {
    await router.push('/docs')
    expect(router.currentRoute.value.fullPath).toBe('/docs/overview')
  })

  it('keeps old /docs#section links working', async () => {
    await router.push('/docs#national-latest')
    expect(router.currentRoute.value.path).toBe('/docs/national-latest')
  })

  it('sends unknown sections to the overview', async () => {
    await router.push('/docs/nope')
    expect(router.currentRoute.value.path).toBe('/docs/overview')
  })
})

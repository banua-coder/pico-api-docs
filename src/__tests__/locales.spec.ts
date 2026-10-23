import { describe, it, expect } from 'vitest'
import en from '@/locales/en.json'
import id from '@/locales/id.json'

const keys = (o: Record<string, unknown>, p = ''): string[] =>
  Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === 'object' && !Array.isArray(v) ? keys(v as Record<string, unknown>, `${p}${k}.`) : [`${p}${k}`],
  )

describe('locales', () => {
  it('English and Indonesian have the same keys', () => {
    expect(keys(id).sort()).toEqual(keys(en).sort())
  })
})

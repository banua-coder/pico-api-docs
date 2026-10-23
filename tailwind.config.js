/** @type {import('tailwindcss').Config} */
// Design tokens live in src/style.css as RGB triplets so the `dark` class swaps the
// whole set; Tailwind only maps names to them.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ground: token('ground'),
        surface: token('surface'),
        sunk: token('sunk'),
        ink: { DEFAULT: token('ink'), soft: token('ink-soft') },
        muted: token('muted'),
        rule: { DEFAULT: token('rule'), soft: token('rule-soft'), strong: token('rule-strong') },
        brand: { DEFAULT: token('brand'), solid: token('brand-solid'), 'solid-hover': token('brand-solid-hover'), tint: token('brand-tint') },
        'on-brand': token('on-brand'),
        accent: token('accent'),
        success: token('success'),
        plate: token('logo-plate'),
        scrim: token('scrim'),
        code: { DEFAULT: token('code'), ink: token('code-ink'), muted: token('code-muted') },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      lineHeight: { relaxed: '1.65' },
      boxShadow: { card: 'var(--shadow-card)', pop: 'var(--shadow-pop)' },
      spacing: { nav: 'var(--nav-h)', rail: 'var(--rail-w)' },
      transitionTimingFunction: { out: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
}

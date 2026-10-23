/** @type {import('tailwindcss').Config} */
// Bark-Cloth Border tokens. Values live in src/style.css as RGB triplets so the
// `dark` class swaps the whole set; Tailwind only maps names to them.
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
        ink: token('ink'),
        muted: token('muted'),
        rule: token('rule'),
        'rule-strong': token('rule-strong'),
        madder: token('madder'),
        indigo: token('indigo'),
        bark: token('bark'),
        field: {
          indigo: token('field-indigo'),
          madder: token('field-madder'),
          ink: token('on-field'),
          muted: token('on-field-muted'),
        },
        code: { DEFAULT: token('code'), ink: token('code-ink') },
      },
      fontFamily: {
        sans: ['"Archivo Variable"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
      },
      spacing: { nav: 'var(--nav-h)', rail: 'var(--rail-w)' },
      transitionTimingFunction: { out: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
}

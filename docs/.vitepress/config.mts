import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PICO SulTeng API',
  description: 'API data COVID-19 komprehensif untuk Sulawesi Tengah dengan update real-time.',

  head: [
    ['link', { rel: 'icon', href: '/pico-api-logo.webp' }],
  ],

  locales: {
    root: {
      label: 'Indonesia',
      lang: 'id',
      themeConfig: {
        nav: [
          { text: 'Panduan', link: '/panduan/memulai' },
          { text: 'Referensi API', link: '/api/overview' },
          { text: 'Live API', link: 'https://pico-api.banuacoder.com/api/v1/health' },
          { text: 'Swagger UI ↗', link: 'https://pico-api.banuacoder.com/swagger/index.html' },
        ],
        sidebar: {
          '/panduan/': [
            {
              text: 'Panduan',
              items: [
                { text: 'Memulai', link: '/panduan/memulai' },
                { text: 'Autentikasi', link: '/panduan/autentikasi' },
                { text: 'Penanganan Error', link: '/panduan/error-handling' },
                { text: 'Glosarium', link: '/panduan/glosarium' },
              ],
            },
          ],
          '/api/': [
            {
              text: 'Referensi API',
              items: [
                { text: 'Overview', link: '/api/overview' },
                { text: 'Health Check', link: '/api/health-check' },
                { text: 'Data Nasional (Terbaru)', link: '/api/national-latest' },
                { text: 'Data Nasional (Historis)', link: '/api/national-historical' },
                { text: 'Provinsi', link: '/api/provinces' },
                { text: 'Kasus Provinsi', link: '/api/province-cases' },
                { text: 'Kabupaten/Kota', link: '/api/regencies' },
                { text: 'Rumah Sakit', link: '/api/hospitals' },
                { text: 'Gugus Tugas', link: '/api/task-forces' },
                { text: 'Vaksinasi', link: '/api/vaccination' },
                { text: 'Statistik', link: '/api/statistics' },
              ],
            },
          ],
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/panduan/memulai' },
          { text: 'API Reference', link: '/en/api/overview' },
        ],
        sidebar: {
          '/en/api/': [
            {
              text: 'API Reference',
              items: [
                { text: 'Overview', link: '/en/api/overview' },
                { text: 'Health Check', link: '/en/api/health-check' },
                { text: 'National Data', link: '/en/api/national-latest' },
              ],
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    logo: '/pico-api-logo.webp',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/banua-coder/pico-api-go' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Banua Coder',
    },
    search: {
      provider: 'local',
    },
  },
})

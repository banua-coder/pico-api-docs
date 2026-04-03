---
layout: home

hero:
  name: "PICO SulTeng"
  text: "COVID-19 API"
  tagline: API data COVID-19 komprehensif untuk Sulawesi Tengah dengan data nasional, provinsi, dan kabupaten — update real-time.
  image:
    src: /pico-api-logo.webp
    alt: PICO SulTeng API
  actions:
    - theme: brand
      text: Mulai Sekarang
      link: /panduan/memulai
    - theme: alt
      text: Dokumentasi API
      link: /api/overview
    - theme: alt
      text: Swagger UI ↗
      link: https://pico-api.banuacoder.com/swagger/index.html

features:
  - icon: ⚡
    title: Data Real-time
    details: Statistik COVID-19 terkini untuk Sulawesi Tengah dengan update harian dan metrik komprehensif. Update live setiap 24 jam.

  - icon: 🚀
    title: Performa Tinggi
    details: Dibangun dengan Go untuk respons API yang sangat cepat dengan sistem paginasi hibrid yang cerdas. Rata-rata < 100ms.

  - icon: 🛡️
    title: Aman & Andal
    details: Penanganan error yang robust dan akses data yang aman tanpa memerlukan autentikasi untuk endpoint publik.

  - icon: 📚
    title: Dokumentasi Lengkap
    details: Swagger UI interaktif dengan contoh-contoh lengkap dan dokumentasi endpoint yang komprehensif.

  - icon: 🗺️
    title: Fokus Regional
    details: Khusus didesain untuk data Sulawesi Tengah dengan dukungan data nasional dan semua provinsi Indonesia.

  - icon: 👨‍💻
    title: Ramah Developer
    details: RESTful API dengan respons JSON, dukungan CORS, dan parameter query fleksibel. Tidak perlu autentikasi.
---

## Gambaran Cepat API

**Base URL:** `https://pico-api.banuacoder.com`

```bash
# Health Check
curl https://pico-api.banuacoder.com/api/v1/health

# Data Nasional Terbaru
curl https://pico-api.banuacoder.com/api/v1/covid/national/latest

# Data Provinsi
curl https://pico-api.banuacoder.com/api/v1/covid/provinces?page=1&per_page=10

# Data Sulawesi Tengah
curl "https://pico-api.banuacoder.com/api/v1/covid/provinces/sulteng"
```

## Sumber Data

API ini mengagregasi data dari sumber terpercaya:

| Sumber | Keterangan |
|--------|------------|
| INACOVID-19 | Gugus Tugas Nasional COVID-19 |
| Dinkes Sulawesi Tengah | Dinas Kesehatan Provinsi |
| Sulteng Lawan COVID-19 | Kampanye resmi provinsi |
| Detexi | Platform Teknologi Kesehatan |

> **Status API:** [Live & Sehat ↗](https://pico-api.banuacoder.com/api/v1/health)

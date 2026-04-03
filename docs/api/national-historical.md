# Data Nasional Historis

Riwayat data COVID-19 nasional Indonesia.

## Endpoint

```
GET /api/v1/covid/national/historical
```

## Playground

<ApiPlayground
  endpoint="/api/v1/covid/national/historical"
  :params="[
    { name: 'page', type: 'number', placeholder: '1', default: '1', description: 'Nomor halaman' },
    { name: 'per_page', type: 'number', placeholder: '10', default: '10', description: 'Data per halaman' },
    { name: 'start_date', type: 'string', placeholder: '2023-01-01', description: 'Filter tanggal mulai (YYYY-MM-DD)' },
    { name: 'end_date', type: 'string', placeholder: '2023-01-31', description: 'Filter tanggal akhir (YYYY-MM-DD)' },
  ]"
/>

## Parameter Query

| Parameter | Tipe | Wajib | Keterangan |
|-----------|------|-------|------------|
| `page` | `number` | ❌ | Halaman (default: 1) |
| `per_page` | `number` | ❌ | Data per halaman (default: 10) |
| `start_date` | `string` | ❌ | Tanggal mulai (YYYY-MM-DD) |
| `end_date` | `string` | ❌ | Tanggal akhir (YYYY-MM-DD) |

## Contoh Request

```bash
curl "https://pico-api.banuacoder.com/api/v1/covid/national/historical?page=1&per_page=30"
```

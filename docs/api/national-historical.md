# Data Nasional Historis

Riwayat data COVID-19 nasional Indonesia.

## Endpoint

```
GET /api/v1/covid/national/historical
```

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

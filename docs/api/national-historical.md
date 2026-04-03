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
# Data historis dengan pagination
curl "https://pico-api.banuacoder.com/api/v1/covid/national/historical?page=1&per_page=30"

# Filter rentang tanggal
curl "https://pico-api.banuacoder.com/api/v1/covid/national/historical?start_date=2023-01-01&end_date=2023-01-31"
```

## Contoh Respons

```json
{
  "data": [
    {
      "confirmed": 6737000,
      "recovered": 6591000,
      "deaths": 161000,
      "date": "2023-06-30",
      "new_confirmed": 100,
      "new_recovered": 150,
      "new_deaths": 2
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 10,
    "total": 1200,
    "total_pages": 120
  },
  "message": "success",
  "status": true
}
```

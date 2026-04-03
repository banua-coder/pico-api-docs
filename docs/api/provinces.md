# Provinsi

Daftar semua provinsi Indonesia beserta data COVID-19.

## Endpoint

```
GET /api/v1/covid/provinces
```

## Parameter Query

| Parameter | Tipe | Wajib | Keterangan |
|-----------|------|-------|------------|
| `page` | `number` | ❌ | Halaman (default: 1) |
| `per_page` | `number` | ❌ | Data per halaman |

## Contoh Request

```bash
curl "https://pico-api.banuacoder.com/api/v1/covid/provinces?page=1&per_page=34"
```

## Contoh Respons

```json
{
  "data": [
    {
      "id": "sulteng",
      "name": "Sulawesi Tengah",
      "confirmed": 15000,
      "recovered": 14500,
      "deaths": 300,
      "active": 200
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 10,
    "total": 34,
    "total_pages": 4
  },
  "message": "success",
  "status": true
}
```

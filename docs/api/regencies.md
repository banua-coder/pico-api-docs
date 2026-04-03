# Kabupaten/Kota

Data COVID-19 per kabupaten/kota di Sulawesi Tengah.

## Endpoint

```
GET /api/v1/covid/regencies
```

## Parameter Query

| Parameter | Tipe | Wajib | Keterangan |
|-----------|------|-------|------------|
| `page` | `number` | ❌ | Halaman |
| `per_page` | `number` | ❌ | Data per halaman |
| `province_id` | `string` | ❌ | Filter berdasarkan provinsi |

## Contoh Request

```bash
curl "https://pico-api.banuacoder.com/api/v1/covid/regencies?province_id=sulteng"
```

## Contoh Respons

```json
{
  "data": [
    {
      "id": "palu",
      "name": "Kota Palu",
      "province_id": "sulteng",
      "confirmed": 5000,
      "recovered": 4800,
      "deaths": 120,
      "active": 80
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 10,
    "total": 13,
    "total_pages": 2
  },
  "message": "success",
  "status": true
}
```

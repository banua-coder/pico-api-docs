# Kasus Provinsi Spesifik

Data COVID-19 detail untuk provinsi tertentu.

## Endpoint

```
GET /api/v1/covid/provinces/:id
```

## Parameter Path

| Parameter | Keterangan |
|-----------|------------|
| `id` | ID provinsi (misal: `sulteng`, `sulsel`) |

## Contoh Request

```bash
# Data Sulawesi Tengah
curl https://pico-api.banuacoder.com/api/v1/covid/provinces/sulteng

# Data DKI Jakarta
curl https://pico-api.banuacoder.com/api/v1/covid/provinces/dki-jakarta
```

## Contoh Respons

```json
{
  "data": {
    "id": "sulteng",
    "name": "Sulawesi Tengah",
    "confirmed": 15234,
    "recovered": 14800,
    "deaths": 312,
    "active": 122,
    "new_confirmed": 5,
    "new_recovered": 8,
    "new_deaths": 0,
    "fatality_rate": 2.04,
    "recovery_rate": 97.15,
    "updated_at": "2023-06-30T00:00:00Z"
  },
  "message": "success",
  "status": true
}
```

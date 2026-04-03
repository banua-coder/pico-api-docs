# Vaksinasi

Data vaksinasi COVID-19 nasional dan per provinsi.

## Endpoint

```
GET /api/v1/covid/vaccination
```

## Parameter Query

| Parameter | Tipe | Keterangan |
|-----------|------|------------|
| `province_id` | `string` | Filter berdasarkan provinsi |
| `page` | `number` | Halaman |
| `per_page` | `number` | Data per halaman |

## Contoh Request

```bash
# Vaksinasi nasional
curl https://pico-api.banuacoder.com/api/v1/covid/vaccination

# Vaksinasi Sulawesi Tengah
curl "https://pico-api.banuacoder.com/api/v1/covid/vaccination?province_id=sulteng"
```

## Contoh Respons

```json
{
  "data": {
    "total_target": 208000000,
    "dose1": 170000000,
    "dose2": 140000000,
    "dose3": 50000000,
    "dose1_percentage": 81.73,
    "dose2_percentage": 67.31,
    "dose3_percentage": 24.04,
    "updated_at": "2023-06-30"
  },
  "message": "success",
  "status": true
}
```

## Field Respons

| Field | Keterangan |
|-------|------------|
| `total_target` | Target sasaran vaksinasi |
| `dose1` | Total penerima dosis 1 |
| `dose2` | Total penerima dosis 2 |
| `dose3` | Total penerima dosis booster |
| `*_percentage` | Persentase capaian |

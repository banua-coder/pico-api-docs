# Rumah Sakit Rujukan

Daftar rumah sakit rujukan COVID-19 di Sulawesi Tengah.

## Endpoint

```
GET /api/v1/covid/hospitals
```

## Parameter Query

| Parameter | Tipe | Keterangan |
|-----------|------|------------|
| `page` | `number` | Halaman |
| `per_page` | `number` | Data per halaman |
| `regency_id` | `string` | Filter berdasarkan kabupaten/kota |

## Contoh Request

```bash
curl "https://pico-api.banuacoder.com/api/v1/covid/hospitals?regency_id=palu"
```

## Contoh Respons

```json
{
  "data": [
    {
      "id": "rsud-undata",
      "name": "RSUD Undata Palu",
      "address": "Jl. Undata, Palu",
      "phone": "0451-421195",
      "type": "Rumah Sakit Umum Daerah",
      "regency_id": "palu",
      "is_referral": true,
      "bed_capacity": 200,
      "available_beds": 45
    }
  ],
  "message": "success",
  "status": true
}
```

# Rumah Sakit Rujukan

Daftar rumah sakit rujukan COVID-19.

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

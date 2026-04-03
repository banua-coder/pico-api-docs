# Kabupaten/Kota

Data COVID-19 per kabupaten/kota.

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

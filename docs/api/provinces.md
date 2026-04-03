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

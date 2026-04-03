# Kasus Provinsi Spesifik

Data COVID-19 detail untuk provinsi tertentu.

## Endpoint

```
GET /api/v1/covid/provinces/:id
```

## Parameter Path

| Parameter | Keterangan |
|-----------|------------|
| `id` | ID provinsi (misal: `sulteng`, `sulsel`, `dki-jakarta`) |

## Contoh Request

```bash
# Sulawesi Tengah
curl https://pico-api.banuacoder.com/api/v1/covid/provinces/sulteng
```

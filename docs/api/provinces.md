# Provinsi

Daftar semua provinsi Indonesia beserta data COVID-19.

## Endpoint

```
GET /api/v1/covid/provinces
```

## Playground

<ApiPlayground
  endpoint="/api/v1/covid/provinces"
  :params="[
    { name: 'page', type: 'number', placeholder: '1', default: '1', description: 'Nomor halaman' },
    { name: 'per_page', type: 'number', placeholder: '10', default: '10', description: 'Data per halaman (max 34)' },
  ]"
/>

## Parameter Query

| Parameter | Tipe | Wajib | Keterangan |
|-----------|------|-------|------------|
| `page` | `number` | ❌ | Halaman (default: 1) |
| `per_page` | `number` | ❌ | Data per halaman |

## Contoh Request

```bash
curl "https://pico-api.banuacoder.com/api/v1/covid/provinces?page=1&per_page=34"
```

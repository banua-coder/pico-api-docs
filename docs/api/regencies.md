# Kabupaten/Kota

Data COVID-19 per kabupaten/kota.

## Endpoint

```
GET /api/v1/covid/regencies
```

## Playground

<ApiPlayground
  endpoint="/api/v1/covid/regencies"
  :params="[
    { name: 'page', type: 'number', placeholder: '1', default: '1', description: 'Nomor halaman' },
    { name: 'per_page', type: 'number', placeholder: '10', default: '10', description: 'Data per halaman' },
    { name: 'province_id', type: 'string', placeholder: 'sulteng', description: 'Filter berdasarkan ID provinsi' },
  ]"
/>

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

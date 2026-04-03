# Rumah Sakit Rujukan

Daftar rumah sakit rujukan COVID-19.

## Endpoint

```
GET /api/v1/covid/hospitals
```

## Playground

<ApiPlayground
  endpoint="/api/v1/covid/hospitals"
  :params="[
    { name: 'page', type: 'number', placeholder: '1', default: '1' },
    { name: 'per_page', type: 'number', placeholder: '10', default: '10' },
    { name: 'regency_id', type: 'string', placeholder: 'palu', description: 'Filter berdasarkan kabupaten/kota' },
  ]"
/>

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

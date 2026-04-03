# Vaksinasi

Data vaksinasi COVID-19.

## Endpoint

```
GET /api/v1/covid/vaccination
```

## Playground

<ApiPlayground
  endpoint="/api/v1/covid/vaccination"
  :params="[
    { name: 'province_id', type: 'string', placeholder: 'sulteng', description: 'Filter berdasarkan ID provinsi (kosongkan untuk nasional)' },
    { name: 'page', type: 'number', placeholder: '1', default: '1' },
    { name: 'per_page', type: 'number', placeholder: '10', default: '10' },
  ]"
/>

## Parameter Query

| Parameter | Tipe | Keterangan |
|-----------|------|------------|
| `province_id` | `string` | Filter berdasarkan provinsi |

## Field Respons

| Field | Keterangan |
|-------|------------|
| `total_target` | Target sasaran vaksinasi |
| `dose1` | Total penerima dosis 1 |
| `dose2` | Total penerima dosis 2 |
| `dose3` | Total penerima dosis booster |
| `*_percentage` | Persentase capaian |

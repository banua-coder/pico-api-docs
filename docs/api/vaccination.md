# Vaksinasi

Data vaksinasi COVID-19.

## Endpoint

```
GET /api/v1/covid/vaccination
```

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

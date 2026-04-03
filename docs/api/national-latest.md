# Data Nasional Terbaru

Data COVID-19 nasional Indonesia paling terkini.

## Endpoint

```
GET /api/v1/covid/national/latest
```

## Contoh Request

```bash
curl https://pico-api.banuacoder.com/api/v1/covid/national/latest
```

## Contoh Respons

```json
{
  "data": {
    "confirmed": 6737downstream,
    "recovered": 6591234,
    "deaths": 161234,
    "active": 12345,
    "date": "2023-06-30",
    "new_confirmed": 100,
    "new_recovered": 150,
    "new_deaths": 2,
    "fatality_rate": 2.39,
    "recovery_rate": 97.24
  },
  "message": "success",
  "status": true
}
```

## Field Respons

| Field | Tipe | Keterangan |
|-------|------|------------|
| `confirmed` | `number` | Total kasus terkonfirmasi |
| `recovered` | `number` | Total sembuh |
| `deaths` | `number` | Total meninggal |
| `active` | `number` | Kasus aktif |
| `date` | `string` | Tanggal data terakhir diperbarui |
| `new_confirmed` | `number` | Kasus baru hari ini |
| `new_recovered` | `number` | Sembuh baru hari ini |
| `new_deaths` | `number` | Meninggal baru hari ini |
| `fatality_rate` | `number` | Tingkat kematian (%) |
| `recovery_rate` | `number` | Tingkat kesembuhan (%) |

# Data Nasional Terbaru

Data COVID-19 nasional Indonesia paling terkini.

## Endpoint

```
GET /api/v1/covid/national/latest
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

## Contoh Request

```bash
curl https://pico-api.banuacoder.com/api/v1/covid/national/latest
```

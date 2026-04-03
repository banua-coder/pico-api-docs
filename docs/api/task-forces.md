# Gugus Tugas

Daftar gugus tugas penanganan COVID-19 di Sulawesi Tengah.

## Endpoint

```
GET /api/v1/covid/task-forces
```

## Contoh Request

```bash
curl https://pico-api.banuacoder.com/api/v1/covid/task-forces
```

## Contoh Respons

```json
{
  "data": [
    {
      "id": "satgas-sulteng",
      "name": "Satgas COVID-19 Sulawesi Tengah",
      "head": "Gubernur Sulawesi Tengah",
      "phone": "0451-000000",
      "email": "satgas@sultengprov.go.id",
      "address": "Kantor Gubernur Sulawesi Tengah, Palu",
      "regency_id": "sulteng"
    }
  ],
  "message": "success",
  "status": true
}
```

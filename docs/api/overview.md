# Overview API

## Base URL

```
https://pico-api.banuacoder.com
```

## Versi API

Semua endpoint berada di bawah prefix `/api/v1/`.

## Endpoint yang Tersedia

| Endpoint | Method | Keterangan |
|----------|--------|------------|
| `/api/v1/health` | GET | Status kesehatan API |
| `/api/v1/covid/national/latest` | GET | Data nasional terbaru |
| `/api/v1/covid/national/historical` | GET | Data nasional historis |
| `/api/v1/covid/provinces` | GET | Daftar semua provinsi |
| `/api/v1/covid/provinces/:id` | GET | Data kasus provinsi spesifik |
| `/api/v1/covid/regencies` | GET | Daftar kabupaten/kota |
| `/api/v1/covid/hospitals` | GET | Daftar rumah sakit rujukan |
| `/api/v1/covid/task-forces` | GET | Daftar gugus tugas |
| `/api/v1/covid/vaccination` | GET | Data vaksinasi |
| `/api/v1/covid/statistics` | GET | Statistik agregat |

## Format Standar Respons

```json
{
  "data": {},
  "message": "success",
  "status": true
}
```

## Paginasi

Endpoint list mendukung paginasi dengan parameter query:

```
?page=1&per_page=10
```

Respons akan menyertakan objek `pagination`:

```json
{
  "pagination": {
    "page": 1,
    "per_page": 10,
    "total": 34,
    "total_pages": 4
  }
}
```

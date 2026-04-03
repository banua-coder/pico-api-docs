# Memulai

## Tidak Perlu Autentikasi

API PICO SulTeng tidak memerlukan autentikasi untuk semua endpoint publik. Langsung panggil saja!

## Base URL

```
https://pico-api.banuacoder.com
```

## Content Type

Semua respons menggunakan format JSON:

```
Content-Type: application/json
```

## Contoh Cepat

### Menggunakan curl

```bash
curl https://pico-api.banuacoder.com/api/v1/covid/national/latest
```

### Menggunakan JavaScript (fetch)

```javascript
const response = await fetch('https://pico-api.banuacoder.com/api/v1/covid/national/latest');
const data = await response.json();
console.log(data);
```

### Menggunakan axios

```javascript
import axios from 'axios';

const { data } = await axios.get('https://pico-api.banuacoder.com/api/v1/covid/national/latest');
console.log(data);
```

## Format Respons

Semua endpoint mengembalikan format standar:

```json
{
  "data": { ... },
  "message": "success",
  "status": true
}
```

Untuk endpoint list dengan paginasi:

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "per_page": 10,
    "total": 100,
    "total_pages": 10
  },
  "message": "success",
  "status": true
}
```

## Langkah Selanjutnya

- [Penanganan Error →](./error-handling)
- [Referensi API lengkap →](../api/overview)
- [Swagger UI interaktif ↗](https://pico-api.banuacoder.com/swagger/index.html)

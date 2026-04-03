# Penanganan Error

## HTTP Status Codes

| Status | Keterangan |
|--------|------------|
| `200 OK` | Request berhasil |
| `400 Bad Request` | Parameter tidak valid |
| `404 Not Found` | Data tidak ditemukan |
| `500 Internal Server Error` | Kesalahan server |

## Format Error

```json
{
  "message": "record not found",
  "status": false
}
```

## Contoh Penanganan Error

### JavaScript

```javascript
try {
  const response = await fetch('https://pico-api.banuacoder.com/api/v1/covid/provinces/invalid');
  const data = await response.json();

  if (!response.ok || !data.status) {
    console.error('Error:', data.message);
    return;
  }

  console.log(data.data);
} catch (error) {
  console.error('Network error:', error);
}
```

### axios

```javascript
import axios from 'axios';

try {
  const { data } = await axios.get('/api/v1/covid/national/latest');
  console.log(data);
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.error('API Error:', error.response?.data?.message);
  }
}
```

## API Down

Jika API sedang tidak tersedia, endpoint health check akan merespons dengan status error:

```bash
curl https://pico-api.banuacoder.com/api/v1/health
# {"status": false, "message": "database connection failed"}
```

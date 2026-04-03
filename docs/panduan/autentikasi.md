# Autentikasi

## Endpoint Publik

Semua endpoint API PICO SulTeng bersifat **publik** — tidak memerlukan API key, token, atau header autentikasi apapun.

```bash
# Langsung request tanpa header autentikasi
curl https://pico-api.banuacoder.com/api/v1/covid/national/latest
```

## CORS

API mendukung Cross-Origin Resource Sharing (CORS), sehingga bisa digunakan langsung dari browser/frontend aplikasi.

```javascript
// Bisa langsung dipanggil dari browser
const response = await fetch('https://pico-api.banuacoder.com/api/v1/covid/national/latest');
```

## Rate Limiting

Saat ini tidak ada rate limiting yang ketat, namun mohon gunakan API secara wajar untuk menjaga ketersediaan layanan bagi semua pengguna.

# Health Check

Cek status API dan konektivitas database.

## Endpoint

```
GET /api/v1/health
```

## Playground

<ApiPlayground
  endpoint="/api/v1/health"
/>

## Contoh Request

```bash
curl https://pico-api.banuacoder.com/api/v1/health
```

## Contoh Respons (Sehat)

```json
{
  "data": {
    "database": "connected",
    "uptime": "72h30m15s"
  },
  "message": "API is healthy",
  "status": true
}
```

## Penggunaan

Gunakan endpoint ini untuk:
- Memastikan API tersedia sebelum melakukan request lain
- Monitoring uptime aplikasi kamu
- Health check pada load balancer/proxy

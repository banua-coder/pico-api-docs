# Health Check

Check API status and database connectivity.

## Endpoint

```
GET /api/v1/health
```

## Example

```bash
curl https://pico-api.banuacoder.com/api/v1/health
```

## Response

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

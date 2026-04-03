# Latest National Data

Get the latest national COVID-19 data for Indonesia.

## Endpoint

```
GET /api/v1/covid/national/latest
```

## Example

```bash
curl https://pico-api.banuacoder.com/api/v1/covid/national/latest
```

## Response

```json
{
  "data": {
    "confirmed": 6737000,
    "recovered": 6591000,
    "deaths": 161000,
    "active": 12345,
    "date": "2023-06-30",
    "new_confirmed": 100,
    "fatality_rate": 2.39,
    "recovery_rate": 97.24
  },
  "message": "success",
  "status": true
}
```

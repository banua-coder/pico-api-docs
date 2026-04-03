# Statistik

Data statistik agregat COVID-19 — ringkasan dan tren.

## Endpoint

```
GET /api/v1/covid/statistics
```

## Contoh Request

```bash
curl https://pico-api.banuacoder.com/api/v1/covid/statistics
```

## Contoh Respons

```json
{
  "data": {
    "national": {
      "confirmed": 6737000,
      "recovered": 6591000,
      "deaths": 161000,
      "active": 12345,
      "fatality_rate": 2.39,
      "recovery_rate": 97.24
    },
    "sulteng": {
      "confirmed": 15234,
      "recovered": 14800,
      "deaths": 312,
      "active": 122,
      "rank_confirmed": 25,
      "rank_deaths": 28
    },
    "weekly_trend": {
      "confirmed_growth": -12.5,
      "deaths_growth": -8.3
    }
  },
  "message": "success",
  "status": true
}
```

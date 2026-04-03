# Getting Started

## No Authentication Required

All PICO SulTeng API endpoints are **public** — no API key or token needed.

## Base URL

```
https://pico-api.banuacoder.com
```

## Quick Example

```bash
curl https://pico-api.banuacoder.com/api/v1/covid/national/latest
```

```javascript
const response = await fetch('https://pico-api.banuacoder.com/api/v1/covid/national/latest');
const data = await response.json();
console.log(data);
```

## Response Format

```json
{
  "data": {},
  "message": "success",
  "status": true
}
```

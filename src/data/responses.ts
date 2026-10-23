/** Example response bodies (trimmed to one record). Shapes verified against the live API. */

export const nationalLatestResponse = `{
  "status": "success",
  "data": {
    "day": 1413,
    "date": "2024-01-14T00:00:00+07:00",
    "daily": { "positive": 0, "recovered": 0, "deceased": 0, "active": 0 },
    "cumulative": {
      "positive": 6812127,
      "recovered": 6642003,
      "deceased": 161879,
      "active": 8245
    },
    "statistics": {
      "percentages": {
        "active": 0.121,
        "recovered": 97.503,
        "deceased": 2.376
      },
      "reproduction_rate": { "value": null, "upper_bound": null, "lower_bound": null }
    }
  }
}`

export const nationalHistoricalResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "day": 1,
        "date": "2020-03-02T00:00:00+07:00",
        "daily": {
          "positive": 2,
          "recovered": 0,
          "deceased": 0,
          "active": 2
        },
        "cumulative": {
          "positive": 2,
          "recovered": 0,
          "deceased": 0,
          "active": 2
        },
        "statistics": {
          "percentages": {
            "active": 100,
            "recovered": 0,
            "deceased": 0
          },
          "reproduction_rate": {
            "value": null,
            "upper_bound": null,
            "lower_bound": null
          }
        }
      }
    ],
    "pagination": {
      "limit": 10,
      "offset": 0,
      "total": 1414,
      "total_pages": 142,
      "page": 1,
      "has_next": true,
      "has_prev": false
    }
  }
}`

export const provincesResponse = `{
  "status": "success",
  "data": [
    {
      "id": "11",
      "name": "Aceh",
      "latest_case": {
        "day": 538,
        "date": "2021-08-21T18:17:00+07:00",
        "daily": {
          "positive": 382,
          "recovered": 255,
          "deceased": 29,
          "active": 98
        },
        "cumulative": {
          "positive": 29742,
          "recovered": 22261,
          "deceased": 1275,
          "active": 6206
        }
      }
    }
  ]
}`

export const provinceCasesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "day": 799,
        "date": "2022-05-08T16:38:06+07:00",
        "daily": {
          "positive": 2,
          "recovered": 1,
          "deceased": 0,
          "active": 1,
          "odp": { "active": 0, "finished": 0 },
          "pdp": { "active": 0, "finished": 0 }
        },
        "cumulative": {
          "positive": 60779,
          "recovered": 59032,
          "deceased": 1722,
          "active": 25,
          "odp": { "active": 124, "finished": 1253, "total": 1377 },
          "pdp": { "active": 15, "finished": 281, "total": 296 }
        },
        "statistics": {
          "percentages": {
            "active": 0.041,
            "recovered": 97.126,
            "deceased": 2.833
          },
          "reproduction_rate": { "value": null, "upper_bound": null, "lower_bound": null }
        },
        "province": { "id": "72", "name": "Sulawesi Tengah" }
      }
    ],
    "pagination": {
      "limit": 1,
      "offset": 0,
      "total": 798,
      "total_pages": 798,
      "page": 1,
      "has_next": true,
      "has_prev": false
    }
  }
}`

export const regenciesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 7202,
        "province_id": 72,
        "name": "Banggai",
        "created_at": "2021-07-12T16:35:40+07:00",
        "updated_at": "2021-07-12T16:35:40+07:00"
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 13,
      "total_pages": 2,
      "has_next": true,
      "has_prev": false
    }
  }
}`

export const hospitalsResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 19,
        "regency_id": 7271,
        "name": "RS Tk.III 14.06.01 Dr. Sindhu Trisno",
        "hospital_code": "7271025",
        "address": "Jl. Sisingamangaraja No.4, Besusu Tim., Kec. Palu Tim., Kota Palu, Sulawesi Tengah 94118",
        "latitude": -0.8959781,
        "longitude": 119.8874783,
        "contacts": [
          {
            "id": 132,
            "contact_type_id": 2,
            "contact_type_name": "Telepon",
            "contact_type_icon": "fas fa-phone",
            "contact": "081213756763"
          }
        ],
        "beds": [
          {
            "id": 48,
            "hospital_id": 19,
            "hospital_bed_type_id": 1,
            "bed_type_name": "IGD Khusus Covid",
            "available": 2,
            "total": 2
          }
        ],
        "igd_count": 2
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 19,
      "total_pages": 2,
      "has_next": true,
      "has_prev": false
    }
  }
}`

export const taskForcesResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "regency_id": 7202,
        "regency_name": "Banggai",
        "task_forces": [
          {
            "id": 1,
            "regency_id": 7202,
            "name": "dr. Anang (Kepala Dinkes Banggai)",
            "contacts": [
              {
                "id": 31,
                "contact_type_id": 2,
                "contact_type_name": "Telepon",
                "contact_type_icon": "fas fa-phone",
                "contact": "081241415651"
              }
            ]
          }
        ]
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 13,
      "total_pages": 2,
      "has_next": true,
      "has_prev": false
    }
  }
}`

export const genderStatsResponse = `{
  "status": "success",
  "data": [
    {
      "id": 810,
      "day": 799,
      "province_id": 72,
      "positive": {
        "male": {
          "total": 10199,
          "age_groups": { "0_14": 263, "15_19": 898, "20_24": 2888, "25_49": 3180, "50_54": 1978, "55_plus": 991 }
        },
        "female": {
          "total": 12585,
          "age_groups": { "0_14": 324, "15_19": 1107, "20_24": 3564, "25_49": 3924, "50_54": 2441, "55_plus": 1223 }
        }
      },
      "pdp": {
        "male": {
          "total": 178,
          "age_groups": { "0_14": 16, "15_19": 13, "20_24": 22, "25_49": 91, "50_54": 13, "55_plus": 23 }
        },
        "female": {
          "total": 112,
          "age_groups": { "0_14": 9, "15_19": 9, "20_24": 14, "25_49": 55, "50_54": 10, "55_plus": 15 }
        }
      }
    }
  ]
}`

export const testStatsResponse = `{
  "status": "success",
  "data": [
    {
      "id": 1,
      "test_type_id": 1,
      "day": 1,
      "province_id": 72,
      "date_from": "2020-03-03T00:00:00+07:00",
      "process": 0,
      "invalid": 0,
      "positive": 0,
      "negative": 0,
      "test_type": {
        "id": 1,
        "key": "pcr",
        "name": "Polymerase Chain Reaction",
        "sample": "Spesimen saluran pernapasan (swab hidung, tenggorokan, dahak, dsb), tinja",
        "duration": "Tergantung banyak antrian sampel",
        "is_recommended": true
      }
    }
  ]
}`

export const testTypesResponse = `{
  "status": "success",
  "data": [
    {
      "id": 1,
      "key": "pcr",
      "name": "Polymerase Chain Reaction",
      "sample": "Spesimen saluran pernapasan (swab hidung, tenggorokan, dahak, dsb), tinja",
      "duration": "Tergantung banyak antrian sampel",
      "is_recommended": true
    },
    {
      "id": 2,
      "key": "rdt",
      "name": "Rapid Diagnostic Test",
      "sample": "Tergantung tes (Antibodi atau Antigen)",
      "duration": "Tergantung tes (Antibodi atau Antigen)",
      "is_recommended": false
    }
  ]
}`

export const vaccinationNationalResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "day": 1,
        "date": "2021-02-01T18:21:00+07:00",
        "target": 208265720,
        "total": {
          "daily": { "dose_1": 0, "dose_2": 0 },
          "cumulative": { "dose_1": 0, "dose_2": 0 },
          "coverage": { "dose_1": 0, "dose_2": 0 }
        },
        "groups": {
          "elderly": {
            "target": 21553118,
            "daily": { "dose_1": 0, "dose_2": 0 },
            "cumulative": { "dose_1": 0, "dose_2": 0 },
            "coverage": { "dose_1": 0, "dose_2": 0 }
          },
          "health_worker": {
            "target": 1468764,
            "daily": { "dose_1": 0, "dose_2": 0 },
            "cumulative": { "dose_1": 0, "dose_2": 0 },
            "coverage": { "dose_1": 0, "dose_2": 0 }
          },
          "public": {
            "target": 0,
            "daily": { "dose_1": 0, "dose_2": 0 },
            "cumulative": { "dose_1": 0, "dose_2": 0 },
            "coverage": { "dose_1": 0, "dose_2": 0 }
          },
          "public_officer": {
            "target": 17327167,
            "daily": { "dose_1": 0, "dose_2": 0 },
            "cumulative": { "dose_1": 0, "dose_2": 0 },
            "coverage": { "dose_1": 0, "dose_2": 0 }
          },
          "teenager": {
            "target": 0,
            "daily": { "dose_1": 0, "dose_2": 0 },
            "cumulative": { "dose_1": 0, "dose_2": 0 },
            "coverage": { "dose_1": 0, "dose_2": 0 }
          }
        }
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 418,
      "total_pages": 42,
      "has_next": true,
      "has_prev": false
    }
  }
}`

export const vaccinationProvinceResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "day": 93,
        "date": "2021-05-04T00:00:00+07:00",
        "province_id": 72,
        "target": 2240548,
        "total": {
          "daily": { "dose_1": 473, "dose_2": 1535 },
          "cumulative": { "dose_1": 81885, "dose_2": 61974 },
          "coverage": { "dose_1": 3.65, "dose_2": 2.77 }
        },
        "groups": {
          "elderly": {
            "target": 25292,
            "daily": { "dose_1": 37, "dose_2": 295 },
            "cumulative": { "dose_1": 4210, "dose_2": 3180 },
            "coverage": { "dose_1": 16.65, "dose_2": 12.57 }
          },
          "health_worker": {
            "target": 24698,
            "daily": { "dose_1": 12, "dose_2": 85 },
            "cumulative": { "dose_1": 22140, "dose_2": 19870 },
            "coverage": { "dose_1": 89.64, "dose_2": 80.45 }
          }
        }
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 365,
      "total_pages": 37,
      "has_next": true,
      "has_prev": false
    }
  }
}`

export const vaccinationLocationsResponse = `{
  "status": "success",
  "data": {
    "data": [
      {
        "id": 1,
        "regency_id": 7271,
        "name": "Gerai Vaksinasi Presisi Mapolda",
        "address": "Jl. Soekarno-Hatta, Palu",
        "operational_time": "08:00 - 12:00",
        "is_first_vaccination": false,
        "is_second_vaccination": false,
        "daily_vaccination_quota": null,
        "vaccination_stock_remaining": null,
        "notes": null
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total": 36,
      "total_pages": 4,
      "has_next": true,
      "has_prev": false
    }
  }
}`

export const healthResponse = `{
  "status": "success",
  "data": {
    "database": {
      "connections": { "idle": 2, "in_use": 0, "max_open": 20, "open": 2, "wait_count": 0 },
      "status": "healthy"
    },
    "service": "COVID-19 API",
    "status": "healthy",
    "timestamp": "2026-10-23T05:04:42Z",
    "version": "2.9.0"
  }
}`

export const apiIndexResponse = `{
  "status": "success",
  "data": {
    "api": {
      "description": "A comprehensive REST API for COVID-19 data in Sulawesi Tengah (Central Sulawesi)",
      "title": "Sulawesi Tengah COVID-19 Data API",
      "version": "2.9.0"
    },
    "documentation": {
      "openapi": { "json": "/docs/swagger.json", "yaml": "/docs/swagger.yaml" },
      "swagger_ui": "/swagger/index.html"
    },
    "endpoints": {
      "health": { "description": "Check API health status and database connectivity", "method": "GET", "url": "/api/v1/health" },
      "national": {
        "latest": { "description": "Get latest national COVID-19 case data", "method": "GET", "url": "/api/v1/national/latest" }
      }
    }
  }
}`

/** Real error bodies, copied from live responses. The key is "error", not "message". */
export const errorBody400 = `{
  "status": "error",
  "error": "Invalid day parameter"
}`
export const errorBody404 = `{
  "status": "error",
  "error": "Kabupaten dengan kode 9999 tidak ditemukan"
}`

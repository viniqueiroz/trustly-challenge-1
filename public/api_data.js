define({ "api": [
  {
    "type": "get",
    "url": "/now/:timezone",
    "title": "Request Now Time for designed Timezone",
    "version": "1.0.0",
    "name": "GetNow",
    "group": "Now",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>Timezone requested.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "$id",
            "description": "<p>ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "currentDateTime",
            "description": "<p>Current Date and Time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "utcOffset:",
            "description": "<p>Offset based on utc Timezone.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isDayLightSavingsTime:",
            "description": "<p>true,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dayOfTheWeek",
            "description": "<p>Day of The Week.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeZoneName",
            "description": "<p>Timezone Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "currentFileTime",
            "description": "<p>Current File Time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ordinalDate",
            "description": "<p>Ordinal Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceResponse",
            "description": "<p>Service Response.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/routes.js",
    "groupTitle": "Now",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/v1/now/:timezone"
      }
    ]
  },
  {
    "type": "get",
    "url": "/tomorrow/:timezone",
    "title": "Request Tomorrow Time for designed Timezone",
    "version": "1.0.0",
    "name": "GetTomorrow",
    "group": "Tomorrow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>Timezone requested.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "$id",
            "description": "<p>ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "currentDateTime",
            "description": "<p>Tomorrow Date and Time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "utcOffset:",
            "description": "<p>Offset based on utc Timezone.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isDayLightSavingsTime:",
            "description": "<p>true,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dayOfTheWeek",
            "description": "<p>Day of The Week.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeZoneName",
            "description": "<p>Timezone Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "currentFileTime",
            "description": "<p>Current File Time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ordinalDate",
            "description": "<p>Ordinal Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceResponse",
            "description": "<p>Service Response.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/routes.js",
    "groupTitle": "Tomorrow",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/v1/tomorrow/:timezone"
      }
    ]
  },
  {
    "type": "get",
    "url": "/yesterday/:timezone",
    "title": "Request Yesterday Time for designed Timezone",
    "version": "1.0.0",
    "name": "GetYesterday",
    "group": "Yesterday",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>Timezone requested.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "$id",
            "description": "<p>ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "currentDateTime",
            "description": "<p>Yesterday Date and Time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "utcOffset:",
            "description": "<p>Offset based on utc Timezone.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isDayLightSavingsTime:",
            "description": "<p>true,</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dayOfTheWeek",
            "description": "<p>Day of The Week.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeZoneName",
            "description": "<p>Timezone Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "currentFileTime",
            "description": "<p>Current File Time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ordinalDate",
            "description": "<p>Ordinal Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceResponse",
            "description": "<p>Service Response.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/routes.js",
    "groupTitle": "Yesterday",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/v1/yesterday/:timezone"
      }
    ]
  }
] });

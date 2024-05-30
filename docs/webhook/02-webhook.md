---
layout: en
title: Examples of webhook 
parent: Webhook
nav_order: 2
---

# Webhook
{: .no_toc .header }
Through webhook, We can communicate with third-party systems via API call:
- submit information,
- receive information,
- update information.

There are many applications. 

### Create Query Weather

API of query weather:
```text
API call URL  : https://api.tomorrow.io/v4/weather/realtime?location=New York&apikey=your_key

Request Method: Get
Response      : {
  "data": {
    "time": "2024-03-29T06:58:00Z",
    "values": {
      "cloudBase": 1.25,
      "cloudCeiling": 1.25,
      "cloudCover": 100,
      "dewPoint": 0.13,
      "freezingRainIntensity": 0,
      "humidity": 48,
      "precipitationProbability": 0,
      "pressureSurfaceLevel": 1008.72,
      "rainIntensity": 0,
      "sleetIntensity": 0,
      "snowIntensity": 0,
      "temperature": 6.5,
      "temperatureApparent": 6.5,
      "uvHealthConcern": 0,
      "uvIndex": 0,
      "visibility": 16,
      "weatherCode": 1001,
      "windDirection": 334.69,
      "windGust": 4.69,
      "windSpeed": 1.31
    }
  },
  "location": {
    "lat": 40.71272659301758,
    "lon": -74.00601196289062,
    "name": "City of New York, New York, United States",
    "type": "administrative"
  }
}
```

Conversation:
```text
User: Hi, can you please tell me the weather in New York?
Bot : Sure! Let me check the current weather conditions for you. Just a moment, please.
     The current weather in New York is  6.5°C  with  humidity 48%
```
after the order information is confirmed by the user, we call a webhook to place the order.

### Webhook Settings:
![webhook-example-01.png](/assets/images/webhook/webhook-example-01.png)

### Handle fallback via Webhook
Webhook can also be used to handle fallback.  See [Fallback](/docs/webhook/03-webhook).

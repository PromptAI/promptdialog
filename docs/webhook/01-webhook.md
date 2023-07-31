---
layout: en
title: Concept of webhook
parent: Webhook
nav_order: 1
---
Here is an example of querying weather for your reference.
```text
User: Hi, can you please tell me the weather in New York?
Bot: Sure! Let me check the current weather conditions for you. Just a moment, please.
# It needs to trigger a webhook that communicates with a third party weather server to query the weather in "New york."

# Once the query result recieved, it can be packaged in a response and sent to the user.
Bot: The current weather in New York is 82°F (28°C) with mostly sunny conditions. The wind is blowing at a speed of 5 mph (8 km/h), and the humidity is around 60%. Is there anything else you would like to know?
User: Thank you for the forecast! That's helpful.
```
---
There are two steps to call a webhook. 

### Step 1.
Click `Project View` - `Webhooks`. Click `+ Add` on the upper right corner.  Create a webhook to call the weather API (more details later). 

![6-webhook](/assets/images/tutorial/webhook_1e2.jpg)

### Step 2. 
Create a flow for querying weather and select a webhook in a bot reply node. 

![5-webhook](/assets/images/tutorial/webhook_1e1.jpg)

The following is the detailed setting instruction for Step 1.
### Basic Settings
- name : The name to refer the new webhook.
- URL : The url here has the same meaning as http url. Please pay attention to the 'http/https' protocol when filling in here. It is the access link that the third party service provides to you.  In addition, the URL address also supports the transmission of variable value. When calling the webhook, the corresponding variable placeholder will be replaced with its corresponding value.  As shown in the figure, if we define a slot `city` in the flow diagram, we can use `{city}` to send the value to the third party service provider. 
   ```
   app.promptai.us/rpc/gaode/weather?key=c4f69dbbd66cfc7f4e49310fea69dff1&city={city}
   ```
  
### Request Settings
- Request Method: Represents the http request method, which upports the following. 
   * get
   * post
   * put
   * delete

- Request Header: Represents the http request header, which can be added here when the external interface needs a specific request header.
   * No header     : nothing
   * Custom header : key-value pairs

- Request Body: Supports four formats. 

| Type | Content-Type                      | Format            | Comment                      |
|------|-----------------------------------|-------------------|:-----------------------------|
| None | -                                 | -                 | -                            |
| Form | application/x-www-form-urlencoded | key - value pairs | File not support             |
| JSON | application/json                  | json string       |                              |
| Text | text/plain                        | text string       |                              |


 * Notice: Same as URL, we also support the use of slot value in the request body, e.g., '{city}'.

### Response Settings
These settings handle the result received from the third party service and package it as a response to the user.  If the result does arrive, we could take one of the following actions. 

| Name                    |  processing                                                          | Response Data Requirement |
|-------------------------|----------------------------------------------------------------------|---------------------------|
| No Response             | Ignore the returned result and output nothing                        | -                         |
| Original Response       | Display the returned results directly                                | -                         |
| Customized Response     | Extract fields from the result through JsonPath, and package them in a customized response   | json         |

Take the weather query as an example.  Suppose there is a weather service that responds with:
```json
{
  "temperature": "82°F (28°C)",
  "conditions": "Mostly sunny",
  "wind": "5 mph (8 km/h)",
  "humidity": "60%"
}
```

Now we can show you the four types of outputs: 
```text
// - Ignore the status code  【Bot will reply what you set】
//  for some reason, the weather service does not respond, we set text:
// "The service is unavailable, please try again later" at `Returning message if the call is completed successfully`
User: Hi, can you please tell me the weather in New York?
Bot : The service is unavailable, please try again later

// - Ignore Bot will not reply any message】
User: Hi, can you please tell me the weather in New York?

//  - Original response 【Bot will reply whatever the api return】
User: Hi, can you please tell me the weather in New York?
Bot : {"temperature":"82°F (28°C)","conditions":"Mostly sunny","wind":"5 mph (8 km/h)","humidity":"60%"}

// - User customized response 【Bot will reply what you set with value extracted from the response】
// For example, we can set text:
// Sure! I can provide you with the weather information for New York. Here is the current weather forecast for New York: temperature:{temperature} 、wind:{wind} 、conditions: {conditions} and humidity: {humidity}
// at `Returning message if the call is completed successfully`

User: Hi, can you please tell me the weather in New York?
Bot : Sure! I can provide you with the weather information for New York.
      Here is the current weather forecast for New York: temperature:82°F (28°C) 、wind:5 mph (8 km/h) 、conditions:Mostly sunny and humidity:60%
```

### Insert returned value to slots in Rasa
Extract `city` and `temperature` from the reponse
```json
{
  "temperature": "82°F (28°C)",
  "conditions": "Mostly sunny",
  "wind": "5 mph (8 km/h)",
  "humidity": "60%",
  "city": "New York"
}
```

1、Choose 'Custom Display'

![52-webhook](/assets/images/tutorial/webhook/webhook2.png)

2、Extract value 

![52-webhook](/assets/images/tutorial/webhook/webhook3.png)

Chat
```text
User: Hi, can you please tell me the weather in New York?
Bot : The current temperature in New York is 82°F (28°C)
```
---
- If the request is failed

Due to network and service factors, we need to give users some hints when the webhook request fails.

Set a shor message at "Returning message if the call fails or does not receive any result"

![webhook6.png](/assets/images/tutorial/webhook/webhook6.png)

---

## FAQs
1、When referencing a slot, what happens if the variable doesn't exist or if the variable is misspelled?

Take the URL as an example：`http://localhost/api?area={area}&date={date}`
- If area=Ningbo, date=2023-05-01, when successfully rendered, the actual requested url::
  `http://localhost/api?area=Ningbo&date=2023-05-01`
- If any variable does not exist or is misspelled, it will not be rendered, assuming that the area does not exist at this time, the actual requested url:
  `http://localhost/api?area={area}&date={date}`

2、Can variables extracted in "Response Handling - Custom Display" have the same name as slot existing in the dialog?

The name can be repeated, and the changed value will become the extracted value.

3、How does the extracted slot value change when the same webhook is called multiple times?

The extracted slot will be the value extracted after the last call to the webhook, that is, the value of the slot can change.

4、Can the slots generated by webhook extraction be used together with "reset variable value" and "reply condition"?

If you want to use "reset variable value" and "reply condition", you need to define the slot in the project in advance.

More example [click here](/docs/webhook/02-webhook/)

---
layout: en
title: Concept of webhook
parent: Webhook
nav_order: 1
---

## What is a webhook?
Webhooks are one of a few ways web applications can communicate with each other.
It allows you to send real-time data from one application to another whenever a given event occurs.
```
For example, suppose you create a PromptAI application that tracks when people start business transactions.
Ideally, you hope that your PromptAI application needs to obtain some additional information about current customers before starting to handle business, so as to better carry out subsequent business processes.
The function of the webhook is to notify you before someone starts the transaction and send you the real-time data.
The following is a schematic process:
Prompt AI                              System B
Event trigger for business a --data--> received
Event trigger for business b --data--> received
Event trigger for business c --data--> received
...
```
[Here is the wikipedia explanation](https://en.wikipedia.org/wiki/Webhook)

## How to set up webhooks?
Here is an example of querying weather for your reference.
```text
User: Hi, can you please tell me the weather in New York?

Assistant: Sure! Let me check the current weather conditions for you. Just a moment, please.

Assistant: The current weather in New York is 82°F (28°C) with mostly sunny conditions. The wind is blowing at a speed of 5 mph (8 km/h), and the humidity is around 60%. Is there anything else you would like to know?

User: Thank you for the forecast! That's helpful.

Assistant: You're welcome! I'm glad I could assist you. If you have any more questions or need further information, feel free to ask.
```
### Setup 1. 
Create a flow for weather queries
![5-webhook](/assets/images/tutorial/webhook_1e1.jpg)

### Steup 2.
Create a Webhook to call the weather API
![6-webhook](/assets/images/tutorial/webhook_1e2.jpg)

The following is the setting instructions in step 2.
### Basic Settings
1. name
   <br/>When creating a new webhook, we can give each one a name related to the webhook function, which is easy to distinguish when referring to a flow
2. URL
   <br/>The url here has the same meaning as the http url mentioned above, which can be understood with reference to the above. Please pay attention to the 'http/https' protocol when filling in here.
   In addition, the URL address also supports variable transmission. When calling the hit webhook, the corresponding variable placeholder will be replaced with the variable value.
   As shown in the figure, if we define a variable `city` in the flow diagram, we need to use `{city}` to transfer when configuring here   
   ```
   app.promptai.us/rpc/gaode/weather?key=c4f69dbbd66cfc7f4e49310fea69dff1&city={city}
   ```

---
   
### Request Settings
- Request Method
   <br/>The request method represents the http request method, which currently supports: 
   * get
   * post
   * put
   * delete

- Request Header
   <br/>The request header represents the http request header, which can be added here when the external interface needs a specific request header
   * No header     : nothing
   * Custom header : key-value pairs

- Request Body
   <br/>Four formats support in request body

| Type | Content-Type                      | Format            | Comment                      |
|------|-----------------------------------|-------------------|:-----------------------------|
| None | -                                 | -                 | -                            |
| Form | application/x-www-form-urlencoded | key - value pairs | File not support             |
| JSON | application/json                  | json string       |                              |
| Text | text/plain                        | text string       |                              |


 * Notice: Same with Url, we also support use slot value in request body like '{city}'

---

### Response Settings - Handle Response 
Handle the result of the request here

---

- If the request is successful

| Name                    |  processing                                                          | Response Data Requirement |
|-------------------------|----------------------------------------------------------------------|---------------------------|
| Ignore Response         | Ignore the returned result and output nothing                        | -                         |
| Sample Display          | Ignore the returned result and output the content of the setting     | -                         |
| Direct Display          | Display the returned results directly                                | -                         |
| Custom Display          | Extract fields from the response through jsonpath, and dynamically display the extracted values   | json         |


Example

If there has a weather api, response with:
```json
{
  "temperature": "82°F (28°C)",
  "conditions": "Mostly sunny",
  "wind": "5 mph (8 km/h)",
  "humidity": "60%"
}
```

Now we will show you four handle results:
```text
// - Ignore Response 【Bot will not reply any message】
User: Hi, can you please tell me the weather in New York?

// - Ignore the status code  【Bot will reply what you set】
// for some reason, the weather service not available. we set text:
// "The service is unavailable, please try again later" at "Returning message if the call is completed successfully"】
User: Hi, can you please tell me the weather in New York?
Bot : The service is unavailable, please try again later

//  - Original response 【Bot will reply what the api return】
User: Hi, can you please tell me the weather in New York?
Bot : {"temperature":"82°F (28°C)","conditions":"Mostly sunny","wind":"5 mph (8 km/h)","humidity":"60%"}

// - User defined Processing 【Bot will reply what you set with dynamic value extracted from response 】
// we set text:
// Sure! I can provide you with the weather information for New York. Here is the current weather forecast for New York: temperature:82°F (28°C) 、wind:5 mph (8 km/h) 、conditions:Mostly sunny and humidity:60%
// at "Returning message if the call is completed successfully"】

User: Hi, can you please tell me the weather in New York?
Bot : Sure! I can provide you with the weather information for New York.
      Here is the current weather forecast for New York:    temperature:82°F (28°C) 、wind:5 mph (8 km/h) 、conditions:Mostly sunny and humidity:60%
```

How to extract value in Custom Display？

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
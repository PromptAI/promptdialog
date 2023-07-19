---
layout: en
title: Concept of webhook
parent: Webhook
nav_order: 1
---

# Webhook
{: .no_toc .header }

## Why Webhook?
In actual scenarios, the following problems may be encountered:
- How to query information in real time? For example, a user asks about the weather
- How is the information collected through the form used?
- ...

In PromptAI, we can use Webhook to complete tasks.

### Example: Query realtime weather
In PromptAI, you can complete the weather query task by creating Flow and Webhook

Steps:
- Create a flow for weather queries
- Create a Webhook to call the weather API

Create a flow for weather queries
![5-webhook](/assets/images/tutorial/webhook/webhook5.png)

Create a Webhook to call the weather API
![4-webhook](/assets/images/tutorial/webhook/webhook4.png)

Chat with bot
```text
User: Hi, can you please tell me the weather in New York?

Assistant: Sure! Let me check the current weather conditions for you. Just a moment, please.


Assistant: The current weather in New York is 82°F (28°C) with mostly sunny conditions. The wind is blowing at a speed of 5 mph (8 km/h), and the humidity is around 60%. Is there anything else you would like to know?

User: Thank you for the forecast! That's helpful.

Assistant: You're welcome! I'm glad I could assist you. If you have any more questions or need further information, feel free to ask.
```

More example [click here](/docs/webhook/02-webhook/)


## How do I create a webhook in PromptAI?

Through webhook, we can interact with external interfaces (APIs) in specific steps.
Submit the collected input information to the API through webhook and display the Api processing results according to the customized rules.
![50-webhook](/assets/images/tutorial/webhook/webhook1.png)
![50-webhook](/assets/images/tutorial/webhook/webhook2.png)

1. name
   <br/>When creating a new webhook, we can give each one a name related to the webhook function, which is easy to distinguish when referring to a flow
2. URL
   <br/>The url here has the same meaning as the http url mentioned above, which can be understood with reference to the above. Please pay attention to the 'http/https' protocol when filling in here.
   In addition, the URL address also supports variable transmission. When calling the hit webhook, the corresponding variable placeholder will be replaced with the variable value.
   As shown in the figure, if we define a variable `city` in the flow diagram, we need to use `{city}` to transfer when configuring here   ```
   app.promptai.us/rpc/gaode/weather?key=c4f69dbbd66cfc7f4e49310fea69dff1&city={city}
   ```
3. Request Settings - Request Method
   <br/>The request method represents the http request method, which currently supports: get、post、put、delete
4. Request Settings - Request Header
   <br/>The request header represents the http request header, which can be added here when the external interface needs a specific request header
5. Request Settings - Data Format
   <br/>The data format represents the data format of the request body.。
   - None:Indicates that the request body has no
   - Form Data Format:application/x-www-form-urlencoded，
   - JSON Data Format:application/json，
   - Text Data Format:text/plain
6. Response Settings - Response Processing
   - Ignore Response: It means that the data returned by the interface will not be processed after the interface is requested
   - Ignore the status code: Ignore the http status code returned by the interface
   - Original response: directly display the content returned by the interface without any processing
   - User defined Processing: User defined variables to extract, splice and assemble the returned data.
7. Response Settings - Parse Response
   <br/>After the user-defined processing is selected, the data returned by the interface can be parsed by defining variables
   For example, the data format returned here is as follows
   ```json
   {
     "lives": [
       {
         "province": "any",
         "city": "any",
         "adcode": "51010xx",
         "weather": "any",
         "temperature": "19"
       }
     ],
     "info": "OK"
   }
   ```
   We can define two variables through the following diagram: `weather`、`temperature` to extract and query the temperature and weather of the city.
   ![52-webhook](/assets/images/tutorial/webhook/webhook2.png)
8. Response Settings - Response Success
   <br/>When the response is successful, we can extract the response data, or we can not process it or display it according to the original response content. The previously extracted variables are also supported here, as shown in the figure:
   <br/>![52-webhook](/assets/images/tutorial/webhook/webhook3.png)

9. Response Settings - Response Failed
   <br/>The reply content after the response fails

## Slots

As in the "weather query" example above, you need to pass "area" into the request, extract "weather" and "temperature" from the response and output them.
The support of variables allows webhooks to have more room for imagination. You can use the "variables" provided in the dialog, or generate "slots" from the webhook.
### Use slots
When using slots, refer to slots through "{}", where slots can be used in webhook:

- URL
- Data format-Form data
- Data format-JSON
- Response Handle-When Success

The above places in the webhook can refer to slots that already exist in the conversation.

### Generate Slots
After the webhook request, new slots can be extracted from the response into the dialog:

- Response Handle-When Success

This part mainly extracts slots from the returned JSON

### FAQs
1、When referencing a slot, what happens if the variable doesn't exist or if the variable is misspelled?

Take the URL as an example：`http://localhost/api?area={area}&date={date}`
- If area=Ningbo, date=2023-05-01, when successfully rendered, the actual requested url::
  `http://localhost/api?area=Ningbo&date=2023-05-01`
- If any variable does not exist or is misspelled, it will not be rendered, assuming that the area does not exist at this time, the actual requested url:
  `http://localhost/api?area={area}&date={date}`

2、Can variables extracted in "Response Handling - Custom Handling" have the same name as slot existing in the dialog?

The name can be repeated, and the changed value will become the extracted value.

3、How does the extracted slot value change when the same webhook is called multiple times?

The extracted slot will be the value extracted after the last call to the webhook, that is, the value of the slot can change.

4、Can the slots generated by webhook extraction be used together with "reset variable value" and "reply condition"?

If you want to use "reset variable value" and "reply condition", you need to define the slot in the project in advance.
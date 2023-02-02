---
layout: en
title: Examples of webhook 
parent: Developer's guide
nav_order: 10
---

# Webhook
{: .no_toc .header }
---
Through webhook, we can interact with external interfaces (APIs) in specific steps. Submit the collected input information to the API through webhook and display the Api processing results according to the customized rules.

Through the following examples, you can quickly understand the use of webhook.

- Get weather information through get request
- Submit information through post request


## Get weather information through get request

1. Here we have prepared the interface for querying weather:

   url:https://app.promptai.cnF/rpc/gaode/weather?key=c4f69dbbd66cfc7f4e49310fea69dff1&city=xxxx  

   Request header:Authorization=9f480349b1474c8a9f0d48c80e8e9ca8

   Request parameters:key=c4f69dbbd66cfc7f4e49310fea69dff1,city=any city

2. The following figure shows the weather information of Chengdu obtained through Postman：
   ![01-webhook](/assets/images/tutorial/webhook/01-webhook.png)

3. Create a webhook as shown below, and submit it for saving after creation
   ![02-webhook](/assets/images/tutorial/webhook/02-webhook.png)
   ![03-webhook](/assets/images/tutorial/webhook/03-webhook.png)
   attention：the variable city is used in the URL and is enclosed in {}, representing that the city is a variable in the conversation flow graph
4. Follow these steps to create a conversation flow diagram
   - Create Conversation Flow Graph
   ![04-webhook](/assets/images/tutorial/webhook/04-webhook.png)
   - Create user node
   ![05-webhook](/assets/images/tutorial/webhook/05-webhook.png)
     attention：The variable `city` here must be the same as the variable name referenced by {} in the URL in webhook

   - Create bot node
   ![06-webhook](/assets/images/tutorial/webhook/06-webhook.png)

5. Create Complete and Train
   ![07-webhook](/assets/images/tutorial/webhook/07-webhook.png)
6. After the training, start to verify whether the webhook is effective. It can be seen from the figure that variables can be correctly extracted and weather information can be obtained through webhook
   ![08-webhook](/assets/images/tutorial/webhook/08-webhook.png)


## Submit information through post request
1. Here we have prepared a post interface, which will reassemble the request body and request parameters and return them

   url:https://www.fastmock.site/mock/e7ed910a1b72aa375762495523e5f325/webhook/api/facke?address=some address  
   
   request header：none  

   request body：
   ``` json
      {
         "name":"goobai",
         "age":12
      }
   ```
2. The following figure shows the information returned through the postman：
   ![10-webhook](/assets/images/tutorial/webhook/10-webhook.png)
3. Create a webhook as shown below, and submit it for saving after creation
   
   ![11-webhook](/assets/images/tutorial/webhook/11-webhook.png)
   ![12-webhook](/assets/images/tutorial/webhook/12-webhook.png)
   attention：Here, the URL uses the variable `address`, and the body uses the variables `name` and `age`, all of which need to be enclosed in {}
4. Follow these steps to create a conversation flow diagram
   - Create conversation flow
   ![20-webhook](/assets/images/tutorial/webhook/20-webhook.png)

   - Create bot node
   ![21-webhook](/assets/images/tutorial/webhook/21-webhook.png)

   - Create the user node and extract the variable `address`
   ![22-webhook](/assets/images/tutorial/webhook/22-webhook.png)
   ![23-webhook](/assets/images/tutorial/webhook/23-webhook.png)
   - Create bot node
   ![24-webhook](/assets/images/tutorial/webhook/24-webhook.png)

   - Create the user node and extract the variable `name`
   ![25-webhook](/assets/images/tutorial/webhook/25-webhook.png)
   ![26-webhook](/assets/images/tutorial/webhook/26-webhook.png)
   - Create bot node
   ![27-webhook](/assets/images/tutorial/webhook/27-webhook.png)

   - Create the user node and extract the variable `age`
   ![28-webhook](/assets/images/tutorial/webhook/28-webhook.png)
   ![29-webhook](/assets/images/tutorial/webhook/29-webhook.png)
   - Create bot node and select the webhook of collection age, name and address
   ![30-webhook](/assets/images/tutorial/webhook/30-webhook.png)
5. Create Complete and Train
   ![31-webhook](/assets/images/tutorial/webhook/31-webhook.png)
   ![32-webhook](/assets/images/tutorial/webhook/32-webhook.png)
6. After the training, start to verify whether the webhook is effective. It can be seen from the figure that variables can be correctly extracted and webhook can be successfully called
   Correctly extract the returned information from the interface.
   ![33-webhook](/assets/images/tutorial/webhook/33-webhook.png)



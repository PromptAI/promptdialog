---
layout: en
title: Fallback
nav_order: 10
parent: Developer's Guide
---

## What is Fallback?

Fallback PromptDialog refers to a backup plan used when the system encounters inputs it cannot understand or process. It helps the system deal with the following situations:

- When users ask unrelated questions (Dialog flows & Faq not include the input), the system responds with something like "I don't know."
- If the user's input is unclear or ambiguous, the system asks for more specific information.
- When the system is uncertain about a response, it may indicate its uncertainty.
- In the case of technical issues or errors, the system explains the problem to the user and may offer solutions.

## PromptAI supports Fallback mode
In PrompttAI, three methods are supported as shown in the figure below
- webhook
- action
- talk2bits

![fallback-mode](/assets/images/tutorial/fallback-mode.jpg)

## Fallback with webhook
PromDialog also support to hand over the default reply to a third-party API for processing

- See [Webhook-Fallback](docs/webhook/03-webhook/)

## Fallback with action
Action fallback

## Fallback with Talk2Bits
PrompDialog supports one-click access to Talk2bits to process default replies, making the conversation experience more streamlined
- [Knowledge of Talk2bits](/docs/knowledge_base/)

For some texts, documents and Web materials, you can build a knowledge base through Talk2Bits quick reading, and you can complement each other with PromptAI by connecting to a platform like Talk2Bits.
This article will explain how to integrate Talk2Bits into the Fallback.

* Tips: Other platforms can be accessed through Webhook, please contact us if you have any questions or requests.

### Talk2Bits

Talk2Bits can automatically generate configuration codes after adding content, not only importing the web page to generate Chatbot directly in the lower right corner, but also enabling direct conversations by scanning codes with mobile phones.
![01-default-reply.jpg](/assets/images/default_reply/01-default-reply.jpg)

* For more details, please visit: https://talk2bits.com/
* Chatbot introduction: https://talk2bits.com/app/publish

### Example

Next, we will demonstrate how to connect the Fallback to Talk2Bits.

### Talk2Bits Code

After logging in to Talk2Bits, click "Chatbot" to open the code pop-up window, then click the "Copy" button or copy manually to get the imported code.![02-default-reply.jpg](/assets/images/default_reply/02-default-reply.jpg)


### Config Fallback with Talk2bits

In the project "Overview" - "Fallback" switch to "Talk2Bits" and paste the code obtained in the previous step, and finally click Save.
![03-default-reply.jpg](/assets/images/default_reply/03-default-reply.jpg)

### Test

Respond to user input via Talk2Bits.
![04-default-reply.jpg](/assets/images/tutorial/fallback_talk2bits_result.jpg)

## Fallback with Default
When the above three methods fail, we will use the default method to handle the fallback, which is the text filled in in the figure below.
![fallback-text](/assets/images/tutorial/fallback-text.jpg)
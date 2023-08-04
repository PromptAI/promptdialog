---
layout: en
title: Webhook-Fallback
parent: Webhook
nav_order: 3
---

# Webhook
{: .no_toc .header }
When a user's intention is not recognized, webhook provides another way for Fallback, which, for example, can call the API of a large language model to return an answer.

## Webhook
Webhook supports obtaining the latest user input and dialog id through slots.

- latest_message: User input when webhook is triggered. If it is a webhook triggered by Fallback, it is the user input when the fallback is triggered
- send_id: current session id

### Example
Next, we will demonstrate how to connect Fallback to a webhook.  The webhook needs to call an external API to get a response. Suppose we have an API like the following:

```shell
curl http://localhost/chat?input=What can PromptAI do?&chatId=xxxx

{
	"message": "PromptAI is a cloud-based platform for designing professional intelligent assistants. It offers a range of features, including visual design tools, fast customization, and convenient integration. PromptAI can be used to create complex conversation flows and integrate them into business systems."
}
```

The question and session ID are used as input through the Http Get request, and the response returns data in JSON format, where the message field is the reply.
### Webhook configuration

![03-1-webhook.png](/assets/images/webhook_fallback.jpg)

First, we configure the name and request address, and use the built-in slots `{latest_message}` and `{send_id}` in the request address to send the user input and session id to the API according to the API requirements.  After receiving the returned message, we put `message` to `relpy` in the response processing part, and send `{reply}` to the user. 

### Configure Fallback with Webhook

Select "Overview" on the left navigation pane and then click "Fallback" in the diagram. 

![03-3-webhook.jpg](/assets/images/webhook_falllbak_use.jpg)
---
layout: en
title: Webhook-Fallback
parent: Developer's Guide
nav_order: 10
---

# Webhook
{: .no_toc .header }
To make the behavior more controllable when the user's intention is not matched, we have added the function of Fallback to configure Webhook, which can not only connect to the user's own system, but also call the large model to return a more intelligent answer.

## Webhook

Webhook supports obtaining the latest user input and dialog id through variables.

- latest_message: User input when webhook is triggered. If it is a Webhook triggered by Fallback, it is user input when Fallback is triggered.
- send_id: current session id

### Example

Next, we will demonstrate how to connect Fallback to Webhook

### API

Webhooks need to call an external API to get replies. Suppose we have such an API:

```shell
curl http://localhost/chat?input=What can PromptAI do?&chatId=xxx

{
	"message": "PromptAI is a cloud-based platform for designing professional intelligent conversation services. It offers a range of features, including visual design tools, fast customization, and convenient integration. PromptAI can be used to create complex conversation flows and integrate them into business systems."
}
```

The question and session ID are used as input through the Http Get request, and the response returns data in JSON format, where the message field is the reply.
### Webhook configuration

![03-1-webhook.png](/assets/images/tutorial/webhook/03-1-webhook.jpg)

First, we configure the name and request address, and use the built-in variables `{latest_message}` and `{send_id}` in the request address to pass the Fallback user input and dialog id to the API according to the API requirements.
Finally, extract `message` to `relpy` in the response processing part, and output `{reply}` when the response is successful

### Config Fallback with Webhook

Switch to the configured Fallback webhook in the project's "Dialogue Overview" - "Fallback":

![03-3-webhook.jpg](/assets/images/tutorial/webhook/03-3-webhook.jpg)

### Test

Respond to user input via a webhook.
![03-4-webhook.jpg](/assets/images/tutorial/webhook/03-4-webhook.jpg)

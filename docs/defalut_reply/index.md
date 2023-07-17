---
layout: en
title: Fallback
nav_order: 5
has_children: false
show: false
---

# Fallback
{: .no_toc .header }

----
Default reply, the answer given when there is no match for the user's input.

---

## Fallback with Talk2Bits

For some texts, documents and Web materials, you can build a knowledge base through Talk2Bits quick reading, and you can complement each other with PromptAI by connecting to a platform like Talk2Bits.
This article will explain how to integrate Talk2Bits into the Fallback.

* Tips: Other platforms can be accessed through Webhook, please contact us if you have any questions or requests.

### Talk2Bits

Talk2Bits can automatically generate configuration codes after adding content, not only importing the web page to generate Chatbot directly in the lower right corner, but also enabling direct conversations by scanning codes with mobile phones.
![01-defalut-reply.jpg](/assets/images/default_reply/01-default-reply.jpg)

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
![04-default-reply.jpg](/assets/images/default_reply/04-default-reply.jpg)

---
layout: en
title: Knowledge Base
nav_order: 3
---
There are two kinds of knowledge bases in PromptDialog: [FAQ](https://doc.promptai.us/docs/tutorial/faq/) and Unstructured Content storted in text, word, pdf, html, etc.. For FAQ, please refer to our tutorial of [FAQ](https://doc.promptai.us/docs/tutorial/faq/). For unstructured content, PromptDialog integrates the service provided by [talk2bits.com](talk2bits.com) where a user can upload their documents, get them indexed, and get an API to query these documents via OpenAI/GPT. 
## Talk2Bits
A screenshot of Talk2bits where a user is uploading a document.

![01-index.png](/assets/images/knowledge_base/01-index.png)

A screenshot of Talk2bits where it answers a user question in its own interface.

![02-index.png](/assets/images/knowledge_base/02-index.png)

Talk2bits generates a link that can be put into PromptDialog.

![03-index.png](/assets/images/knowledge_base/03-index.png)

Paste the link into the Fallback setting so that a user question can be handled as a last resort. 

![04-index.png](/assets/images/knowledge_base.jpg)

Now the bot can use this link to answer the same question.

![05-index.png](/assets/images/knowledge_base/05-index.png)

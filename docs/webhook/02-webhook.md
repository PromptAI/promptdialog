---
layout: en
title: Examples of webhook 
parent: Webhook
nav_order: 2
---

# Webhook
{: .no_toc .header }
Through webhook, We can communicate with other systems:
- submit information to other system
- get information from other system
- exchange information from other system

Examples:

- Create business orders:
- Handle fallback via LLM
- ...

Welcome to explore Webhook-based usage scenarios and share with us.

## Create business orders
Suppose a customer places an order for three apples at a fruit store, and the user's order information is synchronized to the order system. Here we focus on how to synchronize information to the order system.


API of place fruit order:
```text
URL           : https://fruits.shop/api/place/order
Request Method: Post
Request Body  : {"type":"fruit type", "count": 3}

Response      : {"status":200, "message":"An order has been successfully placed for you"}
```

Conversation:
```text
Bot  : Welcome, what can I do for you?
// type : apple
User : I want to buy some apples
Bot  : How many do you need?
// count : three
User : three
Bot  : OK, please confirm your order: 3 apples
User : yes
// comes from response
Bot  : An order has been successfully placed for you
```
after order confirmed, we will call a webhook to place the order.

## Webhook Settings:
![webhook7.png](/assets/images/webhook_fruit_1.jpg)
![webhook7.png](/assets/images/webhook_fruit_2.jpg)

## Handle fallback via LLM

See [Fallback with Talk2Bits](/docs/default_reply)
---
layout: en
title: Examples of webhook 
parent: Webhook
nav_order: 2
---

# Webhook
{: .no_toc .header }
Through webhook, We can communicate with third-party systems via API call:
- submit information,
- receive information,
- update information.

There are many applications. 

### Create business orders
Suppose a customer places an order for three apples at a fruit store (we like apples.:)), and the user's order information shall be submitted to the order system

API of place fruit order:
```text
API call URL           : https://fruits.shop/api/place/order
Request Method: Post
Request Body  : {"type":"fruit type", "count": 3}

Response      : {"status":200, "message":"An order has been successfully placed for you"}
```

Conversation:
```text
bot  : Welcome, what can I do for you?
user : I want to buy some apples
bot  : How many do you need
user : three
bot  : OK, please confirm your order: 3 apples
user : yes
// API call via webhook and a transaction confirmation is received
bot  : An order has been successfully placed for you
```
after the order information is confirmed by the user, we call a webhook to place the order.

### Webhook Settings:
![webhook_fruit.jpg](/assets/images/webhook_fruit.jpg)

### Handle fallback via Webhook
Webhook can also be used to handle fallback.  See [Fallback](/docs/webhook/03-webhook).

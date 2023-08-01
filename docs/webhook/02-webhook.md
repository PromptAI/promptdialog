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

### Webhook Settings:
![webhook7.png](/assets/images/webhook_fruit_1.jpg)
![webhook7.png](/assets/images/webhook_fruit_2.jpg)

### Handle fallback via Webhook
Webhook can also be used to handle fallback.  See [Fallback](/tutorial/fallback/).

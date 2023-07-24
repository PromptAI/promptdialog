---
layout: en
title: Bot Reply Conditions
parent: Advance Control
nav_order: 2
---

# Reply Conditions
{: .no_toc .header }
Before the bot reply, The content of the bot reply can be determined by whether the slot saved in the context has a value

## Query weather 
![01-reply-condition.png](/assets/images/tutorial/reply_condition/01-reply-condition.png)

There are two parallel bot replies following User Utterance:
- Reply to weather results
- Ask user for City

At the User Utterance may not extract 'area':
- Hi, can you please tell me the weather?
- Will it rain soon?

![02-reply-condition.png](/assets/images/tutorial/reply_condition/02-reply-condition.png)

Asking in a similar fashion, you need to ask the user where:
- Please tell me your city?

In this case, we can extract 'city' to determine what the bot answers. At this point we can use `Reply Conditions` to control.

## Set Reply Conditions for Bot Reply

The area extracted:
- Double-click the Bot Reply to check the weather
- Click `Reply Conditions`
- Select `Slot Name` with `area`
- Enter `Not Null` to `Conditional value`

This means that the Bot will be executed when `area` has a value
![03-reply-condition.png](/assets/images/tutorial/reply_condition/03-reply-condition.png)

The `city` is not extracted, ask the city to be queried:
- Double click to ask Bot Reply for a city
- Click `Reply Conditions`
- Select `Slot Name` with `area`

This Bot will be executed when there is no value for `area`
![04-reply-condition.png](/assets/images/tutorial/reply_condition/04-reply-condition.png)

## Summarize
1. The bot that can be executed can be determined according to the slot value.
2. One Bot Reply can set multiple Slots.
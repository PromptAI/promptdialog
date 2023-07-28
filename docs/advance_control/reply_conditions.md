---
layout: en
title: Bot Reply Conditions
parent: Advanced Control
nav_order: 2
---
# Reply Conditions
{: .no_toc .header }
Before the bot replies, the content of the reply can be determined by whether the slot has a value or not. You can use this mechanism to implement the  basic logic of if-then-else. 

## Query weather 
Depending on the user utterance, there are two possible replies:
- Reply with the weather information or
- Ask the user for the location
  
![01-reply-condition.png](/assets/images/tutorial/reply_condition/01-reply-condition.png)

If the user utterance doesn't contain the location inforamtion (At this point we can use `Reply Conditions` to detect), the bot needs to ask the user:
- Please tell me your city?
- 
![02-reply-condition.png](/assets/images/tutorial/reply_condition/02-reply-condition.png)

In this case, we can extract 'city' to determine the location.  

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

---
layout: default
title: Bot Reply Conditions
parent: Advanced Control
nav_order: 1
---
# Reply Conditions
{: .no_toc .header }
Before the bot replies, the content of the reply can be determined by whether the slot has a value or not. You can use this mechanism to implement the  basic logic of if-then-else. 

## Query weather 
Depending on the user utterance, there are two possible replies:
- Reply with the weather information or
- Ask the user for the location
  
![reply-conditions-01.png](/assets/images/advanced_control/reply_condition/reply-conditions-01.png)

If the user utterance doesn't contain the location information (At this point we can use `Reply Conditions` to detect), the bot needs to ask the user:
- I'm having trouble understanding the location you mentioned. Can you give me the name of the city or area one more time?

![reply-conditions-02.png](/assets/images/advanced_control/reply_condition/reply-conditions-02.png)

In this case, we can extract 'city' to determine the location.  

## Set Reply Conditions
- Click `Reply Conditions`
- Select `Slot Name` with `city`
- Enter `Not Null` to `Conditional value`

This means that the bot will reply when `city` has a value
![reply-conditions-03.png](/assets/images/advanced_control/reply_condition/reply-conditions-03.png)

You can set the condition of asking for the location:
- Click `Reply Conditions`
- Select `Slot Name` with `city`
- Enter `Null` to `Conditional value`

This reply will be delivered when there is no value for `city`.

![reply-conditions-04.png](/assets/images/advanced_control/reply_condition/reply-conditions-04.png)
## Tips
The slot value can be used to guide the dialog flow to different branches. 

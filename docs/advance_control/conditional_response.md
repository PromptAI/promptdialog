---
layout: en
title: Conditional Responses
parent: Advanced Control
nav_order: 4
spliter: true
---
Let's create a chatbot of a fruit nutrition expert, which can give the daily intake of common fruits:
```text
Chatbot: Welcome to the Fruit Nutrition Expert! I can help you learn about the daily intake recommendations for various common fruits. Please tell me which fruit you'd like to know about.
User: Apple
Chatbot: Great! For adults, consuming 1-2 apples per day is a good choice. Apples are rich in dietary fiber, vitamins, and minerals, which can help maintain a healthy digestive system and immune function.
User: Banana
Chatbot: For adults, consuming 1-2 bananas per day is moderate. Bananas are an excellent source of energy and are rich in potassium, vitamin B6, and dietary fiber, which can help maintain normal heart and muscle function.
...
```
<!---
User: Grapes

Chatbot: Adults can consume a small bunch of grapes, about 10-15 grapes per day. Grapes contain abundant antioxidants and vitamin C, which can help protect cells from oxidative damage.

User: Watermelon

Chatbot: Watermelon is a refreshing fruit for the summer! Consuming a small slice of watermelon (about 200 grams) per day is a good choice. It has a high water content, helping to maintain body hydration, and is also rich in vitamins A and C.
--->
This task requires us to respond differently according to the type of fruits. 

## Example
Create a dialog flow, get the fruit input by the user and put it in `fruit_type`, and give suggestions based on `fruit_type`.

![condition_response_overview.jpg](/assets/images/condition_response_overview.jpg)

Double-click "Please try another fruit!" 
- If there is no match to the fruit type, the bot will reply:'Please try another fruit!'

Click 'Conditonal Response Variantions' enter the editing pane.

![condition_response_bot.jpg](/assets/images/condition_response_bot.jpg)

Select the slot to be matched, here we enter `fruit_type`.

![img_3.png](/assets/images/tutorial/conditional_response/03-slot-reply-list.png)

Click `Add a new line`. 

![img_1.png](/assets/images/tutorial/conditional_response/04-slot-reply-list.png)

Add a slot value.

![img_2.png](/assets/images/tutorial/conditional_response/05-slot-reply-list.png)

Enter the slot value that needs to be matched, here is `apple`. `Reply` is the response the bot will send. 

![img.png](/assets/images/tutorial/conditional_response/06-slot-reply-list.png)

Add bot replies.

![img_4.png](/assets/images/tutorial/conditional_response/07-slot-reply-list.png)

## Chat

![img.png](/assets/images/tutorial/conditional_response/08-slot-reply-list.png)

---
layout: default
title: Conditional Responses
parent: Advanced Control
nav_order: 3
---
Let's create a chatbot of IT Helpdesk, which can give the reason for the error codes.
```text
Bot : Hello! Welcome to help center.
      What can i do for you?
User: I get a error code 1001
Bot : 1001 means your user name or password is wrong. Please check your username and password.
User: 1011
Chatbot: 1011 means system is busy, please try again later.
...
```

This task requires us to respond differently according to the error code. 

## Example
Expand the IT Helpdesk bot, get the error input by the user and put it in `error_code`, and give suggestions based on `error_code`.

![condition-response-01.png](/assets/images/advanced_control/condition_response/condition-response-01.png)

Click "Please contact our service h..." and then edit node:
- If there is no match to the error code, the bot will reply:'Please contact our service hotline xxx-xxx'

Click 'Conditional Response' enter the editing pane.

![condition-response-02.png](/assets/images/advanced_control/condition_response/condition-response-02.png)

Select the slot to be matched, here we enter `error_code`.

![condition-response-03.png](/assets/images/advanced_control/condition_response/condition-response-03.png)

Click `Add a new line`. 

![condition-response-04.png](/assets/images/advanced_control/condition_response/condition-response-04.png)

Enter the slot value that needs to be matched, here is `1011`. `Reply` is the response the bot will send.
![condition-response-05.png](/assets/images/advanced_control/condition_response/condition-response-05.png)

Click 'Ok' to save
![condition-response-06.png](/assets/images/advanced_control/condition_response/condition-response-06.png)

## Chat
![condition-response-07.png](/assets/images/advanced_control/condition_response/condition-response-07.png)

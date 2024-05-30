---
layout: en
title: Dialog Flow
parent: Developer's Guide
nav_order: 5
---

## Create a dialog flow
Click `Flows` in the left navigation pane to add a new dialog flow.  Enter the flow name and description in the pop-up dialog box.

![flow-01.png](/assets/images/tutorial/flow/flow-01.png)

## A GPT node
The fastest way to create a conversational bot is providing a GPT script, e.g.,

[GPT Flow](/docs/tutorial/gpt_flow)

## A bot node
Click and select `Add Bot Node` or `Edit Node` from the pop-up menu. 

![flow-02.png](/assets/images/tutorial/flow/flow-02.png)


The followings are a few options you can make for bot reply. 

| Name                          | Usage            |
|-------------------------------|-------------------|
| Bot Reply                     | What the bot will say|
| Select from responses         | Select a response from [response template](/docs/tutorial/template_bot/)     |
| Save to responses             | Save the response as [response template](/docs/tutorial/template_bot/)|
| Bot Reply Type                    | Five different kinds of replies the bot can make. Please choose one.  |
| Before the bot replies        | The [reply condition](/docs/advance_control/reply_conditions/) that needs to be met before the bot replies.         |
| After the user message arrives| If needed, [reset slot value](/docs/advance_control/reset_slot/)               |
| Conditional Response          | Give different responses according to [conditions](/docs/advance_control/conditional_response/)     |

### There are five different kinds of replies a bot can make:

- Text       : Send a text message to the user
- Image      : Send a text message with images
- Attachment : Append an attachment 
- Webhook    : Call a webhook 
- Action     : Run an action Python code

<mark>Note</mark> that you can use the "{}" curly brace syntax in text replies to utilize Slot values existing in the system.

### Multiple bot responses
We can add multiple lines of texts to the bot response node or add another bot response node after the current one. 

![flow-03.png](/assets/images/tutorial/flow/flow-03.png)

Another bot response node can be added after the current one.
![flow-04.png](/assets/images/tutorial/flow/flow-04.png)

## A user node
After creating a bot, it will display the flow window. Click the node of bot and here we click `Add User Node`.
![flow-05.png](/assets/images/tutorial/flow/flow-05.png)

### Edit a user node
Click the user utterance; the editing pane will pop up on the right. It is expected that multiple utterances are needed so that the user intent can be classified correctly.
![flow-06.png](/assets/images/tutorial/flow/flow-06.png)

The followings are a few options you can make for user utterance. 

| Name                           | Usage            |
|--------------------------------|-------------------|
| Expect User Utterance          | The expected user utterance in this node     |
| Select from intent list        | Select from an [intent template](/docs/tutorial/template_user/)   |
| Save to intent list            | Save the current intent as an [intent template](/docs/tutorial/template_user/)    |
| Are slots expected?            | Are we going to extract a slot value(s) from the user utterance?   |
| Description                    | Some comments about this intent (optional)|
| After the user message arrives | If needed, [reset slot value](/docs/advance_control/reset_slot/) based on the user utterance   |

## Complete a dialog flow
The dialogue effect is shown below where the file will be displayed in conversation.
![flow-07.png](/assets/images/tutorial/flow/flow-07.png)

## Run the dialog flow
You can click `Debug Run` to test your dialog flow.
![flow-08.png](/assets/images/tutorial/flow/flow-08.png)

---
layout: default
title: Flow Agent
parent: Developer's Guide
nav_order: 5
has_children: true
---

## Create a Flow Agent
Click `Add Agent` in the left navigation pane to add a new Flow Agent.  Enter the flow name and description in the pop-up dialog box.

![create_agent.png](create_agent.png)

## A bot node
Click and select `Add Bot Node` or `Edit Node` from the pop-up menu. 

![bot.png](bot.png)

The followings are a few options you can make for bot reply. 

| Name                          | Usage                                                                                                       |
|-------------------------------|-------------------------------------------------------------------------------------------------------------|
| Bot Reply                     | What the bot will say                                                                                       |
| Bot Reply Type                | Two different kinds of replies the bot can make. Please choose one.                                         |
| Before the bot replies        | The [reply condition](/docs/tutorial/flow_agent/reply_conditions/) that needs to be met before the bot replies. |
| After the user message arrives| If needed, [reset slot value](/docs/tutorial/flow_agent/reset_slot/)                                            |

### There are twp different kinds of replies a bot can make:

- Text       : Send a text message to the user
- Webhook    : Call a webhook 

<mark>Note</mark> that you can use the `${}` curly brace syntax in text replies to utilize Slot values existing in the system.

### Multiple bot responses
We can add multiple lines of texts to the bot response node or add another bot response node after the current one. 

![multi-bot-response.png](multi-bot-response.png)

Another bot response node can be added after the current one.
![multi-bot-response-2.png](multi-bot-response-2.png)

## A user node
After creating a bot, it will display the flow window. Click the node of bot and here we click `Add User Node`.
![create_user.png](create_user.png)

### Edit a user node
Click the user utterance; the editing pane will pop up on the right. It is expected that multiple utterances are needed so that the user intent can be classified correctly.
![view_user.png](view_user.png)

The followings are a few options you can make for user utterance. 

| Name                           | Usage            |
|--------------------------------|-------------------|
| Expect User Utterance          | The expected user utterance in this node     |
| Are slots expected?            | Are we going to extract a slot value(s) from the user utterance?   |
| Description                    | Some comments about this intent (optional)|
| After the user message arrives | If needed, [reset slot value](/docs/tutorial/flow_agent/reset_slot/) based on the user utterance   |

## A GPT node
The fastest way to create a conversational bot is providing a GPT script, e.g.,

[GPT Flow](/docs/tutorial/llm_agent)

## Complete a Flow Agent
The dialogue effect is shown below where the file will be displayed in conversation.
![hole_agent_view.png](hole_agent_view.png)

## Run the Flow Agent
You can click `Debug Run` to test your Flow Agent.
![debug.png](debug.png)


---
layout: en
title: Dialog Flow
parent: Developer's Guide
nav_order: 4
---

## Create a dialog flow
Click `Flows` in the left navigation pane to add a dialog new flow.  Enter the flow name and description in the pop-up dialog box.

![flow_create.jpg](/assets/images/tutorial/flow_create.jpg)

## Add a user utterance node
After creating a new dialog flow, it will display the flow window. Click the root node of the flow and here we click `Add User Node`.

![flow_add_user_node.jpg](/assets/images/tutorial/flow_add_user_node.jpg)

## Edit a user utterance node
Click the user utterance; the editing pane will pop up on the right. It is expected that multiple utterances are needed so that the user intent can be classified correctly. 

![flow_edit_user_node.jpg](/assets/images/tutorial/flow_edit_user_node.jpg)

The followings are a few options you can make for user utterance. 

| Name                           | Usage            |
|--------------------------------|-------------------|
| Expect User Utterance          | The expected user utterance in this node     |
| Select from intent list        | Select from an [intent template](/docs/tutorial/template_user/)   |
| Save to intent list            | Save the current intent as an [intent template](/docs/tutorial/template_user/)    |
| Are slots expected?            | Are we going to extract a slot value(s) from the user utterance?   |
| Description                    | Some comments about this intent (optional)|
| After the user message arrives | If needed, [reset slot value](/docs/advance_control/reset_slot/) based on the user utterance   |

## Add a bot response node
Continue to the user utterance node and select `Add Bot Node` from the pop-up menu. 

![flow_edit_bot_node.jpg](/assets/images/tutorial/flow_edit_bot_node.jpg)

The followings are a few options you can make for bot reply. 

| Name                          | Usage            |
|-------------------------------|-------------------|
| Bot Reply                     | What the bot will say|
| Select from responses         | Select a response from [response template](/docs/tutorial/template_bot/)     |
| Save to responses             | Save the response as [response template](/docs/tutorial/template_bot/)|
| Bot Reply                     | Five different kinds of replies the bot can make. Please choose one.  |
| Before the bot replies        | The [reply condition](/docs/advance_control/reply_conditions/) that needs to be met before the bot replies.         |
| After the user message arrives| If needed, [reset slot value](/docs/advance_control/reset_slot/)               |
| Conditional Response          | Give different responses according to [conditions](/docs/advance_control/conditional_response/)     |

There are five different kinds of replies a bot can make:

- Text       : Send a text message to the user
- Image      : Send a text message with images
- Attachment : Append an attachment 
- Webhook    : Call a webhook 
- Action     : Run an action Python code

### Multiple responses
We can add multiple lines of texts to the bot response node or add another bot response node after the current one. 

- The bot response node adds multiple text responses, as shown in the figure.
  
  ![flow_edit_bot_node_mutilp.jpg](/assets/images/tutorial/flow_edit_bot_node_mutilp.jpg)

- The implementation method of adding another bot response node after the current one is shown in the figure.
  
  ![flow_edit_bot_node_mutilp2.jpg](/assets/images/tutorial/flow_edit_bot_node_mutilp2.jpg)

<!--
When the machine replies to multiple content, you need to adjust the reply order of each content. You can refer to the following methods
- To adjust the order of multiple texts in the reply node, you can click the icon button, drag it to the desired order, and then release it
![20-bot-text-order.png](/assets/images/tutorial/flow/07-flow.png)
- If you need to adjust the reply order of multiple consecutive machine reply nodes, you only need to use the Recycle Bin function to adjust the order of machine reply nodes

The dialogue effect pictures of the two methods are as follows:
![10-create-multi-bot-replay](/assets/images/tutorial/flow/08-flow.png)
-->

The dialogue effect is shown below where the file will be displayed in conversation. You can directly click the file name to download it:

![flow_dialog_result.jpg](/assets/images/tutorial/flow_dialog_result.jpg)

## Done

So far, a simple dialog flow diagram was completed.

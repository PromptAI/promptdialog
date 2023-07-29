---
layout: en
title: Dialog Flow
parent: Developer's Guide
nav_order: 4
---

## Create a dialog flow
Click `Flows` in the left navigation pane to add a dialog new flow.  Enter the flow name and description in the pop-up dialog box.

![01-create-flow](/assets/images/tutorial/flow/01-flow.png)

## Add a user utterance node
After creating a new dialog flow, it will display the flow window. Click the root node of the flow and here we click `Add User Node`.

![02-create-flow-node](/assets/images/tutorial/flow/02-flow.png)

## Edit a user utterance node
Click the user utterance; the editing pane will pop up on the right. It is expected that multiple utterances are needed so that the user intent can be classified correctly. 

![03-edit-flow-node](/assets/images/tutorial/flow/03-flow.png)

| Name                           | Usage            |
|--------------------------------|-------------------|
| Expect User Utterance          | 用户可能会说的话    |
| Select from intent list        | 从[意图列表](/docs/tutorial/template_user/)中选择    |
| Save to intent list            | 将当前用户输入保存到意图列表[意图列表](/docs/tutorial/template_user/)    |
| Are slots expected?            | 从用户输入中提取slot   |
| Description                    | 备注信息   |
| After the user message arrives | [Click here](/docs/advance_control/reset_slot/)    |

## Add a bot response node
Continue to the user utterance node and select `Add Bot Node` from the pop-up menu. 

![04-edit-flow-bot](/assets/images/tutorial/flow/04-flow.png)


| Name                          | Usage            |
|-------------------------------|-------------------|
| Expect User Utterance         | 用户可能会说的话    |
| Select from responses         | 从[Response Template](/docs/tutorial/template_bot/)中选择      |
| Save to responses             | 将当前机器回复保存到回复列表[意图列表](/docs/tutorial/template_bot/)|
| Bot Reply                     | 支持五种回答                                                    |
| Before the bot replies        | [Click here](/docs/advance_control/reply_conditions/)         |
| After the user message arrives| [Click here](/docs/advance_control/reset_slot/)               |
| Conditional Response          | [Click here](/docs/advance_control/conditional_response/)     |

Bot Replies

- Text       : Utterance a text message
- Image      : Utterance a text message with images
- Attachment : Reply an attachment 
- Webhook    : Call a webhook 
- Action     : Call a rasa action code

### Multiple responses
We can add multiple lines of texts to the bot response node or add another bot response node after the current one. 

- The bot response node adds multiple text responses, as shown in the figure.
  
  ![08-create-multi-bot-replay](/assets/images/tutorial/flow/05-flow.png)

- The implementation method of adding another bot response node after the current one is shown in the figure.
  
  ![09-create-multi-bot-replay](/assets/images/tutorial/flow/06-flow.png)

<!--
When the machine replies to multiple content, you need to adjust the reply order of each content. You can refer to the following methods
- To adjust the order of multiple texts in the reply node, you can click the icon button, drag it to the desired order, and then release it
![20-bot-text-order.png](/assets/images/tutorial/flow/07-flow.png)
- If you need to adjust the reply order of multiple consecutive machine reply nodes, you only need to use the Recycle Bin function to adjust the order of machine reply nodes

The dialogue effect pictures of the two methods are as follows:
![10-create-multi-bot-replay](/assets/images/tutorial/flow/08-flow.png)
-->

### Add an attachment to the bot response
Open the editing interface of the bot response node as shown in the figure, click `Attachment`, and upload the attachment, promptai.png.
![30-bot-extras](/assets/images/tutorial/flow/09-flow.png)

After uploading: 

![31-bot-extras](/assets/images/tutorial/flow/10-flow.png)

The dialogue effect is shown below where the file will be displayed in conversation. You can directly click the file name to download it:

![32-bot-extras](/assets/images/tutorial/flow/11-flow.png)

## Done

So far, a simple dialog flow diagram was completed.

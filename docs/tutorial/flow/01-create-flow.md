---
layout: en
title: Dialog Flow
parent: Developer's Guide
nav_order: 5
---

## Create a conversation flow
Click Flows in the left navigation pane to add a new flow.  Enter the flow name and description in the pop-up dialog box.
![01-create-flow](/assets/images/tutorial/flow/01-flow.png)

## Add a user utterance node
After creating a new dialog flow, it will display the flow window. Click the root node of the flow and select the node type to be added. Here we select the node type as user utterance.

![02-create-flow-node](/assets/images/tutorial/flow/02-flow.png)

## Edit a user utterance node

After selecting the user utterance node, the editing interface will pop up on the right, where we can edit the user's intention. It is expected that multiple utterances are needed so that the user intent can be classified correctly. 

![03-edit-flow-node](/assets/images/tutorial/flow/03-flow.png)

[I believe we need to explain all the items in the edition pane.]

## Add a bot response node

Continue to click the user utterance node and select bot response from the pop-up menu. [no idea what it is] If the user enters a match with the user node in front of this node, this information will be returned to the user.

![04-edit-flow-bot](/assets/images/tutorial/flow/04-flow.png)

[I believe we need to explain all the items in the edition pane.]

### Multiple responses
We can add multiple lines of texts to the bot response node or add another bot response node after the current one. 

- The bot response node adds multiple text replies, as shown in the figure
  ![08-create-multi-bot-replay](/assets/images/tutorial/flow/05-flow.png)

- The implementation method of adding a reply node after the node that needs to reply to multiple contents is shown in the figure
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
Open the editing interface of the bot response node as shown in the figure, click **Attachment**, and upload the attachment.
![30-bot-extras](/assets/images/tutorial/flow/09-flow.png)

After uploading:
![31-bot-extras](/assets/images/tutorial/flow/10-flow.png)

The dialogue effect is shown below. You can directly click **Attachment** to download it:
![32-bot-extras](/assets/images/tutorial/flow/11-flow.png)

## Done

So far, a simple dialog flow diagram is completed.

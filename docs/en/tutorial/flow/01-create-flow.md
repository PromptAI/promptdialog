---
layout: en
title: Create a conversation flow diagram
parent: Developer's guide
nav_order: 5
---

# Conversation flow diagram
{: .no_toc .header }
---

## Create a conversation flow diagram
Click the dialog flow diagram under the dialog overview to add a new one. Enter the node name and description information of the new dialog flow diagram in the pop-up dialog box, and click OK to create a new branch.
![01-create-flow](/assets/images/tutorial/flow/01-create-flow.png)

## Create a dialog flow graph user input node
After creating a new dialog flow diagram, it will automatically jump to the editing home page of the created dialog flow diagram. At this time, click the root node of the dialog flow graph and select the node type to be created from the pop-up dialog box.
Here we select the node type as user input.

![02-create-flow-node](/assets/images/tutorial/flow/02-create-flow-node.png)

## Edit User Input Node

After selecting the user input node to be created, the user input node editing interface will pop up on the right, where we can edit the user's intention. It is expected that user input and more training examples below will be converted into user intent.

![03-edit-flow-node](/assets/images/tutorial/flow/03-edit-flow-node.png)

## Add reply node

Continue to click the user input node and select machine reply from the pop-up box. If the user enters a match with the user node in front of this node, this information will be returned to the user.

![04-edit-flow-bot](/assets/images/tutorial/flow/04-edit-flow-bot.png)

### Reply to multiple contents
When we need to reply to multiple contents, we can add multiple texts to the reply node or continue to add reply nodes after the nodes that need to reply to multiple contents

- The reply node adds multiple text implementations, as shown in the figure
  ![08-create-multi-bot-replay](/assets/images/tutorial/flow/08-create-multi-bot-replay.png)

- The implementation method of adding a reply node after the node that needs to reply to multiple contents is shown in the figure
  ![09-create-multi-bot-replay](/assets/images/tutorial/flow/09-create-multi-bot-replay.png)
When the machine replies to multiple content, you need to adjust the reply order of each content. You can refer to the following methods
- To adjust the order of multiple texts in the reply node, you can click the icon button, drag it to the desired order, and then release it
![20-bot-text-order.png](/assets/images/tutorial/flow/20-bot-text-order.png)
- If you need to adjust the reply order of multiple consecutive machine reply nodes, you only need to use the Recycle Bin function to adjust the order of machine reply nodes

The dialogue effect pictures of the two methods are as follows:
![10-create-multi-bot-replay](/assets/images/tutorial/flow/10-multi-bot-replay.png)

### Reply node to add an attachment
Open the editing interface of the reply node as shown in the figure, click **Attachment**, and upload the attachment according to the prompts.
![30-bot-extras](/assets/images/tutorial/flow/30-bot-extras.png)

After uploading:
![31-bot-extras](/assets/images/tutorial/flow/31-bot-extras.png)

The dialogue effect is shown below. You can directly click **Attachment** to download it:
![32-bot-extras](/assets/images/tutorial/flow/32-bot-extras.png)

## Completed

So far, the simplest conversation flow diagram is complete.
![05-create-flow](/assets/images/tutorial/flow/05-create-flow.png)

---
layout: default
title: Create a complex dialog flow diagram
parent: Developer's guide
nav_order: 6
---

# Create a complex dialog flow diagram
{: .no_toc .header }
---

This tutorial will guide you to create a complex dialog flow diagram, which will contain the following node types:

- User input node without variables
- User input node with variables
- User Options Node
- Webhook node
- Information Collection (Form) Node
- The Form node contains the Break node
- User input node with intention template

## User input node without variables

Create a user input node as shown in. After filling in the relevant information, the switch behind * * Need to extract variables * * remains closed. Click Save in the upper right corner. Users without variables click the node to complete the creation.
![04-create-user](/assets/images/tutorial/flow/complex/04-create-user.png)

## User input node with variables
As shown in the figure, select the user input node, and then edit it as shown in the figure. Turn on the Need to Extract Variables switch, and then select the variable name to extract (if not, click the plus sign under the switch to create)
Select the extracted value of the variable for annotation in the expected user input and more training examples.

![11-create-user-field](/assets/images/tutorial/flow/complex/11-create-user-field.png)

## User Options Node
As shown in the figure, select the Create **User Options** node, fill in the relevant information in the pop-up box, and click Save in the upper right corner to complete the creation of the user options node.

![05-edit-option](/assets/images/tutorial/flow/complex/05-edit-option.png)

## Webhook node
First, click the **Project View** - **Webhooks** on the left to enter the Webhooks management interface, and then click Add on the top right to create a new Webhook.

![12-create-webhook](/assets/images/tutorial/flow/complex/12-create-webhook.png)

Here we take a get interface as an example. The new webhook is shown in the following figure:

![13-create-webhook](/assets/images/tutorial/flow/complex/13-create-webhook.png)
After the webhook is created, we return to the dialog flow graph editing page just now and select the machine reply node under the user input node (if not, create one) to extract the fruit name variable created previously.
Here we need to delete the default reply, create a webhook reply, and click Save

![14-create-webhook](/assets/images/tutorial/flow/complex/14-create-webhook.png)

Dialogue effect picture:

![18-chat-webhook](/assets/images/tutorial/flow/complex/18-chat-webhook.png)

## Information Collection (Form) Node

As shown in the figure, select the Create **Information Collection (From)** node, fill in the relevant information from the pop-up box, and click OK.

![06-create-form](/assets/images/tutorial/flow/complex/06-create-form.png)

Click the information list (Slots), select **Information Collection Item**, and select the variable name to be collected from the pop-up window.

![07-create-form-solts](/assets/images/tutorial/flow/complex/07-create-form-solts.png)

If the variable name in the pop-up window is empty, you can click the Add button on the right to add variables

![08-create-form-solts](/assets/images/tutorial/flow/complex/08-create-form-solts.png)
Edit the **missing query** after the variable extraction node, and continue to add **user input** nodes after completion. At this time, the variable value source is entity extraction, and then labeled as shown in the figure.

![09-create-form-user](/assets/images/tutorial/flow/complex/09-create-form-user.png)

Click **Other User Requests** under **Information Collection (Form)**, and then create and improve
The user enters the node, and then continues to click the created user input node to create the * * Information Collection Interruption * * node, as shown in the figure after creation:

![10-create-form-break](/assets/images/tutorial/flow/complex/10-create-form-break.png)

## User input node with intention template

Select a user node, click **Save to Intent List**, set the template name from the pop-up box, and then save. As shown in the figure:

![15-create-user](/assets/images/tutorial/flow/complex/15-create-user.png)
Select the user node, click Select from Template, select the required template from the pop-up box, and then save. As shown in the figure:

![16-create-user](/assets/images/tutorial/flow/complex/16-create-user.png)

## Finish creating
At this point, a dialog flow diagram containing various types is created, and you can start training. The preview of the whole session branch is shown in the figure:

![17-create-flow](/assets/images/tutorial/flow/complex/17-create-flow.png)

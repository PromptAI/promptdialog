---
layout: en
title: Create answer list
parent: Developer's guide
nav_order: 21
---

# Concept description
{: .no_toc .header }
---
When you have many nodes that need to use the same reply, it is strongly recommended that you use the answer list, which can save you a lot of repeated operation time.
For the concept of answer list, please refer to[Answer List](/docs/appendix/appendix/#回答列表)Concept description

## Create answer list

If it is shown in the figure, click **Item View - Answer List - Add** in order to create a general answer template for extracting answers to the birthday. After filling in the figure, click OK to save,
![11-bot-global](/assets/images/tutorial/template/11-bot-global.png)
## Use in conversation flow diagrams
1. Here we use the flow diagram to create the intention list. Please refer to the [Create Intent List](/docs/tutorial/node-template/bot-global/)tutorial for the creation process:
   ![05-user-global](/assets/images/tutorial/template/05-user-global.png)

2. Select one of the last two nodes of the flow graph, click **to select** from the answer list as shown in the figure, and then select the answer template we just created. Do the same for the other of the last two nodes
   ![12-bot-global](/assets/images/tutorial/template/12-bot-global.png)
   After selection, we can add, delete and modify replies here (the operation will take effect for all reply nodes referencing the template)
   ![13-bot-global](/assets/images/tutorial/template/13-bot-global.png)
   The completed flow diagram is as follows:
   ![14-bot-global](/assets/images/tutorial/template/14-bot-global.png)

3. Training and verification results
   Click **Debug Run - Current Module** in the upper right corner to wait for the training to complete the verification effect
   ![15-bot-global](/assets/images/tutorial/template/15-bot-global.png)
---
layout: en
title: Create Responses
parent: Developer's Guide
nav_order: 21
---

# Concept description
{: .no_toc .header }
---
When you have many nodes that need to use the same reply, it is strongly recommended that you use the responses, which can save you a lot of repeated operation time.
For the concept of responses, please refer to[Responses](/docs/appendix/appendix/#回答列表)Concept description

## Create responses

If it is shown in the figure, click **Item View - Responses - Add** in order to create a general answer template for extracting answers to the birthday. After filling in the figure, click OK to save,
![11-bot-global](/assets/images/tutorial/template/01-bot-global.png)
## Use in conversation flow diagrams
1. Here we use the flow diagram to create the intention list. Please refer to the [Create Bot List](/docs/tutorial/node-template/bot-global/)tutorial for the creation process:
   ![05-user-global](/assets/images/tutorial/template/02-bot-global.png)

2. Select one of the last two nodes of the flow graph, click **to select** from the responses as shown in the figure, and then select the answer template we just created. Do the same for the other of the last two nodes
   ![12-bot-global](/assets/images/tutorial/template/03-bot-global.png)
   ![12-bot-global](/assets/images/tutorial/template/04-bot-global.png)

3. Training and verification results
   Click **Debug Run - Current Module** in the upper right corner to wait for the training to complete the verification effect
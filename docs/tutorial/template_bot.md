---
layout: en
title: Response Template
parent: Developer's Guide
nav_order: 15
---

# Concept description
{: .no_toc .header }

When you have many bot response nodes that need to use the same response, it is strongly recommended to use a common response template, which can save you a lot of building time.

## Create a response template

If it is shown in the figure, click **Project View - Responses - Add** in order to create a response template.

![11-bot-global](/assets/images/tutorial/template/01-bot-global.png)

## Use the template in dialog flows
1. Here we use the flow diagram to create the intention list. Please refer to the [Create Bot List](/docs/tutorial/node-template/bot-global/)tutorial for the creation process:
   ![05-user-global](/assets/images/tutorial/template/02-bot-global.png)

2. Select one of the last two nodes of the flow graph, click **to select** from the responses as shown in the figure, and then select the answer template we just created. Do the same for the other of the last two nodes
   ![12-bot-global](/assets/images/tutorial/template/03-bot-global.png)
   ![12-bot-global](/assets/images/tutorial/template/04-bot-global.png)

3. Training and verification results
   Click **Debug Run - Current Module** in the upper right corner to wait for the training to complete the verification effect

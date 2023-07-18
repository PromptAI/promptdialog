---
layout: en
title: Create Intents
parent: Developer's Guide
nav_order: 22
---

# Intents Concept
{: .no_toc .header }
Please refer to the concept description of [Intents](/docs/appendix/appendix)

## Create Intents

If it is shown in the figure, click **Project View - Intents - Add** in order to create a general intent template for extracting test. After filling in the figure, click OK to save,
![01-user-global](/assets/images/tutorial/template/01-user-global.png)
## Use in conversation flow diagrams
1. As shown in the figure, first create a flow graph to ask for test, then create a machine reply node to ask for test and a user input node in turn.
   ![02-user-global](/assets/images/tutorial/template/02-user-global.png)

2. Select the user input node to edit the node, click **Select from the intents** as shown in the figure, and then select the intention template we just created
   ![03-user-global](/assets/images/tutorial/template/03-user-global.png)
   After selection, we can add, delete and modify training statements here (the operation will take effect on all user input nodes referencing the template)
   ![04-user-global](/assets/images/tutorial/template/04-user-global.png)
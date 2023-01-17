---
layout: en
title: Create Intent List
parent: Developer's guide
nav_order: 22
---

# Intent List Concept
{: .no_toc .header }
---
Please refer to the concept description of [Intention List](/docs/en/appendix/appendix)

## Create Intent List

If it is shown in the figure, click **Project View - Intent List - Add** in order to create a general intent template for extracting birthdays. After filling in the figure, click OK to save,
![01-user-global](/assets/images/tutorial/template/01-user-global.png)
## Use in conversation flow diagrams
1. As shown in the figure, first create a flow graph to ask for birthdays, then create a machine reply node to ask for birthdays and a user input node in turn.
   ![02-user-global](/assets/images/tutorial/template/02-user-global.png)

2. Select the user input node to edit the node, click **Select from the intention list** as shown in the figure, and then select the intention template we just created
   ![03-user-global](/assets/images/tutorial/template/03-user-global.png)
   After selection, we can add, delete and modify training statements here (the operation will take effect on all user input nodes referencing the template)
   ![04-user-global](/assets/images/tutorial/template/04-user-global.png)
   Then create a branch, reference the birthday extraction template, and complete the flow chart as follows:
   ![05-user-global](/assets/images/tutorial/template/05-user-global.png)
   
3. Training and verification results
   Click **Debug Run - Current Module** in the upper right corner to wait for the training to complete the verification effect
   ![06-user-global](/assets/images/tutorial/template/06-user-global.png)

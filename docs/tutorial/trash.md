---
layout: en
title: Recycle Bin
parent: Developer's Guide
nav_order: 11
---

# Effect
{: .no_toc .header }
When we delete one or more nodes in the flow graph, the system just moves it to the trash, and users can recover from the trash again. If it needs to be completely deleted, it needs to be cleaned again from the trash.

## Supported node types for moving to the trash

- user
- bot
- Form
- Form-Field
- Interrupts
- Goto
- Condition

## Recover node from trash
* Select `What can i do for you today?` bot node in the trash and drag it to the node to be linked. When the **+** icon appears, release it.
  <br/>The recover node will be used as a child node behind the node you dragged to
  ![01-trash](/assets/images/tutorial/trash/01-trash.png)

## Insert node using trash
* The preparation is shown in the lower flow chart. We add a user input node between the bot reply nodes
  ![02-trash](/assets/images/tutorial/trash/02-trash.png)
* Move the later `What can i do for you today?` bot node to the trash
  ![03-trash](/assets/images/tutorial/trash/03-trash.png)
* Add new bot input node
  ![04-trash](/assets/images/tutorial/trash/04-trash.png)
* Select the `What can i do for you today?` bot node in the trash and drag it to the bot node just created. When the **+** icon appears, release it
  ![05-trash](/assets/images/tutorial/trash/05-trash.png)
* Finish

## Delete intermediate nodes using the trash
* The preparation is shown in the lower flow diagram. We use the trash to delete the user input node between the two bot reply nodes
  ![06-trash](/assets/images/tutorial/trash/06-trash.png)

* Delete the later `What can i do for you today?` bot node  to the trash, and it will be automatically moved to the trash
  ![07-trash](/assets/images/tutorial/trash/07-trash.png)

* Delete user input node`Nice to meet you too`
  ![08-trash](/assets/images/tutorial/trash/08-trash.png)

* Select the `What can i do for you today?` bot reply node in the trash and drag it to the bot reply node `What is your name?`, Release the **+** icon when it appears
  ![09-trash](/assets/images/tutorial/trash/09-trash.png)

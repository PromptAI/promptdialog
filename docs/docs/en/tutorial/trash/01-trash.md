---
layout: en
title: trash
parent: Developer's guide
nav_order: 25
---

# Effect
{: .no_toc .header }
---
When we delete one or more nodes in the flow graph, but may use them later, we can move them to the recycle bin first,

Drag to the required node when necessary

## Supported node types for moving to the trash

- user
- bot
- Form
- Form-Field
- Interrupts

## Moving to the trash
The node that supports moving to the recycle bin has a **move trash** button after clicking. Click OK in the pop-up window to move to trash
  ![01-form](/assets/images/tutorial/trash/01-trash.png)

## Recover node from trash
* Select `好的` bot node in the trash and drag it to the node to be linked. When the **+** icon appears, release it.
  <br/>The recover node will be used as a child node behind the node you dragged to
  ![13-trash](/assets/images/tutorial/trash/13-trash.png)
## Remove from trash
Click the trash icon, and then select the node to be deleted in the trash operation window and click Delete. As shown in the figure
  ![03-trash](/assets/images/tutorial/trash/03-trash.png)
  ![04-trash](/assets/images/tutorial/trash/04-trash.png)

## Insert node using trash
* The preparation is shown in the lower flow chart. We add a user input node between the bot reply nodes
  ![10-trash](/assets/images/tutorial/trash/10-trash.png)
* Move the later `好的` bot node  to the trash
  ![11-trash](/assets/images/tutorial/trash/11-trash.png)
* Add new user input node
  ![12-trash](/assets/images/tutorial/trash/12-trash.png)
* Select the `好的` bot node in the trash and drag it to the user input node just created. When the **+** icon appears, release it
  ![13-trash](/assets/images/tutorial/trash/13-trash.png)
* Finish
## Delete intermediate nodes using the trash

* The preparation is shown in the lower flow diagram. We use the trash to delete the user input node between the two bot reply nodes
  ![20-trash](/assets/images/tutorial/trash/20-trash.png)

* Move the later `好的` bot node  to the trash
  ![21-trash](/assets/images/tutorial/trash/21-trash.png)

* Delete user input node`我叫小明`
  ![22-trash](/assets/images/tutorial/trash/22-trash.png)

* Select the `好的` bot reply node in the trash and drag it to the bot reply node `您好，请问你怎么称呼？`, Release the **+** icon when it appears
  ![23-trash](/assets/images/tutorial/trash/23-trash.png)
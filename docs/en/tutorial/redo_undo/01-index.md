---
layout: en
title: undo/redo
parent: Developer's guide
nav_order: 26
---

# Effect
{: .no_toc .header }
---
Sometimes we delete a node or multiple nodes by mistake. If we need to go back to the previous step to restore the node that was deleted by mistake,

This is the usage scenario of undo/redo .
<br/>The undo/redo in the current version does not support cross device and cross browser


## Examples
We prepare the following conversation flow diagram

![001-redo_undo](/assets/images/tutorial/redo_undo/01-redo_undo.png)

We delete the last bot reply node as shown in the figure
![02-redo_undo](/assets/images/tutorial/redo_undo/02-redo_undo.png)

We click **undo** to restore the deleted bot to the node
![03-redo_undo](/assets/images/tutorial/redo_undo/03-redo_undo.png)

We click **Redo** to delete the recovered bot recovery node again
![04-redo_undo](/assets/images/tutorial/redo_undo/04-redo_undo.png)

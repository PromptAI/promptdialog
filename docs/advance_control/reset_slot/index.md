---
layout: default
title: Reset Slot Value
parent: Advanced Control
nav_order: 2
---
# Reset Slot Value
{: .no_toc .header }

In a dialog flow, the slot value can be set to a specified value.
Let's take buying pizza as an example, assuming there are three sizes: Small, Medium, and Large, corresponding to 10, 12, and 14 inches, respectively. 

![chat.png](chat.png)

The bot provides three buttons for users to click.  The click action will automatically send the text on the button to the bot, which will then be used to set the slot value. 

![entire_view.png](entire_view.png)

`Small`:
- Click `Reset Slot Value`,
- Select `Slot Name` with `size`,
- Set `Slot Value` to `10 inches`.

![reset.png](reset.png)


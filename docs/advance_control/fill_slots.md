---
layout: default
title: Automatic Fill Slots
parent: Advanced Control
nav_order: 4
---
When the Project is released and deployed on the Web through Web link, you can use [Slot default value](/docs/tutorial/slot_config/#default-value) to read logged-in user information and fill it in the Slot.
Based on [IT Helpdesk From](/docs/tutorial/form/), the user information can be obtained and filled in the Slot.

## Result

1. The welcome message contains `name`

2. There is no need to repeatedly ask `mail` when collecting feedback information

3. Output `name` and `mail` at the end

### Steps
1. Configure the variables to read the `name` and `email` of the currently logged in user from Local storage.
2. The deployed Web page writes `name` and `email` in Local storage.
3. Quote `name` and `email` in the welcome message and where needed.

## accomplish
1. Configure the system variables that need to be filled in: Create `name` and `email` in `Project View-Slots` and complete the default value configuration
<table>
   <tr>
     <td><img src="/assets/images/advanced_control/fill_slot/fill-slot-02.png" alt="Image 1 description"></td>
     <td><img src="/assets/images/advanced_control/fill_slot/fill-slot-03.png" alt="Image 2 description"></td>
   </tr>
</table>


2. Modify the welcome message and display the user's name

> `Hello {name}, I am your intelligent assistant. What can I do for you?`

![img_5.png](/assets/images/advanced_control/fill_slot/fill-slot-04.png)

3. Output `name` and `email`
![img_6.png](/assets/images/advanced_control/fill_slot/fill-slot-05.png)

Save and re-release.

## Run
After the session is created, the configured `name` appears in the welcome message: PromptAI-User

![img_7.png](/assets/images/advanced_control/fill_slot/fill-slot-06.png)

`email` was not asked during the collection process, and the automatically filled `email` and `name` were output after the collection was completed.
![img_7.png](/assets/images/advanced_control/fill_slot/fill-slot-07.png)



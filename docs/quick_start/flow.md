---
layout: default 
title: IT Helpdesk 
parent: Quick Start 
nav_order: 2
---

We can expand [the Website Assistant](/docs/quick_start/knowledge_base/) to include a few IT Helpdesk functions. For
example,

- Automatically display user's name
- Submit a ticket if it is not able to answer a user question (Fallback)
- No need to repeatedly obtain the user's `email` when creating a ticket

## Create a Flow

The flow asks for the user's email address and his question and then generates a ticket.

![img.png](/assets/images/quick_start/flow/flow-01.png)

Implementation:

- [Text tutorial](/docs/tutorial/form/)
- [Video Tutorial](/docs/example/form/)

## Automatically load user's name

After the user logs in to the system, the user's name and email address can be set to Session Storage or Local Storage
through key-Value. PromptAI can obtain the user's name and email address from these two places and use them in Flow.

Steps：

1. After the user logs in to the system, write the user's name and email address into Local Storage

```text
name : PromptAI-User
email: info@promptai.us
```

2. Set `name` and `email` respectively in [Slot default value](/docs/tutorial/slot_config/#default-value)

* The configured key needs to be consistent with the key written to Local Storage.

<table>
  <tr>
    <td><img src="/assets/images/quick_start/flow/flow-10.png" alt=""></td>
  </tr>
</table>


![fill-slot-06.png](/assets/images/quick_start/flow/flow-02.png)

Implementation

- [Text tutorial](/docs/advance_control/fill_slots/)

## Fallback

PromptAI supports adding a button below the default reply to link to Flow or FAQ.

Use this function to connect Fallback with Service Flow. When Fallback appears, users can click the button to submit a
work order.

### Fallback connects to Service Flow

Click `Overview-Fallback-Buttons for fallbacks-Add` to add Service Flow button to fallback.

![img.png](/assets/images/quick_start/flow/flow-03.png)

Modify Service Flow and go directly to submit tickets
   ![img_1.png](/assets/images/quick_start/flow/flow-04.png)

Modify the Bot node to display `name` and `email`
   ![img.png](/assets/images/quick_start/flow/flow-05.png)

## Run

Realization effect:

- Automatically obtain the `name` and `email` of the logged-in user
- The logged-in user displays `name` in the welcome message: PromptAI-User
- Click the `Service` button below Fallback to submit a ticket directly
- Submitting a ticket does not ask for `email` repeatedly. After submission, the automatically filled `info@promptai.us`
  is displayed.

<table>
  <tr>
    <td><img src="/assets/images/quick_start/flow/flow-06.png" alt=""></td>
    <td><img src="/assets/images/quick_start/flow/flow-07.png" alt=""></td>
  </tr>
  <tr>
     <td><img src="/assets/images/quick_start/flow/flow-08.png" alt=""></td>
  </tr>
</table>

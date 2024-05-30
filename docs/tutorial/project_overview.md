---
layout: en
title: Project Overview
parent: Developer's Guide
nav_order: 2
---
Click `Overview`, the designer can review the modules in the project.  Clicking these modules will bring the designer to the corresponding module such as FAQ and Flows. 
## Project

Click the current project `IT Helpdesk` in the overview window, and then click the pop-up `Edit Node` to edit the project settings.

![project-overview-01.png](/assets/images/tutorial/project/project-overview-01.png)

In the project settings, you could choose what to display below the first welcome message. You can display faq or a subset of flows as buttons so that the user can click one of the buttons to enter.  Certainly, a user can speak about her need; the bot will enter the corresponding flow based on her utterance. 

### `Welcome Message`
It is the chatbot's first message

### `Whether faq or flows are displayed as buttons below the first welcome message?`
Whether to display each module as a button below the welcome message, you can configure it here.
![project-overview-02.png](/assets/images/tutorial/project/project-overview-02.png)
![project-overview-03.png](/assets/images/tutorial/project/project-overview-03.png)
![project-overview-04.png](/assets/images/tutorial/project/project-overview-04.png)

---

## FAQ
Click `FAQ` in the overview diagram, and then click the pop-up `Edit Node` to visit the FAQ page.
![project-overview-05.png](/assets/images/tutorial/project/project-overview-05.png)

### `First message to user` or `Last message to user`
For example.
```text
Defined: `First message to user` is "What can I do for you ?"
Defined: `Last message to user` is "Are there any other questions?"

In Conversation:
bot: Hello !
bot: What can I do for you ? (`First message to user`)
user: What is your name ? (FAQ Question)
bot: My name is PromptAI.
bot: Are there any other questions? (`Last message to user`)
......

```

---

## Flows
Click a `Flow`. Then click the pop-up `Edit Node` to visit the dialog flow diagram you selected.
![project-overview-06.png](/assets/images/tutorial/project/project-overview-06.png)

### `First Message`
The `First Message` option allows you to configure the first message of each flow. It means that when we reach this flow during our conversation, the system sends the first message to the user.

---

## Fallback
Click `Fallback` of the project overview.  Then click the pop-up `Edit Node`, where you can edit the fallback actions that the bot will take if it does not understand the user utterance.  If none of the action returns a response, the default text message will be sent to the user. 

### `What is Fallback?`
Fallback PromptDialog refers to a backup plan used when the system encounters inputs it cannot understand or process. It helps the system deal with the following situations:

- When users ask unrelated questions (Dialog flows & Faq not include the input), the system responds with something like "I don't know."
- If the user's input is unclear or ambiguous, the system asks for more specific information.
- When the system is uncertain about a response, it may indicate its uncertainty.
- In the case of technical issues or errors, the system explains the problem to the user and may offer solutions.

![project-overview-06.png](/assets/images/tutorial/project/project-overview-07.png)

### `Buttons for fallback`
When triggering a fallback, you can choose to display buttons for flows or FAQs to guide the user for the next step in the conversation.
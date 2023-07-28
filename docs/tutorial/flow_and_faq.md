---
layout: en
title: Dialog Flow + FAQ
parent: Developer's Guide
nav_order: 5
---
A typical application often has a dialog flow and FAQ mixed together: When a user is filling a form, she might ask a few questions.  By default, PromptDialog can interleave these two processes together.  During the stage of debugging and releasing, the designer can select both modules and compile them together.  

![01](/assets/images/tutorial/flow_and_faq/1.png)

We combine a dialog flow with FAQ and train them together:

![02](/assets/images/tutorial/flow_and_faq/2.png)

When the bot runs,  it follows the dialog flow.  Meanwhile, it can answer questions in FAQ.

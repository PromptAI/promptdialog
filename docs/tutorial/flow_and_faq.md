---
layout: en
title: Dialog Flow + FAQ
parent: Developer's Guide
nav_order: 5
---
A typical application often has a dialog flow and FAQ mixed together: When a user is filling a form, she might ask a few questions.  By default, PromptDialog can interleave these two processes together.  During the stage of debugging and releasing, the designer can select both modules and compile them together.  

![dialog_flow_and_faq.jpg](/assets/images/dialog_faq_debug_1.jpg)

We combine a dialog flow with FAQ and train them together:

![dialog_flow_and_faq_debug_run.jpg](/assets/images/dialog_faq_debug_2.jpg)

When the bot runs,  it follows the dialog flow.  Meanwhile, it can answer questions in FAQ.

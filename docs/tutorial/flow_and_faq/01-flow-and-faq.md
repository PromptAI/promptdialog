---
layout: en
title: Conversation flow diagram and user question and answer (FAQ)
parent: Developer's Guide
nav_order: 5
---

# Conversation flow diagram and user question and answer (FAQ)
{: .no_toc .header }
---

## Mixed debugging or release

User question answering (FAQ) and dialog flow diagram are checked during debugging or publishing, and cross answering is allowed during the dialogue. That is, when entering a flow diagram, the user enters the intention in the user's question and answer,
At this time, the machine corresponding to the intention will reply.

![01](/assets/images/tutorial/flow_and_faq/1.png)

We combine a conversation flow diagram with user question and answer (FAQ) training:

![02](/assets/images/tutorial/flow_and_faq/2.png)

In the dialogue process, we first conduct flow chart dialogue, and then conduct user question and answer dialogue.
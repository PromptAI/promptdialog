---
layout: en
title: Dialog Flow Design
nav_order: 2
has_children: false
---
# Dialog Flow Design
{: .no_toc .header }

PromptDialog provides a dialog flow editing tool on cloud (via Amazon AWS/US).   This means you can access the design interface anytime and anywhere. As long as you have an internet connection, you can easily edit and manage your chatbots.  A designer can create/edit/upload conversational flows that reflect business logic.  The flows can be viewed as annotated conversations in RASA-X, but with reduced annotation cost.  PromptDialog will automaticallly convert the design to RASA codes (open source).  The designer can train and test the RASA codes in her own local running environment.  

![cloud_design.png](/assets/images/cloud_design/01-cloud_design.png)

The architecture of PromptDialog actually supports all of four settings: The dialog flow design environment and chatbot running environment could either be on premise or cloud.  The current release supports Cloud-based dialog design and local testing/running.  For users who are interested in the other three settings, please contact info@promptai.us.     

We emphasize the protection of user data security and privacy. Your data is stored in secure cloud AWS/US servers and is subject to strict encryption and access controls. We employ state-of-the-art security technologies and measures to ensure the ongoing protection of your data during transmission and storage processes. 

Our editing environment offers a low-code user interface, enabling you to quickly design and configure FAQ and multi-turn conversations. You can utilize a range of tools and features to define conversation flows, set response logic, manage entities and intents, etc.  Whether you're developing new dialogue flows or optimizing existing chatbots, our editing environment will help.

Upon completion of editing, our system allows you to deploy the model to run in your own environment. This provides you with greater flexibility and control, enabling customization and integration of the chatbot with your existing systems. You can run the model in a local environment, achieving faster response times and maintaining data privacy.

Let our platform be your ideal choice for building unique chatbots, unleashing your creativity, and delivering exceptional user experiences.

Please refer to the detailed tutorials for FAQ construction and dialog flow design
- [FAQ](/docs/tutorial/faq/01-create-faq/)
- [Conversation Flow Design](/docs/tutorial/flow/01-create-flow/)

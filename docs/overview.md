---
layout: en
title: Overview
nav_order: 1
has_children: false
---

<!-- ![01-overview.png](/assets/images/overview/01-overview.png) -->
PromptAI provides an all-in-one platform of building, running and deploying a chatbot.  It actually supports all of four settings: The chatbot design environment and running environment could either be on premises or cloud.

* Design bots on cloud, run locally (current public release) 
* Design bots on cloud, run on cloud
* Design bots locally, run locally 
* Design bots locally, run on cloud

The current release supports cloud-based chatbot design and local testing/running/release. For users who are interested in the other three settings, please contact [info@promptai.us](info@promptai.us).

PromptAI emphasizes the protection of user data. Your data is stored in secure cloud AWS/US servers and is subject to strict encryption and access controls. It employs state-of-the-art security technologies and measures to ensure the ongoing protection of your data during transmission and storage processes.

There are two ways to train and run your bot.  If you have your own RASA environment set up, please feel free to downlad the generated RASA code of your design and test your bot.  Or you could create the local running enviroment as illustrated below, which packaged everything for you. There are four steps: Design a dialog flow, create the local running environment (you only need to do it once), download the generated code of your design, and run the bot. 

## Step 1 - Create a dialog flow
Create your first dialog flow via PromptDialog
![02-overview.png](/assets/images/overview/02-overview.png)

## Step 2 - Create the local environment
You can build a local running environment with one line of command. For details, please check [local environement setup](/docs/local_running_env) and check [install question] (/docs/common_questions/install_questions) if you have any question. 
![03-overview.png](/assets/images/overview/03-overview.png)

## Step 3 - Download RASA code
All dialog flows and faqs can be downloaded as generated RASA code for free to build your chatbot in a RASA environment (RASA 3.2).
![04-overview.png](/assets/images/overview/04-overview.png)

## Step 4 - Train and run
After downloading the code, you can train your model in your local running environment, and chat with your new model. 
![05-overview.png](/assets/images/overview/05-overview.png)

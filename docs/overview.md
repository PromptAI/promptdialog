---
layout: en
title: Overview
nav_order: 1
has_children: false
---
<!-- ![01-overview.png](/assets/images/overview/01-overview.png) -->
PromptAI provides an all-in-one devops platform of building, running and deploying a chatbot.  It actually supports all of four settings: The chatbot design environment and running environment could either be on premises or cloud.

* Design bots on cloud, run locally (the current version) 
* Design bots on cloud, run on cloud
* Design bots locally, run locally 
* Design bots locally, run on cloud

The current release supports cloud-based chatbot design/testing, local training/running. For users who are interested in the other three settings, please contact [info@promptai.us](info@promptai.us).

PromptAI emphasizes the protection of user data. Your data is stored in secure cloud AWS/US servers and is subject to strict encryption and access controls. It employs state-of-the-art security technologies and measures to ensure the ongoing protection of your data during transmission and storage processes.

There are two ways to train and run your bot.  If you have your own Rasa environment set up, please feel free to download the generated Rasa code of your design and test your bot.  Or you could create the local running enviroment as illustrated below, which packaged everything for you. There are five steps: Design a dialog flow, create the local running environment (you only need to do it once), download the generated code of your design, train the model, and run the bot using PromptDialog. 

## Step 1 - Create a dialog flow
Create your first dialog flow.

![overview_create_dialog_flow.jpg](/assets/images/overview/overview_create_dialog_flow.jpg)

## Step 2 - Create the local environment
You can build a local running environment with one line of command. For details, please check [Run Chatbots:LRE](/docs/run_bots) and check [install question](/docs/common_questions/install_questions) if you have any question. 

![overview_create_agent.jpg](/assets/images/overview/overview_create_agent.jpg)

<!-- 
```text
## Step 3 - Download RASA code
All dialog flows and faqs can be downloaded as generated RASA code for free to build your chatbot in a RASA environment (RASA 3.2).

![overview_download_rasa_file.jpg](/assets/images/overview/overview_download_rasa_file.jpg)

## Step 4 - Train
After downloading the code, you can train your model in your local running environment.  
```
-->


![05-overview.png](/assets/images/overview/05-overview.png)

## Step 3 - Debug and Release
Now you can debug/run your new chatbot in PromptDialog.
![overview_running_debug_bot.png](/assets/images/overview/overview_running_debug_bot.png)

Once you are satisfied with the result, it is ready to release.  We provide multiple ways to [release](/docs/tutorial/release/release_project/) and will add more.

* Release

![overview_release_page.png](/assets/images/tutorial/release_released.jpg)

* Web Application

![chat-release-03](/assets/images/tutorial/release_web_script_demo_1.jpg)

* Chat History & Dashboard

![overview_chat_history.png](/assets/images/overview/overview_chat_history.png)

![overview_dashboard.png](/assets/images/overview/overview_dashboard.png)

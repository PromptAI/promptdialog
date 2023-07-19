---
layout: en
title: Settings
parent: Developer's Guide
nav_order: 13
spliter: true
---

# Settings
{: .no_toc .header }

This tutorial will explain the various settings in the system and their use scene effects.

## project settings

Welcome and fallback in project settings will affect the chat robot after training and release
![01-setting-project](/assets/images/tutorial/setting/01-setting.png)

### project welcome

As shown in the figure, after setting the welcome , open the robot chat window and send it to the user as the first message.
<br/>Note: The welcome in project settings takes effect immediately after modification. Downloading Rasa readable files is not supported.
![02-setting-project-welcome](/assets/images/tutorial/setting/02-setting.png)

### project fallback

As shown in the figure, when the chat robot cannot recognize the user's intention, it will send the Fallback set by the project to the user as a message.
<br/>Note: The fallback in project settings takes effect immediately after modification. Downloading Rasa readable files is not supported.
![03-setting-project-fallback](/assets/images/tutorial/setting/03-setting.png)

## Flow Graph Settings

When editing a dialog flow diagram, you can set whether to present branch prompts and subordinates as options

![project-overview-5](/assets/images/tutorial/setting/04-setting.png)

### Branch prompt

When the user checks whether ** Subordinates present ** All ** after ** as an option here, after publishing the project, all dialogue processes under the project will be displayed with buttons under the branch prompt. Check ** Check only**

After the project is published, the dialog process in which only the **child presented as button** is enabled under the project will be displayed with the button below the branch prompt. Check **No**

, after the project is published, all the dialog processes of the project will not be displayed with buttons under the branch prompt
<br/>Note: **Branch prompt**, **child presented as button** will take effect immediately after modification. Downloading Rasa readable files is not supported.

![project-overview-6](/assets/images/tutorial/setting/05-setting.png)

### Whether to prompt branch options and branch guide words

Whether the dialog overview editor prompts branching options and guideline

<br/>Note: **Branch welcome**, **child presented as button** will take effect immediately after modification. Downloading Rasa readable files is not supported.

![05-setting-project-branch-welcome](/assets/images/tutorial/setting/06-setting.png)

Whether branch options and guidelines are prompted in the branch editing interface.
![06-setting-project-branch-welcome](/assets/images/tutorial/setting/07-setting.png)

When the training is released, the enabled Prompt for Branches option will be added to the welcome message as a button first, and the branch guide will return the set guide after the user clicks the corresponding branch button or sends a message to hit the branch
![08-setting-project-branch-welcome](/assets/images/tutorial/setting/08-setting.png)

## Configure the delay time of bot reply

The bot reply node can set the reply delay time. When the robot replies, it will delay the corresponding set time to reply to the message. As shown in the figure, we set the robot to reply with a 1s delay
![09-setting-project-conversion-delay](/assets/images/tutorial/setting/09-setting.png)

When the user enters the intention to hit the bot reply with the set delay time, the bot will reply after the reset delay time. As shown in the figure：
![10-setting-project-conversion-delay](/assets/images/tutorial/setting/10-setting.png)

## Configure bot reply conditions

When the bot reply condition is set, it will go through the blocked branches according to whether the value of the corresponding variable is extracted. When there are multiple conditions, they need to be met at the same time
As shown in the figure, we can continue the following selection when the `city` is not empty
![11-setting-project-conversion-condition](/assets/images/tutorial/setting/11-setting.png)
![12-setting](/assets/images/tutorial/setting/11-setting.png)

## Configure reset variable values

After setting the reset variable value, the value of the variable will be reset to the set value, and the value extracted by the subsequent node from the variable is the set value. The setting method is shown in the figure
![13-setting-project-conversion-condition](/assets/images/tutorial/setting/13-setting.png)



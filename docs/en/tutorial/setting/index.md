---
layout: en
title: Settings illustration
parent: Developer's guide
nav_order: 20
---

# Settings illustration

## {: .no_toc .header }

This tutorial will explain the various settings in the system and their use scene effects.

## project settings

Welcome and fallback in project settings will affect the chat robot after training and release
![01-setting-project](/assets/images/tutorial/setting/01-setting-project.png)

### project welcome

As shown in the figure, after setting the welcome , open the robot chat window and send it to the user as the first message.
<br/>Note: The welcome in project settings takes effect immediately after modification. Downloading Rasa readable files is not supported.
![02-setting-project-welcome](/assets/images/tutorial/setting/02-setting-project-welcome.png)

### project fallback

As shown in the figure, when the chat robot cannot recognize the user's intention, it will send the Fallback set by the project to the user as a message.
<br/>Note: The fallback in project settings takes effect immediately after modification. Downloading Rasa readable files is not supported.
![03-setting-project-fallback](/assets/images/tutorial/setting/03-setting-project-fallback.png)

## Flow Graph Settings

When editing a dialog flow diagram, you can set whether to present branch prompts and subordinates as options

![project-overview-5](/assets/images/tutorial/project/project-overview-5.png)

### Branch welcome

When the user checks whether ** Subordinates present ** All ** after ** as an option here, after publishing the project, all dialogue processes under the project will be displayed with buttons under the branch prompt. Check ** Check only**

After the project is published, the dialog process in which only the **child presented as button** is enabled under the project will be displayed with the button below the branch prompt. Check **No**

, after the project is published, all the dialog processes of the project will not be displayed with buttons under the branch prompt
<br/>Note: **Branch welcome**, **child presented as button** will take effect immediately after modification. Downloading Rasa readable files is not supported.

![project-overview-6](/assets/images/tutorial/project/project-overview-6.png)

### Whether to prompt branch options and branch guide words

Whether the dialog overview editor prompts branching options and guideline

<br/>Note: **Branch welcome**, **child presented as button** will take effect immediately after modification. Downloading Rasa readable files is not supported.

![05-setting-project-branch-welcome](/assets/images/tutorial/setting/05-setting-project-branch-welcome.png)

Whether branch options and guidelines are prompted in the branch editing interface.
![06-setting-project-branch-welcome](/assets/images/tutorial/setting/06-setting-project-branch-welcome.png)

When the training is released, the enabled Prompt for Branches option will be added to the welcome message as a button first, and the branch guide will return the set guide after the user clicks the corresponding branch button or sends a message to hit the branch
![08-setting-project-branch-welcome](/assets/images/tutorial/setting/08-setting-project-branch-welcome.png)

## Configure the delay time of bot reply

The bot reply node can set the reply delay time. When the robot replies, it will delay the corresponding set time to reply to the message. As shown in the figure, we set the robot to reply with a 5s delay
![09-setting-project-conversion-delay](/assets/images/tutorial/setting/09-setting-project-conversion-delay.png)

When the user enters the intention to hit the bot reply with the set delay time, the bot will reply after the reset delay time. As shown in the figure：
![10-setting-project-conversion-delay](/assets/images/tutorial/setting/10-setting-project-conversion-delay.png)

##Configure bot reply conditions

When the bot reply condition is set, it will go through the blocked branches according to whether the value of the corresponding variable is extracted. When there are multiple conditions, they need to be met at the same time
As shown in the figure, we can continue the following selection when the `city` is not empty
![11-setting-project-conversion-condition](/assets/images/tutorial/setting/11-setting-project-conversion-condition.png)

The effect after training is shown in the figure：
![12-setting-project-conversion-condition](/assets/images/tutorial/setting/12-setting-project-conversion-condition.png)

## Configure reset variable values

After setting the reset variable value, the value of the variable will be reset to the set value, and the value extracted by the subsequent node from the variable is the set value. The setting method is shown in the figure
![13-setting-project-conversion-condition](/assets/images/tutorial/setting/13-setting-project-conversion-condition.png)

The effect after training is shown in the figure：：
![14-setting-project-conversion-condition](/assets/images/tutorial/setting/14-setting-project-conversion-condition.png)

## Download Rasa file

At present, our system supports direct downloading of rasa readable files. Click the **Download Rasa file** button at the top right corner to download the Rasa readable files corresponding to the dialog flow graph as required
<br/>Note: welcome , fallback, branch prompt, and question prompt (FAQ) need system support to take effect
![15-download-rasa-file](/assets/images/tutorial/setting/15-download-rasa-file.png)

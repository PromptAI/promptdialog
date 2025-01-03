---
layout: default
title: Website Assistant
parent: Quick Start
nav_order: 1
---
# Quickly build a website assistant using a Web (URL) and FAQ
We take PromptAI's [Help Document](https://doc.promptai.us/docs/about/) as a sample knowledge source, add a few frequently asked FAQs, and launch a website assistant. 
If you do not have a PromptAI account, please [click to register](https://app.promptai.us/register) to create account. Otherwise, [Click to log in](https://app.promptai.us/login).

1. After logging in to the system, click `Create Project` in the upper right corner. Please input the project information, e.g., 
- Name: PromptAI Website Assistant
- Description: Help customers who are searching the PromptAI website
- Welcome: Welcome to PromptAI! Is there any question I can assist you with?

<!-- ![img.png](/assets/images/quick_start/kb/kb-01.png) -->

2. Add the entire website as a knowledge source: After entering the project, click `Knowledge Base` - `Web` - `Add` to to add the url of the website your customers would like to query. 

![img_1.png](/assets/images/quick_start/kb/kb-02.png)

![img_2.png](/assets/images/quick_start/kb/kb-03.png)

The PromptAI help document consists of multiple pages. Click the `Parse` button to parse the webpages and build a knowledge base for question answering. 

<!--
filter:
- Use "Filer" to filter links by keywords
-Select box to the left of Url

Here we use Select All by default, just click `OK` in the lower right corner.

![img_3.png](/assets/images/quick_start/kb/kb-04.png)

Next, the system will automatically parse the page and initialize the knowledge base.

![img_4.png](/assets/images/quick_start/kb/kb-05.png)

After initialization is completed, all web statuses change to "complete"

![img_6.png](/assets/images/quick_start/kb/kb-06.png)

-->

3. Add an FAQ knowledge base
Click `FAQ` in the left pane. 

![img_5.png](/assets/images/quick_start/kb/kb-07.png)

Here we add the first FAQ to answer a frequent question "Who are you?"

- User Question: Questions that users may ask
- Bot Response: Predefined answer

Click the `Save` button in the upper right corner to save.

![img_7.png](/assets/images/quick_start/kb/kb-08.png)

*For more FAQ examples, please visit [FAQ](/docs/tutorial/faq/)*

## Release and Conversation
After two simple steps, we completed the construction of a knowledge base:
- Added and parsed the PromptAI help documentation: https://doc.promptai.us/docs/about/
- Added an FAQ: Who are you?

### Release
Next, proceed to release the bot: click `Project Tool` - `Release` in the left pane to enter the bot release management interface
![img_9.png](/assets/images/quick_start/kb/kb-09.png)

Next click `Faq` to select the Faq, and finally click the icon above `Click to release` to publish.

![img_11.png](/assets/images/quick_start/kb/kb-10.png)

After a few seconds, the publication is successful and a dialog box pops up:
![img_12.png](/assets/images/quick_start/kb/kb-11.png)

### Run

Next let’s try the dialogue
- Ask: who are you?
- Ask: What PromptAI can do?

![img_13.png](/assets/images/quick_start/kb/kb-12.png)


## Statistics

PromptAI provides users with a report function, and users can view the usage of the assistant, including the number of visits, Q&A volume, etc.
![img_14.png](/assets/images/quick_start/kb/kb-13.png)

## Tips
Not only does it support webpages, PromptAI also supports other types of knowledge bases: Text and File. These different types of knowledge bases can be combined to answer user questions.

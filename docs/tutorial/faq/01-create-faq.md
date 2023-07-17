---
layout: en
title: Create a user question and answer (FAQ)
parent: Developer's Guide
nav_order: 4
---
After the project is created, there will be a default frequently answered questions (FAQ).  The beta version only allows one FAQ for each project. 

## FAQ edition window  

Click FAQ in the left navigation pane.  In the FAQ window, you can add, modify, and delete questions.

![faq-main-view](/assets/images/tutorial/faq/f-main-view.png)

## Add a new question

Click the Add User Question button on the upper right corner to pop up the FAQ creation interface.

![faq-create-button](/assets/images/tutorial/faq/f-create-button.png)

## Fill in question/answer information
Please fill multiple examples for the same question, which is required for RASA Training. Please make sure: 
-Each question can only be listed once. 
-Each question shall have multiple examples: They are the same question, but asked differently. 


![faq-create-detail.png](/assets/images/tutorial/faq/f-create-detail.png)

## Created successfully

![faq-create-detail.png](/assets/images/tutorial/faq/f-main-view-data.png)

## Unstructured content
If you have unstructred content available in files like CSV, Word Doc, PDF, Text, HTML etc.,  you can upload these files to [talk2bits.com], which provides service to directly answer your question using ChatGPT/GPT4.  PromptDialog has integrated this function. Please check the knowledgebase section [link here]. 

## Training options
When you train your model, we provide three training options (please give the interface picture and the location of that interface):
- RASA native:  It uses RASA’s own routine to train FAQ classifier.  In this case, a user is required to give a few similar questions.
- ChatGPT/GPT4: It employes ChatGPT/GPT4 to do querestion comparison and retrieve answer.  This is an approach we recommend as the designer need not provide many similar questions.  This needs to be done through [talk2bits.com]. Please check the knowledgebase section [link here]. 
- Customized BERT model: It can be trained and deployed locally to best protect privacy and has performnace between RASA FAQ and ChatGPT. For this option, please contact us [info@promptai.us].

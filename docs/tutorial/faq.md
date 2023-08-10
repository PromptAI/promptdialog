---
layout: en
title: FAQ
parent: Developer's Guide
nav_order: 3
---
Each project has a default FAQ (frequently answered questions) module.  The beta version only allows one FAQ for each project. 

## FAQ window  

Click `FAQ` in the left navigation pane.  In the FAQ window, you can add, modify, and delete questions.

![faq_list.jpg](/assets/images/tutorial/faq_list.jpg)

## Add a new question

Click the `+Add` button on the upper right corner to pop up the question addition interface.

![faq_create.jpg](/assets/images/tutorial/faq_create.jpg)

## Fill in question/answer information
Please fill multiple examples for the same question, which is required for RASA Training. Please make sure: 

- Each question can only be listed once,
- Each question shall have multiple examples: They are the same question, but asked differently. 

![faq_create_info.jpg](/assets/images/tutorial/faq_create_info.jpg)

## Created successfully

![faq_create_success.jpg](/assets/images/tutorial/faq_create_success.jpg)

## Unstructured content
If you have unstructred content available in files like CSV, Word Doc, PDF, Text, HTML etc.,  you can upload these files to [talk2bits.com], which provides service to directly answer your question using ChatGPT/GPT4.  PromptDialog has integrated this function. Please check [the knowledgebase section](https://doc.promptai.us/docs/knowledge_base/).

## Training options
When you train your model, we provide three training options:
- RASA native:  It uses RASA’s own routine to train an FAQ classifier.  In this case, a user is required to give a few similar questions.
- ChatGPT/GPT4: It employes ChatGPT/GPT4 to do querestion comparison and retrieve answer.  This is an approach we recommend as the designer need not provide many similar questions.  This needs to be done through [talk2bits.com](talk2bits.com). Please check [the knowledgebase section](https://doc.promptai.us/docs/knowledge_base/).
- Customized BERT model: It can be trained and deployed locally to best protect privacy and has performnace between RASA FAQ and ChatGPT. For this option, please contact us [info@promptai.us](mailto:info@promptai.us).


<!---
## Use LLM
We provide the feature to use LLM.
![faq-use-llm.png](/assets/images/tutorial/faq/faq-use-llm.jpg)
--->

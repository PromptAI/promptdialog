---
layout: en
title: Basic Concepts
nav_order: 7
---
# Basic Concepts
{: .no_toc .header }

## Intent

**User**:  I want to book a ticket to Boston on July 4th. 

**Intent**: Booking Ticket.  There are various ways to express a user’s intent to book a ticket from one place to another.  They can be classified as intent declared by a conversation designer as “Booking Ticket.”  In order to help RASA or LLMs to understand “Booking Ticket,” it was suggested to give a few examples.  Certainly the more (diverse), the better. 
Intent Example: 
* I plan to fly to Boston on Independence Day
* Could you help me check the flights from Los Angeles to Boston in July? 

## Slot
In order to query the flight database, it is necessary to extract the flight information that a user is checking.  The information is called slots, each consisting of type, name and value. For example, at least three slots are needed for checking flights, date, departure city, arrival city.  Slot filling is looking for specific pieces of information that can be named entities (e.g., the city name) or other things (e.g., a piece of text).  Slot is also referred as variable in PromptDialog.  

## Entity
Entity is a 'thing' that has names, like people, places, products etc.  These things can be used to fill slots or just left alone. 

## Slot Filling
The value of a slot (variable) can be filled anywhere during a conversation. It can be extracted from user input or set manually. The following are several ways to do slot filling.

### 1. Entity Recognition
Entity recognition is the most common method in slot filling.  PromptDialog has the following three approaches to do entity recognition

* A set of predefined entities are included, such as date, number, telephone, and ordinal words, eliminating the trouble of manual annotation, training and recognition.  
* PromptDialog supports the entity recognition model like DIET form RASA which requires a designer to provide a set of training examples to recognize the entities.  The accuracy of entity recognition can be improved by providing a variety of expressions and displaying different entity words in example sentences as many as possible. However, it is well known the accuracy is problematic as there might not be enough training data available
* PromptDialog is going to soon introduce a large language model based (e.g., chatGPT) one/few shot entity recognition method to improve intent classification and entity recognition. 

### 2. Whole Utterance
The entire user utterance is used to fill a slot.   A common scenario is to collect user feedback which requires using the whole utterance, rather than extracting a specific phrase from it. It should be noted that although we do not care about the specific values extracted, we still need to add different examples to ensure that the model performs intent classification accurately and understands that the current utterance is going to be used for slot filling. 

### 3. User Defined Value
In this case, a specific value is selected to fill slots.  For example, when booking air tickets, a user may be asked if a window seat is preferred or not.  The value of Slot ‘windows’ shall be ’ true’ or ‘false.‘  No matter whether the user says “Yes” or “I want to sit next to window”, the ‘windows’ slot shall be set to ’True.‘  

### 4. Reset
Sometimes a slot value needs to be reset.   For example, a user might want to clear the previously entered information, or assign the slot an initial value at the beginning of a conversation.  It can also be used when filling different slots of the same entity type, such as numbers: Fill in the order number when an order identifier is given, and fill in the phone number when a phone number is provided. 

## Bot Response
The system will send different responses according to user utterance. PromptDialog currently supports three kinds of responses:
1. Text
2. Image
3. Attachment
4. Webhook
5. Action

## Frequently Asked Questions (FAQ) 
A list of typical questions that users might ask regarding a particular subject.  Each FAQ tuple has three components: (question, similar questions, answer)

PromtpDialog supports FAQs in three ways:
* RASA native FAQs that use RASA’s own routine to answer question.  In this case, a user is required to give a few similar questions (the more the better) for each question so that RASA can correctly identify the correct one through learning. 
* ChatGPT/GPT4 enabled retrieval augmented generation (RAG) to answer questions.  PromptDialog employed an embedding and retrieval approach to dramatically improve accuracy.  This is an approach we recommend if users do not have many similar questions. However, there is some cost associated. 
* Customized BERT model with contrastive learning.  PromptDialog also provides its own model that can be deployed locally with performance between RASA FAQ and ChatGPT (closer to ChatGPT).  It needs training examples. 

## Knowledge Base
In addition to FAQs, PromptAI can turn enterprise documents of various forms including CSV, PDFs, Docs, Text, and HTMLs into one knowledge base and employ retrieval augmented generation (RAG) to answer questions directly based on these unstructured documents. This function is supported by talk2bits.com and can be integrated with RASA quickly. 

## Form
Form is used to collect multiple pieces of information in tasks like ticket booking, hotel reservation, purchase order, etc.  In PromptDialog, only a few configurations are needed to complete the design of a form, which was once quite complex: 
* **Slots**:  The slot list declares several slots that the form needs to collect, how the bot asks about these slots’ value, and how to fill slots from the user reply. When there are multiple extraction methods, they can be written in turn. The robot will ask the user in sequence until all slots are filled. 
* **Interrupts**: Users may not answer in the way we expect. If the user asks “I don’t want to continue ”, we hope to exit the form properly.
* **Confirm**: When all the slots are filled out, the form will ask for a confirm and then complete.  

## Example
In order to reply different user inputs and reduce the possibility of robot answering incorrectly, multiple example sentences are supported for each intent. Example sentences will be used as training samples and put into the intent classification model for training. Therefore, the number and quality of example sentences determine the accuracy of robot replies to a large extent. In the editing of examples, we hope that the diversity between different intents is as high as possible, that is, examples with different intents should not overlap. At the same time, the expression of example sentences in the same intent can be as rich as possible, for example:
* intent 1: Greet
  * Hello!
  * Hello.
* intent 2: Goodbye
  * See you tomorrow.
  * Bye From the perspective of model training, intent 1 will be harder to classify than intent 2. Therefore, if you can provide more unique examples for each intents, the intent classification effect will be better.

## Intent List
The intent list exists for the purpose of reusing intent. There are some specific intentions in conversation design, such as confirmation, denial and thanks. This kind of intent often appears in different positions of the dialogue process, while repeatedly constructing repeated intents is tedious and error prone. The concept of intent list is to solve this problem. We can save the intent to be reused as a template and add it to the intent list. When we need to use this intent elsewhere in the project, we can directly reference the saved intent. Another advantage of this design is that we only need to operate once when we need to add, modify, or delete examples in a certain intent.

We strongly recommend that you use the intent list as much as possible. On the one hand, the reuse of intent can make the design easier; On the other hand, the combination of similar intents can greatly improve the recognition accuracy of the model.

## Ensure the accuracy of intent 

### Classification
Due to the diversity of languages, more data are often required for model training to obtain better recognition performance. As the generalization ability of the machine increases with the increase of data, if you find that the recognition accuracy of the intention is not high enough, please confirm in turn:
1. Whether there are similar unconsolidated intents. If there are, please merge the intent and save it in the intent list for reuse.
2. Whether there are too few examples in the intent. If the number of examples with different intents is less than 3, or the number of examples with different intents is unbalanced, please add more examples as appropriate.
3. Whether the example used for testing exists in two or more intentions. If it exists, please reorganize your intentions. If possible, please do not put the same example into different intents, which will confuse the model.

### Response
The response refers to the bot’s reply. The system will reply different information according to different input of users.

The response supports three forms:
1. Text
2. Image
3. Webhook The response must include a text message.

### Response List
The response list exists for the reuse of responses. We often encounter repeated responses in conversations, such as goodbye, calling the same webhook, and thanks. Such responses often appear in different positions of the dialogue process, and it is tedious and error prone to repeatedly construct repeated responses. The concept of response list is to solve this problem. We can save the response to be reused as an response template and add it to the response list. When we need to use this response elsewhere in the project, we can directly reference the saved response. Another advantage of this design is that when we need to add, modify, or delete an response, we only need to operate once.

We strongly recommend that you use the response list as much as possible. Reuse of responses can make the design easier and save a lot of time in building your flow diagram.

### Variable
Variables are the memory of the bot. Declared variables represent what information the bot needs to remember. For example, in the scenario of booking a train ticket, the user provides the required information, such as destination, departure time, and seat requirements, during the multi round conversation with the machine. This kind of information needs to be recorded until the end of the dialogue, and then determine the final destination of these variables according to the actual situation. Without variables, the bot cannot remember any information during the conversation.

### Extraction of variables
Variable extraction can occur anywhere in the conversation process. It can be extracted from user input or set manually. The following are several ways to extract variables.

### Entity extraction
Entity extraction is the most common method in variable extraction. It is usually used to extract some information in user input, such as time, place, name, mobile number, specific information, etc. We provide built-in variables and dimension variables. Among them, built-in variables are variables that can be extracted by rules. At present, they include date, number, telephone, and ordinal words, eliminating the trouble of manual marking. Such variables will continue to be updated in subsequent releases. The labeled variables are for some special cases, such as the need to extract some specific words. Such words need to be labeled manually, predicted and extracted with the help of machine learning and models. As with example sentences, the accuracy of extraction can be improved by providing a variety of expressions and displaying different entity words in example sentences as much as possible.

### Input Text
The input text mode is usually used to extract the entire user input statement. A common application scenario is to collect user feedback and ask if there are other requirements. This type of scenario usually requires a complete record of the user’s speech, rather than extracting a specific phrase from it. It should be noted that although we do not care about the specific values extracted, we still need to add different examples to ensure that the model understands that the current user input belongs to the purpose of extraction, so as to extract variables.

### Custom Value
The custom value method is similar to the input text. However, the common scenario is whether a service is required. In other words, a limited number of categories need to be filled in with this variable. For example, when booking air tickets, users may need to ask if they need a window seat. At this time, we expect the value of the variable ‘windows’ to be’ true | false ‘, and do not want to fill in other values. That is to say, no matter whether the user says “Yes” or “I want to rely on the window”, we want the ‘windows’ variable to be set to’ True ‘. Therefore, we provide a user-defined value method, which specific value can be filled according to a user’s intention. This value is mandatory and you can decide.

### Reset Variable Values
The above methods are all methods to extract variables from user input. If you need to extract variables after a bot replies, you can use reset variable values to set them. The difference between this setting method and the above three methods is:
1. The scopes are different. The scope of this method is a specific context, that is, the reset only takes effect in the current dialog; The above methods are globally effective. If you want to extract variables specifically in multiple scenes of the conversation, use Reset Variable Values.
2. Reset the variable value to transfer the variable value. The variables with the same name are extracted by default based on the variables entered by the user. If you need to reuse some built-in variables or set some variable values to other extracted variables, you can use Reset Variable Values.

### User question and answer (FAQ）
User question and answer (FAQ) provides the function of one question and one answer, which simplifies the design of dialogue process. User Q&A is mainly aimed at a class of questions that are not closely related to the process. It is characterized by a large number of questions. Each question has its own answer, but it has no great impact on the dialogue process. If you use the flow diagram to define, you need to edit a large number of branches. On the one hand, adding operations is cumbersome, and on the other hand, it is not easy to maintain the flow diagram. Therefore, we have designed a user question and answer function to separate the definition of such questions without affecting the overall flow diagram.

### Form
For multiple information collection scenarios: air ticket booking, hotel booking, order after-sales, etc., we have designed a form function. Information collection is performed by machine operation. Only a few necessary settings are needed to achieve the design of complex processes. The following is an introduction to several related concepts in form design.

### Slots
The information list defines several variables that the form needs to collect, how the robot asks about these variables, how the user answers, and how to extract variables. When there are multiple extraction methods, they can be written in turn. The robot will ask the user in sequence until all variables are collected. Note that the robot will skip the assigned variables when asking.

### Interrupts
Users may not answer in the way we expect. In fact, we hope that the machine can process user input more intelligently. For example, when we are asking for some information, if the user asks “I don’t want to continue filling”, we hope to exit the form properly. At this time, we can use ‘other user requests’ to add possible user statements under this branch and give corresponding responses. If the user needs to exit, it can also be indicated in this section. If necessary, it is also supported to continue this branch outside the form.

### Confirm
When the form is filled without failure, all variables are filled out, and the form pops up normally, all processes behind this node will be executed. Usually, the node needs to confirm all the variables previously, or it can be directly submitted to the external api through the system reply.
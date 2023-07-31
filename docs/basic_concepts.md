---
layout: en
title: Basic Concepts
nav_order: 7
---
## Intent

`User`:  I want to book a ticket to Boston on July 4th. 

`Intent`: Booking Ticket.  

There are various ways to express a user’s intent to book a ticket from one place to another.  They can be classified as intent declared by a designer as “Booking Ticket.”  In order to help RASA or LLMs to understand “Booking Ticket,” it was suggested to give a few examples.  Certainly the more (diverse), the better. 
Intent Example: 
* I plan to fly to Boston on Independence Day.
* Could you help me check the flights from Los Angeles to Boston in July? 

## Slot
In order to query the flight database, it is necessary to extract the flight information that a user is checking.  The information is called slots, each consisting of type, name and value. For example, at least three slots are needed for checking flights: Date, Departure city, Arrival city.  Slot filling is looking for specific pieces of information that can be named entities (e.g., the city name) or other things (e.g., a piece of text).  Slot is also referred as variable in PromptDialog.  

## Entity
Entity is a 'thing' that has names, like people, places, products etc.  These things can be used to fill slots or just left alone. 

## Slot Filling
The value of a slot (variable) can be filled anywhere during a conversation. It can be extracted from user input or set manually. The followings are several ways to do slot filling.

### 1. Entity Recognition
Entity recognition is the most common method in slot filling.  PromptDialog has the following three approaches to do entity recognition:

* A set of predefined entities are included, such as date, number, telephone, and ordinal words, eliminating the need of annotation, training and recognition.  
* PromptDialog supports entity recognition models like DIET form RASA which requires a designer to provide a set of training examples to recognize the entities.  The accuracy of entity recognition can be improved by providing a variety of utterances and displaying different entity words in example sentences. It is well known that the accuracy varies as there might not be enough training data available.
* PromptDialog is going to soon introduce a large language model based (e.g., chatGPT) entity recognition method to improve intent classification and entity recognition. 

### 2. Whole Utterance
The entire user utterance is used to fill a slot.   A common scenario is to collect user feedback which requires using the whole utterance, rather than extracting a specific phrase from it. It should be noted that although we do not care about the specific values extracted, we still need to add different examples to ensure that the model performs intent classification accurately and understands that the current utterance is going to be used for slot filling. 

### 3. User Defined Value
In this case, a specific value is selected to fill slots.  For example, when booking air tickets, a user may be asked if a window seat is preferred or not.  The value of Slot ‘windows’ shall be ’ true’ or ‘false.‘  No matter whether the user says “Yes” or “I want to sit next to window”, the ‘windows’ slot shall be set to ’True.‘  

### 4. Reset
Sometimes a slot value needs to be reset.   For example, a user might want to clear the previously entered information, or assign the slot an initial value at the beginning of a conversation.  It can also be used when filling different slots of the same entity type, such as numbers: Fill in the order number when an order identifier is given, and fill in the phone number when a phone number is provided. 

## Bot Response
The system will send different responses according to user utterance. PromptDialog currently supports five kinds of responses:
1. Text
2. Image
3. Attachment
4. Webhook
5. Action


## Template 

### Intent Template 
The intent template exists for the purpose of reusing intents. There are a few standard intents in conversation design, such as confirmation, denial and appreciation. Repeatedly constructing the same kind of intents is time consuming and error prone. Intent template is here to solve this problem. We can save an intent to be reused as a template and add it to the intent list. 

### Entity Template
For the same reason, there are standard entities that are commonly used accross different projects.  A set of predefined entities are stored in the system for quick references.  

### Response Template
The response list exists for the reuse of responses. We often encounter repeated responses in conversations, such as goodbye, calling the same webhook, and thanks.  We can save the response to be reused as an response template and add it to the response list. When we need to use this response elsewhere in the project, we can directly refer the saved response.  You are strongly recommended to use the response list as much as possible. 

## Frequently Asked Questions (FAQ) 
A list of typical questions that users might ask regarding a particular subject.  Each faq tuple has three components: (question, similar questions, answer).

PromtpDialog supports FAQs in three ways:
* RASA native FAQs that use RASA’s own routine to answer questions.  In this case, a user is required to give a few similar questions (the more the better) for each question so that RASA can correctly identify the correct one through learning. 
* ChatGPT/GPT4 enabled retrieval augmented generation (RAG) to answer questions.  PromptDialog employed an embedding and retrieval approach to dramatically improve accuracy.  This is an approach we recommend if users do not provie similar questions. However, there is small cost associated as the users need to access OpenAI/ChatGPT. 
* Customized BERT model with contrastive learning.  PromptDialog also provides its own model that can be deployed locally whose performance is between RASA FAQ and ChatGPT (close to ChatGPT).  It needs training examples. 

## Knowledge Base
In addition to FAQs, PromptAI can turn enterprise documents of various forms including CSV, PDF, Doc, Text, and HTML into one knowledge base and employ retrieval augmented generation (RAG) to answer questions directly based on these unstructured documents. This function is supported by [talk2bits.com](talk2bits.com) and can be integrated with RASA via PromptDialog. 

## Form
Form is used to collect multiple pieces of information like ticket booking, hotel reservation, order query, etc.  In PromptDialog, only a few configurations are needed to complete the design of a form, which was once quite complex: 
* `Slots`  The slot list declares several slots that the form needs to collect, how the bot asks about these slots’ value, and how to fill slots from the user reply. The bot will ask the user in sequence until all slots are filled. 
* `Interrupts` Users may not answer in the way we expect. If the user says “I don’t want to continue ”, the form filling will exit.
* `Confirm` When all the slots are filled out, the form will ask for a confirmation and then complete.  

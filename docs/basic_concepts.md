---
layout: default
title: Basic Concepts
nav_order: 7
---
## Intent

`User`:  I want to book a ticket to Boston on July 4th. 

`Intent`: Booking Ticket.  

There are various ways to express a user’s intent to book a ticket from one place to another.  They can be classified as intent declared by a designer as “Booking Ticket.”  In order to help LLMs to understand “Booking Ticket,” it was suggested to give a few examples.  Certainly the more (diverse), the better. 
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
* PromptDialog is a large language model based (e.g., chatGPT) entity recognition method to improve intent classification and entity recognition. 

### 2. Whole Utterance
The entire user utterance is used to fill a slot.   A common scenario is to collect user feedback which requires using the whole utterance, rather than extracting a specific phrase from it. It should be noted that although we do not care about the specific values extracted, we still need to add different examples to ensure that the model performs intent classification accurately and understands that the current utterance is going to be used for slot filling. 

### 3. User Defined Value
In this case, a specific value is selected to fill slots.  For example, when booking air tickets, a user may be asked if a window seat is preferred or not.  The value of Slot ‘windows’ shall be ’ true’ or ‘false.‘  No matter whether the user says “Yes” or “I want to sit next to window”, the ‘windows’ slot shall be set to ’True.‘  

### 4. Reset
Sometimes a slot value needs to be reset.   For example, a user might want to clear the previously entered information, or assign the slot an initial value at the beginning of a conversation.  It can also be used when filling different slots of the same entity type, such as numbers: Fill in the order number when an order identifier is given, and fill in the phone number when a phone number is provided. 

## Bot Response
The system will send different responses according to user utterance. PromptDialog currently supports five kinds of responses:
1. Text 
2. Webhook




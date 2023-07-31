---
layout: en
title: Rasa Design Tips
nav_order: 10
---
### Case: How to improve the intent classification accuracy?
In order to improve the intent classification accuracy, multiple example utterances are needed for each intent as these examples will be used to train the intent classification model. Examples with different intents should not overlap. A typical example is shipping number vs. order number.  If a customer provides a number, it might be difficult to determine where it is a shipping or an order number.  It is better to have the number as an intent and then assign this number to the slot of shipping number or phone number, according to the context. 

If you find that the intent recognition accuracy is not high enough, please confirm in turn:
* Whether there are similar unconsolidated intents. If there are, please merge the intents and save it in the intent list for reuse.
* Whether there are too few examples in the intent. If the number of examples is less than 3, or the number of examples for different intents is unbalanced, please add more examples as appropriate.
* Whether an example for testing exists in two or more intents. If it exists, please reorganize your intents. Please do not put the same or similar example into different intents, which will confuse the model.

### Case: Filling similar slots in a form
`Scenario`: In a user information collection form,  one needs to collect the user's last name, middle name, and first name through three rounds of conversations.

`Issues with common practices`: Typically, we add a user node after each slot collection node. One might find that this approach does not work effectively since the NLU component might not accurately identify the user's input, meaning the model cannot differentiate whether the user is referring to the last name, first name, or middle name, unless the model does context-sensitive intent classification. 

`Our solution`:  One solution is to merge intentions as much as possible. In this case, we can follow these steps:
1. Create a "Name" intent and provide examples with different last names, first names, and middle names. The examples should be as diverse as possible, and save them in the intent template.
2. In `Project View` -- `Intents`, find the newly created intent and add mapping rules. Here, you can choose "Enter Text" to fill in all user inputs into the corresponding slots.
3. Add this intent to each slot collection item in the form.
By following these steps, we can improve the accuracy of intent recognition and successfully fill slots based on user input.

### Case: Recovering a form after interruption
`Scenario`: A user interrupts a form by asking a question unrelated to the form. We expect the chatbot to answer her question and then return to the form.

`Issues with common practices`: Although we may have described the user's question and the system's response outside the form or in other parts of the flow, we would expect the chatbot to understand the user's question and return to the current form logic. However, in reality, the form's decision logic is unless explicitly instructed, it will default to exit the form. Therefore, even if the user's question has been answered in other parts of the flow, the form will not return to where it leaves off.

`Our solution`: Place user questions in the FAQ module and more complex ones in the interrupt section of the form. Only the FAQ and the interrupt section within the form can allow the form to resume after replying to the user.

By implementing this approach, the chatbot can provide answers to user questions, and return to the form after addressing the interruption.

### Case: RASA FAQ vs. GPT-based FAQ
RASA FAQ is a classification model.  LLM-based FAQ is an embedding based ranking model + retrieval model.  The ranking model can work on a much larger number of questions, thus more scalable.  It also does not require many training examples.  




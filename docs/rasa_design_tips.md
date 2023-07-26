---
layout: en
title: Rasa Design Tips
nav_order: 10
---
### Case: Extraction of Similar Variables in a Form
**Scenario**: In a user information collection form, it is necessary to collect the user's last name, middle name, and first name through three rounds of conversation.

**Issues with common practices**: Typically, we add a user node after each slot collection node. However, during the debugging phase, we found that this approach does not effectively extract the desired values. This problem is likely due to the NLU component not accurately identifying the user's input intention, meaning the model cannot differentiate whether the user is referring to the last name, first name, or middle name.

**Our solution**: When we need to filling the slots, the best approach is to merge intentions as much as possible. In this case, we can follow these steps:
1. Create a "Name" intent and provide examples with different last names, first names, and middle names. The examples should be as diverse as possible, and save them in the intent template.
2. In Project View >> Intents, find the newly created intent and add mapping rules. Here, you can choose "Enter Text" to fill in all user inputs into variables.
3. Add this intent to each slot collection item in the form.
By following these steps, we can improve the accuracy of intent recognition and successfully extract the desired slots from the user's input.

### Case: Recovering a Form After Interruption
**Scenario**: A user interrupts a form by asking a question unrelated to the form. We expects the chatbot to answer their question and then return to the form.

**Issues with common practices**: Although we may have described the user's question and the system's response outside the form or in other parts of the flow, we would expect the chatbot to understand the user's question and return to the current form logic. However, in reality, the form's decision logic is such that unless explicitly instructed, it will default to exiting the form. Therefore, even if the user's question has been answered in other parts of the flow, the form will not return to where it left off.

**Our solution**: Place simple user's words in the FAQ module and more complex ones in the interrupt section of the form. This is because only the FAQ and the interrupt section within the form can allow the form to resume after replying to the user.

By implementing this approach, the chatbot can provide answers to user questions, and return to the form after addressing the interruption.

### Case: RASA FAQ vs. GPT-based FAQ
RASA FAQ is a classification model.  LLM-based FAQ is an embedding based ranking model + retrieval model.  The ranking model can work on a large number of questions, thus more scalable.  It also does not require many training examples.  


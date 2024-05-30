---
layout: en
title: Form
parent: Developer's Guide
nav_order: 7
---
In PromptDialog, Form is a component that collects a set of information from the user. The information will be stored in slots. In the following example, the bot collects the information of email and problem from the user, and confirm with the user after completion. This information collection conversation can be implemented by form with two required slots: `email` and `problem`. 

```text
Bot : Hello! Welcome to help center.
      What can i do for you?
User: Hi there! I'm having an issue with my account.

# Collect the email and problem through the Form
Bot : What is the problem description for the issue?
User: I can't check my balance
Bot : What is your email address to lookup for creating the incident?
User: This is my email address example@example.com

Bot : Successfully opened up incident INC0010005 for you. Someone will reach out soon.
Bot : The ticket link: https://example.com/ticket/INC0010005
```
There are other similar scenarios that can be handled by Form:
- Check the weather: Collect the location and time to check the weather conditions in real time.
- Book air tickets: Book air tickets by obtaining the user's travel time and departure airport.
- ...

Next, we will introduce how to create the example of IT helpdesk mentioned above.

Step 1: Create a flow
![form-01.png](/assets/images/tutorial/form/form-01.png)

Step 2: Create a `User` node to start collect information
![form-02.png](/assets/images/tutorial/form/form-02.png)

Step 3: Click the `User` node and select `Form` in the pop-up menu and click `Add GPT Form Node`.There are two input fields:
- Name       : The name of the Form.
- Description: The prompt tells GPT about what information needs to be collected.

![form-03.png](/assets/images/tutorial/form/form-03.png)

Four pieces of information need to be completed after creating the form. 
![form-04.png](/assets/images/tutorial/form/form-04.png)

|  Name        | Required | Description                                             |
|--------------|----------|--------------------------------------------------------|
| Slots        |    Yes   | Slots that need to be collected                        |
| Functions   |    Optional    | - |
| Abort      |    Optional    | After the user decides not to give the information  |
| Complete      |    Yes   | After the information of the form is collected                      |
  
## Slots
We need to collect `email` and `problem` from users through Slots, and then explain in detail how to add `email`

Click on the `Slots` node and select `Add Slot` from the pop-up menu
![form-05.png](/assets/images/tutorial/form/form-05.png)

In the pop-up Slot window, we need to pay attention to the input `Slot Name`、`Slot Question` and `Description`
- Slot Name     : Fill in the name of the Slot `email` (enter the name and press Enter to create)
- Slot Question : A sentence to prompt the user to enter the information in the question.
- Description   : The Prompt tells GPT how to extract the slot value from user input.

More details [Slots Config](/docs/tutorial/slot_config/)

![form-06.png](/assets/images/tutorial/form/form-06.png)

So far, the `email` slot has been created.
![form-07.png](/assets/images/tutorial/form/form-07.png)

Add `problem` slot like this:
![form-08.png](/assets/images/tutorial/form/form-08.png)

## Functions
The function feature enables designers to create methods for validating and modifying slot values during form collection. If you require checks on quantity, logic, or validity of slot values during form completion, such as setting a limit of 6 people for a restaurant reservation form.
To modify a slot, you could utilize the function feature and define a function with its purpose in the description and list the relevant slot names in the parameter section. GPT will automatically verify and invoke these functions during form filling.

## Abort
During the form filling process, the user may exit the conversation
- Oh, I have solved the issue. Thank you. (Hence, interrupt the ticket report process.)

## Complete
After the form is filled, the `Complete` node follows.
![form-09.png](/assets/images/tutorial/form/form-09.png)

## The entire flow diagram is as follows:
![form-10.png](/assets/images/tutorial/form/form-10.png)
![form-11.png](/assets/images/tutorial/form/form-11.png)

## Run
![form-12.png](/assets/images/tutorial/form/form-12.png)


## FAQ

### Can I fill multiple slots in one sentence?
Yes, multiple slots in one sentence are supported.
Example: 
```text
Bot : Hello!
      What can i do for you?
User: Hi there! I'm having an issue with my account.

Bot :  What is the problem description for the issue?
# problem and email in one reply
User: I cannot check my balance, if I can check my balance again, please send an email to example@example.com

Bot : Successfully opened up incident INC0010005 for you. Someone will reach out soon.
Bot : The ticket link: https://example.com/ticket/INC0010005
```

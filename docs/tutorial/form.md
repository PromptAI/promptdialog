---
layout: en
title: Form
parent: Developer's Guide
nav_order: 7
---
# What is a Form?
In PromptDialog, Form is a component that collects a set of information from the user.

Order fruit:
```text
Bot : Hello!
      What can i do for you?
User: Hi there! I'd like to order some fruits

# Collect the type and count of fruit ordered by the user through the Form
Bot : Perfect! What kinds of fruits would you like to order?
User: I'd like some apples, please
Bot : Great! And how much apples would you like to order?
User: Let's go with 5 apples

Bot : Perfect! I have your order 5 apples.
User: Thanks
Bot : You are welcome! I'll prepare your order with 5 apples, fell free to ask!
```

In the example of the user ordering fruit, collect two slots of fruit type and quantity from the user, and confirm with the user after completion.

Other similar scenarios can also be handled by Form:
- Check the weather: Collect the region and time to check the weather conditions in real time.
- Book air tickets: Book air tickets by obtaining the user's travel time and departure airport.
- Other scenarios where a set of information needs to be collected.
---
# How to use Form?
Next, we will introduce how to create the example of user-ordered fruit mentioned above.

### Create `Fruit`Dialog flow
![img.png](/assets/images/tutorial/form/form-01.png)

Next, we create a `Bot` node to say hello:
![img_1.png](/assets/images/tutorial/form/form-02.png)

## Create fruit form
Click the `User` node and select `Form` in the pop-up menu
![img_3.png](/assets/images/tutorial/form/form-03.png)
The name of the Form can be set according to the function, here we fill in `Fruit order`
![img_2.png](/assets/images/tutorial/form/form-04.png)

Three pieces of information need to be completed after creating `fruit order`
![img_4.png](/assets/images/tutorial/form/form-05.png)

|  Name        | Required | Desc                                                   |
|--------------|----------|--------------------------------------------------------|
| Slots        |    Yes   | slots that need to be collected                        |
| Interrupts   |    No    | Possible problems filling the form or exiting the form |
| Confirm      |    Yes   | After the form runs successfully                       |
  
## Slots
We need to collect `fruit_type` and `count` from users through Slots, and then explain in detail how to add `fruit_type`

Click on the `Slots` node and select `Add Slot` from the pop-up menu
![img_5.png](/assets/images/tutorial/form/form-06.png)

In the pop-up Slot window, we need to pay attention to the input `Slot Name`, here fill in the name of the Slot `fruit_type` (enter the name and press Enter to create)
![img_6.png](/assets/images/tutorial/form/form-07.png)
Click `Save`
![img_7.png](/assets/images/tutorial/form/form-08.png)

The blue part is automatically created after saving the Slot:

- "fruit_type" : Slot name
- "-"          : `Rhetorical` node. Output a sentence to prompt the user to enter the information.
![img_8.png](/assets/images/tutorial/form/form-09.png)
Double-click the `Rhetorical` node and fill in`Perfect! What kinds of fruits would you like to order?`. Ask the user what type of fruit they want to buy
![img_11.png](/assets/images/tutorial/form/form-10.png)

After the `Rhetorical` node, we need to add a user input to get the type of fruit the user needs, and at this time we need to mark the desired fruit type.
![img_9.png](/assets/images/tutorial/form/form-11.png)
![img_10.png](/assets/images/tutorial/form/form-12.png)

So far, the `fruit_type` slot has been created.

![img_12.png](/assets/images/tutorial/form/form-13.png)
Add `count` slot like this:
![img_13.png](/assets/images/tutorial/form/form-14.png)

## Interrupts
During the ordering process, the user may ask some questions or exit the conversation
- Do apples have a sweet taste? (After answered the question, go back to From)
- Actually, I've changed my mind. I won't buy any fruits today. (Exit From, stop order)
    
### Do apples have a sweet taste?
![img_14.png](/assets/images/tutorial/form/form-15.png)

### Break Form
Add user input for user exit in interrupt, and use `break` node to exit Form
![img_15.png](/assets/images/tutorial/form/form-16.png)

## Confirm
The `Confirm` node handles the completion of the collection form, here we confirm the order to the user
![img_16.png](/assets/images/tutorial/form/form-17.png)

## The complete flow diagram is as follows:
![img_17.png](/assets/images/tutorial/form/form-18.png)
![img_18.png](/assets/images/tutorial/form/form-19.png)
![img_19.png](/assets/images/tutorial/form/form-20.png)

---

# FAQ

## Can I fill multiple slots in one sentence?
Yes, we support fill multiple slots in one sentence.
Example: 
```text
Bot : Hello!
      What can i do for you?
User: Hi there! I'd like to order some fruits

Bot : Perfect! What kinds of fruits would you like to order?
# count and fruit type in one sentence
User: Let's go with 5 apples

Bot : Perfect! I have your order 5 apples.
User: Thanks
Bot : You are welcome! I'll prepare your order with 5 apples, fell free to ask!
```

Mark multiple slots in the `Slot` node in From
![form-21](/assets/images/tutorial/form/form-21.png)
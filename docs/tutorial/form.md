---
layout: en
title: Form
parent: Developer's Guide
nav_order: 7
---
In PromptDialog, Form is a component that collects a set of information from the user. The information will be stored in slots. In the following example, the bot collects the information of fruit type and quantity from the user, and confirm with the user after completion. This information collection conversation can be implemented by form with two required slots: fruit_type and quantity. 

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
There are other similar scenarios that cab be handled by Form:
- Check the weather: Collect the location and time to check the weather conditions in real time.
- Book air tickets: Book air tickets by obtaining the user's travel time and departure airport.
- ...


## How to use Form?
Next, we will introduce how to create the example of user-ordered fruit mentioned above.

### Create `Fruit`Dialog flow
![img.png](/assets/images/form_fruit_create_flow.jpg)

Next, we create a `Bot` node to say hello and a `User` node to show the intent to buy fruit
![img_1.png](/assets/images/form_fruit_create_hello.jpg)

## Create fruit form
Click the `User` node and select `Form` in the pop-up menu
![img_3.png](/assets/images/form_fruit_create_form.jpg)
The name of the Form can be set according to the function, here we fill in `Fruit order`
![img_2.png](/assets/images/form_fruit_create_form_info.jpg)

Three pieces of information need to be completed after creating `fruit order`
![img_4.png](/assets/images/form_fruit_create_form_success.jpg)

|  Name        | Required | Desc                                                   |
|--------------|----------|--------------------------------------------------------|
| Slots        |    Yes   | slots that need to be collected                        |
| Interrupts   |    No    | Possible problems filling the form or exiting the form |
| Confirm      |    Yes   | After the form runs successfully                       |
  
## Slots
We need to collect `fruit_type` and `count` from users through Slots, and then explain in detail how to add `fruit_type`

Click on the `Slots` node and select `Add Slot` from the pop-up menu
![img_5.png](/assets/images/form_fruit_create_slot.jpg)

In the pop-up Slot window, we need to pay attention to the input `Slot Name`, here fill in the name of the Slot `fruit_type` (enter the name and press Enter to create)
![img_6.png](/assets/images/form_fruit_create_slot_info.jpg)

The blue part is automatically created after saving the Slot:

- "fruit_type" : Slot name
- "-"          : `Rhetorical` node. Output a sentence to prompt the user to enter the information.
![img_8.png](/assets/images/form_fruit_create_slot_success.jpg)
Double-click the `Rhetorical` node and fill in`Perfect! What kinds of fruits would you like to order?`. Ask the user what type of fruit they want to buy
![img_11.png](/assets/images/form_fruit_create_rhe_info.jpg)

After the `Rhetorical` node, we need to add a user input to get the type of fruit the user needs, and at this time we need to mark the desired fruit type.
![img_9.png](/assets/images/form_fruit_rhe_after_fruitType.jpg)
![img_10.png](/assets/images/form_fruit_rhe_after_fruitType_info.jpg)

So far, the `fruit_type` slot has been created.

![img_12.png](/assets/images/form_fruit_rhe_after_fruitType_success.jpg)
Add `count` slot like this:
![img_13.png](/assets/images/form_fruit_rhe_after_count.jpg)

## Interrupts
During the ordering process, the user may ask some questions or exit the conversation
- Do apples have a sweet taste? (After answered the question, go back to From)
- Actually, I've changed my mind. I won't buy any fruits today. (Exit From, stop order)
    
### Do apples have a sweet taste?
![img_14.png](/assets/images/form_fruit_interrupt_1.jpg)

### Break Form
Add user input for user exit in interrupt, and use `break` node to exit Form
![img_15.png](/assets/images/form_fruit_interrupt_2.jpg)

## Confirm
The `Confirm` node handles the completion of the collection form, here we confirm the order to the user
![img_16.png](/assets/images/form_fruit_confirm.jpg)

## The complete flow diagram is as follows:
![img_17.png](/assets/images/form_fruit_overview_1.jpg)
![img_18.png](/assets/images/form_fruit_overview_2.jpg)
![img_19.png](/assets/images/form_fruit_overview_3.jpg)

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
![form-21](/assets/images/form_fruit_required_slots.jpg)

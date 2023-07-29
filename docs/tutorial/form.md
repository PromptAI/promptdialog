---
layout: en
title: Form
parent: Developer's Guide
nav_order: 7
---

Form is used to collect multiple pieces of information in tasks like ticket booking, hotel reservation, order status checking, etc.  The following example shows how to build a dialog flow of ordering fruits. 

## Create a dialog flow

   ![01-form](/assets/images/tutorial/form/01-form.png)

## Add a user utterance node

   ![02-form](/assets/images/tutorial/form/02-form.png)

## Add a form (Information Collection) node

  ![03-form](/assets/images/tutorial/form/03-form.png)

  Add the name of the form.
  
  ![04-form](/assets/images/tutorial/form/04-form.png)
  
## Add slots
  1. Collect the fruit type
    <br/> 
     Click `Add Slot` (a slot node and a bot response node will be added by default), as shown in the figure.
     
     ![05-form](/assets/images/tutorial/form/05-form.png)
     
     Then click the `{}` node, and add the slot name **fruit_type**.
     
     ![06-form](/assets/images/tutorial/form/06-form.png)
     
     Describe how the bot will ask for this piece of information.
     
     ![07-form](/assets/images/tutorial/form/07-form.png)
     
     Click the query node to add a user utterance node so that the user can give the answer.  The bot will then extract the answer. Here the corresoding **slot name** (**fruit type**) and **slot value source**  (**entity extraction**) need to be selected.
     At the same time, mark the fruit type of the example sentences entered by the user for training.  Please provide a few examples. The more, the better.
     
     ![08-form](/assets/images/tutorial/form/08-form.png)

  3. Collect the fruit weight
     <br/>
     Continue to add **slot** - **fruit weight**, as shown in the figure.
     
     ![09-form](/assets/images/tutorial/form/09-form.png)
  
  3.Collect the fruit weight and the fruit type together
    Sometimes the customer might input fruit type and weight in the same utterance.  We need to extract 'fruit type' and 'fruit weight.' Click ** Slots **, add the training example sentence shown in the figure, and extract 'fruit type' and 'fruit weight' from these examples.
    
    ![15-form](/assets/images/tutorial/form/15-form.png)

## Interrupts
If the user changes her mind and would like to quit ordering fruits, she can exit conversation here.  Click Add User Node as shown in the figure.  

![10-form](/assets/images/tutorial/form/10-form.png)

Continue to add the bot response node and the interrupt collection node in order to handle user exit smoothly, as shown in the figure. After the interruption, the flow is going to jump out of the form to the breakpoint, where the designer can continue processing the interuption. 

![11-form](/assets/images/tutorial/form/11-form.png)

## Form completion 
  <br/>After the form is completed successfully, the customer can continue the flow after the completion node where the value of the slots will be available.  For example, the designer can add a bot response node to confirm the order with the customer. 
  
![12-form](/assets/images/tutorial/form/12-form.png)

## The complete flow diagram is as follows:
  ![16-form](/assets/images/tutorial/form/16-form.png)
  ![17-form](/assets/images/tutorial/form/17-form.png)
  ![18-form](/assets/images/tutorial/form/18-form.png)

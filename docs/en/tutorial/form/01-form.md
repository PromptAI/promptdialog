---
layout: en
title: Create Information Collection (Form)
parent: Developer's guide
nav_order: 23
---

# Concept description
{: .no_toc .header }
---
For the concept of information form, please refer to [Information Form](/docs/appendix/appendix/#表单)of Concept description

## Use Scenarios

There are many scenarios for using information forms. For example, users need to know their identity information when booking hotels and their order number when querying orders,
Such scenarios are suitable for processing with information forms.

## create form

### Create a conversation flow diagram **Buy fruit**
   ![01-form](/assets/images/tutorial/form/01-form.png)

### New user input node
   ![02-form](/assets/images/tutorial/form/02-form.png)

### Create an Information Collection (Form) node
  ![03-form](/assets/images/tutorial/form/03-form.png)
  ![04-form](/assets/images/tutorial/form/04-form.png)
### Improve information list (Slots)
  1. Collect fruit names
    <br/> 
    Click **Information Collection List (Slots)** Add **Information Collection Item** Node (a variable node and a machine query node will be added by default), as shown in the figure
     ![05-form](/assets/images/tutorial/form/05-form.png)
     Here we first click the variable node (**{}** node is not defined in the figure), add the variable **fruit name**, and modify the query content of the query node later.
     ![06-form](/assets/images/tutorial/form/06-form.png)
     ![07-form](/assets/images/tutorial/form/07-form.png)
     Click the query node to add a user input node to extract and collect information. Here we **variable name** , **fruit name**, **variable value source** , **entity extraction**,
     At the same time, mark the fruit name of the example sentences entered by the user for correct extraction
     ![08-form](/assets/images/tutorial/form/08-form.png)

  2. Collect fruit weight
     <br/>
     Continue to add **information collection items** - **fruit weight**, as shown in the figure after completion
     ![09-form](/assets/images/tutorial/form/09-form.png)
  
  3.Collect fruit weight and fruit names
    When we need to extract 'fruit names' and 'fruit weight' simultaneously in a user input, Select ** Slots **, add the training example sentence shown in the figure, and extract 'fruit names' and 'fruit weight' from the training example sentence`
    ![15-form](/assets/images/tutorial/form/15-form.png)

  4. Process other user requests (Interrupts)
     <br/>
     If the user wants to exit or ask him for a request during information collection, you can set it here. For example, let's take **Information Collection (Form)** as an example,
     Click Users' Other Requests and add user input points, as shown in the figure
     ![12-form](/assets/images/tutorial/form/12-form.png)
     Continue to add the machine reply node and the interrupt collection node in order to handle user exit more friendly, as shown in the figure
     ![13-form](/assets/images/tutorial/form/13-form.png)

### Complete collection succeeded
  <br/>After successful collection, we will confirm the collected information with the user. After the successful collection node, we will add a machine reply, confirm the order information with the user, and save it in the answer list (refer to [Create Answer List](/docs/tutorial/node-template/bot-global/)）
![14-form](/assets/images/tutorial/form/14-form.png)

### The complete flow diagram is as follows:
  ![20-form](/assets/images/tutorial/form/20-form.png)
  ![21-form](/assets/images/tutorial/form/21-form.png)


## Training and verification results
  Click **Debug Run - Current Module** in the upper right corner to wait for the training to complete the verification effect
  ![22-form](/assets/images/tutorial/form/22-form.png)
  ![23-form](/assets/images/tutorial/form/23-form.png)

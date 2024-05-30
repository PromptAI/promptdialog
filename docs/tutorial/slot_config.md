---
layout: en
title: Slots 
parent: Developer's Guide
nav_order: 18
---
Slots can be configured with slot type and default value.

![slot-config-01.png](/assets/images/tutorial/slot_config/slot-config-01.png)

| Settings | Explain | Scope | Remark |
|------|:-----|:---------|------|
|  Slot Type   | Type of data, optional values: string, number, boolean and array     |    Form slots      |      |
|  Enum    | Optional value when filling Slot  |    Form slots        |   For example pizza size, 6, 7 or 8 inches   |
|  Default Value    | Automatically fill slots when start a chat   |          | For example, username, you can use this slot directly during the conversation without asking the user.      |

## Slot Type
There are different types of slot values. 
- String: String, such as email address, various names, user opinions and other text-type data.
- Number: Numbers, such as quantity, weight, currency, age and other numeric data
- Boolean: Boolean value, such as yes or no, this type of data can be selected in scenarios with only two choices.
- Array: Array, a set with multiple values.

## Possible values
We can enumerate the possible values for a slot if needed: 
Steps:
1. Enable possible values
2. Click the `Add` button to add

![slot-config-02.png](/assets/images/tutorial/slot_config/slot-config-02.png)

## Default value
Automatically set the default value of a slot when a chat starts.

- Set Value: Use a preset value
- Local Store: Read the value of a specified key from Local Store
- Session Store: Read the value of a specified key from Session Store
- Custom Script: Run a custom JavaScript code and fill the slot with the returned value

![slot-config-03.png](/assets/images/tutorial/slot_config/slot-config-03.png)

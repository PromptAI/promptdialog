---
layout: en
title: Dynamic Slots
parent: Advanced Control
nav_order: 1
---
<!-- 如果您想实现定义Form中Slot的多样性,我们强烈推荐您使用`Form Define Slot Code`该功能! -->
<!-- 该功能可以最大可能的定义您Form中那些Slot,比如:-->
<!-- 根据用户输入`age_slot_name`的值,是否等于18的数据来条件获取的相应Slot定义 -->
 
If a fixed set of slots cannot meet your needs in a form, we strongly recommend using the `Required Slots` feature, which allows dynamic changes to the slots required in a form according to the user's input within the form.  Here is an example. 
```text
user: I'd like to book a chinese restaurant.
bot: Do you want to sit outside?
user: Yes / No
bot: Do you want to sit in the shade or in the sun? / Please provide additional preferences
```
This is a conversation between a user and a restaurant booking assistant. The assistant asks the user to fill the slot `seat`. If the user responds 'yes', the bot needs to inquire about the details. However, if the user replies 'no', the bot will not collect the seat preference slot. We can realize this conversation by writing code below.


```python
class ValidateRestaurantForm(FormValidationAction):
    def name(self) -> Text:
        return "validate_restaurant_form"

    async def required_slots(
        self,
        domain_slots: List[Text],
        dispatcher: "CollectingDispatcher",
        tracker: "Tracker",
        domain: "DomainDict",
    ) -> List[Text]:
        additional_slots = ["outdoor_seating"]
        if tracker.slots.get("outdoor_seating") is True:
            # If the user wants to sit outside, ask
            # if they want to sit in the shade or in the sun.
            additional_slots.append("shade_or_sun")

        return additional_slots + domain_slots
```
The `required_slots` function returns a list of slots that the form needs to collect. Before the chatbot asks for filling any slot, rasa will execute the `required_slots` function to determine which slots should be collected. Consequently, we can use the `tracker.get_slot` function to obtain previously filled slots, and then return the slots that need to be collected.   Note that if you need not change required slots dynamically, you need not touch this function. PromptDialog will automatically generate the required slots based on the form diagram. 

The feature is available when you click the **Slots** node and then choose Edit Node.  It will be displayed on the right panel.

---
layout: en
title: Dynamic Form Slot Define
parent: Advanced Control
nav_order: 1
---
<!-- 如果您想实现定义Form中Slot的多样性,我们强烈推荐您使用`Form Define Slot Code`该功能! -->
<!-- 该功能可以最大可能的定义您Form中那些Slot,比如:-->
<!-- 根据用户输入`age_slot_name`的值,是否等于18的数据来条件获取的相应Slot定义 -->
 
如果固定的Slot无法满足您的需求，我们强烈推荐您使用`Form Define Slot Code`功能。该功能能够根据每轮对话中用户的输入，动态调整Form中所需的Slot。举个例子：
```text
User: I'd like to book a chinese restaurant.
Chatbot: Do you want to sit outside?
User: Yes / No
Chatbot: Do you want to sit in the shade or in the sun? / Please provide additional preferences
```
这是一个订餐机器人的对话。机器人询问用户是否需要坐外面，如果用户回答是，则进一步询问座位详情；而如果用户不想坐外面，机器人就不会收集座位详情这个slot。
我们可以通过编写Code实现这一效果。

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
`required_slots` function 返回的是form需要收集的slot列表。在Chatbot进行询问前，都会执行`required_slots`函数，按照顺序决定接下来收集的slot。因此，我们可以利用`tracker.get_slot()`方法获取到之前填过的slot，并据此动态修改接下来询问的slot item。

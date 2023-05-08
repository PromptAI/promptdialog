---
layout: en
title: Bot-Action
parent: Developer's guide
nav_order: 40
---

# Action
{: .no_toc .header }
---
In `Bot Response`, we hold the "Action" function, that is, we define the Action code held by Rasa. We will merge the Action code in the machine reply into the `Actions. py` file, and call this part of the code when Rasa triggers the bot reply.

## Rasa conversion
Now let's look at an example, which will show how we can convert the Action code into Rasa items.

### Action example:generate reply

![action-01](/assets/images/tutorial/action/action-01.png)

In the flow chart above, in the last `Bot Response` node, we added action type reply.

![action-02](/assets/images/tutorial/action/action-02.png)

This is a simple greeting text.

![action-02](/assets/images/tutorial/action/action-03.png)

Action successfully executed and output the corresponding content.

### Action convert

Among them, there are probably two positions related to the Action code:

- actions/Actions.py
- data/stories.yml

#### Actions.py

Before that, we need to know what [Action](https://rasa.com/docs/rasa/action-server/sdk-actions/) is。  To understand simply, Action is a way that Rasa provides to control dialogue from the dimension of Python code. It has a fixed structure, and the `run` method can be implemented according to the requirements when it is used.
```python

class BotCustomaction_cp_ce1atgfk53b4_0(Action):
    def name(self) -> Text:
        return "action_cp_ce1atgfk53b4_0"
    async def run(self,
                dispatcher,
                tracker: Tracker,
                domain: Dict[Text, Any],) -> List[Dict[Text, Any]]:
        dispatcher.utter_message(text=" Action ") return []
```
That is, after the editing of Action, we will create a standard Class. In order to ensure that the details can be correctly adjusted and masked, we hide the editing of `class` and `name` and expose the implementation of `run` function.

- `BotCustomaction_uniqueid_index(Action)` Action class。
- `def name(self) -> Text` Name returned `action_uniqueid_index`
- `async def run`Edited by user

illustrate：
- uniqueid： unique `Bot Response` id
- index: Position in `Bot Response`, calculated from 0。

#### stories.yml

```yaml
version: '3.1'
stories:
- story: story_0
  steps:
  - intent: init
  - action: utter_project_welcome
  - intent: intent_Hello
  - action: utter_Hi___我是⼩维_很⾼兴⻅到你_
  - intent: intent_⼩维你好！
  - action: action_cp_ce1atgfk53b4_0
```

there `setps` in `story_0`  indicates that when user input `⼩维你好！` will call `action_cp_ce1atgfk53b4_0`

### Action.run function

In addition to a simple call to Rasa to reply，Action also holds other function by use [dispatcher](https://rasa.com/docs/rasa/action-server/sdk-dispatcher/) and [tracker](https://rasa.com/docs/rasa/action-server/sdk-tracker) 
- dispatcher : control Rasa output by call `dispatcher.utter_message()`
- tracker ：current user's tracker。by using `tracker.get_slot(slot_name)` access to slot value(that is, the value corresponding to the variable) ，latest user's message `tracker.latest_message`

## Action example：Reply according to variable value
Suppose that in the scenario of "helping to buy tickets for amusement park", there are 100 tickets for adults and 50 tickets for children. We try to use Action to realize the price calculation.
<br/>In this scenario, we need to ask each household the number of tickets purchased by children and adults, which we can complete through Form. At this time, we create two variables: `number of children` and `number of adults`

![action-04](/assets/images/tutorial/action/action-04.png)

After the collection is completed, we create a bot response node with Action to calculate the price

![action-05](/assets/images/tutorial/action/action-05.png)

Action code illustrate ：
- 5~6 : by call  tracker.get_slot() to get the variable value，the variable needs to use ${} to complete the quotation
- 8～9 : Define the price of a single ticket
- 11 : Calculate total price
- 12～14 ：Output the number of tickets and total price in sequence
`attention：The above code is only for demonstration`
  
### Result

![action-06](/assets/images/tutorial/action/action-06.png)

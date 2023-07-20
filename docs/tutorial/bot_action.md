---
layout: en
title: Customized Action
parent: Developer's Guide
nav_order: 13
spliter: true
---

In `Bot Response`, the designer could click "+Action" to add an Action functions written in Python, which will give the designer the tool of writing customization code.  The Action python code will be placed to the `Actions. py` file in Rasa and will be triggered when the bot gives the current response. 

![action-02](/assets/images/tutorial/action/action-02.png)

In the pop up window, the designer can write python code of the Action function. 
![action-01](/assets/images/tutorial/action/action-01.png)


## Rasa conversion
Now let's look at an example that shows how we add the Action code into Rasa files: 

- actions/Actions.py
- data/stories.yml

### Actions.py

Action is introduced in [Rasa Action](https://rasa.com/docs/rasa/action-server/sdk-actions/).  It is a way that Rasa provides to control dialogue from customized Python code. It has a fixed structure, and the `run` method can be implemented according to the requirement.
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
After editing code in an Action function, the designer will create a standard Class.  In order to ensure that the details can be correctly adjusted, we hide the editing of `class` and `name` and only expose the implementation of `run` function, which is the Action function.

- `BotCustomaction_uniqueid_index(Action)` Action class。
- `def name(self) -> Text` Name returned `action_uniqueid_index`
- `async def run`E dited by user

illustrate：
- uniqueid： unique `Bot Response` id
- index: Position in `Bot Response`, calculated from 0。

### stories.yml

```yaml
version: '3.2'
stories:
- story: story_0
  steps:
  - intent: init
  - action: utter_project_welcome
  - intent: intent_Hello
  - action: utter_Hi
  - intent: intent_Hello
  - action: action_cp_ce1atgfk53b4_0
```

`Steps` in `story_0`  indicates that when a user say `hello`, the bot will call `action_cp_ce1atgfk53b4_0`. 

### Action.run function
[no idea what it is talking about, need more details]
In addition to a simple call to Rasa to reply，Action also holds other function by use [dispatcher](https://rasa.com/docs/rasa/action-server/sdk-dispatcher/) and [tracker](https://rasa.com/docs/rasa/action-server/sdk-tracker) 
- dispatcher : control Rasa output by call `dispatcher.utter_message()`
- tracker ：current user's tracker。by using `tracker.get_slot(slot_name)` access to slot value(that is, the value corresponding to the variable) ，latest user's message `tracker.latest_message`

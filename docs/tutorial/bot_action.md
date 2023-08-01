---
layout: en
title: Customized Action
parent: Developer's Guide
nav_order: 9
---

In the bot response panel, the designer could click "+Action" to add an Action function written in Python, which will give the designer the tool of inserting python code with more complex logic.  The Action python code will be placed to the `Actions. py` file in Rasa and will be triggered when the bot gives the current response.  

![action-02](/assets/images/tutorial/action/action-02.png)

In the pop up window, the designer can write python code of the Action function.  

![action-01](/assets/images/tutorial/action/action-01.png)


## Rasa conversion
Now let's look at an example that shows how we add the Action code into Rasa files:  

- actions/Actions.py
- data/stories.yml

### Actions.py

Action is introduced in [Rasa Action](https://rasa.com/docs/rasa/action-server/sdk-actions/). It is a way that Rasa provides to control dialogue from customized Python code. It has a fixed structure, the `name` method declare this action class, and the `run` method will be executed during the conversation. We hide the editing of `class` and `name`, and only expose the implementation of the `run` function, which is the Action function. This is an example of Action Function.

```text
Chatbot: I can calculate your BMI. Can you tell me your height?
User: Sure. I'm 165cm.                                               [intent: intent_height, {"height": "165"}]
Chatbot: Great. What about your weight?
User: Maybe 60kg.                                                    [intent: intent_weight, {"weight": "60"}]
Chatbot: {action: calculate_BMI}
```
In order to complete the conversation, we can use the Action Function to do the calculation.

```python

class BotCustomaction_cp_ce1atgfk53b4_0(Action):
    def name(self) -> Text:
        return "action_cp_ce1atgfk53b4_0"
    async def run(self,
                dispatcher,
                tracker: Tracker,
                domain: Dict[Text, Any],) -> List[Dict[Text, Any]]:
        height = float(tracker.get_slot("height"))
        weight = float(tracker.get_slot("weight"))
        bmi = height / (weight * weight)
        dispatcher.utter_message(text="I get it, your BMI is: " + bmi)
        return []
```

After editing code in an Action function, the designer will create a standard class.  

[The following is not clear]

- `BotCustomaction_uniqueid_index(Action)` Action class。
- `def name(self) -> Text` Name returns `action_uniqueid_index`
- `async def run` edited by the developer

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
  - intent: intent_height
  - action: utter_ask_weight
  - intent: intent_weight
  - action: action_cp_ce1atgfk53b4_0
```

`steps` in `story_0`  indicates that when a user tells the height and weight, the bot will call `action_cp_ce1atgfk53b4_0` to give the result. 

### Action.run function
In the `run` method, you can get all the chatbot information by parameters [dispatcher](https://rasa.com/docs/rasa/action-server/sdk-dispatcher/) and [tracker](https://rasa.com/docs/rasa/action-server/sdk-tracker) 
- dispatcher : the same as bot response. You can control Rasa output by calling `dispatcher.utter_message()`
  ```python
  class BotCustomaction_test_dispatcher(Action):
      def name(self) -> Text:
          return "action_test_dispatcher"
      async def run(self,
                  dispatcher,
                  tracker: Tracker,
                  domain: Dict[Text, Any],) -> List[Dict[Text, Any]]:
          dispatcher.utter_message(text="This is a text response")
          dispatcher.utter_message(text="The second response")
          return []
  ```
  This action means:
  ```text
  Chatbot: This is a text response
  Chatbot: The second response
  ```
- tracker ：the current user's tracker. By using `tracker.get_slot(slot_name)` access to the slot value(that is, the value corresponding to the variable) ，the latest user's message `tracker.latest_message`
    ```python
      class BotCustomaction_test_tracker(Action):
          def name(self) -> Text:
              return "action_test_tracker"
          async def run(self,
                      dispatcher,
                      tracker: Tracker,
                      domain: Dict[Text, Any],) -> List[Dict[Text, Any]]:
              query = tracker.latest_message["text"]
              height = tracker.get_slot("height")
              dispatcher.utter_message(text="you said: " + query)
              dispatcher.utter_message(text="This is the slot value of height" + height)
              return []
    ```
    This action means:
    ```text
    User: I am 170cm.
    Chatbot: you said: I am 170cm.
    Chatbot: This is the slot value of height: 170
    ```

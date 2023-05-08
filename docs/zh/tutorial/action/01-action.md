---
layout: default
title: Bot-Action
parent: 开发指南
nav_order: 40
---

# Action
{: .no_toc .header }
---
在“机器回复”中，我们⽀持"Action"功能，即⾃定义Rasa⽀持的Action代码。我们会将机器回复中的Action代码合并到`Actions.py`⽂件中，在Rasa触发机器回复时调⽤该部分代码。

## Rasa转换
现在我们看⼀个例⼦，它将展示我们如何将Action代码转换到Rasa项⽬⽂件中。

### Action示例：⽣成回复

![action-01](/assets/images/tutorial/action/action-01.png)

上⾯的流图中，最后⼀个`机器回复`节点中，我们添加了⼀个Action类型的回复。

![action-02](/assets/images/tutorial/action/action-02.png)

这⾥输出了⼀句简单的打招呼⽂本。

![action-03](/assets/images/tutorial/action/action-03.png)

Action成功执⾏并输出了对应的⽂本内容。

### Action 转换

其中，⼤概有两个位置与Action代码有关:

- actions/Actions.py
- data/stories.yml

#### Actions.py

在这之前，我们需要知道什么是[Action](https://rasa.com/docs/rasa/action-server/sdk-actions/) 。 简单理解，Action是Rasa提供⼀个从Python代码的维度来控制对话的⼊⼝。他有固定的结构，在使⽤时按照要求实现`run`⽅法即可。

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
即：在Action编辑完成后，我们会⽣成⼀个标准的Class。为保证能被正确调⽤和屏蔽细节，我们隐藏`class` 、`name`的编辑，暴露了`run`⽅法实现。

- `BotCustomaction_uniqueid_index(Action)` Action class。
- `def name(self) -> Text` 返回的名称 `action_uniqueid_index`
- `async def run`由⽤户界⾯编辑

其中：
- uniqueid： 机器回复节点唯⼀的id
- index: 处于机器回复中的位置，从0开始计算。

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

这⾥的`story_0`的`setps`中显示指明了在⽤户输⼊`⼩维你好！`时调⽤`action_cp_ce1atgfk53b4_0`

### Action.run⽅法

除了简单的调⽤Rasa进⾏回复，Action还⽀持其他⽤法，主要通过使⽤ [dispatcher](https://rasa.com/docs/rasa/action-server/sdk-dispatcher/) 和 [tracker](https://rasa.com/docs/rasa/action-server/sdk-tracker) 来达到使⽤⽬的
- dispatcher : 控制Rasa输出，通过调⽤`dispatcher.utter_message()`
- tracker ：当前⽤户的状态跟踪器。通过使⽤`tracker.get_slot(slot_name)`访问槽位值(即变量对应的值)，最近的⽤户消息是`tracker.latest_message`

## Action 示例：根据变量值回复
假设在`⾃助购买游乐园⻔票`的场景中，成⼈100⼀张，⼉童50⼀张。我们尝试⽤Action来实现⾃动计算价格。
<br/>在这个场景中，我们需要分别向⽤户询问成⼈、⼉童的购票张数，这⾥我们通过Form来完成。此时我们创建两个变量：`成⼈数量`、`⼉童数量`

![action-04](/assets/images/tutorial/action/action-04.png)

在收集完成后，我们创建⼀个Action的机器回复节点来计算价格

![action-05](/assets/images/tutorial/action/action-05.png)

Action代码说明：
- 5~6 : 通过 tracker.get_slot()来获取变量值，其中变量需要⽤${}来完成引⽤
- 8～9 : 定义单张票的价格
- 11 : 计算总价
- 12～14 ：依次输出订票张数和总价
`注意：以上代码仅做演示`
  
### 效果

![action-06](/assets/images/tutorial/action/action-06.png)

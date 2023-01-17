---
layout: default
title: 创建对话流图
parent: 开发指南
nav_order: 5
---

# 对话流图
{: .no_toc .header }
---

## 创建对话流图

依次点击对话概览下的对话流图，新增流图，弹出的对话框中输入新的对话流图节点名、描述信息，点击确认即可创建好新的分支。
![01-create-flow](/assets/images/tutorial/flow/01-create-flow.png)

## 创建对话流图用户输入节点

创建完新的对话流图后，会自动跳转到所创建的对话流图的编辑主页。此时，点击对话流图的根节点，从弹出的对话框中选择需要创建的节点类型。
这里我们选择节点类型为用户输入。

![02-create-flow-node](/assets/images/tutorial/flow/02-create-flow-node.png)

## 编辑用户输入节点

当我们选择完需要创建的用户输入节点后，右侧会弹出用户输入节点编辑界面，这里我们可以编辑用户的意图。期待用户输入跟下面的更多训练例句都会转换为用户意图。

![03-edit-flow-node](/assets/images/tutorial/flow/03-edit-flow-node.png)

## 添加回复节点

继续点击用户输入节点，从弹出框选择机器回复。用户如输入与该节点前面的用户节点匹配的时候，此信息将会回复给用户。

![04-edit-flow-bot](/assets/images/tutorial/flow/04-edit-flow-bot.png)

### 回复多个内容
当需要回复多个内容的时候，我们可以通过在回复节点添加多个文本或者在需要回复多个内容的节点后面继续添加回复节点实现

- 回复节点添加多个文本实现方式，如图所示
  ![08-create-multi-bot-replay](/assets/images/tutorial/flow/08-create-multi-bot-replay.png)

- 需要回复多个内容的节点后面添加回复节点实现方式，如图所示
  ![09-create-multi-bot-replay](/assets/images/tutorial/flow/09-create-multi-bot-replay.png)

当机器回复多个内容的情况下，你需要调整每个内容的回复顺序，可以参照以下方法
- 回复节点多个文本顺序调整，你可以鼠标选中图示按钮，然后拖动到您期望的顺序然后松开即可
![20-bot-text-order.png](/assets/images/tutorial/flow/20-bot-text-order.png)
- 如果你需要调整连续多个机器回复节点回复顺序，您只需要借助回收站功能来调整机器回复节点顺序

两种方式的对话效果图都如下：
![10-create-multi-bot-replay](/assets/images/tutorial/flow/10-multi-bot-replay.png)

### 回复节点添加附件
如图所示打开回复节点的编辑界面，然后点击**附件**，按照提示上传附件。
![30-bot-extras](/assets/images/tutorial/flow/30-bot-extras.png)

上传完成后：
![31-bot-extras](/assets/images/tutorial/flow/31-bot-extras.png)

对话效果图如下，可以直接点击**附件**进行下载：
![32-bot-extras](/assets/images/tutorial/flow/32-bot-extras.png)

## 完成

至此，一个最简单的对话流图就完成了。
![05-create-flow](/assets/images/tutorial/flow/05-create-flow.png)

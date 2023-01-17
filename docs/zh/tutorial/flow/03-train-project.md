---
layout: default
title: 调试对话流图
parent: 开发指南
nav_order: 7
---

# 调试项目
{: .no_toc .header }
---

此教程将引导您对创建完成的对话流图进行调试。

## 选择对话流图进行调试

点击进入需要调试的项目，选择左侧对话流图中需要调试的对话流图，点击右上角的调试运行，可从弹出框按需求选择对当前对话流图进行调试、对当前项目的所有对话流图进行调试、组合
对话流图进行调试。这里我们选择当前模块。注意：选择的对话流图越多，调试所花费的时间越长，建议只选择必须的对话流图进行调试。
![00-debug-train](/assets/images/tutorial/flow/train/00-debug-train.png)

## 训练中

当选择调试的模块后，自动弹出训练进度框，展示训练进度。此时用户可以跳转到其它页面操作，也可以留在此页面等待训练完成。

![04-debug-training](/assets/images/tutorial/flow/train/04-debug-training.png)

## 取消训练

从左侧选择正在训练的对话流图（正在调试运行的对话流图**调试运行**按钮上方会提示`正在调试运行中`），点开右下叫的小机器人图标（当所选对话流图不在训练中的时候是无法点开的），此时可以看到当前对话流图的
训练状态，点击**确定取消**即可取消当前训练任务。

![04-debug-training](/assets/images/tutorial/flow/train/04-debug-training.png)
## 训练完成

如图所示，训练完成后，会自动弹出机器人聊天窗口。

![05-edit-option](/assets/images/tutorial/flow/train/05-debug-train-finish.png)

## 验证结果

如图所示，在机器人对话窗口输入聊天信息，验证机器人回复是否符合预期。
这里我们验证的是用户询问水果价格是否能从webhook正确获取水果价格信息，结果符合预期。

![12-create-webhook](/assets/images/tutorial/flow/train/06-debug-train-confirm.png)


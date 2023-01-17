---
layout: default
title: 创建复杂对话流图
parent: 开发指南
nav_order: 6
---

# 创建复杂对话流图
{: .no_toc .header }
---

此教程将引导您创建一个复杂的对话流图，对话流图将包含以下节点类型：

- 不带变量的用户输入节点
- 带变量的用户输入节点
- 用户选项节点
- webhook 节点
- 信息收集（Form）节点
- 信息收集（Form）节点包含 Break 节点
- 带意图模板的用户输入节点

## 不带变量的用户输入节点

如所示创建一个用户输入节点，填写好相关信息后，**是否需要提取变量**后面的开关保持关闭，点击右上角保存，不带变量的用户点击节点即创建完成。
![04-create-user](/assets/images/tutorial/flow/complex/04-create-user.png)

## 带变量的用户输入节点

如图所示，选择用户输入节点，然后按照图示编辑。打开是否需要提取变量开关，然后选择需要提取的变量名（如果没有则点击开关下的加号创建）
在期待用户输入跟更多训练例句中选择变量的提取值进行标注。

![11-create-user-field](/assets/images/tutorial/flow/complex/11-create-user-field.png)

## 用户选项节点

如图所示，选择创建**用户选项**节点,然后从弹出框填写好相关信息后，点击右上角保存，用户选项节点即创建完成。

![05-edit-option](/assets/images/tutorial/flow/complex/05-edit-option.png)

## webhook 节点

首先点击左侧**项目视图**-**Webhooks**，进入 Webhooks 管理界面，然后点击右上方的新增创建一个新的 Webhook。

![12-create-webhook](/assets/images/tutorial/flow/complex/12-create-webhook.png)

这里我们以一个 get 接口为例，新建的 webhook 如下图所示：

![13-create-webhook](/assets/images/tutorial/flow/complex/13-create-webhook.png)

webhook 创建完成后，我们回到刚刚的对话流图编辑页面，选择之前创建的提取水果名变量的用户输入节点下机器回复节点（如果没有则创建一个）。
这里我们需要删除默认的回复，然后创建一个 webhook 回复，然后点击保存

![14-create-webhook](/assets/images/tutorial/flow/complex/14-create-webhook.png)

对话效果图：

![18-chat-webhook](/assets/images/tutorial/flow/complex/18-chat-webhook.png)

## 信息收集（Form）节点

如图所示，选择创建**信息收集(From)**节点,然后从弹出框填写好相关信息后，点击确定。

![06-create-form](/assets/images/tutorial/flow/complex/06-create-form.png)

点击信息列表（Slots）,选择**信息收集项**，从弹出的窗口选择需要收集的变量名称。

![07-create-form-solts](/assets/images/tutorial/flow/complex/07-create-form-solts.png)

如果弹出的窗口变量名为空，此时可以点击右侧的添加按钮,添加变量

![08-create-form-solts](/assets/images/tutorial/flow/complex/08-create-form-solts.png)

编辑变量提取节点后的**缺失询问**，完成后继续添加**用户输入**节点。此时变量值来源选择实体提取，然后按照图示进行标注。

![09-create-form-user](/assets/images/tutorial/flow/complex/09-create-form-user.png)

点击**信息收集（Form）**下的**用户其它请求（Interrupts）**,然后创建并完善
用户输入节点，然后继续点击创建的用户输入节点，创建**信息收集中断**节点，创建完成后如图所示：

![10-create-form-break](/assets/images/tutorial/flow/complex/10-create-form-break.png)

## 带意图模板的用户输入节点

选择用户节点，点击**保存到意图列表**，从弹出框设置模板名，然后保存。如图所示：

![15-create-user](/assets/images/tutorial/flow/complex/15-create-user.png)

选择用户节点，点击从模板中选取，从弹出框选择需要的模板，然后保存。如图所示：

![16-create-user](/assets/images/tutorial/flow/complex/16-create-user.png)

## 完成创建

至此，一个包含各种类型的对话流图就创建完成了，接下来就可以开始训练。整个会话分支预览如图所示：

![17-create-flow](/assets/images/tutorial/flow/complex/17-create-flow.png)

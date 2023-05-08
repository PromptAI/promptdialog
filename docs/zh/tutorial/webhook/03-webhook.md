---
layout: default
title: Webhook-默认回复
parent: 开发指南
nav_order: 10
---

# Webhook
{: .no_toc .header }
---
让未匹配到用户意图时行为更加可控，我们增加了默认回复配置Webhook的功能，不光可以对接到用户自身系统，还可以调用大模型以返回更智能的回答。


## Webhook

Webhook支持通过变量的方式获取到最新的用户输入和对话id。

- latest_message: 触发webhook时的用户输入，如果是默认回复触发的Webhook，那么就是默认回复时的用户输入。（注：非默认回复的webhook也可以使用该变量）
- send_id: 当前对话的id

### 实例

接下来将演示如何将默认回复接入Webhook

### API准备

Webhook需要调用一个外部的API来获取回复。 假设我们有这样一个API：

```shell
curl http://localhost/chat?input=PromptAI可以做什么？&chatId=xxx

{
	"message": "Prompt AI是一款基于云的专业智能会话设计云平台，能够提供全面的智能会话设计服务。它具有简单易用、快捷便利、多场景切换和快速上线等特点，能够满足中小企业客户的全面需求。但具体它能做什么需要根据用户的具体需求来定制和扩展。"
}
```

通过Http Get请求将问题、会话Id作为输入，响应返回JSON格式的数据，其中message字段即为回复。

### Webhook配置

![03-1-webhook.png](/assets/images/tutorial/webhook/03-1-webhook.jpg)
![03-2-webhook.jpg](/assets/images/tutorial/webhook/03-2-webhook.jpg)

首先，我们配置了名称、请求地址，在请求地址中按照API要求通过使用内置变量`{latest_message}`、`{send_id}`将默认回复的用户输入及对话id传递给API。
最后，在响应处理部分提取`message`到`relpy`,在响应成功时输出`{reply}`

### 默认回复配置Webhook

在项目的"对话概览"-"默认回复"切换为配置好的默认回复 webhook:
![03-3-webhook.jpg](/assets/images/tutorial/webhook/03-3-webhook.jpg)

### 测试

通过Webhook对该输入进行回答。
![03-4-webhook.jpg](/assets/images/tutorial/webhook/03-4-webhook.jpg)

---
layout: default
title: 默认回复
nav_order: 5
has_children: true
---

# 默认回复
{: .no_toc .header }

----
默认回复又称为未知问题回复，即当匹配不上用户输入时给出的回答。

---

## 默认回复配置Talk2Bits

针对一些文本、文件及Web的资料可以通过Talk2Bits快读构建知识库，通过接入类Talk2Bits的平台可以和PromptAI进行相互补充。
本文将介绍如何将Talk2Bits接入Fallback。

* 注：其他平台可以通过Webhook进行接入，有任何疑问或需要请联系我们。

### Talk2Bits

Talk2Bits在添加内容后可自动生成配置代码，不仅导入Web页面在右下角直接生成Chatbot，而且还可以通过手机扫码直接对话。

![01-defalut-reply.jpg](/assets/images/default_reply/01-defalut-reply.jpg)

* 更多信息，请访问: https://talk2bits.com/
* Chatbot介绍: https://talk2bits.com/app/publish

### 实例

接下来将演示如何将Fallback接入Talk2Bits

### Talk2Bits 代码准备

在登录Talk2Bits后，点击"Chatbot"后会打开代码弹窗，然后点击“Copy”按钮或手动复制获得导入的代码。
![02-default-reply.jpg](/assets/images/default_reply/02-default-reply.jpg)


### 默认回复配置Talk2bits

在项目的"对话概览"-"默认回复"切换为"Talk2Bits"并粘贴上一步获取的代码,最后点击保存即可。
![03-default-reply.jpg](/assets/images/default_reply/03-default-reply.jpg)

### 测试

通过Talk2Bits对用户输入进行回答。
![04-default-reply.jpg](/assets/images/default_reply/04-default-reply.jpg)

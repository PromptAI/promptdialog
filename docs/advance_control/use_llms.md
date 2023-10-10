---
layout: en
title: Use LLMs
parent: Advanced Control
nav_order: 5
spliter: true
---
<!-- 使用LLMs可以减少标注、提高对话准确率。 -->
Using LLMs can reduce annotations and improve dialogue accuracy.

|     Function   |   LLms   | Remark |
|----------------|----------|:-----|
|      FAQ       | ChatGpt  |      |
|      Flow      | ChatGpt  |      |
| Knowledge Base | ChatGpt  |      |
<!--Flow开启LLMs时需要将FAQ的LLMs功能开启-->
*When Flow turns on LLMs, you need to turn on the LLMs function of FAQ.*
## Pricing
<!--开启后将在训练/对话阶段消耗Token，目前系统为所有用户赠送了`100,000.00`Token。-->

After being turned on, Tokens will be consumed during the training/dialogue stage. Currently, the system has given away `100,000.00` Tokens to all users.

<!--
token消耗:
- FAQ的Embedding
- Flow的Embedding
- Knowledge Base Embedding
- 对话时的输入Embedding
- 对话
-->

Token consumption:
- FAQ Embedding
- Embedding of Flow
- Knowledge Base Embedding
- Input Embedding during dialogue
- Dialogue

For more details please visit:[Pricing Page](https://promptai.us/pricing)

## Open LLMs
<!--在项目-大语言模型设置中选择开启`用户问答(FAQ)`和`对话流图`，开启后点击右上角进行保存。-->
In the project-large language model settings, select to enable `User Questions and Answers (FAQ)` and `Conversation Flow Graph`. After opening, click on the upper right corner to save.

![use_llms_1.jpg](/assets/images/use_llms_1.png)

### Notice：

<!--
1、用户问答(FAQ) 该功能下有两个配置小项：
- 回答FAQ时，显示其他相关问题。 
>   命中FAQ时可能与之关联的问题，用户可点击查看对应的回答。

- 回答FAQ时，使用大语言模型生成答案(跟原来的答案可能有差异)。
>  基于LLMs的生成能力,在匹配到FAQ的情况下根据用户的问题进行总结回答。此时会在答案下方展示按钮以获取标准的回答。

*可单独开启/关闭，设置变更后在新创建的会话中生效。*
-->


1. User Questions and Answers (FAQ) There are two configuration items under this function:
- When answering the FAQ, other related questions are displayed.
> When hitting FAQ, users can click on questions that may be related to it to view the corresponding answers.

- When answering the FAQ, use a large language model to generate answers (which may be different from the original answers).
> Based on the generation ability of LLMs, summarize and answer the user's questions when matching the FAQ. A button will appear below the answer to get the standard answer.

*Can be turned on/off individually. Changes in settings will take effect in newly created sessions.*
## Common Questions

<!--
### 1、Token消耗用完后能对话吗？
> 不能，此时对话将收到提示信息：
>
> We're sorry, but due to insufficient funds in the merchant's account, we are unable to provide our services at this time. Please try again later or contact our customer support for further assistance.
> 
> 在充值Token后可立刻恢复对话。

### 2、除ChatGPT外，我能选择使用其他LLMs吗？
> 请联系我们：info@promptai.us

### 3、我想获取更多Token应该如何处理?
> 请联系我们：info@promptai.us

### 4、我如何查看Token余额？
> 登录系统后点击右上角"头像"，在弹出的窗口中能查询到当前Token数量。

### 5、关闭LLMs模式后需要重新训练吗？
> Yes
-->

### 1. Can I have a conversation after the Token is used up?
> No, the dialog will receive a message:
>
> We're sorry, but due to insufficient funds in the merchant's account, we are unable to provide our services at this time. Please try again later or contact our customer support for further assistance.

### 2. In addition to ChatGPT, can I choose to use other LLMs?
> Please contact us: info@promptai.us

### 3. What should I do if I want to obtain more Tokens?
> Please contact us: info@promptai.us

### 4. How do I check the Token balance?
> After logging in to the system, click "Avatar" in the upper right corner, and you can check the current number of Tokens in the pop-up window.

### 5. Do I need to retrain after turning off the LLMs mode?
> Yes.
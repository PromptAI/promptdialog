---
layout: en
title: Use LLMs
parent: Advanced Control
nav_order: 5
spliter: true
---

<!-- 使用LLMs可以减少标注、提高对话准确率。 -->

Using LLMs can improve conversation quality with fewer examples.


|     Function   | LLMs | Local Model | Remark |
|----------------|------|----------|:-------|
|      FAQ       |  ✅  |  ✅  |        |
|      Flow      |  ✅  |  ✅  |      |
| Knowledge Base |  ✅  |  ❌  | Only support LLMs, using Retrieval-Augmented Generation (RAG)|

<!--Flow开启LLMs时需要将FAQ的LLMs功能开启-->

*1、Before you activate LLMs on Flows, you need to activate LLMs on FAQ first.*

*2、You can config your OpenAI API Key on our platform or use the tokens we purchased from OpenAI. If you have other need, please contact us: [info@promptai.us](mailto:info@promptai.us)*

## LLMs Tokens
<!--开启后将在训练/对话阶段消耗Token，目前系统为所有用户赠送了`100,000`Token。-->

Tokens will be consumed during the training and conversations. Currently,  `100,000` free tokens will be given to each registered user to start.

<!--
token消耗:
- FAQ的Embedding
- Flow的Embedding
- Knowledge Base Embedding
- 对话时的输入Embedding
- 对话
-->

Where OpenAI tokens will be used:
- FAQ embedding
- Text embedding in Knowledge Bases
- User utterance embedding in Flows
- User utterance embedding during conversations
  
For more details please visit:[Pricing Page](https://promptai.us/en/pricing)

## Enable LLMs
<!--在项目-大语言模型设置中选择开启`用户问答(FAQ)`和`对话流图`，开启后点击右上角进行保存。-->
In the LLMs setting, you can activate the use of LLMs on `FAQ` and `Flow`. Please debug/run/re-publish your bot to make the new setting effective.

![use_llms_1.jpg](/assets/images/use_llms_1.png)

<!--
1、用户问答(FAQ) 该功能下有两个配置小项：
- 回答FAQ时，显示其他相关问题。 
>   命中FAQ时可能与之关联的问题，用户可点击查看对应的回答。

- 回答FAQ时，使用大语言模型生成答案(跟原来的答案可能有差异)。
>  基于LLMs的生成能力,在匹配到FAQ的情况下根据用户的问题进行总结回答。此时会在答案下方展示按钮以获取标准的回答。

*可单独开启/关闭，设置变更后在新创建的会话中生效。*
-->

### FAQ:
1.There are one option when activating LLMs on FAQ:

- When answering the FAQ, the bot will display other related questions.
> Users can click on questions that might be related to view other possible answers.

![use_llms_2.jpg](/assets/images/use_llms_2.png)

### Knowledge Base:
- When answering a question not in the FAQ,  the bot could generate answers from the knowledge bases.
> Based on the generation capability of LLMs, summarize and answer the user's questions. A check source link will appear next to the answer to display the original source content.

![use_llms_3.jpg](/assets/images/use_llms_3.png)

### Flow:
Pretrained LLMs such as ChatGPT and GPT-4 will dramatically improve conversation quality.  In zero or few shot training,  ChatGPT performs much better than the DIET algorithm in RASA in terms of intent classification and entity recognition. 

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

### 1. Can the bot have a conversation after tokens are used up?
> No, the conversation will not continue:
```text
We're sorry, but due to insufficient funds in the merchant's account, we are unable to provide our services at this time.
```
> Before your tokens run short,  we will send an alert to your registered email account. 

### 2. Can I choose to use other LLMs besides ChatGPT/GPT-4?
> Yes. Please contact us: info@promptai.us and we will add it. 

### 3. What should I do if I am interested in obtaining more tokens?
> Please contact us: info@promptai.us .  We could purchase more with the same price offered by OpenAI. 

### 4. Do I need to retrain after turning off the LLMs mode?
> Yes. After enabled or disabled LLMs, debug/run/re-publish your project is required.

### 5. What's a token?
> You can think of tokens as pieces of words used for natural language processing. For English text, 1 token is approximately 4 characters or 0.75 words. As a point of reference, the collected works of Shakespeare are about 900,000 words or 1.2M tokens.
> 
> To learn more about how tokens work:
> 
> Experiment with OpenAI interactive [Tokenizer tool](https://beta.openai.com/tokenizer).

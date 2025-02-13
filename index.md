---
layout: default
title: Welcome to Prompt AI
nav_order: 1
has_children: false
permalink: /
---
# Welcome to Prompt AI
{: .no_toc .header }

We are excited to introduce a major upgrade of PromptDialog.  PromptDialog 2.0 has transitioned from Rasa to [MICA](https://mica-labs.github.io/), as we believe agent-based architecture is the future for bot development. In PromptDialog 2.0, everything revolves around agents—eliminating the need for separate NLU, state management, and response generation. This approach not only simplifies development but also makes downstream tasks possible such as automated testing and evaluation.  

MICA is an open-source, agent-centric framework that sets itself apart from existing solutions such as [AutoGen](https://github.com/microsoft/autogen), [CrewAI](https://github.com/crewAIInc/crewAI), [LangChain](https://github.com/langchain-ai/langchain), [Amazon MAO](https://github.com/awslabs/multi-agent-orchestrator), and [Swarm](https://github.com/openai/swarm), which rely heavily on extensive Python programming. With MICA, users can define [agents](https://mica-labs.github.io/docs/concepts/agent/) within a single YAML file before launching the bot, significantly simplifying development and deployment.

The following script gives a demo money transfer agent. A complete example is available at MICA  ([GitHub Link]).

```yaml
transfer_money:
  type: llm agent
  description: This agent let users transfer money to a recipient.
  prompt: |
    You are a smart agent for handling transferring money request. When user ask for transferring money, 
    it is necessary to sequentially collect the recipient's information and the transfer amount. 
    Then, the function "check_transfer_funds" should be called to check whether the account balance is
    sufficient to cover the transfer. If the balance is insufficient, it should return to the step of
    requesting the transfer amount. Finally, before proceeding with the transfer, confirm with the user
    whether the transfer should be made.
  args:
    - recipient
    - amount_of_money
  uses:
    - check_transfer_funds
```



<!--- PromptDialog was originally built on Rasa/ChatGPT and conceived as an alternative of Rasa-X, Rasa-Pro, and Rasa Studio.  Based on user feedback, it becomes obvious that the traditional task-oriented dialogue system that separates natural language understanding (NLU), dialogue management (DM), and response generation is hard to maintain.  The new agent-based architecture offers a much better solution.  By transitioning from RASA to MICA, every aspect of bot development—including coding, testing, and even documentation—is dramatically simplified.  --->  

PromptyDialog 2.0 brings design studio and cloud deployment to MICA, making building customer service bots much simpler and more cost-effective.  PromptDialog 2.0 will continue to deliver the following benefits: 

* Intuitive business logic design. The dialog flows can be described in text or drawn explicitly, not as vague as annotated conversations or python programs anymore.  It can be displayed and shared with your team members.
* All-in-one DevOps: Design, develop and operate conversations, on premises or cloud, in one platform.
* Zero shot intent classification and entity recognition, no annotation required.

[Xifeng Yan](https://sites.cs.ucsb.edu/~xyan/), PromptAI

Prof. Xifeng Yan has a track record of building [knowledge grounded conversational AI engines](https://sites.cs.ucsb.edu/~xyan/knowledgebase.html).  His teams have participated in building various kinds of conversational bots including three Amazon Alexa Chatbot Challenges in 2022-2023, [TaskBot](https://www.amazon.science/academic-engagements/amazon-launches-new-alexa-prize-taskbot-challenge), [SimBot](https://www.amazon.science/alexa-prize/simbot-challenge), and [Socialbot](https://www.amazon.science/alexa-prize/socialbot-grand-challenge/2022). All of his teams entered the final event with the highest rate given by Amazon Alexa users. 

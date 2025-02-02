---
layout: default
title: Welcome to Prompt AI
nav_order: 1
has_children: false
permalink: /
---
# Welcome to Prompt AI
{: .no_toc .header }

We introduce PromptDialog 2.0, an integrated development environment (IDE) and DevOps platform built on Multiple Intelligent Conversational Agents (MICA) ([GitHub Link]). MICA is a cutting-edge, open-source, agent-centric framework that stands apart from existing solutions such as AutoGen, CrewAI, LangChain, Amazon MAO, and Swarm. Unlike traditional agentic solutions that require extensive Python scripting, MICA enables users to define all agents within a single YAML file before launching the bot ([GitHub Example Link]). This streamlined approach significantly enhances development, maintenance, and testing efficiency by eliminating redundant coding and simplifying agent management.

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

PromptyDialog brigns design studio and cloud deployment to MICA, further simplifying the design /launch process.  PromptDialog was originally built on Rasa/ChatGPT and conceived as an alternative of Rasa-X, Rasa-Pro, and Rasa Studio.  Based on the user feedback, it becomes obvious that the traditional task-oriented dialogue system that separates natural language understanding (NLU), dialogue management (DM), and response generation is hard to maintain.  The new agent-based architecture offers a much better solution.  By transitioning from RASA to MICA, every aspect of bot development—including coding, testing, and even documentation—is dramatically simplified. PromptDialog 2.0 will continue to deliver the following benefits: 

* Intuitive business logic design. The dialog flows can be described in text or drawn explicitly, not as vague as annotated conversations or python programs anymore.  It can be displayed and shared with your team members.
* All-in-one DevOps: Design, develop and operate conversations, on premises or cloud, in one platform.
* Zero shot intent classification and entity recognition, less or even no annotation required.

[Xifeng Yan](https://sites.cs.ucsb.edu/~xyan/), PromptAI

Prof. Xifeng Yan has a track record of building [knowledge grounded conversational AI engines](https://sites.cs.ucsb.edu/~xyan/knowledgebase.html).  His teams have participated in building various kinds of conversational bots including three Amazon Alexa Chatbot Challenges in 2022-2023, [TaskBot](https://www.amazon.science/academic-engagements/amazon-launches-new-alexa-prize-taskbot-challenge), [SimBot](https://www.amazon.science/alexa-prize/simbot-challenge), and [Socialbot](https://www.amazon.science/alexa-prize/socialbot-grand-challenge/2022). All of his teams entered the final event with the highest rate given by Amazon Alexa users. 

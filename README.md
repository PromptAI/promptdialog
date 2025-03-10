<a target="_blank" rel="noopener noreferrer" href="https://www.promptai.us">
  <img src="./image/main.png" alt="https://www.promptai.us" style="max-width: 100%;">
</a>
<p align="center">
  <a href="https://www.promptai.us">Website</a> |
  <a href="https://doc.promptai.us">Docs</a> |
  <a href="mailto:info@promptai.us">Email</a>
</p>

We are excited to introduce a major upgrade: PromptDialog 2.0. The new version transitioned from [Rasa](https://github.com/RasaHQ/rasa) to [MICA](https://mica-labs.github.io/), as we believe that agent-based architecture represents the future of bot development. In PromptDialog 2.0, everything revolves around agents—eliminating the need for separate NLU, state management, and response generation. The new approach not only simplifies development but also makes advanced downstream tasks possible such as automated testing and evaluation.

MICA is an open-source, agent-centric framework that sets itself apart from existing solutions such as [AutoGen](https://github.com/microsoft/autogen), [CrewAI](https://github.com/crewAIInc/crewAI), [LangChain](https://github.com/langchain-ai/langchain), [Amazon MAO](https://github.com/awslabs/multi-agent-orchestrator), and [Swarm](https://github.com/openai/swarm), which rely heavily on extensive Python programming. With MICA, users can define [agents](https://mica-labs.github.io/docs/concepts/agent/) within a single YAML file before launching the bot, significantly simplifying development and deployment.

The following script gives a demo money transfer agent. A complete example is available at [MICA](https://github.com/Mica-labs/MICA/tree/main/examples/transfer_money)


<details>
  <summary>MICA example</summary>

```yaml
transfer_money:
  type: llm agent
  description: This is an agent for transfer money request.
  prompt: "You are a smart agent for handling transferring money request. When user ask for transferring money, it is necessary to sequentially collect the recipient's information and the transfer amount. Then, the function \"validate_account_funds\" should be called to check whether the account balance is sufficient to cover the transfer. If the balance is insufficient, it should return to the step of requesting the transfer amount. Finally, before proceeding with the transfer, confirm with the user whether the transfer should be made and then call \"submit_transaction\"."
  args:
    - recipient
    - amount_of_money
  uses:
    - validate_account_funds
    - submit_transaction

meta:
  type: ensemble agent
  description: You can select an agent to response user's question.
  contain:
    - transfer_money
  fallback: default
  steps:
    - call: transfer_money
  exit:
    - policy: "After 5 seconds, give a closure prompt: Is there anything else I can help you with?  After another 30 seconds, then leave."

main:
  steps:
    - call: meta
```
</details>

PromptDialog 2.0 brings design studio and cloud deployment to [MICA](https://github.com/Mica-labs/MICA), making building customer service bots much simpler and more cost-effective. It will continue to deliver the following benefits:

* Intuitive business logic design. The dialog flows can be described in text or drawn explicitly, not as vague as annotated conversations or python programs anymore. It can be displayed and shared with your team members.
* All-in-one DevOps: Design, develop and operate conversations, on premises or cloud, in one platform.
* Zero shot intent classification and entity recognition, no annotation required.

## Use Cloud Services
Visit [www.promptai.us](https://www.promptai.us)

## Localized Deployment

### System Requirements
Before installing PromptDialog, make sure your machine meets the following minimum system requirements:
-  OS: Linux / MacOS
-  location: $HOME/zbot
-  RAM: At least 8GB
-  Docker Env: 20.10.6 or newer
-  Disk Space : At least 32GB available
Optional: 
-  GPU: CUDA 11.7 or newer and GPU Containers Runtime 1.11.0 or newer

### Quick Start
Run following cmd in your terminal.
```bash
curl -o install.sh 'https://cdn.githubraw.com/PromptAI/homepage/main/scripts/install_en.sh' && chmod +x install.sh && ./install.sh
```

> PromptDialog will randomly occupy ports between 19000 and 29000.
> 
> Help: [info@promptai.us](mailto:info@promptai.us)

After running, you can access the PromptDialog app in your browser at [http://localhost:9000](http://localhost:9000).

## Contact Us
If you have any questions, suggestions, or partnership inquiries, feel free to contact us through the following channels:
- Submit an Issue or PR on our GitHub Repo
- Send an email to info@promptai.us
- Send a message to [there](https://www.promptai.us/en/contact/)

## Security
To protect your privacy, please avoid posting security issues on GitHub. Instead, send your questions to info@promptai.us and we will provide you with a more detailed answer.

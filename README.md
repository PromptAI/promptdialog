<a target="_blank" rel="noopener noreferrer" href="https://www.promptai.us">
  <img src="./image/main.png" alt="https://www.promptai.us" style="max-width: 100%;">
</a>
<p align="center">
  <a href="./README.md">English</a> |
  <a href="./README_CN.md">简体中文</a>
</p>

#### [Website](https://www.promptai.us) • [Docs](https://doc.promptai.us) • [FAQ](https://doc.promptai.us/docs/common_questions/) • [Email](mailto:info@promptai.us)
We introduce PromptDialog 2.0, an integrated development environment (IDE) and DevOps platform built on Multiple Intelligent Conversational Agents (MICA) ([GitHub Link]). MICA is a cutting-edge, open-source, agent-centric framework that stands apart from existing solutions such as AutoGen, CrewAI, LangChain, Amazon MAO, and Swarm. Unlike traditional agentic solutions that require extensive Python scripting, MICA enables users to define all agents within a single YAML file before launching the bot ([GitHub Example Link]). This streamlined approach significantly enhances development, maintenance, and testing efficiency by eliminating redundant coding and simplifying agent management.

<details>
  <summary>MICA example</summary>
  <pre><code>flows:
  transfer_money:
    type: llm agent
    description: This agent let users transfer money to a recipient.
    prompt: |
      You are a smart agent for handling transferring money request. When user ask for transferring money, 
      it is necessary to sequentially collect the recipient's information and the transfer amount. 
      Then, the function "check_transfer_funds" should be called to check whether the account balance is sufficient to cover the transfer. If the balance is 
      insufficient, it should return to the step of requesting the transfer amount. 
      Finally, before proceeding with the transfer, confirm with the user whether the transfer should be made.
    args:
      - recipient
      - amount_of_money
    uses:
      - check_transfer_funds
  </code></pre>
</details>

PromptyDialog brigns design studio and cloud deployment to MICA, further simplifying the design /launch process.  PromptDialog was originally built on Rasa/ChatGPT and conceived as an alternative of Rasa-X, Rasa-Pro, and Rasa Studio.  Based on the user feedback, it becomes obvious that the traditional task-oriented dialogue system that separates natural language understanding (NLU), dialogue management (DM), and response generation is hard to maintain.  The new agent-based architecture offers a much better solution.  By transitioning from RASA to MICA, every aspect of bot development—including coding, testing, and even documentation—is dramatically simplified. PromptDialog 2.0 will continue to deliver the following benefits: 

* Automatically turn enterprise documents of various forms (FAQ, CSV, PDF, Doc, Text, HTML) into one knowledge base that your assistant can rely on.
* Intuitive business logic design. The dialog flows can be drawn explicitly, not as vague as annotated conversations or python programs any more.  It can be displayed and shared with your team members.
* All-in-one DevOps: Design, develop and operate conversations, on premises or cloud, in one platform.
* Zero shot intent classification and entity recognition, no annotation required.

## Use cases
- [IT Helpdesk Starter Pack](https://www.promptai.us/en/examples/#IT)
- [Retail Starter Pack](https://www.promptai.us/en/examples/#Retail)
- [Financial Services](https://www.promptai.us/en/examples/#Financial)

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

## Q&A
See [there](https://doc.promptai.us/docs/common_questions/).

## Contact Us
If you have any questions, suggestions, or partnership inquiries, feel free to contact us through the following channels:
- Submit an Issue or PR on our GitHub Repo
- Send an email to info@promptai.us
- Send a message to [there](https://www.promptai.us/en/contact/)

## Security
To protect your privacy, please avoid posting security issues on GitHub. Instead, send your questions to info@promptai.us and we will provide you with a more detailed answer.

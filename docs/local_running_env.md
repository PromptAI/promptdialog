---
layout: en
title: Local Running Env
nav_order: 3
has_children: false
---
# Deploy
{: .no_toc .header }
---
Initialize the local operating environment. After successfully creating an account, you can start designing your chatbot immediately. If you need to run chatbot, you need to initialize the local operating environment.


## What is Agent？
In PromptAI, Agent builds a "communication bridge" between the cloud and the user environment, assisting the cloud in managing models, data, and conversations.

## Create first Agent
After logging in to the system, you will see a prompt above the system before creating the first Agent: "You need install your own Agent to access all functions."
After clicking, you will see the following content.

![01-local-running-env.png](/assets/images/local_running_env/01-local-running-env.png)

- Why install an Agent?
- How to install an Agent?

Before installation, you need to check whether your environment meets the installation requirements:
### System Requirements
```text![img.png](img.png)
OS         :Linux/Mac OS
RAM        :At least 8GB
GPU        :CUDA 11.7 or newer(Optional)
Disk       :Space: At least 20GB available
Docker Env :20.10.6 or newer
```
When everything is ready, you can execute different installation commands according to the corresponding operating system type:
```shell
curl -o install_agent.sh 'https://app.promptai.us/rpc/install/install_agent.sh?key=your_config' && chmod +x install_agent.sh && ./install_agent.sh install
```
`The installation is often related to your network environment and equipment, please be patient. If you need help, please contact us`

After the installation is successful, enter the "Manage Agents" page to see the installed Agent
![02-local-running-env.png](/assets/images/local_running_env/02-local-running-env.png)

Enjoy
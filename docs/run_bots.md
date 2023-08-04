---
layout: en
title: Run Chatbots
nav_order: 3
has_children: false
---
{: .no_toc .header }

After successfully creating an account, you can start designing your chatbot immediately. There are two ways to train and test your design. You could create the local running environment as illustrated below, which packaged everything for you and allows you to communicate with PromptDialog to run and test your bot.  This is a preferred option as it supports many new features that RASA does not have.  You could also download the generated RASA code and run it in your own RASA environment.  If you prefer a complete cloud solution that design, train, and run the bot all on cloud, please contact us [info@promptai.us](info@promptai.us).  We have a complete cloud solution. 


## Local Running Environment (LRE)
The local running environment uses a docker implementation that packages RASA 3.2.0 and an agent that communicates between PromptDialog Cloud and the local RASA environment.   PromptDialog Cloud manages all aspects of your designs and the local RASA environment is in charge of training the model.

![03-local-running-env.png](/assets/images/local_running_env/03-local-running-env.png)

### Create the first agent
The local machine shall meet the minimum system requirements:

```text
OS         :Linux/Mac OS
RAM        :At least 8GB
GPU        :CUDA 11.7 or newer(Optional)
Disk       :Space: At least 32GB available
Docker Env :20.10.6 or newer
```

- [What id Docker?](https://www.docker.com/)
- [Install Docker](https://docs.docker.com/get-docker/)

Click `Local Running Environment`-`Manage Agents` on the upper right corner.  It will pop up a window where you can add your agent.  Click `+Agent` and then `Install agent`.  You  will see the following content.
![00-local-running-env.png](/assets/images/local_running_env/00-local-running-env.png)

Or click `Please install your own local agent to test your bot.` [If you can see this notification]

![01-local-running-env.png](/assets/images/run_bots_install_agent_2.jpg)

During installation and the following use, please make sure the local machine has network access to the Prompt Dialog service.

- Allow network access to https://app.promptai.us at port: 443

Please execute the installation command shown in the pop-up window according to the operating system of your local machine:
```shell
curl -o install_agent.sh 'https://app.promptai.us/rpc/install/install_agent.sh?key=your_config' && chmod +x install_agent.sh && ./install_agent.sh install
```
Note: The installation is often related to the network and firewall set up, please be patient. If you need help, please contact us at [info@promptai.us](info@promptai.us).`

After the installation is successful, enter the "Manage Agents" page to see the installed Agent
![02-local-running-env.png](/assets/images/local_running_env/02-local-running-env.png)

All set! Enjoy all the features in PromptDialog Cloud!

## What does an agent do?
The following section introduces the details of agents. You need not to read this part to run chatbots in PromptDialog successfully. 

<!---
- 接收训练/部署任务
- 上传任务执行步骤、结果
- 上传训练好的模型，便于负载均衡时不用重复训练
- 接收和响应对话请求
- 创建、停止和升级AI容器
--->

- Receive training tasks
- Train Rasa models
- Start, run, and stop bots
- Receive and respond to conversation requests
- Bookkeep trained models so that there is no need to repeat training

Agents will only create and operate in the following directory of your machine. 

- OS:  Linux / MacOS
- location: $HOME/zbot

Please do not modify any file in the above drectory. 

<!--
- 数据与系统运行有关，请勿操作。否则可能导致系统无法正常工作。
- 数据、目录结构可能会变化，同时里面的数据可能会被服务端使用。

Example:

```shell
.
└── .promptai
    ├── .agent
    │   ├── a1 ## 训练任务，目录名称为内部账户名称
    │   ├── download ## 训练数据目录
    │   ├── pqdata ## 缓存数据
    │   │   ├── reporter.published.project ## 发布项目的缓存
    │   │   ├── reporter.task.result ## 任务执行结果缓存
    │   │   └── reporter.task.step ## 任务执行步骤缓存
    │   └── published_project.conf ## 发布的项目数据
    └── .ai  ## AI 数据目录
        ├── log ## 日志目录
        │   └── a1 ## 目录名称为内部账户名称
        │       ├── debug ## 调试的日志
        │       ├── p_cm6gp9vx6igw ## 发布项目的日志 名称为项目ID，可能会有多个
        │       ├── p_cm6j0rozjncw
        │       └── p_cmaamgq4bsao
        ├── model ## 模型文件目录
        │   └── a1 ## 目录名称为内部账户名称
        │       ├── debug ## 调试的模型
        │       ├── p_cm6gp9vx6igw ## 发布项目的模型 名称为项目ID，可能会有多个
        │       ├── p_cm6j0rozjncw
        │       └── p_cmaamgq4bsao
        └── train ## 训练数据目录
            └── a1 ## 目录名称为内部账户名称
                ├── debug ## 调试的训练数据
                ├── p_cm6gp9vx6igw ## 发布项目的训练数据 名称为项目ID，可能会有多个
                ├── p_cm6j0rozjncw
                └── p_cmaamgq4bsao
```
-->

After the agent is successfully installed, the `install_agent.sh` script will be created in the `$HOME/zbot` directory to upgrade and uninstall the Agent.

```shell
$HOME/zbot/install_agent.sh
```

The agent implementation is done by Docker, including two images and multiple containers.

- Docker Images

| Name  | Image                        | Description                             |
|:------|:-----------------------------|-----------------------------------------|
|  AI   | promptai/zbotai:release      | AI model                                |
| Agent | promptai/zbot-agent:latest   | Agent service，AI container management  |

- Docker Containers

| Name  | Container    | Description                                                              |
|:------|:-------------|--------------------------------------------------------------------------|
|  AI   | zbot_a1_xxxx  | "xxxx" is the selected models for debugging. There may be more than one |
| Agent | zbot_agent   | Agent service, manage AI models, there is only one                       |

<!---
| Name  | Container    | Description                                                      |
|:------|:-------------|-------------------------------------------------------------|
|  AI   | zbot_a1_xxx  | "xxx"为调试的模型或具体的项目，可能有多个，与发布的项目数量有关       |
| Agent | zbot_agent   | Agent服务，管理AI模型 ，有且仅有一个                             |
--->


## Run in Rasa

When developers need to debug and verify the designed flows, they can also use the `Download Rasa File` function to download the generated RASA code in their own RASA set up.  However, a few useful features from PromptDialog Cloud will be missing.  

### Features only available in PromptDialog Cloud

<!---
| Features                  | Prompt Dialog | Run In Rasa |
|---------------------------|--------------|-------------|
| Attachment bot reply      |         ✅   |       ❌    |
| Chat history              |         ✅   |       ❌    |
| Condition reply           |         ✅   |       ❌    |
| Dashboard                 |         ✅   |       ❌    |        
| Debug chatbot             |         ✅   |       ❌    |
| FAQ:First message to user |         ✅   |       ❌    |
| FAQ:Last message to user  |         ✅   |       ❌    |
| FAQ:Multi bot replies     |         ✅   |       ❌    |
| Image bot reply           |         ✅   |       ❌    |
| Release                   |         ✅   |       ❌    |
| User Feedback             |         ✅   |       ❌    |

--->

| Features                  | Prompt Dialog | Run In Rasa |
|---------------------------|--------------|-------------|
| Chat history              |         ✅   |       ❌    |
| Dashboard                 |         ✅   |       ❌    |        
| Debug chatbot             |         ✅   |       ❌    |
| Multimodal response       |         ✅   |       ❌    |
| Release                   |         ✅   |       ❌    |
| User feedback             |         ✅   |       ❌    |

### Rasa file download

Click `Download RASA File` on the top right corner.  The download box will pop up with the following options:

* Download current module, download the current dialog flow,
* Download selected modules, select a collection of multiple dialog flows under the current project,
* Download all, check all dialog flow diagrams under the current project.

![download-rasa](/assets/images/download_rasa_file_current.png)

- When the current project has a flow diagram containing error nodes, it will be classified into `Unavailable Modules` in the pop-up box.  Move the mouse over the module to see the number of error messages. The link next to the module name can lead to the corresponding flow diagram for modification.

![download_rasa_file_selected.png](/assets/images/download_rasa_file_selected.png)  

### Rasa environmental preparation

Local installation requires your local python version 3.8 or above (3.8.10 is recommended), and the following dependent packages need to be installed through pip

```text
rasa==3.2.0
jieba==0.42.1
transformers==4.24.0
jsonpath==0.82
```

After installation, enter 'rasa init' on the command line to verify as shown in the figure.

![rasa-env](/assets/images/dev_guide/download-rasa-env.png)

### Run Rasa
Step 1: Unzip the downloaded Rasa file in your Rasa environment:

![download-rasa-debug-1](/assets/images/dev_guide/download-rasa-debug-1.jpg)

Step 2: Train models.

```shell
# train model 
rasa train

# Start actions if necessary
rasa run actions

# Open another command window for run the bot 
rasa shell
```

Step 3: Observe the output and verify, as shown in the figure.
   
![download-rasa-debug-2](/assets/images/dev_guide/download-rasa-debug-2.jpg)

<!---
1、The current version does not support built-in variables
-->

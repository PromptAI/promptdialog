---
layout: en
title: Run Chatbots
nav_order: 3
has_children: false
---
{: .no_toc .header }

# Local Running Environment

There are two ways to train and run your bot. You could create the local running environment as illustrated below, which packaged everything for you and allows you to communicate with PromptDialog to dynamically run and test your bot.  We prefer this option as it supports additional features.  You could also download the generated RASA code and run it in your own RASA environment.

Initialize the local operating environment. After successfully creating an account, you can start designing your chatbot immediately. If you need to run chatbot, you need to initialize the local operating environment.

## What is Agent？
In PromptAI, Agent builds a "communication bridge" between the cloud and the user environment, assisting the cloud in managing models, data, and conversations.


![03-local-running-env.png](/assets/images/local_running_env/03-local-running-env.png)

### 工作内容

- 接收训练/部署任务
- 上传任务执行步骤、结果
- 上传训练好的模型，便于负载均衡时不用重复训练
- 接收和响应对话请求
- 创建、停止和升级AI容器

### 目录
Agent所有操作只会在该目录下进行:

| 系统           | 目录             |
|---------------|-----------------|
| Linux / MacOS | $HOME/zbot     |

- 数据与系统运行有关，请勿操作。否则可能导致系统无法正常工作。
- 数据、目录结构可能会变化，同时里面的数据可能会被服务端使用。

<!--
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

### 文件
- 如果需要下载Rasa代码 [Click here](/docs/run_bots/)

1、Agent控制脚本
安装agent成功后，会在`$HOME/zbot`目录创建`install_agent.sh`脚本，用于升级、卸载Agent。
```shell
$HOME/zbot/install_agent.sh
```

2、Docker

Agent 运行依赖Docker环境，包括两个Image和多个Containers
- Docker Images

| 名称   | Image                        | 说明                            |
|:------|:-----------------------------|---------------------------------|
|  AI   | promptai/zbotai:release      | AI模型                          |
| Agent | promptai/zbot-agent:latest   | Agent服务，管理AI容器             |

- Docker Containers

| 名称   | Container    | 说明                                                        |
|:------|:-------------|-------------------------------------------------------------|
|  AI   | zbot_a1_xxx  | "xxx"为调试的模型或具体的项目，可能有多个，与发布的项目数量有关       |
| Agent | zbot_agent   | Agent服务，管理AI模型 ，有且仅有一个                             |


## Create first Agent
After logging in to the system, you will see a prompt above the system before creating the first Agent: "You need install your own Agent to access all functions."
After clicking, you will see the following content.

![01-local-running-env.png](/assets/images/local_running_env/01-local-running-env.png)

- Why install an Agent?
- How to install an Agent?

Before installation, you need to check whether your environment meets the installation requirements:
### System Requirements
```text
OS         :Linux/Mac OS
RAM        :At least 8GB
GPU        :CUDA 11.7 or newer(Optional)
Disk       :Space: At least 20GB available
Docker Env :20.10.6 or newer
```

- 在安装过程和使用过程中需确保可访问到Prompt Dialog服务。
- Allow access: https://app.promptai.us at port: 443

When everything is ready, you can execute different installation commands according to the corresponding operating system type:
```shell
curl -o install_agent.sh 'https://app.promptai.us/rpc/install/install_agent.sh?key=your_config' && chmod +x install_agent.sh && ./install_agent.sh install
```
`The installation is often related to your network environment and equipment, please be patient. If you need help, please contact us`

After the installation is successful, enter the "Manage Agents" page to see the installed Agent
![02-local-running-env.png](/assets/images/local_running_env/02-local-running-env.png)

Enjoy

___

# Run in Rasa

When developers need to debug and verify the designed flows, they can use the `Download Rasa File` function to download the generated RASA code in their local running environment and test the bot locally.  If you prefer testing/running the chatbot on the cloud without setting up local environment, please contact us [info@promptai.us](info@promptai.us).  We have a complete cloud solution. 

## 云版本与Run In Rasa 区别

| 功能                      | Prompt Dialog | Run In Rasa |
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

## Rasa file download

Click `Download RASA File` on the top right corner.  The download box will pop up with the following options:

* Current download, download the current dialog flow
* Combined download, free check multiple dialog flows under the current project
* Download all, check all dialog flow diagrams under the current project

![download-rasa](/assets/images/dev_guide/download-rasa.png)

- When the current project has a flow diagram containing error nodes, it will be classified into `Unavailable Modules` in the pop-up box. Click the mouse on the flow diagram to see the number of error messages. The link behind the point flow diagram can quickly jump to the corresponding flow diagram for modification.
  ![download-rasa-1.png](/assets/images/dev_guide/download-rasa-1.png)

<br/>Note: welcome message, Fallback, branch prompt, jump to the node, and question prompt again (FAQ) takes effect only with the support of the system

## Rasa environmental preparation

Local installation requires your local python version 3.8 or above (3.8.10 is recommended), and the following dependent packages need to be installed through pip

```text
rasa==3.2.0
jieba==0.42.1
transformers==4.24.0
jsonpath==0.82
```

After installation, enter 'rasa init' on the command line to verify as shown in the figure.

![rasa-env](/assets/images/dev_guide/download-rasa-env.png)
![rasa-env-1](/assets/images/dev_guide/download-rasa-env-1.png)

## RASA file debugging verification

Login to your account and download any flow/faq rasa file

1. Unzip the downloaded Project file and enter the dir:

![download-rasa-debug-1](/assets/images/dev_guide/download-rasa-debug-1.jpg)

2. Training debugging

   ```shell
   # training
   rasa train
   
   # Start actions if necessary
   rasa run actions
   
   # Open another command line window for Debug Dialog
   rasa shell
   ```

   Note:If there are installation problems, please contact us in time. For contact information, please refer to "Get Help" below`

3. Validation results
   Perform debugging verification as shown in the figure
   ![download-rasa-debug-2](/assets/images/dev_guide/download-rasa-debug-2.jpg)

<br/>Note:

1、The current version does not support built-in variables


---
layout: en
title: Localized Deployment
nav_order: 11
---

Install full PromptDialog to your own machine.

## What does PromptDialog do?
The following section introduces the details of PromptDialog. You need not to read this part to run PromptDialog successfully.

- Manage all your data
- Provide PromptDialog service

PromptDialog will only create and operate in the following directory of your machine.

- OS:  Linux / MacOS
- location: $HOME/zbot

Please do not modify any file in the above directory.


The PromptDialog implementation is done by Docker, including two images and multiple containers.

- Docker Images

| Name  | Image                        | Description                             |
|:------|:-----------------------------|-----------------------------------------|
|  AI   | promptai/zbotai:release      | AI model                                |
| Zbot  | promptai/zbot-aio:release     | PromptDialog Core service               |

- Docker Containers

| Name  | Container    | Description                                                              |
|:------|:-------------|--------------------------------------------------------------------------|
|  AI   | zbot_a1_xxxx | "xxxx" is the selected models for debugging. There may be more than one |
| Zbot  | zbot         | PromptDialog Core service                                               |


## Requirement
```text
OS         :Linux/Mac OS
RAM        :At least 8GB
Docker Env :20.10.6 or newer
Disk Space :At least 32GB available

Optional: 
GPU        :CUDA 11.7 or newer and GPU Containers Runtime 1.11.0 or newer
```

## Installation Command
Run following cmd in your terminal.
```shell
curl -o install.sh 'https://raw.githubusercontent.com/PromptAI/homepage/main/scripts/install_en.sh' && chmod +x install.sh && ./install.sh
```

Wait a moment.

### Finish
If system is ready you will see the auth info:

![deploy-01](/assets/images/private_deploy/deploy-01.png)

### Login
Login: [http://localhost:9000](http://localhost:9000)

![deploy-02](/assets/images/private_deploy/deploy-02.png)

## Upgrade
Run installation command again.

## Need help or any other questions
Mail to: [info@promptai.us](mailto:info@promptai.us)
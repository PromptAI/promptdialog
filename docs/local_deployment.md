---
layout: en
title: Local Deployment
nav_order: 11
---

Install full PromptDialog to your own machine.

PromptDialog will only create and operate in the following directory of your machine.
- location: $HOME/zbot

The PromptDialog implementation is done by Docker, including two images .

- Docker Images

|  Image |         Description         | 
|:------|:-----------------------------|
| promptai/zbotai:release    |    AI model       | 
| promptai/zbot-aio:release  | PromptDialog  service framework     |


## Requirements
```text
OS           :Linux/Mac OS 
Architecture :amd64
RAM          :At least 8GB
Docker Env   :20.10.6 or newer
Disk Space   :At least 32GB available
```

## Installation Command
Run following cmd in your terminal.
```shell
curl -o install.sh 'https://raw.githubusercontent.com/PromptAI/homepage/main/scripts/install_en.sh' && chmod +x install.sh && ./install.sh
```
*Prompt AI's docker images total 25 GB, and the installation time depends on your network. First-time installation usually takes 10 to 30 minutes.*

### Finish
If system is ready you will see the auth info:

![deploy-01](/assets/images/private_deploy/deploy-01.png)

### Login
Login: [http://localhost:9000](http://localhost:9000)

![deploy-02](/assets/images/private_deploy/deploy-02.png)


## How to get a Free License?
After the installation, a licence is required. For now, we provide free license to Local Environment.
![license_1](/assets/images/license_1.png)

### Get License
1、You can get License in PromptAI accounts. The first step is register you PromptAI account:

Register a PromptAI account:[https://app.promptai.us/](https://app.promptai.us/)

2、After login to PromptAI, click your avatar and then click "License"：

![license_2.png](/assets/images/license_2.png)

3、Click the "Create" button you will get a free "Starter" license
![license_3.png](/assets/images/license_3.png)

4、Paste your License to Local Env
![license_4.png](/assets/images/license_4.png)

## How to get a Professional License?

Professional licenses are coming soon, please contact us if you need one.
Mail to: [info@promptai.us](mailto:info@promptai.us)

![license_1](/assets/images/license_1.png)



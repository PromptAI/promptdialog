---
layout: en
title: Install Questions
parent: Common Questions
nav_order: 1
---
### Where do I get the installation command?
can be obtained by following steps:
- log in system
- Click on "Manage Agents" in the upper right corner
- Click "Install Command" in the pop-up window
- You can see the installation command under "Install"

![01-install-questions.png](/assets/images/common_questions/01-install-questions.png)

### Can it be installed on different machines?
1、一个Agent只能被安装一次，不支持重复安装;
2、一台机器只能安装一个Agent;

### 删除时提示执行命令？
![02-install-questions.png](/assets/images/common_questions/02-install-questions.png)

正在使用的Agent不能通过"Manage Agents"管理面板删除，需要在安装机器中执行卸载命令。 当卸载命令执行完成后，"Manage Agents"中的Agent将会被删除。

- Note: You need to keep the network unobstructed when executing the command

### How to upgrade?
- 登录安装Agent的机器
- 在shell中执行'promptai upgrade'
- 输入`y`确认升级 [升级期间将会导致服务短暂不可使用]
- 等待升级完成

```shell
# promptai upgrade
Nvidia GPU found.
start upgrade PromptAI Agent...
This action will cause the service to be unavailable, continue (y/n)? y
latest: Pulling from promptai/zbot-agent
Digest: sha256:xxxxx
Status: Image is up to date for promptai/zbot-agent:latest
docker.io/promptai/zbot-agent:latest
xxxxx
```

### How to uninstall?
- 登录安装Agent的机器
- 在shell中执行'promptai uninstall'
- 输入`y`确认卸载
- 等待卸载完成

注意：此过程需要保持网络通畅，否则将导致无法成功卸载.
```shell
# promptai uninstall
start uninstall PromptAI Agent...
This action will remove PromptAI Agent, continue (y/n)? y
finish uninstall PromptAI Agent
```
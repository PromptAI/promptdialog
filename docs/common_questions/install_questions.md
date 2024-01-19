---
layout: en
title: Install Questions
parent: Common Questions
nav_order: 1
---
### Where can I download the local running environment installer? 
The local running environment can be installed by following steps:
- log in system
- Click `Local Running Environment` on the upper right corner
- Click `Manage Agents` in the pop-up window
- Click `Install Agent` in the pop-up window
- You can see the installation command under `Install`

![01-install-questions.png](/assets/images/install_agent.jpg)

### Can it be installed on different machines?
An agent can only be installed on one computer. If you have multiple computers, you will need to create a corresponding number of agents and install them separately on each computer.

### How to uninstall the agent
The agent not in use can be uninstalled through the "Manage Agents" management panel.

![02-install-questions.png](/assets/images/delete_agent.jpg)

<!--- 正在使用的Agent不能通过"Manage Agents"管理面板删除，需要在安装机器中执行卸载命令。 当卸载命令执行完成后，"Manage Agents"中的Agent将会被删除。
--->

The agent in use cannot be deleted through the "Manage Agents" management panel.  The uninstall command needs to be executed on the machine where the agent is installed.  When the uninstallation command is executed, the agent in "Manage Agents" will be deleted.

- Note: You need to keep the network unobstructed when executing the uninstall command。 

### How to upgrade the agent?
<!---
- 登录安装Agent的机器
- 在shell中执行'~/zbot/install_agent.sh upgrade'
- 输入`y`确认升级 [升级期间将会导致服务短暂不可使用]
- 等待升级完成
--->

- Log in to the machine where the agent is installed
- Execute `~/zbot/install_agent.sh upgrade` in the shell
- Enter `y` to confirm the upgrade [the service will be temporarily unavailable during the update]
- Wait for the upgrade to complete


```shell
# ~/zbot/install_agent.sh upgrade
Nvidia GPU found.
start upgrade PromptAI Agent...
This action will cause the service to be unavailable, continue (y/n)? y
latest: Pulling from promptai/zbot-agent
Digest: sha256:xxxxx
Status: Image is up to date for promptai/zbot-agent:latest
docker.io/promptai/zbot-agent:latest
xxxxx
```

### How to uninstall the agent locally?
<!---
- 登录安装Agent的机器
- 在shell中执行'promptai uninstall'
- 输入`y`确认卸载
- 等待卸载完成

注意：此过程需要保持网络通畅，否则将导致无法成功卸载.
--->

- Log in to the machine where the agent is installed
- Execute `~/zbot/install_agent.sh uninstall` in the shell
- Enter `y` to confirm uninstallation
- Wait for the uninstallation to complete

Note: This process needs to keep the network unobstructed, otherwise it will lead to failure.

```shell
# ~/zbot/install_agent.sh uninstall
start uninstall PromptAI Agent...
This action will remove PromptAI Agent, continue (y/n)? y
finish uninstall PromptAI Agent
```

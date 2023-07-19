---
layout: en
title: Install Questions
parent: Common Questions
nav_order: 1
---
### Where do I get the installation command?
can be obtained by following steps
- log in system
- Click on "Manage Agents" in the upper right corner
- Click "Install Command" in the pop-up window
- You can see the installation command under "Install"

### Can it be installed on different machines?
An Agent can only be installed once, if you need to install multiple Agents, you need to create multiple Agents for installation

### Why can't the Agent be deleted?
If you need to delete the Agent, you need to execute the uninstall command on the installed machine: 'promptai uninstall'. After the command is executed successfully, the Agent will be removed from the system.

- Note: You need to keep the network unobstructed when executing the command

### How to upgrade?
Execute the upgrade command 'promptai upgrade' in the shell, and enter 'y' to start the upgrade
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
Execute the uninstallation command 'promptai uninstall' in the shell, and enter 'y' to start the uninstallation

```shell
# promptai upgrade
start uninstall PromptAI Agent...
This action will remove PromptAI Agent, continue (y/n)? y
finish uninstall PromptAI Agent
```
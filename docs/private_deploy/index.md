---
layout: en
title: Localized Deployment
nav_order: 9
---

# Localized Deployment
{: .no_toc .header }

----
If you need to deploy the service to your own server or local, you can refer to the following tutorial.

## Requirements
1. A recent version of Docker
2. About 20 GB free disk space
3. Internet support

## Installation Shell Script
This script will execute all the steps. 

- Linux/MacOS Supported (If you want to install our application on windows，tell us vis email or leave a  message on [website](https://www.promptai.us/) )；
- Just execute the script again,if you want to get the latest version
- This script will update by us timely


```shell
#!/bin/sh
zbot=promptai/zbot-aio:latest
ai=promptai/zbotai:release 

# 1、pull docker image
docker pull $zbot
docker pull $ai

# 2、remove old container
docker rm -f zbot

# 3、prepare dirs
basedir=/usr/local/zbot/

mkdir -p $basedir/.promptai/
mkdir -p $basedir/logs
mkdir -p $basedir/mysql
mkdir -p $basedir/mongo
mkdir -p $basedir/p8s

# 4、bind port
hostport=9000

# 5、create & run container
# GPU version 
# docker run --restart always --name zbot -d --add-host=host.docker.internal:host-gateway -v $basedir/.promptai/:$basedir/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v $basedir/logs:/data/logs -v $basedir/mysql:/data/mysql -v $basedir/mongo:/data/mongo -v $basedir/p8s:/data/minimalzp/p8s -e ai.base.dir=$basedir/.promptai/ -p $hostport:80 --gpus all $zbot
# CPU version
docker run --restart always --name zbot -d --add-host=host.docker.internal:host-gateway -v $basedir/.promptai/:$basedir/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v $basedir/logs:/data/logs -v $basedir/mysql:/data/mysql -v $basedir/mongo:/data/mongo -v $basedir/p8s:/data/minimalzp/p8s -e ai.base.dir=$basedir/.promptai/ -p $hostport:80  $zbot
```

## Get the latest image

Use the following command to obtain the latest installation image. Before obtaining the latest image, please confirm that [the latest docker service has been installed](https://docs.docker.com/get-docker/)

```shell
docker pull promptai/zbot-aio:latest
```
## Start Container

### Start service without GPU
After obtaining the latest image, if you do not use the GPU, you can start the service with the following command
```shell
docker run --restart always --name zbot -d --add-host=host.docker.internal:host-gateway -v <host-path>/.promptai/:<host-path>/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v <host-path-log>:/data/logs -v <host-path-mysql>:/data/mysql -v <host-path-mongo>:/data/mongo -v <host-path-p8s>:/data/minimalzp/p8s  -e ai.base.dir=<host-path>/.promptai/ -p hostport:80  promptai/zbot-aio:latest
```
<br/>explain:
- `/var/run/docker.sock`: Docker Communication file (the service communicates with the docker to manage the model container)。
- `<host-path>/.promptai/`: The training file cache directory
- `<host-path-log>`: Log save directory
- `<host-path-mysql>`: MySQL data file directory
- `<host-path-mongo>`: Mongodb data file directory
- `<host-path-p8s>`: Minimalzp data directory (Statistical access, evaluation etc)
- `hostport`: The service exposed port cannot be occupied by other programs

### Start the service using the GPU
If you need to use the GPU, please install the GPU driver first. Currently, only the 'nvidia' video card is supported. [Driver download link](https://nvidia.github.io/nvidia-container-runtime/)

```shell
# Check whether the drive is normal
nvidia-smi
```
As shown in the figure after the drive is installed normally
![deploy-03](/assets/images/private_deploy/deploy-03.png)

Start the service and use the GPU. All GPUs of the current computer are used by default. If you need to specify GPUs, please refer to [the documentation](https://docs.docker.com/engine/reference/commandline/run/#access-an-nvidia-gpu)
```shell
# Use GPU
docker run --restart always --name zbot -d --add-host=host.docker.internal:host-gateway -v <host-path>/.promptai/:<host-path>/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v <host-path-log>:/data/logs -v <host-path-mysql>:/data/mysql -v <host-path-mongo>:/data/mongo -v <host-path-p8s>:/data/minimalzp/p8s  -e ai.base.dir=<host-path>/.promptai/ -p hostport:80  --gpus all promptai/zbot-aio:latest
```

### Installation is complete
After the command is executed, we can see the address, account and password information, as shown in the figure:

```shell
# Check the container log to determine whether the service was started successfully

docker logs -f zbot
```

  ![deploy-01](/assets/images/private_deploy/deploy-01.png)

### Login experience
Use the address, account and password displayed after installation to open the experience, as shown in the figure:
  ![deploy-02](/assets/images/private_deploy/deploy-02.png)

<br/>Note: Default initial login account/password: admin@promptai.local /Promptai, but please refer to the display after the service installation is completed

## Others

### Model Container
When we debug and publish the project, the system will create (by starting a new docker container) the corresponding model container according to the published project. Each published project will correspond to a model container,All debugging projects under one account correspond to the same model container.
![deploy-04](/assets/images/private_deploy/deploy-04.png)

### Start time
The first startup will take a long time because the system will pull the container's docker image (this process occurs automatically). Please be patient.

#### About the data
All the date stored in your machine. We will collect some necessary information so that we can evaluate the follow-up plan.

If you install the current app, you have consented to the collection of this information

Details:

1、Start up metric -  install or start up

| name | data type | description |
| ------ | ------ | ------ |
| init | Boolean | Install or update(restart container) |

This metric will be record when system up. For example: create container、restart container .this code in container path: `/scripts/startup.sh`。


## Update
Pull the latest docker image & created the container again `If you install by the shell script，just execute the script again` 

## Get help
Please scan the code to join the WeChat group for help. The WeChat QR code can be viewed in the upper right corner after login the system.
Website: https://www.promptai.us
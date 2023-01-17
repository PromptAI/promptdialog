---
layout: en
title: Localized Deployment
nav_order: 9
---

# Localized Deployment
{: .no_toc .header }

----
If you need to deploy the service to your own private server or local, you can refer to the following tutorial.
 
## Get the latest image

Use the following command to obtain the latest installation image. Before obtaining the latest image, please confirm that [the latest docker service has been installed](https://docs.docker.com/get-docker/)

```shell
docker pull registry.cn-chengdu.aliyuncs.com/zpcloud/zbot-aio:latest
```
## Start Container

### Start service without GPU
After obtaining the latest image, if you do not use the GPU, you can start the service with the following command
```shell

docker run --name zbot --add-host=host.docker.internal:host-gateway -v /usr/local/zbot/.promptai/:/usr/local/zbot/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v <host-path-log>:/data/logs -v <host-path-mysql>:/data/mysql -v <host-path-mongo>:/data/mongo -v <host-path-p8s>:/data/minimalzp/p8s -p hostport:80  registry.cn-chengdu.aliyuncs.com/zpcloud/zbot-aio:latest


```
<br/>explain:
- `/var/run/docker.sock`: Docker Communication file (the service communicates with the docker to manage the model container)。
- `/usr/local/zbot/.promptai/`: The training file cache directory needs to be consistent with the following mapping directory. If you need to modify it, you need to add the parameter ` - e ai. base. dir=<path>- v<path>:<path>`, `<path>` as the directory you need to modify
- `<host-path-log>`: Log save directory
- `<host-path-mysql>`: MySQL data file directory
- `<host-path-mongo>`: Mongodb data file directory
- `<host-path-p8s>`: Minimalzp data directory
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

docker run --name zbot --add-host=host.docker.internal:host-gateway -v /usr/local/zbot/.promptai/:/usr/local/zbot/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v <host-path-log>:/data/logs -v <host-path-mysql>:/data/mysql -v <host-path-mongo>:/data/mongo -v <host-path-p8s>:/data/minimalzp/p8s -p hostport:80 --gpus all registry.cn-chengdu.aliyuncs.com/zpcloud/zbot-aio:latest

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

## explain

### Model Container
When we debug and publish the project, the system will create (by starting a new docker container) the corresponding model container according to the published project. Each published project will correspond to a model container,All debugging projects under one account correspond to the same model container.
![deploy-04](/assets/images/private_deploy/deploy-04.png)

### Start time
The first startup will take a long time because the system will pull the container's docker image (this process occurs automatically). Please be patient.

## Get help
Please scan the code to join the WeChat group for help. The WeChat QR code can be viewed in the upper right corner after logging into the system.
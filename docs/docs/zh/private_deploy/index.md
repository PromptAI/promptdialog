---
layout: default
title: 本地化部署
nav_order: 9
has_children: true
---

# 本地化部署
{: .no_toc .header }

----
如果你需要将服务部署到自己的私有服务器或者本地，可以参考如下教程。

## 安装准备

- 1、已安装最近版本的Docker
- 2、足够的硬盘空间 (建议20GB以上，目前所需Docker镜像约为11GB)
- 3、Internet （如果不支持，可在有网络的机器导出Docker Image）

## 一键安装脚本

安装过程可无人值守，这里pull image耗时与网络有关，可以喝杯茶再来。

 - 支持Linux/MacOS (如果你有Windows安装需求，可以在官网/微信群给我们留言)；
 - 更新时重新执行该脚本即可，数据已挂载到本地目录；
 - 后期可能更新该脚本，敬请注意关注。

```shell
#!/bin/sh
zbot=registry.cn-hangzhou.aliyuncs.com/promptai/zbot-aio:latest
ai=registry.cn-hangzhou.aliyuncs.com/promptai/zbotai:release 

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

# 5、run container
# GPU version 
# docker run --restart always --name zbot -d --add-host=host.docker.internal:host-gateway -v $basedir/.promptai/:$basedir/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v $basedir/logs:/data/logs -v $basedir/mysql:/data/mysql -v $basedir/mongo:/data/mongo -v $basedir/p8s:/data/minimalzp/p8s -e ai.base.dir=$basedir/.promptai/ -p $hostport:80 --gpus all $zbot
# CPU version
docker run --restart always --name zbot -d --add-host=host.docker.internal:host-gateway -v $basedir/.promptai/:$basedir/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v $basedir/logs:/data/logs -v $basedir/mysql:/data/mysql -v $basedir/mongo:/data/mongo -v $basedir/p8s:/data/minimalzp/p8s -e ai.base.dir=$basedir/.promptai/ -p $hostport:80  $zbot
```

安装结果请看后文。

## 安装介绍
如果你不关心安装过程及其他信息，使用上面的脚本即可完成安装。 下面是详细介绍。

通过如下命令获取最新安装镜像。获取最新镜像前，请您确认[已经安装最新docker服务](https://docs.docker.com/get-docker/)

- zbot-aio:latest   -- 应用镜像
- zbotai:release    -- Rasa镜像 

```shell
docker pull registry.cn-hangzhou.aliyuncs.com/promptai/zbot-aio:latest
# 这里只需获取镜像。无需启动，系统会自动使用改镜像
docker pull registry.cn-hangzhou.aliyuncs.com/promptai/zbotai:release 
```
## 启动容器

### 不使用GPU启动服务
获取最新镜像后，如果不使用GPU可以通过下面命令启动服务
```shell
# 不使用GPU
docker run --restart always --name zbot -d --add-host=host.docker.internal:host-gateway -v <host-path>/.promptai/:<host-path>/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v <host-path-log>:/data/logs -v <host-path-mysql>:/data/mysql -v <host-path-mongo>:/data/mongo -v <host-path-p8s>:/data/minimalzp/p8s  -e ai.base.dir=<host-path>/.promptai/ -p hostport:80  registry.cn-hangzhou.aliyuncs.com/promptai/zbot-aio:latest
```
<br/>说明：
- `/var/run/docker.sock`:docker通讯文件（服务与docker通讯，对模型容器进行管理）。
- `<host-path>/.promptai/`：训练文件缓存目录
- `<host-path-log>`：日志保存目录
- `<host-path-mysql>`：mysql数据文件目录
- `<host-path-mongo>`：mongodb数据文件目录
- `<host-path-p8s>`：会话统计数据目录
- `hostport`:服务暴露端口，不能被其它程序占用

### 使用GPU启动服务
如果需要使用GPU请首先安装好GPU驱动程序，目前仅支持`nvidia`显卡，[驱动下载链接](https://nvidia.github.io/nvidia-container-runtime/)

```shell
# 查看驱动是否正常 
nvidia-smi
```
驱动安装正常后如图所示
![deploy-03](/assets/images/private_deploy/deploy-03.png)

启动服务，并且使用GPU。默认使用当前电脑的所有GPU，如果你需要指定GPU[请参考文档](https://docs.docker.com/engine/reference/commandline/run/#access-an-nvidia-gpu)
```shell
# 使用GPU
docker run --restart always --name zbot -d --add-host=host.docker.internal:host-gateway -v <host-path>/.promptai/:<host-path>/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v <host-path-log>:/data/logs -v <host-path-mysql>:/data/mysql -v <host-path-mongo>:/data/mongo -v <host-path-p8s>:/data/minimalzp/p8s  -e ai.base.dir=<host-path>/.promptai/ -p hostport:80  --gpus all registry.cn-hangzhou.aliyuncs.com/promptai/zbot-aio:latest
```

### 安装完成
命令执行完成后，我们可以看到地址、账号、密码信息，如图所示：

```shell
# 通过查看容器的日志，判断服务是否启动成功
docker logs -f zbot
```
看到`System is ready!`则表示系统启动成功
![deploy-01](/assets/images/private_deploy/deploy-01.png)

### 登录体验
打开浏览器访问`http://ip:port`即可看到效果。*假设使用安装脚本且未更改端口，可访问`http://localhost:9000`进行登录*

使用安装完成后显示账号、密码即可开启体验，如图所示：
![deploy-02](/assets/images/private_deploy/deploy-02.png)

<br/>*备注：默认的初始登录账号/密码:admin@promptai.local/promptai，但是请以服务安装完成后的显示为准*

## 说明

#### 模型容器
当我们进行项目调试及发布的时候，系统会根据发布的项目来创建（通过启动新的docker容器）对应的模型容器，每一个发布的项目都会对应一个模型容器，
一个账号下所有调试的项目对应同一个模型容器。
![deploy-04](/assets/images/private_deploy/deploy-04.png)

#### 启动时间
第一次启动会消耗较长时间，因为此时系统将pull容器的docker image（此过程自动发生），请耐心等待。 `使用安装脚本不会有这个问题。`

#### 数据安全
系统产生的所有的数据均存储在用户本地，数据更安全。 我们会统计一些必要信息，便于我们评估后续计划。

1、启动指标 -  统计系统启动、初始化情况

| 名称 | 类型 | 备注 |
| ------ | ------ | ------ |
| init | Boolean | 是否执行了初始化数据，即是否第一次/新安装 |

该请求在系统启动时触发，如：创建容器、restart容器。 这部分代码在 `/scripts/startup.sh`脚本中。



## 更新
成功执行docker pull镜像后重新创建容器即可。`使用安装脚本的用户重新执行脚本即可完成更新`

## 获取帮助
请扫码加入微信群里获取帮助，微信二维码在登录系统后右上角查看。
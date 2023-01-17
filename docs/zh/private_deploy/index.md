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
 
## 获取最新镜像

通过如下命令获取最新安装镜像。获取最新镜像前，请您确认[已经安装最新docker服务](https://docs.docker.com/get-docker/)

```shell
docker pull registry.cn-chengdu.aliyuncs.com/zpcloud/zbot-aio:latest
```
## 启动容器

### 不使用GPU启动服务
获取最新镜像后，如果不使用GPU可以通过下面命令启动服务
```shell
# 不使用GPU

docker run --name zbot --add-host=host.docker.internal:host-gateway -v /usr/local/zbot/.promptai/:/usr/local/zbot/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v <host-path-log>:/data/logs -v <host-path-mysql>:/data/mysql -v <host-path-mongo>:/data/mongo -v <host-path-p8s>:/data/minimalzp/p8s -p hostport:80  registry.cn-chengdu.aliyuncs.com/zpcloud/zbot-aio:latest


```
<br/>说明：
- `/var/run/docker.sock`:docker通讯文件（服务与docker通讯，对模型容器进行管理）。
- `/usr/local/zbot/.promptai/`：训练文件缓存目录，需要与后面的映射目录一致，如果需要修改需要在启动命令添加参数`-e ai.base.dir=<path> -v <path>:<path>`，`<path>`为你需要修改的目录
- `<host-path-log>`：日志保存目录
- `<host-path-mysql>`：mysql数据文件目录
- `<host-path-mongo>`：mongodb数据文件目录
- `<host-path-p8s>`：minimalzp数据目录
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

docker run --name zbot --add-host=host.docker.internal:host-gateway -v /usr/local/zbot/.promptai/:/usr/local/zbot/.promptai/:rw -v /var/run/docker.sock:/var/run/docker.sock  -v <host-path-log>:/data/logs -v <host-path-mysql>:/data/mysql -v <host-path-mongo>:/data/mongo -v <host-path-p8s>:/data/minimalzp/p8s -p hostport:80 --gpus all registry.cn-chengdu.aliyuncs.com/zpcloud/zbot-aio:latest

```

### 安装完成
命令执行完成后，我们可以看到地址、账号、密码信息，如图所示：

```shell
# 通过查看容器的日志，判断服务是否启动成功

docker logs -f zbot
```

  ![deploy-01](/assets/images/private_deploy/deploy-01.png)

### 登录体验
使用安装完成后显示的地址、账号、密码即可开启体验，如图所示：
  ![deploy-02](/assets/images/private_deploy/deploy-02.png)

<br/>备注：默认的初始登录账号/密码:admin@promptai.local/promptai，但是请以服务安装完成后的显示为准

## 说明

### 模型容器
当我们进行项目调试及发布的时候，系统会根据发布的项目来创建（通过启动新的docker容器）对应的模型容器，每一个发布的项目都会对应一个模型容器，
一个账号下所有调试的项目对应同一个模型容器。
![deploy-04](/assets/images/private_deploy/deploy-04.png)

### 启动时间
第一次启动会消耗较长时间，因为此时系统将pull容器的docker image（此过程自动发生），请耐心等待。

## 获取帮助
请扫码加入微信群里获取帮助，微信二维码在登录系统后右上角查看。
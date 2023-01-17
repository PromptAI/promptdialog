---
layout: default
title: 配置说明
parent: 开发指南
nav_order: 20
---

# 配置说明
{: .no_toc .header }
---
此教程将对系统中各种配置进行及其使用场景效果进行说明。

## 项目设置
项目设置中欢迎语和未知问题回复会在训练及发布完成后对聊天机器人产生影响。
![01-setting-project](/assets/images/tutorial/setting/01-setting-project.png)

### 欢迎语

如图所示，设置欢迎语后打开机器人聊天窗口会作为第一条消息发送给用户。
<br/>注意：项目设置中修改欢迎语后必须重新训练发布后才能生效。下载Rasa可读文件此项功能不支持。
![02-setting-project-welcome](/assets/images/tutorial/setting/02-setting-project-welcome.png)

### 未知问题回复

如图所示，当聊天机器人不能识别用户意图的时候，就会把项目设置的未知问题回复作为一条消息发送给用户。
<br/>注意：项目设置中修改未知问题回复后立即生效，不需要重新发布。下载Rasa可读文件此项功能不支持。
![03-setting-project-fallback](/assets/images/tutorial/setting/03-setting-project-fallback.png)

## 对话流图设置
对话概览编辑对话流图的时候，可以设置分支提示语、下级是否作为选项呈现

![project-overview-5](/assets/images/tutorial/project/project-overview-5.png)

### 分支提示语
当用户此处勾选**下级是否作为选项呈现**后的**全部**，发布项目后，项目下所有的对话流程会在分支提示语下面以用按钮呈现。勾选**仅选中**
，发布项目后该项目下仅开启**分支提示分支选项**的对话流程会在分支提示语下面以用按钮呈现。勾选**否**
，发布项目后该项目所有的对话流程都不会在分支提示语下面以用按钮呈现
<br/>注意：**分支提示语**、**下级是否作为选项呈现**改后立即生效，不需要重新发布。下载Rasa可读文件此项功能不支持。

![project-overview-6](/assets/images/tutorial/project/project-overview-6.png)

### 是否提示分支选项及分支引导语
对话概览编辑是否提示分支选项及引导语。
<br/>注意：是否提示分支选项，分支引导语修改后立即生效，不需要重新发布。下载Rasa可读文件此项功能不支持。
![05-setting-project-branch-welcome](/assets/images/tutorial/setting/05-setting-project-branch-welcome.png)

分支编辑界面编辑是否提示分支选项及引导语。
![06-setting-project-branch-welcome](/assets/images/tutorial/setting/06-setting-project-branch-welcome.png)

训练发布的时候，开启的是否提示分支选项分支会优先作为按钮添加在欢迎语的后面，分支引导语在用户点击对应分支按钮或者发送消息命中分支后会将设置的引导语一并返回
![08-setting-project-branch-welcome](/assets/images/tutorial/setting/08-setting-project-branch-welcome.png)

## 配置机器回复的延时时间

机器回复节点可以设置回复延时时间。当机器人回复的时候，会延迟对应设置时间回复消息。如图所示，这里我们设置机器人延时5s回复
![09-setting-project-conversion-delay](/assets/images/tutorial/setting/09-setting-project-conversion-delay.png)

当用户输入意图命中设置延时时间的机器回复后，消息再设定的延时时间后回复。如图所示：
![10-setting-project-conversion-delay](/assets/images/tutorial/setting/10-setting-project-conversion-delay.png)


## 配置机器人回复条件

当设置机器人回复条件后，会根据是否提取到的对应变量的值走不通的分支。当有多个条件时，需要同时满足。
如图，这里我们设置成提取到city不为空时可以继续后面下面的选择
![11-setting-project-conversion-condition](/assets/images/tutorial/setting/11-setting-project-conversion-condition.png)

训练后的效果如图：
![12-setting-project-conversion-condition](/assets/images/tutorial/setting/12-setting-project-conversion-condition.png)

## 配置重置变量值
当设置重置变量值后，变量的值就会重置成设置成的值，后续节点提取到该变量的值即为设定的值。设置方法如图所示
![13-setting-project-conversion-condition](/assets/images/tutorial/setting/13-setting-project-conversion-condition.png)

训练效果图：
![14-setting-project-conversion-condition](/assets/images/tutorial/setting/14-setting-project-conversion-condition.png)

## 下载Rasa可读文件

目前我们系统支持直接下载rasa可读文件，点击右上角的**其它**按钮，按自己需要下载对应对话流图的Rasa可读文件
<br/>注意：欢迎语，未知问题回复，分支提示语，再次提问提示语（FAQ）需要系统支持才生效
![15-download-rasa-file](/assets/images/tutorial/setting/15-download-rasa-file.png)

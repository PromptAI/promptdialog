---
layout: default
title: 本地安装
nav_order: 8
has_children: true
---

# 本地安装
{: .no_toc .header }

----
当RASA开发人员需要使用系统流图的编辑功能或者是需要对流图进行调试验证的时候，
可以利用系统的**下载RASA文件**功能，在本地利用下载的Rasa文件进行调试验证。

   
## Rasa文件下载
下载RASA文件功能主要是为了方便开发人员能使用系统方便快捷的流图编辑功能，然后利用系统帮助生成RASA文件，
再对模型进行调试验证。

* 如图所示，点击所选流图右上角的**下载RASA文件**，弹出选择框，这里你可以相应的对话流图，然后点击**确定**下载RASA文件。 选择框有以下几个组合可选：
- 当前下载，下载当前对话流图
- 组合下载，自由勾选当前项目下的对话流图
- 全部下载，勾选当前项目下的全部对话流图

![download-rasa](/assets/images/dev_guide/download-rasa.png)

* 当前项目有包含错误节点的流图时，会在弹出框归类到**不可用模块**，鼠标放到流图上面可以看到错误信息数量，点流图后面的链接可以快捷跳转到对应流图进行修改。
![download-rasa-1.png](/assets/images/dev_guide/download-rasa-1.png)

<br/>注意：欢迎语，未知问题回复，分支提示语，跳转到节点，再次提问提示语（FAQ）需要系统支持才生效

## Rasa环境准备

本地安装需要你本地python版本3.8以上（推荐3.8.10），同时需要通过pip安装以下依赖包

```text
rasa==3.2.0
jieba==0.42.1
transformers==4.24.0
jsonpath==0.82
```

安装完成后命令行输入`rasa init`验证如图所示。

![rasa-env](/assets/images/dev_guide/download-rasa-env.png)
![rasa-env-1](/assets/images/dev_guide/download-rasa-env-1.png)

## RASA文件调试验证

这里我们以`项目模板`->`帮助文档`->`收集用户信息`为例

1. 移动最开始下载的rasa文件到`/Users/admin/dev/flow/rasa/data/`并解压到`rasa`，解压后如图所示:

   ![download-rasa-debug-1](/assets/images/dev_guide/download-rasa-debug-1.png)

2. 训练调试

    ```shell
    # 进入目录
    cd /Users/admin/dev/flow/rasa/data/rasa
    
    # 启动actions
    rasa actions
   
    # 开启另一命令行窗口进行训练
    rasa train
    # 调试对话
    rasa shell -p 8001
    ```
   注意:如果出现`OSError: [Errno 30] Read-only file system: '/rasa'`错误，可以参考下面解决办法：
   - mkdir /rasa && chmod 777 /rasa 
   - 修改文件中的config.yml，注释掉`cache_dir: /rasa/bert`这一项
   
3. 验证结果
   如图所示行进行调试验证
   ![download-rasa-debug-2](/assets/images/dev_guide/download-rasa-debug-2.png)


<br/>注意：
1. 目前版本不支持中文变量，后续版本会增加docker image进行支持
2. 目前版本不支持内置变量

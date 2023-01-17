---
layout: default
title: 创建信息收集（Form）
parent: 开发指南
nav_order: 23
---

# 概念说明
{: .no_toc .header }
---
信息表单的概念请参照[信息表单](/docs/appendix/appendix/#表单)概念说明

## 使用场景

信息表单的使用场景很多，比如说用户订酒店，订车票的时候需要知道用户的身份信息，查询订单的时候需要知道用户的订单号，
诸如此类的场景，很适合使用信息表单来处理。

## 创建表单

### 创建对话流图**购买水果**
   ![01-form](/assets/images/tutorial/form/01-form.png)

### 新增用户输入节点
   ![02-form](/assets/images/tutorial/form/02-form.png)

### 创建信息收集（Form）节点
  ![03-form](/assets/images/tutorial/form/03-form.png)
  ![04-form](/assets/images/tutorial/form/04-form.png)
### 完善信息列表（Slots）
  1. 收集水果名
    <br/> 点击**信息收集列表（Slots）**添加**信息收集项**节点（默认会添加一个变量节点和一个机器询问节点），如图所示
     ![05-form](/assets/images/tutorial/form/05-form.png)
     这里我们先点击变量节点（即图中**{}未定义**节点），添加变量**水果名**，修改后面询问节点的询问内容。
     ![06-form](/assets/images/tutorial/form/06-form.png)
     ![07-form](/assets/images/tutorial/form/07-form.png)
     点击询问节点，添加用户输入节点，用来提取收集信息。这里我们**变量名称**选择**水果名**，**变量值来源**选择**实体提取**，
     同时对用户输入例句进行水果名标记标记，以便正确提取
     ![08-form](/assets/images/tutorial/form/08-form.png)

  2. 收集水果重量
     <br/>继续添加**信息收集项**-**水果重量**,完成后如图所示
     ![09-form](/assets/images/tutorial/form/09-form.png)
       
  3. 收集水果重量和水果名
     当我们需要在一句用户输入同时提取`水果名`和`水果重量`时，
     选择**信息列表(Slots)**，添加如图所示训练例句，同时在训练例句中提取`水果名`和`水果重量`
     ![15-form](/assets/images/tutorial/form/15-form.png)
  4. 处理用户其他请求（Interrupts）
     <br/>如果说，信息收集的过程中，用户想要退出或者有请他请求，可以在此处设置。比如这里我们以用户想要退出**信息收集（Form）**为例 ,
     点击用户其他请求（Interrupts）然后添加用户输入几点，例句如图所示
     ![12-form](/assets/images/tutorial/form/12-form.png)
     继续在后面依次添加机器回复节点和收集中断节点，更加友好处理用户退出，如图所示
     ![13-form](/assets/images/tutorial/form/13-form.png)
    
### 完善收集成功
  <br/>收集成功后我们将收集到的信息跟用户确认，我们在收集成功节点后面添加一个机器回复，
跟用户确认订单信息并保存到回答列表（参照[创建回答列表](/docs/tutorial/node-template/bot-global/)）
![14-form](/assets/images/tutorial/form/14-form.png)

### 完整流图如下：
  ![20-form](/assets/images/tutorial/form/20-form.png)
  ![21-form](/assets/images/tutorial/form/21-form.png)


## 训练并验证结果
   <br/> 点解右上角的**调试运行-当前模块**，等待训练完成验证效果
     ![22-form](/assets/images/tutorial/form/22-form.png)
     ![23-form](/assets/images/tutorial/form/23-form.png)

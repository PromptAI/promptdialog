---
layout: default
title: 回收站
parent: 开发指南
nav_order: 25
---

# 作用
{: .no_toc .header }
---
当我们删除流图中某个/多个节点的时候，但是可能后面还会用到他，这时我们就可以先把它移动到回收站，
需要使用的时候然后拖动到需要的节点

## 支持的移动到回收站的节点类型

- 用户输入
- 机器回复
- 用户选项
- 信息收集（Form）
- 信息收集项
- 用户其他请求（Interrupts）
- 信息收集（Form）中的反问节点

## 移动到回收站
支持移动到回收站的节点点击后有**置回收站**按钮，弹出窗口点击确定即可移动到回收站
  ![01-form](/assets/images/tutorial/trash/01-trash.png)

## 从回收站恢复节点
* 选中回收站的`好的`机器回复节点然后拖动到需要链接的节点上，当出现**+**图标的时候松开即可。
  <br/>恢复的节点会作为拖动到的节点后的一个子节点
  ![13-trash](/assets/images/tutorial/trash/13-trash.png)
## 从回收站删除
点击回收站图标，然后在回收站操作窗口选择需要删除的节点点击删除即可。如图所示
  ![03-trash](/assets/images/tutorial/trash/03-trash.png)
  ![04-trash](/assets/images/tutorial/trash/04-trash.png)

## 使用回收站插入节点
* 准备如下流图，我们在两个机器回复节点中间添加一个用户输入节点
  ![10-trash](/assets/images/tutorial/trash/10-trash.png)
* 后面这个`好的`机器回复节点移动到回收站
  ![11-trash](/assets/images/tutorial/trash/11-trash.png)
* 添加一个用户输入节点 
  ![12-trash](/assets/images/tutorial/trash/12-trash.png)
* 选中回收站的`好的`机器回复节点然后拖动到刚刚创建的用户输入节点，当出现**+**图标的时候松开即可
  ![13-trash](/assets/images/tutorial/trash/13-trash.png)
* 完成
## 使用回收站删除中间节点

* 准备如下流图，我们利用回收站删除在两个机器回复节点中间的用户输入节点
  ![20-trash](/assets/images/tutorial/trash/20-trash.png)

* 将后面这个`好的`机器回复节点移动到回收站
  ![21-trash](/assets/images/tutorial/trash/21-trash.png)

* 删除`我叫小明`这个用户输入节点
  ![22-trash](/assets/images/tutorial/trash/22-trash.png)

* 选中回收站的`好的`机器回复节点然后拖动到机器回复节点`您好，请问你怎么称呼？`，当出现**+**图标的时候松开即可
  ![23-trash](/assets/images/tutorial/trash/23-trash.png)
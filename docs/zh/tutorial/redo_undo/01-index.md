---
layout: default
title: 撤销/重做
parent: 开发指南
nav_order: 26
---

# 作用
{: .no_toc .header }
---
有时候我们会存在误删除某个节点或者多个节点的情况，如果我们需要回退到上一步操作，恢复误删除的节点，
这就是撤销/重做功能的使用场景。
<br/>目前版本撤销/重做功能不支持跨设备跨浏览器


## 示例
我们准备如下对话流图

![001-redo_undo](/assets/images/tutorial/redo_undo/01-redo_undo.png)

我们删除最后一个机器回复节点如图
![02-redo_undo](/assets/images/tutorial/redo_undo/02-redo_undo.png)
这时候我们点击**撤销**按钮，删除的机器回复节点恢复
![03-redo_undo](/assets/images/tutorial/redo_undo/03-redo_undo.png)
我们点击**重做**按钮，恢复的机器回复节点再次被删除
![04-redo_undo](/assets/images/tutorial/redo_undo/04-redo_undo.png)

注意：撤销/重做功能我们正在测试试用阶段，建议您尽量少试用，避免您的重要数据丢失
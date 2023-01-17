---
layout: default
title: 创建回答列表
parent: 开发指南
nav_order: 21
---

# 概念说明
{: .no_toc .header }
---
当您有许多节点需要使用相同的回复时，强烈建议您使用回答列表，可以节省你大量的重复操作时间，
回答列表的概念请参照[回答列表](/docs/appendix/appendix/#回答列表)概念说明

## 创建回答列表

如果所示，依次点击**项目视图-回答列表-新增**，我们创建一个回答提取到生日的通用回答模板，按照图中填好后点击确定保存，
![11-bot-global](/assets/images/tutorial/template/11-bot-global.png)
## 在对话流图中使用
1. 这里我们使用创建意图列表的流图，创建过程可以参照[创建意图列表](/docs/tutorial/node-template/bot-global/)教程。流图如下：
   ![05-user-global](/assets/images/tutorial/template/05-user-global.png)

2. 选择流图最后的两个节点中一个，按照图中所示点击**从回答列表中选取** 然后选择我们刚刚创建的回答模板。对最后两个节点的另一个进行同样的操作
   ![12-bot-global](/assets/images/tutorial/template/12-bot-global.png)
   选择完成后，我们可以在此处添加、删除、修改回复（操作对所有引用该模板的回复节点都会生效）
   ![13-bot-global](/assets/images/tutorial/template/13-bot-global.png)
   完成流图如下：
   ![14-bot-global](/assets/images/tutorial/template/14-bot-global.png)

3. 训练并验证结果
   <br/> 点解右上角的**调试运行-当前模块**，等待训练完成验证效果
   ![15-bot-global](/assets/images/tutorial/template/15-bot-global.png)
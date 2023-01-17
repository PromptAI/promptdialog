---
layout: default
title: 创建意图列表
parent: 开发指南
nav_order: 22
---

# 意图列表概念
{: .no_toc .header }
---
请参照[意图列表](/docs/appendix/appendix/#意图列表)概念说明

## 创建意图列表

如果所示，依次点击**项目视图-意图列表-新增**，我们创建一个提取生日的通用意图模板，按照图中填好后点击确定保存，
![01-user-global](/assets/images/tutorial/template/01-user-global.png)
## 在对话流图中使用
1. 如图所示，先创建一个询问生日的流图，然后依次创建一个询问生日的机器回复节点，和一个用户输入节点。
   ![02-user-global](/assets/images/tutorial/template/02-user-global.png)

2. 选择用户输入节点编辑节点，按照图中所示点击**从意图列表选择** 然后选择我们刚刚创建的意图模板
   ![03-user-global](/assets/images/tutorial/template/03-user-global.png)
   选择完成后，我们可以在此处添加、删除、修改训练语句（操作对所有引用该模板的用户输入节点都会生效）
   ![04-user-global](/assets/images/tutorial/template/04-user-global.png)
   再创建一个分支，引用生日提取模板，然后完成流图如下：
   ![05-user-global](/assets/images/tutorial/template/05-user-global.png)
   
3. 训练并验证结果
   <br/> 点解右上角的**调试运行-当前模块**，等待训练完成验证效果
   ![06-user-global](/assets/images/tutorial/template/06-user-global.png)

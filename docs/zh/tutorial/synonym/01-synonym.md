---
layout: default
title: 同义词
parent: 开发指南
nav_order: 30
---

# 同义词
{: .no_toc .header }
---
使用同义词可以将**同义词**替换成**原始词**

## 添加同义词
选择左侧菜单栏`项目视图`-`同义词`，点击右上角的`新增同义词`按钮添加同义词，编辑完成后保存，如图所示
![01-synonym](/assets/images/tutorial/synonym/01-synonym.png)
![02-synonym](/assets/images/tutorial/synonym/02-synonym.png)

## 在流图中使用同义词
选择`查询天气`流图，编辑`成都天气`用户输入节点，这里我们把同义词添加到训练语句，如图所示
![03-synonym](/assets/images/tutorial/synonym/03-synonym.png)

## 创建完成
完整流图如图所示，然后点击`调试运行`：
![04-synonym](/assets/images/tutorial/synonym/04-synonym.png)

## 验证
如图所示，`成都市`的同义词都已被成功替换
![05-synonym](/assets/images/tutorial/synonym/05-synonym.png)

---
layout: default
title: 变量-热词
parent: 开发指南
nav_order: 28
---

# 变量-热词
{: .no_toc .header }
---
当我们使用变量提取的的时候，有时候提取到的变量值是特定场景下的词汇，这种情况下我们可以为变量添加热词，
提高识别准确率。

## 给变量添加热词
这里我们给变量**水果名**添加热词，热词内容如下:
``` text
苹果
橘子
香蕉
李子
榴莲
甘蔗
柚子
草莓
蓝莓
桑葚
桃子
番茄
西瓜
```
<br/>点击**水果名**后面的**上传**按钮，按照提示上传热词，格式参考**点击下载样例**。
![dict-01](/assets/images/tutorial/dict/dict-01.png)
![dict-02](/assets/images/tutorial/dict/dict-02.png)

上传成功后可以点击**详情**查看都有哪些热词已上传成功，也可以**下载**备份热词到本地，或者不想要使用热词**删除**上传的热词
![dict-03](/assets/images/tutorial/dict/dict-03.png)

## 创建流图

这里我们创建对话流图**水果名价格查询**。

1. 添加用户输入节点如下：
   ![dict-04](/assets/images/tutorial/dict/dict-04.png)
**注意**：这里为了提高热词识别率，最少需要标注两个热词
   
2. 添加水果名提取成功时机器回复节点如下：
   ![dict-05](/assets/images/tutorial/dict/dict-05.png)
   机器回复节点的webhook设置如下：
   ![dict-06](/assets/images/tutorial/dict/dict-06.png)
   ![dict-07](/assets/images/tutorial/dict/dict-07.png)

3. 添加水果名提取失败时机器回复节点如下：
   ![dict-08](/assets/images/tutorial/dict/dict-08.png)

## 训练并验证效果
如图所我们之前热词中的水果名也能准确识别并查询到价格。
![dict-09](/assets/images/tutorial/dict/dict-09.png)

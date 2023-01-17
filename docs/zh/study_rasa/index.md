---
layout: default
title: RASA学习
nav_order: 19
has_children: true
---

# RASA学习
{: .no_toc .header }

----

## 一 可视化设计工具
[https://www.promptai.cn/](https://www.promptai.cn/)
PROMPT AI是一个利用思维导图实现对话流程设计的网站，拥有可视化界面，可以使用简单的操作设计兼容rasa的项目文件并自动化部署上线。网站的界面上有下载功能，可以将编辑好的对话翻译成rasa项目，包括配置、nlu、story数据，在本地环境修改，训练，运行与部署。
## 二 官方资料

1. Rasa官方文档

[https://rasa.com/docs/rasa/](https://rasa.com/docs/rasa/)
Rasa官网提供的文档，有详细的从安装到部署的说明以及每个大版本的主要变化说明。Rasa每个大版本都有较大的改动，比如数据格式上：从`markdown`到`yaml`格式、`domain.yml`文件中的数据结构调整；在官方文档中都有较详细的说明。

2. Rasa官方样例

[https://github.com/RasaHQ/rasa/tree/main/examples](https://github.com/RasaHQ/rasa/tree/main/examples)
Rasa官方代码库中给的几个例子。Rasa团队还有一个比较大型的example bot——sara，是在单独的代码仓库里，但由于sara bot本身内容较多，较适合已入门的学者学习。而Rasa代码库中的example都比较小，适合初学者学习Rasa框架中的各个小功能。另外需要注意的是，由于Rasa迭代比较频繁，数据格式也在不断变化，需要选择好对应的版本号，否则可能会出现各种问题；此外，在实际学习时，我们发现有一些example中需要稍微修改配置文件`config.yml`，才能够实际使用，请注意这点。

3. Rasa博客

[https://rasa.com/blog/](https://rasa.com/blog/)
Rasa官方博客链接。在博客中，Rasa的开发人员会介绍相应的技术背后的实现逻辑、设计思想，在需要深入了解Rasa的时候，这些博客是值得参考的。

4. 官方论坛

[https://forum.rasa.com/](https://forum.rasa.com/)
在这里可以找到一些用户的实际使用问题，也会有官方团队的人维护版面。如果你使用的是较早期版本的Rasa，这里比较容易找到答案。

## 三 非官方/中文bot资料
以下是一些非官方的资料，如有其他公开资料，请联系我们，我们会及时添加。

1. Rasa中文聊天机器人开发指南

[https://jiangdg.blog.csdn.net/article/details/104328946](https://jiangdg.blog.csdn.net/article/details/104328946)
个人认为这个系列的博客翻译是比较准确的，并且较为通俗易懂，看完这几篇应该可以对Rasa框架有初步的认识并且能够搭建起基础的对话机器人。该作者已经完成了介绍Rasa框架主要的几部分，包括安装说明，NLU以及CORE篇，这个系列值得一看。

2. Github个人项目——基于Rasa v2.x

[https://github.com/Dustyposa/rasa_ch_faq](https://github.com/Dustyposa/rasa_ch_faq)
质量很高的rasa项目，除了使用rasa提供的功能外，还做了其他的定制化功能，比如custom action, custom pipeline等，有需要可仿照该作者的设计思路进行设计。

3. Github个人项目——基于Rasa v1.x

[https://github.com/GaoQ1/rasa_chatbot_cn](https://github.com/GaoQ1/rasa_chatbot_cn)
该作者写了一系列博文，并且提供了他的项目文件，质量很高。项目整体基于Rasa v1.10，如果有正在使用Rasa v1.x系列的朋友们可以放心参考这个项目。

4. Rasa书

https://github.com/Chinese-NLP-book/rasa_chinese_book_code

该书基于Rasa v3.0版本，系统地讲解了Rasa框架的原理，以及如何搭建各种不同场景的bot，也讲解了Rasa的高并发支持，有助于Rasa的工业界使用。

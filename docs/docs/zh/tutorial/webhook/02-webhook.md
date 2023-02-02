---
layout: default
title: webhook示例
parent: 开发指南
nav_order: 10
---

# Webhook
{: .no_toc .header }
---
通过webhook，我们可以在特定的步骤跟外部接口（API）交互。将收集到的输入信息通过webhook的方式提交到API并且按照自定义的规则展示Api的处理结果。
通过下面几个示例，让你快速了解webhook的使用。

- 通过get请求获取指定城市天气
- 通过post请求提交信息


## 通过get请求获取天气信息F

1. 这里我们已经准备好了查询天气的接口:

   url:https://app.promptai.cnF/rpc/gaode/weather?key=c4f69dbbd66cfc7f4e49310fea69dff1&city=xxxx  

   http请求头:Authorization=9f480349b1474c8a9f0d48c80e8e9ca8

   请求参数:key=c4f69dbbd66cfc7f4e49310fea69dff1,city=你要查询的城市

2. 下图是通过postman获取成都的天气信息：
   ![01-webhook](/assets/images/tutorial/webhook/01-webhook.png)

3. 按照下面的图示，创建webhook，创建完成后提交保存
   ![02-webhook](/assets/images/tutorial/webhook/02-webhook.png)
   ![03-webhook](/assets/images/tutorial/webhook/03-webhook.png)
注意：这里URL中用到了变量city,并且用{}括起来，代表这个city是会话流图中的变量
4. 按照如下步骤创建流图
   - 创建会话流图
   ![04-webhook](/assets/images/tutorial/webhook/04-webhook.png)
   - 创建user节点
   ![05-webhook](/assets/images/tutorial/webhook/05-webhook.png)
   注意：这里的变量名（city）必须与webhook中URL中{}引用的变量名一样

   - 创建bot节点
   ![06-webhook](/assets/images/tutorial/webhook/06-webhook.png)

5. 创建完成并训练
   ![07-webhook](/assets/images/tutorial/webhook/07-webhook.png)
6. 训练完成后开始验证webhook是否生效。从图示可以看出，可以正确提取到变量并通过webhook获取到天气信息
   ![08-webhook](/assets/images/tutorial/webhook/08-webhook.png)


## 通过post请求提交信息
1. 这里我们已经准备好了一个post接口，接口会将请求body,请求参数重新组装后返回

   url:https://www.fastmock.site/mock/e7ed910a1b72aa375762495523e5f325/webhook/api/facke?address=成都市高新区  
   
   http请求头：无  
   
   http请求body：
   ``` json
      {
         "name":"goobai",
         "age":12
      }
   ```
2. 下图是通过postman接口返回信息：
   ![10-webhook](/assets/images/tutorial/webhook/10-webhook.png)
3. 按照下面的图示，创建webhook,创建完成后提交保存
   
   ![11-webhook](/assets/images/tutorial/webhook/11-webhook.png)
   ![12-webhook](/assets/images/tutorial/webhook/12-webhook.png)
   注意：这里URL中用到了变量address,body用到了变量name、age,都需要用{}括起来
4. 按照如下步骤创建流图
   - 创建会话流图
   ![20-webhook](/assets/images/tutorial/webhook/20-webhook.png)

   - 创建bot节点
   ![21-webhook](/assets/images/tutorial/webhook/21-webhook.png)

   - 创建user节点,并提取变量address
   ![22-webhook](/assets/images/tutorial/webhook/22-webhook.png)
   ![23-webhook](/assets/images/tutorial/webhook/23-webhook.png)
   - 创建bot节点
   ![24-webhook](/assets/images/tutorial/webhook/24-webhook.png)

   - 创建user节点,并提取变量name
   ![25-webhook](/assets/images/tutorial/webhook/25-webhook.png)
   ![26-webhook](/assets/images/tutorial/webhook/26-webhook.png)
   - 创建bot节点
   ![27-webhook](/assets/images/tutorial/webhook/27-webhook.png)

   - 创建user节点,并提取变量age
   ![28-webhook](/assets/images/tutorial/webhook/28-webhook.png)
   ![29-webhook](/assets/images/tutorial/webhook/29-webhook.png)
   - 创建bot节点并选择收集年龄，姓名，地址这个webhook
   ![30-webhook](/assets/images/tutorial/webhook/30-webhook.png)
5. 创建完成并训练
   ![31-webhook](/assets/images/tutorial/webhook/31-webhook.png)
   ![32-webhook](/assets/images/tutorial/webhook/32-webhook.png)
6. 训练完成后开始验证webhook是否生效。从图示可以看出，可以正确提取到变量并成功调用webhook
   正确提取到接口返回信息。
   ![33-webhook](/assets/images/tutorial/webhook/33-webhook.png)



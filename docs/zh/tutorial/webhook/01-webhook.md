---
layout: default
title: webhook概念说明
parent: 开发指南
nav_order: 9
---

# Webhook
{: .no_toc .header }
---

通过 webhook，我们可以在特定的步骤跟外部接口（API）交互。将收集到的输入信息通过 webhook 的方式提交到 API 并且按照自定义的规则展示 Api 的处理结果。
通过下面的几个概念说明，了解我们系统 webhook 中的相关概念。

- HTTP GET 请求简单介绍
- webhook 编辑页面概念介绍

## HTTP GET 请求简单介绍

1. url 就是我们平常打开百度在地址栏输入的：https://www.baidu.com,如下图，这个是最简单的url地址，打开的是百度的主页
   ![40-webhook](/assets/images/tutorial/webhook/40-webhook.png)
2. 再看一个稍微复杂一点的 url，在百度输入框输入：上海悠悠博客园
   ![41-webhook](/assets/images/tutorial/webhook/41-webhook.png)
3. 查看 url 地址栏，对比之前的百度首页 url 地址，后面多了很多参数。当然最主要的参数是:wd=上海悠悠博客园（后面的一大串可以暂时忽略）。

4. 那么问题来了，这些参数有什么作用呢？可以做个简单的**对比**，在地址栏分别输入：

   - https://www.baidu.com ;
   - https://www.baidu.com/s?wd=上海悠悠博客园
     <br/>对比打开的页面有什么不一样，现在知道作用了吧，也就是说这个多的"/s？wd=上海悠悠博客园"就是搜索的结果页面

5. 那么一个完整的 url 地址，基本格式如下：

   ```shell
   https://host:port/path?xxx=aaa&ooo=bbb

   --http/https：这个是协议类型，如图中1所示

   --host:服务器的IP地址或者域名，如图中2所示

   --port:HTTP服务器的默认端口是80，这种情况下端口号可以省略。

   如果使用了别的端口，必须指明，例如：192.168.3.111:8080，这里的8080就是端口

   --path:访问资源的路径,如图中3所示/s (图中3是把path和请求参数放一起了)

   --？:url里面的？这个符号是个分割线，用来区分问号前面的是path，问号后面的是参数

   --url-params:问号后面的是请求参数，格式：xxx=aaa，如图4区域就是请求参数

   --&：多个参数用&符号连接
   ```

## webhook 编辑页面概念介绍

通过 webhook，我们可以在特定的步骤跟外部接口（API）交互。
将收集到的输入信息通过 webhook 的方式提交到 API 并且按照自定义的规则展示 Api 的处理结果。
![50-webhook](/assets/images/tutorial/webhook/50-webhook.png)
![51-webhook](/assets/images/tutorial/webhook/51-webhook.png)

1. 名称
   <br/>我们新建 webhook 的时候可以给每一个取一个跟 webhook 功能相关的名称，方便在 flow 引用的时候区分
2. URL
   <br/>此处的 url 跟上文提到的 http url 是同一个意思，可以参照上文理解。此处填写的时候需要注意区分选择`http/https`协议。
   另外 URL 地址还支持变量传递，调用命中的 webhook 的时候，就会把相应的变量占位符替换成变量的值。
   如图所示，假如流图中我们定义了一个变量 city，这里配置的时候就需要用{city}进行传递
   ```
   app.promptai.cn/rpc/gaode/weather?key=c4f69dbbd66cfc7f4e49310fea69dff1&city={city}
   ```
3. 请求设置-请求方法
   <br/>请求方法表示 http 请求方法，目前支持的有 get、post、put、delete
4. 请求设置-请求标头
   <br/>请求标头表示 http 请求 header，当外部接口需要特定请求头的时候可以在此处添加
5. 请求设置-数据格式
   <br/>数据格式表示请求体的数据格式。
   - 无数据格式-表示请求体没有
   - 表单格式-application/x-www-form-urlencoded，
   - JSON 数据格式-application/json，
     文本数据格式-text/plain
6. 响应设置-响应处理
   - 忽略响应-表示请求接口后对接口返回数据不做任何处理
   - 忽略状态码-忽略接口返回的 http 状态码
   - 原始响应-直接展示接口返回的内容，不做任何的处理
   - 自定义处理-自定义变量，对返回的数据进行提取并拼接组装。
7. 响应设置-解析响应
   <br/>当选择自定义处理后，可以通过定义变量，解析接口返回的数据
   比如说这里我们返回的数据格式如下
   ```json
   {
     "lives": [
       {
         "province": "四川",
         "city": "成都市",
         "adcode": "510100",
         "weather": "多云",
         "temperature": "19"
       }
     ],
     "info": "OK"
   }
   ```
   我们可以通过如下图示定义两个变量：weather,temperature 提取查询城市的温度跟天气。
   ![52-webhook](/assets/images/tutorial/webhook/52-webhook.png)
8. 响应设置-请求响应成功时
   <br/>当响应成功时，我们可以对响应的数据进行提取，也可以不处理或者按照响应内容原文展示。此处也支持前面提取到的变量使用，如图所示：
   <br/>![52-webhook](/assets/images/tutorial/webhook/52-webhook.png)

9. 响应设置-请求响应失败时
   <br/>响应失败后回复的内容


## 变量

如上面的"天气查询"例子，需要传递"area"到请求中，从响应中提取"weather"、"temperature"并输出。
变量的支持让webhook拥有更多想象空间，可以使用对话中提供的"变量"，也可从webhook中产生"变量"。

### 使用变量
在使用变量时通过"{}"引用变量，在webhook中可以使用变量的地方：

- URL
- 数据格式-表单数据格式
- 数据格式-JSON数据格式
- 请求响应成功时: 自定义给用户的回复

在Webhook中的以上位置可以引用对话中已存在的变量。

### 产生变量
在webhook请求后，可以从响应中提取新的变量到对话中:

- 响应处理-自定义处理

这部分主要从返回的JSON中提取变量值。

### 常见问题
1、引用变量时，变量不存在或变量拼错了会发生什么？

以URL为例：`http://localhost/api?area={area}&date={date}`
 - 如果area=宁波、date=2023-05-01，成功渲染时，实际请求的url:
   `http://localhost/api?area=宁波&date=2023-05-01`
 - 如果任何一个变量不存在或拼写错误将不会渲染，假设area此时不存在，实际请求的url:
    `http://localhost/api?area={area}&date={date}`

2、在"响应处理-自定义处理"中提取的变量能与对话中存在的变量重名吗？

可以重名，改变量的值会变成提取到的值。

3、多次调用同一个webhook，提取的变量值是怎样变化的？

提取的变量将是最后一次调用webhook后提取到的值，即变量的值是可以发生变化的。

4、webhook提取产生的变量可以配合"重置变量值"和"回复条件"一起使用吗？

如果要使用"重置变量值"和"回复条件"，目前需要提前将变量在项目中定义好。
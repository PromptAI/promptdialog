---
layout: default
title: 发布
nav_order: 7
has_children: true
---

# 发布
{: .no_toc .header }

----

当我们训练的智能会话已经调试完成后，可以通过二维码或者嵌入网页的方式发布

## 二维码发布 （移动端）
当你需要在移动端访问的时候，可以通过访问移动端链接或者扫描二维码的方式体验。
![chat-release-07](/assets/images/release/chat-release-07.png)

* 将二维码嵌入到网站，用户便可以通过移动端浏览器扫描或者微信扫描体验发布的项目

   ![chat-release-05](/assets/images/release/chat-release-05.png)

* 将**移动端链接**嵌入到网站，用户打开链接即可体验发布的项目
  ![chat-release-06](/assets/images/release/chat-release-06.png)

## 网页嵌入发布

1. 如图所示，这里我们已经将**天气播报**准备好，并且在项目中已发布
   ![chat-release-01](/assets/images/release/chat-release-01.png)

2. 安装nginx服务
   - 在nginx.conf配置文件中添加如下配置，然后重启nginx。
   
      ```shell
      server {
       listen 7000;
       listen [::]:7000;
          location / {
              root   /Users/admin/service/zbot; # 需要映射的html文件路径
              index  index.html index.htm;
          }
       }
      ```
   备注：nginx安装可以参考此[教程](https://www.cnblogs.com/lywJ/p/10710361.html)

   - 在`/Users/admin/service/zbot`新建文件index.html，内容如下：
     
     ```html
        <!DOCTYPE html>
        <html lang="en">
                
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                
                <body>
                    <h1>release promptai demo</h1>
                    <p>this is release promptai demo. </p>
                
                </body>
                
        </html>     
     ```
     
   - 验证服务是否正常。如图所示，查看nginx服务是否正常
     ![chat-release-02](/assets/images/release/chat-release-01.png)

3. 将智能会话嵌入到网站
   - 编辑`/Users/admin/service/zbot/index.html`并将发布界面的嵌入代码添加进去，编辑后index.html内容如下
    ```html
        <!DOCTYPE html>
        <html lang="en">
                
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                
                <body>
                    <h1>release promptai demo</h1>
                    <p>this is release promptai demo. </p>
               <script type="text/javascript" src="https://app.promptai.cn/ava/chatbot.app?name=Prompt+AI&id=a1_p_bzr812l9dg5c&token=NDA3OGY3NjQtNDIyZC00ZGRmLTk2MTYtMWY1YjVlMDM5YzQ1&project=p_bzr812l9dg5c"></script>
                </body>
                
        </html>     
     ```
   
4. 此时我们再次打开网站已经可以看到网站右下角已经多了个聊天小框，点开即可开启智能会话，至此我们智能会话发布完成。
   ![chat-release-03](/assets/images/release/chat-release-03.png)
   ![chat-release-04](/assets/images/release/chat-release-04.png)
   


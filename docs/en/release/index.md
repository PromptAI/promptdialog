---
layout: en
title: Release
nav_order: 7
---

# Release
{: .no_toc .header }

----

When the intelligent session we have trained has been debugged, it can be published through QR code or embedded web pages

## QR code release (mobile terminal)
When you need to access the mobile terminal, you can experience it by accessing the mobile terminal link or scanning the QR code.
![chat-release-07](/assets/images/release/chat-release-07.png)

* Embed the QR code into the website, and users can experience the published projects through mobile browser scanning or WeChat scanning

   ![chat-release-05](/assets/images/release/chat-release-05.png)

* Embed **mobile link** into the website, and users can open the link to experience the published project
  ![chat-release-06](/assets/images/release/chat-release-06.png)

## Web page embedded publishing

1. As shown in the figure, here we have prepared **weather broadcast** and released it in the project
   ![chat-release-01](/assets/images/release/chat-release-01.png)

2. Install nginx service
   - Add the following configuration to the nginx. conf configuration file, and then restart nginx.
   
      ```shell
      server {
       listen 7000;
       listen [::]:7000;
          location / {
              root   /Users/admin/service/zbot; # The path of the html file to be mapped
              index  index.html index.htm;
          }
       }
      ```
  Note: Please refer to this for nginx installation[course](https://www.cnblogs.com/lywJ/p/10710361.html)

   - At`/Users/admin/service/zbot`, create a new file index.html with the following contents:
     
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
     
   - Verify whether the service is normal. As shown in the figure, check whether the nginx service is normal
     ![chat-release-02](/assets/images/release/chat-release-01.png)

3. Embed Smart Sessions to Web Sites
   - Edit `/Users/admin/service/zbot/index.html` and add the embedded code of the publishing interface. After editing, the index.html content is as follows
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
   
4. When we open the website again, we can see that there are more chat boxes in the lower right corner of the website. Click Open to start an intelligent session. So far, our intelligent session has been published.
   ![chat-release-03](/assets/images/release/chat-release-03.png)
   ![chat-release-04](/assets/images/release/chat-release-04.png)
   


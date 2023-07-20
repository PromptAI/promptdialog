---
layout: en
title: Run Chatbots
nav_order: 4
has_children: false
---

When developers need to debug and verify the designed flows, they can use the **Download Rasa Files** function to download the generated RASA code in their local running environment and test the bot locally.  If you prefer testing/running the chatbot on the cloud without setting up local environment, please contact us [info@promptai.us](info@promptai.us).  We have a complete cloud solution. 

## Rasa file download

Click **Download RASA File** at the top right corner.  The download box will pop up with the following options:

* Current download, download the current dialog flow
* Combined download, free check multiple dialog flows under the current project
* Download all, check all dialog flow diagrams under the current project

![download-rasa](/assets/images/dev_guide/download-rasa.png)

- When the current project has a flow diagram containing error nodes, it will be classified into **Unavailable Modules** in the pop-up box. Click the mouse on the flow diagram to see the number of error messages. The link behind the point flow diagram can quickly jump to the corresponding flow diagram for modification.
  ![download-rasa-1.png](/assets/images/dev_guide/download-rasa-1.png)

<br/>Note: welcome message, Fallback, branch prompt, jump to the node, and question prompt again (FAQ) takes effect only with the support of the system

## Rasa environmental preparation

Local installation requires your local python version 3.8 or above (3.8.10 is recommended), and the following dependent packages need to be installed through pip

```text
rasa==3.2.0
jieba==0.42.1
transformers==4.24.0
jsonpath==0.82
```

After installation, enter 'rasa init' on the command line to verify as shown in the figure.

![rasa-env](/assets/images/dev_guide/download-rasa-env.png)
![rasa-env-1](/assets/images/dev_guide/download-rasa-env-1.png)

## RASA file debugging verification

Login to your account and download any flow/faq rasa file

1. Unzip the downloaded Project file and enter the dir:

![download-rasa-debug-1](/assets/images/dev_guide/download-rasa-debug-1.jpg)

2. Training debugging

   ```shell
   # training
   rasa train
   
   # Start actions if necessary
   rasa run actions
   
   # Open another command line window for Debug Dialog
   rasa shell
   ```

   Note:If there are installation problems, please contact us in time. For contact information, please refer to "Get Help" below`

3. Validation results
   Perform debugging verification as shown in the figure
   ![download-rasa-debug-2](/assets/images/dev_guide/download-rasa-debug-2.jpg)

<br/>Note:

1、The current version does not support built-in variables


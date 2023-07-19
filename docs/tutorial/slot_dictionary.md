---
layout: en
title: Slot - Dictionary
parent: Developer's Guide
nav_order: 11
---

# Slot - Dictionary
{: .no_toc .header }

When we use variable extraction, sometimes the extracted variable values are words in specific scenarios. In this case, we can add dictionary to variables to improve the recognition accuracy.

## Add dictionary to slot

Here we add dictionary to the variable **area name**. The dictionary are as follows:

```text
Alabama
Alaska
Arizona
Arkansas
California
Colorado
Connecticut
Delaware
Florida
Georgia
Hawaii
Idaho
Illinois
Indiana
Iowa
Kansas
Kentucky
Louisiana
Maine
Maryland
Massachusetts
Michigan
Minnesota
Mississippi
Missouri
Montana
Nebraska
Nevada
New Hampshire
New Jersey
New Mexico
New York
```
Click the **Upload** button behind the **Area Name**, and upload the dictionary according to the prompts, with the format reference to click**Download Sample**.
![dict-01](/assets/images/tutorial/dict/dict-01.png)
![dict-02](/assets/images/tutorial/dict/dict-02.png)

After uploading successfully, you can click **Details** to check which dictionary have been uploaded successfully, or you can **download** backup dictionary to local, or do not want to use dictionary **delete** uploaded dictionary
![dict-03](/assets/images/tutorial/dict/dict-03.png)

## Create Flow Diagram

Here we create a dialog flow diagram **Where are you**.

1. Add user input nodes as follows:
   ![dict-04](/assets/images/tutorial/dict/dict-04.png)
   **Note**: In order to improve the recognition rate of dictionary, at least two items need to be marked here
2. When the area name is added and extracted successfully, the bot replies as follows:
   ![dict-05](/assets/images/tutorial/dict/dict-05.png)

3. When adding fruit name extraction fails, the bot replies to the following nodes:
   ![dict-08](/assets/images/tutorial/dict/dict-06.png)


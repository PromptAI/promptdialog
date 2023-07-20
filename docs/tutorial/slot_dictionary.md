---
layout: en
title: Dictionary
parent: Developer's Guide
nav_order: 16
---
When we are doing entity recognition to fill slots, sometimes the name of entities are predefined. In this case, we can add dictionary to facilitate entity recognition. 

## Add dictionary

Here we add dictionary to the slot **State Name**. The dictionary of US states can be described as follows:

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
...
```
Click the **Upload** button behind the **State Name**, and upload the dictionary.
![dict-01](/assets/images/tutorial/dict/dict-01.png)

After uploading successfully, you can click **Details** to check which dictionary has been uploaded successfully, or you can **download** to check the dictionary.
![dict-03](/assets/images/tutorial/dict/dict-03.png)

## An example

Suppose we create a dialog flow diagram **where are you from?**.

1. Add user utterance nodes as follows:
   ![dict-04](/assets/images/tutorial/dict/dict-04.png)
   **Note**: In order to improve the recognition accuracy of dictionary, at least two examples need to be marked here.
2. When the state name is mentioned by the user and extracted successfully, the bot replies as follows:
   ![dict-05](/assets/images/tutorial/dict/dict-05.png)



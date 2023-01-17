---
layout: en
title: Variables - Hot Words
parent: Developer's guide
nav_order: 28
---

# Variables - Hot Words

## {: .no_toc .header }

When we use variable extraction, sometimes the extracted variable values are words in specific scenarios. In this case, we can add hot words to variables to improve the recognition accuracy.

## Add hot words to variables

Here we add hot words to the variable **fruit name**. The hot words are as follows:

```text
Apple
tangerine
Banana
plum
Durian
Sugar cane
grapefruit
strawberry
Blueberry
Mulberry
Peach
tomato
watermelon
```
Click the **Upload** button behind the **fruit name**, and upload the hot words according to the prompts, with the format reference to click**Download Sample**.
![dict-01](/assets/images/tutorial/dict/dict-01.png)
![dict-02](/assets/images/tutorial/dict/dict-02.png)

After uploading successfully, you can click **Details** to check which hot words have been uploaded successfully, or you can **download** backup hot words to local, or do not want to use hot words **delete** uploaded hot words
![dict-03](/assets/images/tutorial/dict/dict-03.png)

## Create Flow Diagram

Here we create a dialog flow diagram **Fruit name price query**.

1. Add user input nodes as follows:
   ![dict-04](/assets/images/tutorial/dict/dict-04.png)
   **Note**: In order to improve the recognition rate of hot words, at least two hot words need to be marked here
2. When the fruit name is added and extracted successfully, the machine replies as follows:
   ![dict-05](/assets/images/tutorial/dict/dict-05.png)
   The webhook settings of the machine reply node are as follows:
   ![dict-06](/assets/images/tutorial/dict/dict-06.png)
   ![dict-07](/assets/images/tutorial/dict/dict-07.png)

3. When adding fruit name extraction fails, the machine replies to the following nodes:
   ![dict-08](/assets/images/tutorial/dict/dict-08.png)

## Train and verify the effect

As shown in the figure, the fruit names in our hot words can also be accurately identified and queried.
![dict-09](/assets/images/tutorial/dict/dict-09.png)

---
layout: en
title: Common Problem
nav_order: 5
---

# Common Problem

{: .no_toc .header }

---

The following is a list of common problem solving methods in our system

## Common problems that can be solved by reference to the tutorial

### How do I get the URL when I customize the webhook?

Please refer to the tutorial[webhook](/docs/en/tutorial/webhook/01-webhook/)

### How to write in case of multiple replies?

Please refer to the tutorial[Create conversation flow graph - add reply node](/docs/en/tutorial/flow/01-create-flow/#添加回复节点)

### How do I stop training?

Please refer to the tutorial[Debugging Project - Cancel Training](/docs/en/tutorial/flow/03-train-project/#取消训练)

### Do not know the function of intention template

Please refer to the tutorial[Create Intent List](/docs/en/tutorial/node-template/user-global/)

### Does the initial node of the flow chart have a user option by default?

Please refer to the tutorial[Dialog Flow Graph Settings](/docs/en/tutorial/setting/#对话流图设置)

### Add a node and then delete it. Is there an undo function?

Please refer to the tutorial[Undo/Redo](/docs/en/tutorial/setting/#对话流图设置)

### Machine reply attachment support

Please refer to the tutorial[Create conversation flow graph - add reply node](/docs/en/tutorial/flow/01-create-flow/#回复节点添加附件)

## How to extract multiple variables in a sentence? For example, "I want five jin of apples"

Please refer to the tutorial[Create Form-Improve Slots）](/docs/tutorial/flow/01-create-flow/#完善信息列表（Slots）)

## Other

### Machine replies are selected from the answer list. Can you cancel?

If the machine replies that it has selected from the answer list but has not saved it, you can select **Close**, and then select **Don't Save in the prompt box**

### Can we add our own projects to the Project Templates?

The current version is temporarily not supported. Please follow our version update

### ### Can the node convert the type?

Currently, only user input can be converted to a button,
You can change the "user input method" of the user input node to "click input"

### Shortcut key support: control c/z

You can use control c to quickly copy nodes to the pasteboard, and control z to undo the previous operation

### The node has errors and cannot be saved

If there is an error in a node, click **Save** when editing the node, and an error message will appear. If you want to use a node first, you can click **Close**

### Can I debug in parallel

Currently, it is not supported due to limited server resources

### Can't recognize facial expressions

Currently, emoticons are not supported. Please follow our version update

### City extraction cannot be completed, and only annotated

You can try to change **variable extraction entity extraction source** into input text

### Does reset variable support multiple?

Yes, after adding a reset variable, you can continue to click the Add button below

### The user has not operated for a long time. Does it support active inquiry?

Currently not supported, please follow our version update

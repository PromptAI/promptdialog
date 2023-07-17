---
layout: en
title: FAQ
nav_order: 6
spliter: true
---

# FAQ

{: .no_toc .header }

---

The following is a list of common problem solving methods in our system

## FAQ that can be solved by reference to the tutorial

### How do I get the URL when I customize the webhook?

Please refer to the tutorial[webhook](/docs/tutorial/webhook/01-webhook/)

### How to create consecutive multiple responses?

Please refer to the tutorial[Create conversation flow graph - add reply node](/docs/tutorial/flow/01-create-flow/#add-reply-node)

### Do not know the function of intents template

Please refer to the tutorial[Create Intent List](/docs/tutorial/node-template/user-global/)

### Does the initial node of the flow chart have a user option by default?

Please refer to the tutorial[Dialog Flow Graph Settings](/docs/tutorial/setting/)

### Add a node and then delete it. Is there an undo function?

Please refer to the tutorial[Undo/Redo](/docs/tutorial/setting/)

### Machine reply attachment support

Please refer to the tutorial[Create conversation flow graph - add reply node](/docs/tutorial/flow/01-create-flow/)

### How to extract multiple variables in a sentence? For example, "I want five jin of apples"

Please refer to the tutorial[Create Form-Improve Slots）](/docs/tutorial/flow/01-create-flow/)

### During the conversation, I want to output different responses according to different variable values. What should I do?
Situation 1: Judge whether the variable has a value. For different responses, please refer to: [reply conditions] (/docs/zh/tutorial/setting/#Configure bot reply conditions) (judge whether the variable has a value or not)

Situation 2: different variable values respond to different responses/dynamic responses (accurately judge variable values)

- Webhook: The extracted variable value is retrieved by calling [webhook] (/docs/tutorial/webhook/02-webhook/). For example, query the price of stock and stock
- Action: [Action] (/docs/tutorial/action/01-action) can be added to the bot response, and different responses can be realized through Python code.
## Other

### Machine replies are selected from the response list. Can you cancel?

If the machine replies that it has selected from the response list but has not saved it, you can select **Close**, and then select **Don't Save in the prompt box**

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

### Can't recognize emoticons

Currently, emoticons are not supported. Please follow our version update

### City extraction cannot be completed, and only annotated

You can try to change **Variable value source** into Enter text

### Does reset variable support multiple?

Yes, after adding a reset variable, you can continue to click the Add button below

### The user has not operated for a long time. Does it support active inquiry?

Currently not supported, please follow our version update

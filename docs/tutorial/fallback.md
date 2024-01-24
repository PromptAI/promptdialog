---
layout: en
title: Fallback
nav_order: 10
parent: Developer's Guide
---

## What is Fallback?

Fallback PromptDialog refers to a backup plan used when the system encounters inputs it cannot understand or process. It helps the system deal with the following situations:

- When users ask unrelated questions (Dialog flows & Faq not include the input), the system responds with something like "I don't know."
- If the user's input is unclear or ambiguous, the system asks for more specific information.
- When the system is uncertain about a response, it may indicate its uncertainty.
- In the case of technical issues or errors, the system explains the problem to the user and may offer solutions.

## PromptAI supports Fallback mode
In PromptAI, two methods are supported as shown in the figure below
- webhook
- action

![fallback-mode](/assets/images/tutorial/fallback-mode.jpg)

## Fallback with webhook
PromDialog also support to hand over the default reply to a third-party API for processing

- See [Webhook-Fallback](/docs/webhook/03-webhook/)

## Fallback with action
Action fallback

## Fallback with Default
When the above three methods fail, we will use the default method to handle the fallback, which is the text filled in the figure below.
![fallback-text](/assets/images/tutorial/fallback-text.jpg)
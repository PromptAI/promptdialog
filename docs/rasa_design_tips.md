---
layout: en
title: Rasa Design Tips
nav_order: 10
---
### Case: Conflicting Entity Recognition  (phone number vs transaction id)

### Case: Conflicting Intent (faq vs feedback)

### Case: Slot Value Reset

### Case: RASA FAQ vs. GPT-based FAQ
RASA FAQ is a classification model.  LLM-based FAQ is an embedding based ranking model + retrieval model.  The ranking model can work on a large number of questions, thus more scalable.  It also does not require many training examples.  


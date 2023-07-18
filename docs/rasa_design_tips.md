---
layout: en
title: Rasa Design Tips
nav_order: 10
---
### Conflicting Entity Recognition  (phone number vs transaction id)

### Conflicting Intent (faq vs feedback)

### Slot Value Reset

### RASA FAQ vs. GPT-based FAQ
RASA FAQ is a classification model.  LLM-based FAQ is an embedding based ranking model + retrieval model.  The ranking model can work on a large number of questions, thus more scalable.  It also does not require many training examples.  


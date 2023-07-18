---
layout: en
title: Rasa Design Tips
nav_order: 10
---
<h3 style={{color: '#64748b'}}>Case: Conflicting Entity Recognition  (phone number vs transaction id)</h3>

<h3 style={{color: '#94a3b8'}}>Case: Conflicting Intent (faq vs feedback)</h3>

<h3 style={{color: '#cbd5e1'}}>Case: Slot Value Reset</h3>

<h3 style={{color: '#e2e8f0'}}>Case: RASA FAQ vs. GPT-based FAQ</h3>
RASA FAQ is a classification model.  LLM-based FAQ is an embedding based ranking model + retrieval model.  The ranking model can work on a large number of questions, thus more scalable.  It also does not require many training examples.  


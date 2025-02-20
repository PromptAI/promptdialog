---
layout: default 
title: Customer Service
parent: Quick Start 
nav_order: 2
---

# Customer Service
{: .no_toc .header }

We showcase a custom service bot in clothing retail. The bot consists of three LLM agents, each handling user complaints, product exchanges, and returns separately.

- Customer Complaint: Records user complaints, apologizes to the user, understands their dissatisfaction with the product, and documents detailed information to facilitate the implementation of corrective measures.

- Product Exchange: Assists users with product exchange requests, including asking for the order number and the desired size for the exchange, ensuring accurate exchange information and processing.

- Return: Helps users with return requests, including verifying if the order meets return conditions, inquiring about the reason for the return, and confirming the user’s refund method, ensuring a smooth return process.

<!--- Through the collaboration of these three intelligent agents, PromptDialog provides clothing retail businesses with comprehensive after-sales service capabilities, covering the entire process from complaints to exchanges and returns, ensuring efficient service and customer satisfaction. --->

## Create LLM Agents

### Customer Complaint:
This agent is designed to handle user complaints by collecting two key pieces of information: the reason for dissatisfaction and the specific product involved. It apologizes to users, records these details, and assures them that improvements will be made based on their feedback.

![customer_complain.png](customer_complain.png)

### Product Exchange
This agent assists users with exchange requests by collecting three key pieces of information: the order number, the product to be exchanged, and the desired new size. It confirms all details with the user to ensure a smooth exchange process.

![exchange.png](exchange.png)

### Return
This agent assists users with return requests by collecting four key pieces of information: the product to be returned, the order number (verified using the 'check_order_available' function), the reason for the return, and the preferred refund method (credit or original payment).

![return.png](return.png)

![function-calling.png](function-calling.png)

## Results
<details>
  <summary>Conversation examples</summary>
  <pre><code>
Bot : Hello, what can I do for you?

User: Hi, I received my order yesterday, but I have a few issues. First, 
I ordered the wrong size for one of the shirts and need to exchange it.

Bot : I'm sorry to hear that. Could you please tell me the item you want
to exchange and the order number?

User: The order number is 12345.

Bot : Thank you for providing the order number. Could you please tell me
which item you would like to exchange?

User: I'd like to exchange it for size L.

Bot : I understand you want to exchange for a larger size. However, I still
need to know which item you want to exchange. Could you please provide 
that information?

User: The black shirt.

Bot : Thank you for the information. To confirm, you would like to exchange
the black shirt from order number 12345 for a size L. Is that correct?

User: Yes, that's correct.
ß
Bot : Great! I've noted your exchange request. We'll process it shortly.
  </code></pre>
</details>


<!-- Realization effect:

- Handle user exchange requests, including asking for the order number and the desired size for the exchange, ensuring the accuracy of the exchange information, and processing the request.
- Handle user complaints by recording their concerns, apologizing to the user initially, understanding their dissatisfaction with the product, and documenting detailed information to ensure improvement measures are implemented.
- Handle user return requests, including verifying whether the order meets the return conditions, asking for the reason for the return, and confirming the user's refund method to ensure a smooth return process.
-->


[//]: # (<table>)

[//]: # (  <tr>)

[//]: # (    <td><img src="/assets/images/quick_start/flow/flow-06.png" alt=""></td>)

[//]: # (    <td><img src="/assets/images/quick_start/flow/flow-07.png" alt=""></td>)

[//]: # (  </tr>)

[//]: # (  <tr>)

[//]: # (     <td><img src="/assets/images/quick_start/flow/flow-08.png" alt=""></td>)

[//]: # (  </tr>)

[//]: # (</table>)

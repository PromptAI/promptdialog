---
layout: default 
title: Customer Service
parent: Quick Start 
nav_order: 2
---

# Customer Service
{: .no_toc .header }

We will use a custom service bot in clothing retail to showcase the capabilities of PromptDialog. The bot consists of three LLM agents, each dedicated to handling user complaints, product exchanges, and returns, providing comprehensive after-sales support.

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
Better show a few conversation results here.
<!---
Realization effect:

- Handle user exchange requests, including asking for the order number and the desired size for the exchange, ensuring the accuracy of the exchange information, and processing the request.
- Handle user complaints by recording their concerns, apologizing to the user initially, understanding their dissatisfaction with the product, and documenting detailed information to ensure improvement measures are implemented.
- Handle user return requests, including verifying whether the order meets the return conditions, asking for the reason for the return, and confirming the user's refund method to ensure a smooth return process.

--->

[//]: # (<table>)

[//]: # (  <tr>)

[//]: # (    <td><img src="/assets/images/quick_start/flow/flow-06.png" alt=""></td>)

[//]: # (    <td><img src="/assets/images/quick_start/flow/flow-07.png" alt=""></td>)

[//]: # (  </tr>)

[//]: # (  <tr>)

[//]: # (     <td><img src="/assets/images/quick_start/flow/flow-08.png" alt=""></td>)

[//]: # (  </tr>)

[//]: # (</table>)

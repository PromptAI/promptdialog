---
layout: default 
title: Customer Service
parent: Quick Start 
nav_order: 2
---

# Customer Service
{: .no_toc .header }

We will use an example of a customer service system in a clothing retail scenario to help you quickly understand the capabilities of PromptDialog. This customer service is composed of three LLM Agents based on large language models (LLMs), each handling user complaints, exchanges, and returns, ensuring comprehensive after-sales service support for users.

- Customer Complain: Records user complaints, apologizes to the user, understands their dissatisfaction with the product, and documents detailed information to ensure corrective measures are implemented.

- Exchange: Assists users with product exchange requests, including asking for the order number and the desired size for the exchange, ensuring accurate exchange information and processing.

- Return: Helps users with return requests, including verifying if the order meets return conditions, inquiring about the reason for the return, and confirming the user’s refund method, ensuring a smooth return process.

Through the collaboration of these three intelligent assistants, PromptDialog provides clothing retail businesses with comprehensive after-sales service capabilities, covering the entire process from complaints to exchanges and returns, ensuring efficient service and customer satisfaction.

## Create LLM Agents

### Customer Complain:
This agent is designed to handle user complaints by collecting two key pieces of information: the reason for dissatisfaction and the specific product involved. It apologizes to users, records these details, and assures them that improvements will be made based on their feedback.

![customer_complain.png](customer_complain.png)

### Exchange
This agent assists users with exchange requests by collecting three key pieces of information: the order number, the product to be exchanged, and the desired new size. It confirms all details with the user to ensure a smooth exchange process.

![exchange.png](exchange.png)

### Return
This agent assists users with return requests by collecting four key pieces of information: the product to be returned, the order number (verified using the 'check_order_available' function), the reason for the return, and the preferred refund method (credit or original payment). It ensures a seamless and user-friendly return process.

![return.png](return.png)

![function-calling.png](function-calling.png)

## Run

Realization effect:

- 处理用户换货请求，包括询问商品的订单号和需要换的尺寸，确保换货信息准确并进行处理。
- 处理用户投诉，能够记录用户的投诉，首先向用户道歉，了解用户对产品的不满并记录详细信息，确保改进措施得到实施。
- 处理用户退货请求，包括验证订单是否符合退货条件、询问退货原因以及确认用户的退款方式，确保退货流程顺利进行。

<table>
  <tr>
    <td><img src="/assets/images/quick_start/flow/flow-06.png" alt=""></td>
    <td><img src="/assets/images/quick_start/flow/flow-07.png" alt=""></td>
  </tr>
  <tr>
     <td><img src="/assets/images/quick_start/flow/flow-08.png" alt=""></td>
  </tr>
</table>
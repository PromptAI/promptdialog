---
layout: en
title: Form
parent: Developer's Guide
nav_order: 7
---
# 什么是Form？
在PromptDialog中，Form是向用户收集一组信息的组件。

用户预定水果:
```text
Bot : Hello!
      What can i do for you?
User: Hi there! I'd like to order some fruits

# 通过Form收集用户下单的水果类型和数量
Bot : Perfect! What kinds of fruits would you like to order?
User: I'd like some apples, please
Bot : Great! And how much apples would you like to order?
User: Let's go with 5 apples

Bot : Perfect! I have your order 5 apples.
User: Thanks
Bot : You are welcome! I'll prepare your order with 5 apples, fell free to ask!
```

在用户预定水果的例子中，向用户收集水果类型和数量两个slot，完成后与用户确认。

其他类似的场景也可以通过Form来处理：
- 查询天气 ： 收集地区、时间来实时查询天气情况。
- 预定机票 ： 通过获取用户的出行时间、出发机场后进行机票预定。
- 其他需要收集一组信息的场场景。

---
## Create a dialog flow with order fruit form
接下来将介绍如何创建上面提到的用户预定水果的例子.

### 创建`Fruit`Dialog flow
![img.png](/assets/images/tutorial/form/form-01.png)

接下来我们创建Bot节点进行打招呼、用户输入节点进入Form
![img_1.png](/assets/images/tutorial/form/form-02.png)

## Create fruit form
点击用户输入节点，在弹出的菜单中选择Form
![img_3.png](/assets/images/tutorial/form/form-03.png)
Form的名字可按功能设置,这里我们填入`Fruit order`
![img_2.png](/assets/images/tutorial/form/form-04.png)

在创建`fruit order`后需要完善三个信息
![img_4.png](/assets/images/tutorial/form/form-05.png)

| 名称          | 必填               | 描述 |
|-----------------|----------------------|--------------|
| Slots | 是 | 定义需要收集那些信息          |
| Interrupts | 否 | 这里完善用户在填充form是可能遇到的问题或退出Form           |
| Confirm | 是 | 在信息收集完成后的对话          |
  
## Slots
我们需要通过Slots向用户收集`水果类型`和数量,接下来详细讲解如何添加`水果类型`

点击`Slots`节点,在弹出的菜单中选择`Add Slot`
![img_5.png](/assets/images/tutorial/form/form-06.png)

弹出的Slot窗口中，我们需要关注`Slot Name`这项输入，这里填写Slot的名称`水果类型` (输入名称后按下回车即可创建)
![img_6.png](/assets/images/tutorial/form/form-07.png)
点击`Save`进行保存
![img_7.png](/assets/images/tutorial/form/form-08.png)
蓝色圈出的部分是在保存Slot后自动创建的。
- "fruit_type" : 收集的Slot名称，此时无需操作
- "-"          : rhetorical节点，输出一句话提示用户需要输入的信息
![img_8.png](/assets/images/tutorial/form/form-09.png)
这里我们双击反问节点，填入`Perfect! What kinds of fruits would you like to order?`询问用户需要购买那种水果
![img_11.png](/assets/images/tutorial/form/form-10.png)

在反问之后，我们需要增加一个用户输入来获取用户需要的水果类型，此时我们需要标注所需的水果类型.
![img_9.png](/assets/images/tutorial/form/form-11.png)
![img_10.png](/assets/images/tutorial/form/form-12.png)
至此我们的水果类型的slot便创建完成。
![img_12.png](/assets/images/tutorial/form/form-13.png)
按照这样的方式添加数量slot：
![img_13.png](/assets/images/tutorial/form/form-14.png)

## Interrupts
在下单过程中，用户可能提一些问题或退出对话
- Do apples have a sweet taste? (询问完成后继续回到From中)
- Actually, I've changed my mind. I won't buy any fruits today. (退出From，停止购买)
    
### Do apples have a sweet taste?
![img_14.png](/assets/images/tutorial/form/form-15.png)

### 退出Form
在interrupt中添加用户退出的用户输入，配合`break`节点使用退出Form
![img_15.png](/assets/images/tutorial/form/form-16.png)

## Confirm
Confirm节点处理收集Form完成的情况，这里我们向用户确认订单
![img_16.png](/assets/images/tutorial/form/form-17.png)

## The complete flow diagram is as follows:
![img_17.png](/assets/images/tutorial/form/form-18.png)
![img_18.png](/assets/images/tutorial/form/form-19.png)
![img_19.png](/assets/images/tutorial/form/form-20.png)
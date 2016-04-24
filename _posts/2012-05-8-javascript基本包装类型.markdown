---
layout: post
title:  javascript基本包装类型
date:   2012-05-8 12:08:48 +0800
categories: javascript
---

 ECMAScript中有5种简单数据类型（基本数据类型）：Undefined,Null,Boolean,Number,String.
有一种复杂数据类型：Object。

总的来说，ECMAScript所有的数据都会属于上述6中类型中其中一个。
在这六种数据类型中。有三种数据类型,既具有基本数据类型的特性，也具有引用类型的特性，它们是：Boolean,Number,String。

ECMAScript为什么会定义这三个模棱两可的数据类型呢？
        为了便于对基本数据类型值的操作。
以下以String类型为例，说名基本包装类型的特点：
 ```javascript
            var   s1 = 'abcdefghijk';
            var   s2 = s1.substring(2);   //cdefghijk
```
如果s1可以作为对象调用javascript的内置函数。足以说明它不是一个简单的基本数据类型

那么，为什么一个普通的字符串可以调用方法呢？
        实际上，在js代码执行过程中，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据。
       在《javascript高级程序设计》(第三版)详细解释了上述代码的运行过程：、
        当第二行代码访问s1时，访问过程处于一种读取模式（从内存中读取该字符串值）,而读取模式中访问字符串时，后台会自动完成下列处理：
                1.创建String类型的一个实例对象；
                2.在该String类型的实例对象上调用指定的方法；
                3.销毁该实例；
        说明：该运行过程也同样适用于Boolean,和Number类型。

 使用字面量创建的基本包装类型无法添加自定义属性或方法时：
 ```javascript
        var   s1 = 'abcdefghijk';
        s1.name = "abcName";
        alert(s1.name);//undefined
```
        因为在后台运行过程中，当s1的实例对象被创建并添加属性后又被销毁了，所以在第三行调用s1.name时，该属性就不存在了，

想要为基本包装类型添加属性或方法，可以再创建该类型时显示地使用构造方法创建，如下：
 ```javascript
        var s1 = new String('abcdefghijk');
         s1.name = 'abcName';
        alert(s1.name);//'abcName';
 ```
         //这样的做法并不被提倡，因为容易让人混乱。
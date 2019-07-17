---
path: '/post-one'
date: '2019-08-09'
title: 'What you didn’t know about console.log()'
---


Well in early days, backend developers used to take a lot of pride because the backend development was more complex and more powerful to run an application on web and javascript was just a toy to do some few tasks.
<br>
<br>
Days have passed and more and more developers have learnt how to make web better, faster and stronger with JavaScript……with this rises the Front End developers who makes the web the way it is now. Since time the JavaScript Ecosystem has evolved more and today so we are gonna focus on the weapon of choice of every developer: **Yes!!! console.log()** <br>

![](https://miro.medium.com/max/1200/1*ZuklBjCCtVTDq3T-yjAPjQ.jpeg)

Today let’s talk about some cool tricks on how to use **console.log** more efficiently to debug your code:<br>
There are good ways to console.log and bad ways: Let’s take below example<br>

![](https://miro.medium.com/max/872/1*_IW-k6qaIC9pQgxCWSAQuA.png)

### console.log({}) :

In the above code, in console we can’t really make out which object is the one referred to. So to solve this kind of issue we can use **‘computed property names’** like **console.log({nameOfObj,nameOfObj,nameOfObj}):**<br>

![](https://miro.medium.com/max/926/1*SqZJ00Wh7ItUjwgOllH0Zw.png)

If your above data is extra important you can **style your css in console.log. Neat huh!!!!!**<br>

![](https://miro.medium.com/max/934/1*NpZtBBV8vzWzxIe9cYtwUg.png)

### console.table([]) :
When you have an array of objects you can display the objects in a table since the above objects share the same properties. this is very handful because it gives a clear way of understanding your object properties:

![](https://miro.medium.com/max/824/1*cZmKpuQPLJoxEKA0SG6Jrw.png)

**console.table([objectName,objectName,objectName]) gives you:**

![](https://miro.medium.com/max/1400/1*Mm9qXAvvqAindMet0HO87g.png)

### console.time():
When you have to benchmark your performance you can use console.time to track of your time in console. You can achieve this:

![](https://miro.medium.com/max/792/1*QqjN0UctyrJ9ZVwo_UJMnQ.png)

We first start the loop by setting console.time(), then we put the iterations in a while loop , once it end we end the loop by calling console.timeEnd(). This is handy when you need to check your app’s performance.<br>

### console.trace() :
Suppose you have a delete method and you accidentally deleted the database and you want to know from where your console logs generated so you can console.trace it and find where it is called. **Simple… Isn’t it!!!!**

![](https://miro.medium.com/max/846/1*mh1-Dz1N1R3Fl4eImMvr1Q.png)

Thanks for reading! If you have any questions, feel free to reach out at [](rajrock38@gmail.com), connect with me on [LinkedIn](LinkedIn), or follow me on [Medium]() and [Twitter]().

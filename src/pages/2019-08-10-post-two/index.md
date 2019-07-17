---
path: '/post-two'
date: '2019-08-10'
title: 'React Hooks: The weird parts..
'
---


![](https://miro.medium.com/max/1400/1*XwBaKy1Di307hs4lsTmkAQ.jpeg)

As we all know the React Team has come up with Hooks which is an awesome feature.. yes its awesome.. trust me it is…<br>
React 16.8.xx is shipped with React Hooks feature support in which developers can build functional components which can have own local state and props. Oh WOW..<br>

![](https://miro.medium.com/max/960/1*_98bz6E2O76MaC5J2Et4sA.gif)

### What is a Hook?

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.<br>
Let’s see what are the out of the box hooks they have for us:
<br>

### State Hook:
![](https://miro.medium.com/max/914/1*1lT3PIPsVA4izbs44fchhg.png)

Here, useState is a Hook (we’ll talk about what this means in a moment). We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.

### Effect Hook:
![](https://miro.medium.com/max/1002/1*iCmjVoE1mpzIvbkIYDqeoQ.png)

You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.<br>
The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

### Rules of Hooks:

Hooks are JavaScript functions, but they impose two additional rules:
<br>
* Only call Hooks **at the top level**. Don’t call Hooks inside loops, conditions, or nested functions.
* Only call Hooks **from React function components**. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

### useContext Hook:

It lets you subscribe to React context without introducing nesting. For e.g when you want to use your loggedin data deep down to some of the nested components: For e.g:<br>

```javascript
const locale = useContext(LocaleContext);
const theme = useContext(ThemeContext);
```

### useReducer Hook:
useReducer hook lets you manage local state of complex components with a reducer:

![](https://miro.medium.com/max/1252/1*Yim6cat74l2kS2UwO_HFIw.png)

### Custom Hook:

Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions to this problem: higher-order components and render props. Custom Hooks let you do this, but without adding more components to your tree.<br>
Below is a custom Hook:
![](https://miro.medium.com/max/798/1*QoiFyxOLDNN0fnviruGayQ.png)

The above custom hook is called **useFetch** which can be used as a custom hooks by calling the below method in your component

![](https://miro.medium.com/max/1400/1*q3vGK3lngeu3pF6Wjj8ffw.png)
<br>

Thanks for reading! If you have any questions, feel free to reach out at [](rajrock38@gmail.com,) connect with me on [LinkedIn](), or follow me on [Medium]() and [Twitter]().
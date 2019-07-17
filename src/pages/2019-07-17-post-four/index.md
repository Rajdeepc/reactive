---
path: '/post-four'
date: '2019-07-17'
title: 'create-react-app: The easier way with Parcel'
---

![](https://miro.medium.com/max/700/1*1XWWwW4_52rXrwbMCO4YuQ.png)

Since i started working on React i have used Webpack and go swear.. only Webpack because i love the way it gives all the things we as developers need to run the project, from project bundlers to build files and build tasks.
<br>
But recently i bumped into another build tool called Parcel which has the below benchmarks from its other:<br>

![](https://miro.medium.com/max/263/1*D_bfayNbnOxgNmzH3bu96A.png)

So to experiment its speed and less bundle size i created a simple react application as below. Please bear with me for next 5 mins……<br>

### Install
As usual, use your favorite package manager to download and install parcel globally.<br><br>
With npm:<br>
```
npm install -g parcel-bundler
```
Or with yarn:


```
yarn global add parcel-bundler

```

Once that’s done, you should have the **parcel** command available in your terminal path.<br>

### Dependencies
Then, we’ll **npm init** the project (keep pressing enter to accept the defaults):

```
npm init
```
Or if you’re lazy you can do what Darren suggested in the comments to automatically accept all the defaults:

```
npm init -y
```

And install the dependencies:

```
npm install --save react react-dom
or
yarn add react react-dom
```

You can also add parcel (as a devDependency):
```
npm install --save-dev parcel-bundler
or
yarn add -D parcel-bundler
```

We are now ready to create our react files!

### index.html

Create a file called **index.html**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="index.js"></script>
</body>
</html>
```
### index.js

Create a file called **index.js:**

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
```

### App.js

Create a file called **App.js**

```javascript
import React, { Component } from "react";
class App extends Component {
    render() {
        return <div>Hello from React!</div>;
    }
}
export default App;
```

### Start script

You can then add a new **script** command to your **package.json** in order to start the dev server:

```javascript
"scripts": {
    "start": "parcel index.html"
},
```
And that’s it!
<br><br>
Now run
<br>

```javascript
npm run start
or
yarn start
```

![](https://miro.medium.com/max/700/1*d1ijrPJzQfFkWW6z8G3VQw.png)

Low code but amazing. It takes care of all the dependencies require to run the project and has a slight delay in first start where it caches its required assets and from next reloads its blazing fast.
<br><br>
It does the job of smaller projects where you need to get started with your application and it’s still an early phase to check it in large complex projects.
<br><br>

Please try out and see it out for yourself guys and do leave comments below so that i can also know about how you guys think about this.

<br>
Thanks for reading! If you have any questions, feel free to reach out at rajrock38@gmail.com, connect with me on LinkedIn, or follow me on Medium and Twitter.
<br>






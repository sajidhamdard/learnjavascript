### what is Transpiling

Transpiling in JavaScript means converting code written in one version of the language (ES6 or higher) to an earlier version that can be executed by all browsers. This is done using a tool called a transpiler or compiler.

Transpiling is important because not all browsers support the latest version of JavaScript. By transpiling, developers can write modern code without worrying about browser compatibility issues.

For example, consider the arrow function syntax introduced in ES6:

```
const add = (a, b) => a + b;
```

This syntax is not supported in some older browsers like Internet Explorer. To make this code compatible with those browsers, we can use a transpiler like Babel to convert it to the equivalent ES5 code:

```
var add = function(a, b) {
  return a + b;
};
```

Here's an example in Hinglish:

Transpiling Javascript ka matlab hota hai ki ham modern javascript code ko older versions mein convert karte hain jo ki sabhi browsers ke dwara execute kiya ja sakta hai. Iske liye hum ek tool ka istemal karte hain jise transpiler ya compiler kaha jata hai.

Transpiling ka use isliye important hai kyunki sabhi browsers latest version of Javascript ko support nahi karte hain. Transpiling se developers modern code likh sakte hain bina browser compatibility issues ke dar ke.

Udharan ke taur par, ES6 mein introduce hue arrow function syntax ko dekhein:

```
const add = (a, b) => a + b;
```

Ye syntax kuch older browsers jaise Internet Explorer mein support nahi karta hai. Is code ko un browsers ke liye compatible banane ke liye, hum Babel jaise transpiler ka upyog kar sakte hain jo is code ko equivalent ES5 code mein convert kar dega:

```
var add = function(a, b) {
  return a + b;
};
```

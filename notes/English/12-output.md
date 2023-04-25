# Output

### What is console.log ?

console.log() is a function in JavaScript that is used to log messages to the browser's developer console. It is commonly used for debugging and testing purposes, as it allows developers to see the output of their code in real time. The function takes one or more arguments, which can be strings, variables, or expressions, and prints them to the console. For example, console.log("Hello World") would print the string "Hello World" to the console.
For example:

```javascript
console.log("learnjavascript");
```

### What is document.write ?

document.write() is a method in JavaScript that is used to write text or HTML to the current document. It can be used to add content to a web page after it has finished loading, but it is generally not recommended as it can overwrite the entire page if used after the page has loaded.

It is mainly used during the development phase to check the output of some code and it is not recommended to use it in production code. A better way to add content to a web page after it has loaded is to use the DOM API, such as document.createElement() and document.appendChild(), to add elements to the DOM.

For example, document.write("Hello World") would write the string "Hello World" to the current document, and document.write("<p>Hello World</p>") would write a paragraph element containing the string "Hello World" to the current document.
For example:

```javascript
document.write("Hello....");
```

### What is window.alert ?

window.alert() is a method in JavaScript that is used to display a dialog box with a message to the user. The dialog box, also known as an alert box, contains an "OK" button that the user can click to close the box and return to the web page. The function takes a single argument, which is the message to be displayed to the user. For example, window.alert("Hello World") would display an alert box with the message "Hello World" to the user.

Alert boxes are typically used for notifications, warnings, and error messages. They are generally considered to be disruptive to the user experience and should be used sparingly. Other methods of displaying notifications such as using the browser's notification API or using a custom made notification component are generally more user friendly
For example:

```javascript
window.alert("Hello...");
```

To writing in the html document

### What is innerHTML ?

innerHTML is a property of an element in JavaScript that is used to access or set the HTML content inside an element. It can be used to read the existing HTML content of an element or to change it.
For example:

if you have an HTML element with an id of "example":

```javascript
document.getElementById("test").innerHTML = "<b>Hello World</b>";
```

# Debugging

### What is Debugging ?

Debugging in JavaScript refers to the process of identifying and fixing errors or bugs in your code. It is an essential part of the software development process, and it can help you ensure that your code is working as intended.

There are several tools and techniques that you can use to debug JavaScript code. One of the most common methods is to use a JavaScript debugger, which is a tool that allows you to step through your code line by line, examine variables and their values, and set breakpoints to pause the execution of your code at specific points.

Another common method is to use console.log statements to output the values of variables or the results of expressions to the browser's developer console. This can help you understand what is happening in your code and identify where the bug is located.

You can also use browser's developer tools (like Chrome DevTools, Firefox DevTools) to debug the JavaScript code. It provides you the feature of adding breakpoints, step-by-step execution, inspect variables, evaluate expressions and many more.

Here's an example of how to use the browser's developer console to debug JavaScript code:

```
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(5, 10); // 15
```

In this example, we are using the console.log statement inside the function to output the result of the addition of a and b to the developer console. This way we can see that the function is working correctly and the result is 15.

In summary, debugging in JavaScript refers to the process of identifying and fixing errors or bugs in your code, there are several tools and techniques that you can use to debug JavaScript code like browser's developer console, browser's developer tools and JavaScript debugger.

### What is Developer Tool ?

Developer tools are a set of web-based tools that allow developers to inspect, debug and optimize their web pages and web applications. They are built into modern web browsers such as Google Chrome, Firefox, Safari, and Edge, and can be accessed by pressing a specific key combination or by selecting them from the browser's menu.

The developer tools provide a wide range of functionality that can be used to improve the performance, usability, and accessibility of a web page or web application. Some of the most commonly used features include:

- Inspecting elements: Allows developers to examine the HTML and CSS of a web page, and make changes to the styles and layout in real-time.

- Debugging JavaScript: Allows developers to set breakpoints, step through code, and examine the values of variables, including call stack and scope chain.

- Network monitoring: Allows developers to see the resources that are loaded by a web page, including the size, duration and status of each resource.

- Performance monitoring: Allows developers to measure the performance of a web page, including the frame rate, CPU and memory usage, and load times.

- Auditing: Allows developers to run a set of automated tests on a web page to check for issues related to performance, accessibility, and best practices.

Additionally, developer tools also provide access to a JavaScript console, where developers can enter and execute JavaScript code, view messages and errors, and interact with the browser's Document Object Model (DOM).

In summary, developer tools in JavaScript are a set of web-based tools that allow developers to inspect, debug and optimize their web pages and web applications, they are built into modern web browsers and provide a wide range of functionality like inspecting elements, debugging JavaScript, network monitoring, performance monitoring and auditing.

### Fixing errors

#### console.log()

console.log() is a function in JavaScript that is used to output information to the browser's developer console. It can be used to display variables, strings, and other data types. The information displayed in the console can be useful for debugging and understanding the behavior of the code.

Here is an example of how console.log() can be used in JavaScript:

```
var x = 5;
console.log(x); // prints "5" to the console
```

#### console.warn()

console.warn() is a method in JavaScript that is used to output a warning message to the browser's developer console. It works similar to the console.log() method, but it's output is presented in a different format, usually with a yellow background color and an exclamation mark icon. The main purpose of this method is to alert the developer of a potential problem or a non-critical issue in the code.

Here is an example of how console.warn() can be used in JavaScript:

```
var x = "hello";
if (x !== "hello") {
  console.warn("x is not equal to 'hello'");
}
```

#### console.error()

console.error() is a method in JavaScript that is used to output an error message to the browser's developer console. It works similar to the console.log() and console.warn() methods, but it's output is presented in a different format, usually with a red background color and a cross icon. The main purpose of this method is to alert the developer of a critical issue or a bug in the code that may prevent the code from running properly.

Here is an example of how console.error() can be used in JavaScript:

```
var x = undefined;
if (x === undefined) {
  console.error("x is not defined");
}
```

#### console.table()

console.table() is a method in JavaScript that is used to output data in the form of a table in the browser's developer console. It allows developers to display data in a structured and easily readable format, making it useful for debugging and analyzing complex data sets.

Here is an example of how console.table() can be used in JavaScript:

```
var users = [
    {name: "John Doe", age: 30, city: "New York"},
    {name: "Jane Smith", age: 25, city: "Los Angeles"},
    {name: "Bob Johnson", age: 35, city: "Chicago"}
];
console.table(users);
```

In the above example, the variable users is an array of objects that contains information about different users. The console.table() method is then used to output the data to the console in the form of a table, with each object in the array representing a row in the table, and the properties of the object representing the columns.

You can also pass a second argument to console.table() method to specify which columns should be displayed in the table:

```
console.table(users, ['name','age']);
```

In this example, the table will only display the name and age properties of the users.

### What are the different types of errors ?

There are several types of errors that can occur in JavaScript, including:

#### Syntax errors

These occur when the code contains a mistake in the structure or syntax of the language. Examples include missing punctuation, incorrect use of keywords, or mismatched parentheses.

```
function addNumbers(a, b)
  return a + b;
}
```

In this example, the function keyword is followed by the name of the function, but there is no opening curly brace { after it. This means that the JavaScript interpreter does not know where the function's code block starts. This will cause a syntax error and the code will not execute.

#### Reference errors

These occur when the code is trying to access a variable or function that has not been defined. This can happen when a variable has not been declared, or when a function is called before it has been defined.

```
console.log(x);
```

In this example, the code is trying to access the variable x without first declaring it or giving it a value. Since x has not been defined, the JavaScript interpreter will throw a reference error and the code will not execute.

#### Type errors

These occur when the code is trying to perform an operation on a variable of the wrong type. Examples include trying to use a string as a number, or trying to access a property of a non-object.

```
var x = 7;
console.log(x.toUpperCase());
```

In this example, the code is trying to convert number 7 to uppercase. This will cause a type error, and the code will not execute.

#### Range errors

These occur when the code is trying to access an index outside the range of an array, or when a value is too large or too small to be used.

```
var maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber + 1);
```

Here, the code is trying to add 1 to the maximum safe integer value that JavaScript can represent, which exceeds the maximum value that can be represented and it will cause a range error.

#### Evaluation errors

These occur when the code is trying to evaluate an expression that is not valid. Examples include dividing by zero or trying to access a property of undefined.

```
eval("hello world");
```

Here, the code is trying to evaluate a string "hello world" which is not a valid JavaScript statement, so it causes an evaluation error.

#### URIError

These occur when a malformed URI is passed to the encodeURI() or decodeURI() functions.

```
encodeURI("http://mywebsite.com/path?name=value#fragment");
```

Here, the code is trying to encode the URI "http://mywebsite.com/path?name=value#fragment" which contains some reserved characters, that are not allowed to be encoded.

It's important to note that the JavaScript interpreter will stop executing the code as soon as it encounters a URIError, so it's essential to check your code for URI errors before running it to ensure it will execute correctly.

#### SyntaxError

These occur when a malformed or unexpected token is encountered in the input.

#### RangeError

These occur when a number is outside the range of possible values.

#### TypeError

These occur when a value is not of the expected type.

#### ReferenceError

These occur when an invalid reference is used.

It is important to understand the different types of errors and their causes, as this will help you to write more robust code and to more easily identify and fix errors when they occur.

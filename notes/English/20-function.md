# function

### What is function ?

In JavaScript, a function is a block of code that can be executed by calling it by its name. Functions are a fundamental building block in JavaScript and are used to encapsulate and reuse code.

A function is defined using the function keyword, followed by the function name, a set of parentheses, and a block of code within curly braces. Here's an example of a simple function that takes no arguments and returns no value:

Syntax:

```
function greet() {
  console.log("Hello, world!");
}

greet();  //output: "Hello, world!"

```

To execute the code within a function, you can call the function by its name, followed by a set of parentheses

For example:

```
function add(a, b) {
  return a + b;
}
let result = add(3, 4);  // result = 7
```

### What is Function declaration ?

In JavaScript, a function declaration is a way to define a function by using the function keyword, followed by the function name, a set of parentheses, and a block of code within curly braces. The function name is followed by the function keyword, the function parameters are enclosed in parenthesis and the function body is enclosed in curly braces.

Function declarations are hoisted, which means that the JavaScript interpreter moves them to the top of their scope, before any code is executed. This means that you can call a function before it is defined in your code.

Here's an example of a simple function declaration:

```
function greet() {
  console.log("Hello, world!");
}

greet(); // Output: "Hello, world!"
```

In this example, the function greet is defined and declared using the function keyword, and the code block that is executed when the function is called is placed within curly braces.

Function declarations can also take parameters, which allows the function to accept input from the calling code. For example:

```
function add(a, b) {
  return a + b;
}
let result = add(3, 4);  // result = 7
```

In this example, the add function takes two parameters, a and b, and returns the sum of those two values.

It's important to note that function declaration should be defined before they are called, otherwise it will throw an error.

Function declarations are a common way to define functions in JavaScript and are widely used in the language. They are also easy to understand and use, making them a good choice for many programming tasks.

### What is Function expression ?

In JavaScript, a function expression is a way to define a function by assigning it to a variable. It is similar to a function declaration, but instead of using the function keyword, a function expression is assigned to a variable using the assignment operator (=).

Function expressions are not hoisted, which means that the JavaScript interpreter does not move them to the top of their scope before any code is executed. This means that you cannot call a function before it is defined in your code.

Here's an example of a simple function expression:

```
let greet = function() {
  console.log("Hello, world!");
}

greet(); // Output: "Hello, world!"
```

In this example, the function greet is defined and assigned to the variable greet using the assignment operator (=) and the code block that is executed when the function is called is placed within curly braces.

Function expressions can also take parameters, which allows the function to accept input from the calling code.
For example:

```
let add = function(a, b) {
  return a + b;
}
let result = add(3, 4);  // result = 7

```

In this example, the add function takes two parameters, a and b, and returns the sum of those two values.

Function expressions are also often used as callback functions, for example when a function is passed as an argument to another function:

### What is Arrow function ?

In JavaScript, an arrow function is a shorthand syntax for defining a function. It is also known as a "fat arrow" function because it uses the "=>" symbol to define the function. Arrow functions were introduced in ECMAScript 6 (ES6) and are considered more concise and easier to read than traditional function expressions or declarations.

Arrow functions have a number of syntax variations depending on the number of arguments and the complexity of the function body.

Here's an example of a simple arrow function that takes no arguments and returns a string:

For example:

```
let greet = () => {
  return "Hello, world!";
}
console.log(greet()); // Output: "Hello, world!"
```

In this example, the function greet is defined using an arrow function and the code block that is executed when the function is called is placed within curly braces.

Arrow functions can also take parameters and return values:

```
let add = (a, b) => a + b;
console.log(add(3, 4));  // Output: 7
```

In this example, the add function takes two parameters, a and b, and returns the sum of those two values. The return statement is implicit, so you don't need to write the return keyword.

### Difference between function declaration and function expression ?

In JavaScript, there are two ways to define a function: function declarations and function expressions. Both methods allow you to create reusable code, but there are some key differences between them.

Function Declarations:

are defined using the function keyword, followed by the function name, a list of parameters, and the function body. are hoisted,which means that the JavaScript interpreter moves them to the top of their scope before any code is executed. This means that you can call a function before it is defined in your code. The name of the function is required.

Function Expressions:

are defined by assigning a function to a variable using the assignment operator (=).are not hoisted, which means that the JavaScript interpreter does not move them to the top of their scope before any code is executed. This means that you cannot call a function before it is defined in your code.The name of the function is optional, it can be anonymous, but it can be named as well.

Here's an example of a function declaration:

```
function greet() {
  console.log("Hello, world!");
}

greet(); // Output: "Hello, world!"
```

And here's an example of a function expression:

```
let greet = function() {
  console.log("Hello, world!");
}

greet(); // Output: "Hello, world!"

```

### Difference between function expression and arrow function ?

A function expression is a way of defining a function in JavaScript using the function keyword, such as:

```
let myFunction = function(parameters) {
    // code to be executed
}

```

An arrow function, also known as a "fat arrow" function, is a shorthand syntax for defining a function in JavaScript and it uses the "=>" symbol, such as:

```
let myFunction = (parameters) => {
    // code to be executed
}

```

There are some differences between function expression and arrow function,

Arrow functions do not have their own this, they use this of the surrounding scope.

- Arrow functions do not have their own arguments object, they use arguments object of the surrounding scope.
- Arrow functions can't be used as constructors.
- Arrow functions can't be used with the new keyword.
- Arrow functions can't be used as generators.

In general, arrow functions are shorter and easier to read than function expressions, but they have some limitations. It's a matter of preference which one to use, depending on the specific use case.

### What is Anonymous function ?

An anonymous function in JavaScript is a function that is defined without a name. Anonymous functions are often used as arguments for other functions, such as callbacks and event handlers. They can also be assigned to variables and used just like named functions.

Here's an example of an anonymous function being assigned to a variable:

```
let myFunction = function() {
    console.log("Hello, world!");
};
myFunction(); // logs "Hello, world!"
```

Here's an example of an anonymous function being passed as an argument to another function

```
setTimeout(function() {
    console.log("Hello, world!");
}, 1000);

```

This function will execute after 1 sec of delay.

Arrow function also can be used as anonymous function such as

```
setTimeout(()=> {
    console.log("Hello, world!");
}, 1000);
```

In general, anonymous functions are used when a function is only needed once and will not be reused elsewhere in the code.

### What is Function invoking/calling ?

In JavaScript, a function can be invoked or called by using the function's name followed by parentheses, like this:

```
function myFunction(parameters) {
    // code to be executed
}
myFunction(arguments);
```

The parentheses after the function name are used to pass in any arguments that the function may require. The code inside the function will then execute with the provided arguments.

Functions can also be invoked or called using a function reference, such as a variable that points to the function

```
let myFunctionReference = myFunction;
myFunctionReference(arguments);

```

Functions can also be invoked using the call() or apply() methods, which allow you to specify the value of this within the function and pass arguments to the function respectively

```
myFunction.call(thisValue, arguments);
```

```
myFunction.apply(thisValue, [arguments]);
```

It's important to note that a function must be defined before it can be invoked. If a function is invoked before it is defined, it will cause an error.

### What is Function calling from other function ?

In JavaScript, a function can be called from within another function by simply invoking the function by its name, followed by parentheses to include any necessary arguments.

For example:

```
function outerFunction() {
  console.log("This is the outer function.");
  innerFunction();
}

function innerFunction() {
  console.log("This is the inner function.");
}

outerFunction();

```

In the example above, the outerFunction calls the innerFunction by its name, innerFunction(), and thus the innerFunction is executed.

When the outerFunction is called, it will log "This is the outer function." and then call innerFunction, which will log "This is the inner function."

### What is function as values ?

In JavaScript, functions are first-class citizens, which means they can be treated like any other value, such as a number or a string. This means that they can be assigned to variables, passed as arguments to other functions, and returned from functions.

For example, a function can be assigned to a variable:

```
let myFunction = function() {
  console.log("This is my function.");
};

```

It can also be passed as an argument to another function

```
function callFunction(func) {
  func();
}

callFunction(myFunction);
```

It can also be returned from a function:

```
function returnFunction() {
  return function() {
    console.log("This function is being returned.");
  }
}

let returnedFunction = returnFunction();
returnedFunction();

```

In the above example, the returnFunction returns an anonymous function that is assigned to the variable returnedFunction, which can then be invoked by invoking returnedFunction();

In JavaScript, functions are also objects, and they have additional properties and methods that can be accessed and used like any other object.

### What are parameters in JavaScript ?

In JavaScript, parameters are variables that are used as placeholders for the values that are passed to a function when it is called. These values are known as arguments. When a function is called, the arguments are assigned to the corresponding parameters in the function definition.

For example, consider the following function definition:

```
function add(x, y) {
  return x + y;
}
```

In this example, the function add takes two parameters, x and y. When the function is called, the values passed as arguments are assigned to these parameters, like this

```
let result = add(5, 3);
```

In this case, the value 5 is assigned to the parameter x and the value 3 is assigned to the parameter y

### What are arguments in JavaScript ?

In JavaScript, arguments are the values passed to a function when it is called. These values are assigned to the corresponding parameters in the function definition.

For example, consider the following function definition:

```
function add(x, y) {
  return x + y;
}
```

In this example, the function add takes two parameters, x and y. When the function is called, the values passed as arguments are assigned to these parameters, like this:

```
let result = add(5, 3);
```

In JavaScript, arguments are the values passed to a function when it is called. These values are assigned to the corresponding parameters in the function definition.

For example, consider the following function definition:

javascript

function add(x, y) {
return x + y;
}

In this example, the function add takes two parameters, x and y. When the function is called, the values passed as arguments are assigned to these parameters, like this:

let result = add(5, 3);

In this case, the value 5 is passed as the first argument and the value 3 is passed as the second argument to the function add.

JavaScript also provides the arguments object inside the function, which is an array-like object that contains all the arguments passed to the function

```
function myFunction() {
  console.log(arguments);
}

myFunction(1, "hello", true);
```

In this example, myFunction is called with three arguments: 1, "hello" and true, and the arguments object inside the function contains [1, "hello", true]

It's worth noting that the arguments object is not an array and it doesn't have array methods like slice, map, filter etc. However, it can be converted to an array using Array.from(arguments) or using spread operator [...arguments]

### What is arguments Object in functions ?

In JavaScript, the arguments object is a special object that is available within the scope of all function calls. It contains an array-like collection of the arguments passed to the function. The arguments object allows a function to access the parameters passed to it, even if the function was not defined with a specific number of arguments. This can be useful for creating flexible or reusable functions. However, the arguments object is not an actual Array, and it does not have all of the methods of an Array.

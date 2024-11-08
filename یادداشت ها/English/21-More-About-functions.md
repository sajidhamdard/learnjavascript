# More on functions

### What is default parameter ?

In JavaScript, default parameters are values that are assigned to a function's parameters if no value is passed to the function when it is called. These default values can be defined in the function's definition, and are used when the function is called without passing any arguments for that parameter.

For example, consider the following function definition:

```
function greet(name='John Doe') {
  console.log(`Hello, ${name}!`);
}

greet();  // Output: "Hello, John Doe!"

```

In this example, the function greet takes one parameter, name, which is assigned the default value 'John Doe'. If the function is called without passing an argument for name, it will use the default value:

However, if the function is called with an argument for name, that argument will be used instead of the default value:

```
greet('Jane Smith');  // Output: "Hello, Jane Smith!"
```

So, it's a way to assign a default value for a function parameter in case no value is passed to the function during the call.

### What is passing arguments: value vs reference in JavaScript ?

In JavaScript, when you pass an argument to a function, the function receives a reference to the value, rather than a copy of the value. This means that when you modify the argument within the function, you are actually modifying the original value.

For example, consider the following code:

```
let x = 10;

function addFive(num) {
  num += 5;
}

addFive(x);
console.log(x);  // Output: 10

```

In this example, the function addFive takes one parameter num and add 5 to it. Here, the variable x is passed as an argument to the function, and the function modifies the value of num to be 15. However, the original value of x remains unchanged.

On the other hand, when passing objects and arrays, the function gets a reference to the original object or array, and any modification made within the function affects the original object or array

```
let arr = [1, 2, 3];

function addOne(arr) {
  arr.push(4);
}

addOne(arr);
console.log(arr);  // Output: [1, 2, 3, 4]

```

In this example, the function addOne takes an array as a parameter and add one element to it. Here, the original array arr is passed as an argument to the function and the function modifies the original array by adding an element to it.

In short, when passing primitive data types (numbers, strings, booleans, etc.) to a function, JavaScript passes the value, which means that the function cannot modify the original value. When passing objects and arrays to a function, JavaScript passes a reference to the original value, which means that the function can modify the original value.

### What is First Class function/Citizen ?

In JavaScript, all functions are first-class citizens, which means they can be treated like any other value, such as a number or string. This means that a function can be:

- Assigned to a variable:

```
let add = function(a, b) {
  return a + b;
};

```

- Passed as an argument to another function:

```
let numbers = [1, 2, 3, 4, 5];
let double = function(x) { return x * 2; };
let doubledNumbers = numbers.map(double); // [2, 4, 6, 8, 10]

```

- Returned as a value from a function

```
let createCounter = function() {
  let count = 0;
  return function() {
    return count++;
  };
};
let counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

```

In the first example, the function add is assigned to a variable, in the second example the function double is passed as an argument to the map method, and in the third example, an anonymous function is returned as a value from the createCounter function.

It's important to note that functions in javascript are first class object, which means they are also objects and have properties and methods just like any other object.

### What is High Order function ?

A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. In JavaScript, functions are first-class citizens, meaning they can be passed around just like any other data type (e.g. numbers, strings, etc.).

For example:

```
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function operateOnTwoNumbers(operatorFunc, x, y) {
  return operatorFunc(x, y);
}

console.log(operateOnTwoNumbers(add, 2, 3)); // prints 5
console.log(operateOnTwoNumbers(multiply, 2, 3)); // prints 6
```

Here operateOnTwoNumbers is a higher-order function because it takes a function (operatorFunc) as an argument and returns the result of calling that function with the given x and y values.

### What is Callback function ?

A callback function in JavaScript is a function that is passed as an argument to another function, which is then invoked by that function at a later time. The function that is passed as an argument is called the "callback function," and the function that receives it as an argument and invokes it at a later time is called the "higher-order function."

For example:

```
function add(x, y) {
  return x + y;
}

function operateOnTwoNumbers(x, y, callback) {
  return callback(x, y);
}

console.log(operateOnTwoNumbers(2, 3, add)); // prints 5
```

Here add is a callback function that is passed to the operateOnTwoNumbers function, which invokes the add function with the x and y values passed to it as arguments and returns the result.

Callback functions are often used in JavaScript to handle asynchronous operations. For example, a function that retrieves data from a server may take a callback function as an argument, which is then invoked once the data has been retrieved.

```
function getData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}

getData('https://example.com/data', function(data) {
  console.log(data);
});
```

Here, getData is a higher-order function that takes a URL and a callback function as arguments. It uses the fetch function to retrieve data from the specified URL, and then invokes the callback function with the retrieved data as an argument

### What is setTimeOut ?

setTimeout is a JavaScript function that allows you to schedule a function to be executed after a specified amount of time (in milliseconds). It takes two arguments: a callback function, and the number of milliseconds to wait before executing the callback function.

For example:

```
function sayHello() {
  console.log("Hello World!");
}

setTimeout(sayHello, 2000);
```

In this example, the sayHello function will be executed after 2 seconds (2000 milliseconds).

It's also possible to pass an anonymous function as a callback to setTimeout:

```
setTimeout(function() {
  console.log("Hello World!");
}, 2000);
```

You can also clear or cancel a scheduled timeout by using clearTimeout(timeoutId) where the timeoutId is returned by setTimeout function.

```
const timeoutId = setTimeout(function() {
  console.log("Hello World!");
}, 2000);

clearTimeout(timeoutId); // This will cancel the scheduled timeout.

```

setTimeout is often used in JavaScript to create timed events or to delay the execution of certain code. It is also commonly used to create animations, loading screens, and other interactive effects.

### What is setInterval ?

setInterval is a JavaScript function that allows you to schedule a function to be executed repeatedly at a specified interval of time (in milliseconds). It takes two arguments: a callback function, and the number of milliseconds to wait between each execution of the callback function.

For example:

```
let count = 0;

function incrementCounter() {
  count++;
  console.log(count);
}

setInterval(incrementCounter, 1000);
```

setInterval is a JavaScript function that allows you to schedule a function to be executed repeatedly at a specified interval of time (in milliseconds). It takes two arguments: a callback function, and the number of milliseconds to wait between each execution of the callback function.

For example:

javascript

let count = 0;

function incrementCounter() {
count++;
console.log(count);
}

setInterval(incrementCounter, 1000);

In this example, the incrementCounter function will be executed every 1 second (1000 milliseconds) and it will increment the count by 1 and print it on the console.

It's also possible to pass an anonymous function as a callback to setInterval:

```
let count = 0;
setInterval(function(){
  count++;
  console.log(count);
}, 1000);

```

You can also clear or cancel a scheduled interval by using clearInterval(intervalId) where the intervalId is returned by setInterval function

```
const intervalId = setInterval(function() {
  console.log("Hello World!");
}, 2000);

clearInterval(intervalId); // This will cancel the scheduled interval.

```

setInterval is often used in JavaScript to create timed events or to execute code periodically. It can be used to create animations, loading screens, and other interactive effects. It is also commonly used to perform background tasks or to periodically check for new data

### Function returning a function

A function returning a function in JavaScript is a function that returns another function as its output. This is also known as Higher-Order Function.

For example:

```
function createCounter() {
  let count = 0;
  return function() {
    return count++;
  }
}

const counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

In this example, createCounter is a higher-order function that returns a function that can be used to increment a count variable. The createCounter function creates a new variable count and returns an inner function that increments the count variable and returns its value. When we call the createCounter() function, it returns the inner function, which we can assign to a variable counter. Then, every time we call the counter() function, it increments the count variable and returns its value.

Another example would be as below

```
function createAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = createAdder(5);
console.log(add5(3)); // 8
console.log(add5(7)); // 12
```

Here, createAdder is a higher-order function that takes an argument x and returns a new function that takes an argument y and returns the sum of x and y. The returned function is assigned to the variable add5, which can be used to add 5 to any number.

This technique is often used in JavaScript to create reusable and composable functions, to create closures, and to create functions with a specific context or state.

### What are the call and apply methods ?

In JavaScript, the call() and apply() methods are used to call a function and set the value of the this keyword inside the function. Both methods can be used to invoke a function and pass arguments to it, but they are used in slightly different ways.

The call() method is used to invoke a function and pass the arguments to it as separate values.
For example:

```
function sayHello(name, age) {
  console.log(`Hello ${name}, you are ${age} years old!`);
}

sayHello.call(null, "John", 30); // Hello John, you are 30 years old!

```

In this example, the call() method is used to invoke the sayHello function and pass the arguments "John" and 30 to it. The first argument passed to the call() method is the value of this inside the function. In this case, we passed null which means that this will be null inside the function.

The apply() method is similar to the call() method, but it is used to pass the arguments to the function as an array.
For example:

```
function sayHello(name, age) {
  console.log(`Hello ${name}, you are ${age} years old!`);
}

sayHello.apply(null, ["John", 30]); // Hello John, you are 30 years old!

```

In this example, the apply() method is used to invoke the sayHello function and pass the arguments ["John", 30] to it as an array. Again, the first argument passed to the apply() method is the value of this inside the function.

Both call() and apply() are useful when you want to reuse a function with different contexts or states, or when you want to invoke a function and pass it arguments from an array.

call() and apply() are similar, but call() is slightly more performant than apply() when passing arguments, because apply() must convert the arguments passed to it into an array before passing them to the function, while call() can pass the arguments directly.

### What is the bind method ?

In JavaScript, the bind() method is used to create a new function that is bound to a specific value of the this keyword. It returns a new function with the same body and parameters as the original function, but with a this value that is permanently set to the first argument passed to the bind() method.

For example:

```
let person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let getPersonName = person.getFullName.bind(person);
console.log(getPersonName()); // "John Doe"
```

In this example, getFullName is a function that returns the full name of the person object. We use the bind() method to create a new function getPersonName that is bound to the person object. Then, when we call the getPersonName() function, it returns the full name of the person object, because the this keyword inside the function is set to the person object.

Another example would be as below:

```
let add = function(a, b) {
  return this.x + a + b;
};

let obj = {x: 10};
let bound = add.bind(obj);
console.log(bound(1, 2));  // 13
```

Here, the add function takes two parameters and returns the sum of those parameters and this.x. The bind method is used to create a new function bound that is bound to the obj object. So, when we call bound(1, 2), it will return 13, the sum of 1+2+this.x where this.x is 10

The bind() method is useful when you want to create a function that is permanently bound to a specific value of this, or when you want to create a new function that inherits the behavior of an existing function but with a different context or state.

### What is Immediately invoked function expression ?

An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is immediately executed after it is defined. It is a pattern that is often used to create a new scope for variables, to avoid variable hoisting, or to create a self-executing anonymous function.

An IIFE is defined using the function expression syntax, and it is immediately invoked by adding a pair of parentheses after the function definition. The parentheses are used to invoke the function, just like a regular function call.

Here is an example of an IIFE:

```
(function() {
  let message = "Hello, World!";
  console.log(message);
})();
```

In this example, the function is defined using the function expression syntax, and it is immediately invoked by adding a pair of parentheses after the function definition. This function doesn't take any arguments and doesn't return any value. Inside it, it declares a variable message and logs it.

Another example with argument and return value:

```
let result = (function(a, b) {
  return a + b;
})(10, 20);
console.log(result); // 30
```

In this example, the function takes two arguments a and b and returns the sum of them. It is immediately invoked with arguments 10 and 20. The returned value from the function 30 is stored in the variable result and logs it.

IIFEs are useful when you want to create a new scope for variables, to avoid variable hoisting, or to create a self-executing anonymous function. It is also useful when you want to create a local scope for your functions and variables and avoid polluting the global scope.

### What is Closure ?

In JavaScript, a closure is a function that has access to the variables in the scope in which it was defined, even if that scope is no longer in use. This means that a closure has access to the variables and functions that were in scope when the closure was created, and it can continue to access those variables even after the scope has ended.

Here is an example of a closure:

```
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  }
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

In this example, the makeCounter function returns a new function that increments a counter. When the makeCounter function is called, it creates a new scope with the variable count initialized to 0. The returned function has access to the count variable, even though the makeCounter function has completed its execution. When we call the counter() function, it returns the current value of count and then increments it.

Another example

```
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  }
}

let add5 = outerFunction(5);
console.log(add5(3)); //8
console.log(add5(4)); //9

```

Here, the outerFunction takes an argument x and returns a function innerFunction which takes another argument y and returns the sum of x and y. The innerFunction has access to the x variable even though the outerFunction has completed its execution. When we call the outerFunction(5), it returns the innerFunction which is stored in the variable add5. Now, when we call add5(3) it returns 8 and add5(4) returns 9

Closures are useful for creating private variables and methods, for creating function factories, and for implementing function decorators and other functional programming patterns.

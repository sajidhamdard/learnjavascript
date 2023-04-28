# JavaScript Features

### What is High level language ?

A high-level programming language is a type of programming language that provides a higher level of abstraction from the computer's hardware and is designed to be more human-readable and easier to use than low-level languages. Examples of high-level languages include Python, Java, C#, and JavaScript. High-level languages are often used for general-purpose programming, and they often provide a higher level of functionality and convenience than low-level languages.

### What is Garbage Collected ?

Garbage collection is a feature of some programming languages where the runtime system automatically manages the memory used by the program. It periodically checks for and frees memory that is no longer being used by the program. This eliminates the need for the programmer to manually manage memory allocation and deallocation, which can be a source of bugs and memory leaks. Garbage collection is a technique used in many modern programming languages like Java, C#, Python, Ruby, among others to manage the memory allocation and deallocation. This is a key feature of these languages, as it reduces the risk of memory-related bugs, improves performance and increases developer productivity.

### What is Interpreted Language (JIT)-> (Just in time compiler) ?

JavaScript is an interpreted language, which means that the code is not compiled into machine-readable code before it is executed. Instead, the code is read and executed line-by-line by a JavaScript engine such as V8 (used in Chrome and Node.js), SpiderMonkey (used in Firefox) or Chakra (used in Edge) .

JIT or Just-In-Time compilation is a technique used by JavaScript engines to improve the performance of interpreted languages like JavaScript. JIT compilation is a way of converting JavaScript code into machine code at runtime, typically just before it is executed. This allows the JavaScript engine to execute the code faster and more efficiently, as the machine code can be directly executed by the CPU. This is done dynamically at runtime, hence the name Just-In-Time. This technique improves the performance of JavaScript and allows it to run large and complex applications.

### What is Multi Paradigm ?

JavaScript is a multi-paradigm programming language, which means it supports several programming paradigms such as:

- Object-oriented programming (OOP) - JavaScript supports classes, objects, inheritance, and encapsulation through the use of prototypes.
- Functional programming - JavaScript supports the use of first-class functions and closures, making it easy to use functional programming techniques.
- Imperative programming - JavaScript supports the use of statements that change a program's state, and can be used in an imperative style.

JavaScript's flexibility and support for different paradigms make it a versatile language that can be used for a wide range of tasks, from simple scripts to complex web applications. This also allows developers to use the best approach for their specific use case, and to write more expressive, maintainable and efficient code.

### What is Prototype based function ?

In JavaScript, prototypes are a way of implementing object-oriented programming (OOP) concepts such as inheritance and encapsulation. A prototype is an object that serves as a template for creating other objects. Each object in JavaScript has a prototype, which can be accessed using the **proto** property.

When a property or method is accessed on an object, the JavaScript engine first looks for it on that object. If it is not found, it then looks for it on the object's prototype, and so on, until it reaches the top of the prototype chain. This is called "prototype-based inheritance"

This prototype-based approach to OOP in JavaScript differs from class-based OOP, which is used in languages like Java, C#, and C++. In class-based OOP, objects are instances of classes, which define the properties and methods that the objects will have. In prototype-based OOP, objects inherit properties and methods from other objects directly, without the need for classes.

This approach to OOP in JavaScript allows for more flexibility and expressiveness in solving problems and makes it easy to add or change behavior of an object without having to change the object's definition.

### What is First Class Function ?

In JavaScript, a first-class function is a function that can be treated like any other value, such as a number or a string. This means that a first-class function can be:

- Assigned to a variable
- Passed as an argument to a function
- Returned as a value from a function
- This is in contrast to languages that have restrictions on how functions can be used. For example, in some languages, functions can only be used as subroutines and cannot be passed as arguments or returned as values.

First-class functions in JavaScript make it easy to use functional programming techniques, such as higher-order functions and closures, which allow for more expressive, flexible, and reusable code. This is a key feature of JavaScript, which allows it to be used for a wide range of tasks, from simple scripts to complex web applications.

It is also one of the reason why JavaScript is also called as Functional Programming Language.

### What is Dynamically Typed/ Dynamic ?

In JavaScript, a variable's type is determined at runtime, rather than being explicitly set by the programmer. This is known as dynamic typing or dynamic language.

In a statically typed language, variable types are set at compile time, and cannot be changed later on. This means that if a variable is declared as an integer, it can only hold integers and trying to assign anything else will result in an error.

In contrast, in a dynamically typed language like JavaScript, variables don't have a fixed type. A variable can hold any type of value, and its type can change during the execution of the program. For example, a variable can be assigned a number value and then later be reassigned a string value without any issues.

This can make the code more flexible and easier to write, but it can also make it harder to catch errors early on. Because of this, JavaScript provides typeof operator which can be used to check the type of a variable at runtime.

This dynamic feature of JavaScript also allows for more expressive, flexible, and reusable code, making it easy to use for a wide range of tasks, from simple scripts to complex web applications.

for example:

```javascript
   let x = 10; // type will be number
   x = "learnjavascript"; //type will be string
   x = false; //type will be boolean
```

### What is Single Threaded ?

In JavaScript, a single-threaded model means that only one operation can be executed at a time. JavaScript runs on a single thread, which means that only one task can be executed at a time.

This is in contrast to multi-threaded languages, which allow multiple threads to run simultaneously and can perform multiple tasks in parallel.

Single-threaded programming model has an advantage that it is less complex and easier to reason about, since there's only one call stack and one heap to worry about. It also ensures that the program state is always consistent and predictable.

However, it also has a drawback that it can lead to performance issues when running long-running or heavy tasks, as it can block the execution of other tasks. To overcome this issue, JavaScript provides mechanisms such as Web Workers and Asynchronous programming which allows to run heavy tasks in a different thread, without blocking the main thread.

In summary, JavaScript single-threaded model allows it to be simple and predictable, but also limits its performance when it comes to heavy workloads.

### What is Non-Blocking Event Loop ?

In JavaScript, the event loop is a mechanism that enables the execution of code in a non-blocking way. It is a single-threaded loop that continually checks the message queue for new messages (also known as events) to process.

JavaScript's event loop allows the execution of code to be non-blocking, meaning that it will not halt the execution of the program while waiting for a long-running task to complete. Instead, the task is added to the message queue, and the event loop will continue to process other messages (such as user input or other events) while the task is being executed.

When the task is complete, its result is added to the message queue, and the event loop will process it in the next iteration. This allows for a responsive and smooth user experience, as the program can continue to handle user input and other events even when long-running tasks are being executed.

This approach is also known as "asynchronous programming" and it is one of the key features of JavaScript that makes it suitable for building responsive and high-performance web applications.

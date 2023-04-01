### Execution Context

In JavaScript, an execution context is an abstract concept used by the JavaScript engine to manage the execution of code. Whenever a function is called in JavaScript, a new execution context is created for that function.

Each execution context contains information about the function being executed, including its variables, parameters, and inner functions. It also maintains a reference to the scope chain that determines the visibility of variables and functions within the function's lexical environment.

The JavaScript engine maintains a stack of execution contexts called the "call stack". When a function is called, a new execution context is created and pushed onto the call stack. When the function finishes executing, its execution context is popped off the stack, and control is returned to the calling context.

There are three types of execution contexts in JavaScript:

1. Global Execution Context: This is the default context that is created when the JavaScript program starts running. It represents the global environment and contains all the variables, functions, and objects that are available globally.

2. Function Execution Context: This context is created whenever a function is invoked. It contains the variables, parameters, and inner functions of the function.

3. Eval Execution Context: This context is created whenever the eval() function is called. It is used to evaluate code dynamically.

Each execution context has its own variable object, which stores the function's local variables, parameters, and inner functions. The variable object is initialized with the function arguments and any locally defined variables. It also includes a reference to the outer environment, which is used to resolve variable names that are not found in the local scope.

In summary, an execution context is an internal data structure used by the JavaScript engine to manage the execution of code. It contains information about the currently executing function, its variables, and its lexical environment. Understanding execution contexts is essential to understanding how JavaScript works and how to write efficient and effective code.


### Variable Environment 

Variable environment is a concept in JavaScript that refers to the set of variables and their values that are accessible within a particular scope at a given point in time. Each time a function is invoked, a new variable environment is created. The variable environment includes all of the function's parameters, as well as any variables declared within the function using the `var`, `let`, or `const` keywords. 

The variable environment also contains a reference to the outer environment, which is the set of variables and their values that were accessible at the time the function was defined. This is known as the function's closure, and allows the function to access variables that were defined outside of its own scope.

In summary, the variable environment in JavaScript is a crucial aspect of how variables are scoped and accessed within functions and their closures.

### Type of execution context ? Global and Functional ?

In JavaScript, execution context refers to the environment in which code is executed. There are two types of execution contexts - global and functional.

The global execution context is created when the script is first loaded into the browser. It includes any variables and functions declared outside of a function. The global object, `window` in a browser environment, is also part of the global execution context.

On the other hand, a functional execution context is created whenever a function is invoked. It includes the function arguments, local variables, and any nested functions within the current function. Each time a function is called, a new functional execution context is created and added to the call stack.

Both global and functional execution contexts have their own lexical environments, which determine variable scope and accessibility. In the case of the global context, this will be the entire script file. In the case of a functional context, it will be the function body.

Understanding execution contexts is crucial for understanding how JavaScript code is interpreted and executed.

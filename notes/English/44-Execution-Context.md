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

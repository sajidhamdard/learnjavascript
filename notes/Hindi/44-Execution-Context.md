### what is Execution Context

Execution Context in JavaScript refers to the environment where JavaScript code is executed. It consists of the scope chain, variable objects, and this keyword.

Let me give you an example in Hinglish Language: Imagine that you are a chef in a kitchen. You have your recipe (JavaScript code), but you need some ingredients (variables) and tools (functions) to execute it. The kitchen itself would be your execution context, which provides you with all the necessary resources to cook your dish.

In JavaScript, each time a function is called, a new execution context is created. This context has access to its own set of variables and functions, as well as those defined in outer scopes. This creates a hierarchy of nested execution contexts, known as the call stack.

For example, let's say we have a simple function:

```
function greet(name) {
  console.log("Hello " + name);
}
```

And we call this function:

```
greet("John");
```

When the function is called, a new execution context is created, with its own variable object and scope chain. In this case, the variable object would contain a single property, `name`, with a value of `"John"`. The scope chain would include the global scope and any outer scopes, but since there are none in this example, it's just the global scope.

The function then executes, printing `"Hello John"` to the console. Once it's finished executing, the execution context is removed from the call stack, and control returns to the previous execution context.

In conclusion, Execution Context in JavaScript is a way of organizing and managing the execution of code by providing an isolated environment for each function call. It ensures that each function can access the variables and functions it needs to execute, without interfering with other parts of the program.

### what is Variable Environment

Variable Environment जावास्क्रिप्ट में एक ऐसा माहौल है जो हमारे कोड में उपलब्ध सभी वेरिएबल्स को store करता है। यह एक object होता है जिसमें हमारे code block के लिए local variables, functions और global variables के references होते हैं। इन references की मदद से, जब हम अपने code block को execute करते हैं, तो जावास्क्रिप्ट engine उन values को lookup करता है।

इसे एक example के through explain किया जा सकता है।

```
let a = 5;

function foo() {
  let b = 10;
  console.log(a + b);
}

foo(); // Output: 15
```

जैसा कि ऊपर दिखाया गया है, `a` global variable है जो `foo()` function में reference किया जा सकता है। अब, `foo()` function का execution start होने पर उसका own variable environment create हुआ, जिसमें `b` variable की reference होती है। जब `console.log(a+b)` line execute हुई, तो जावास्क्रिप्ट engine ने `b` की value lookup करने के लिए `foo()` function के variable environment में देखा और इसके बाद `a` की value lookup करने के लिए global scope में देखा।

### what is Type of execution context ? Global and Functional

JavaScript mein execution context ka matlab hota hai ki code kaise execute hoga. JavaScript 2 type ke execution context support karta hai:

1. Global Execution Context - Yah execution context sabse pehle run hota hai aur ek hi baar run hota hai jab browser mein page load hota hai. Is execution context mein, sabhi variables, functions aur objects global scope mein define hote hai.

Example:

```
var a = 10;
function foo() {
   console.log("Hello World!");
}
console.log(a); // Output: 10
foo(); // Output: Hello World!
```

2. Functional Execution Context - Yah execution context function ke andar create hota hai aur har baar call hone par create hota hai. Is execution context mein, sabhi variables, functions aur objects function scope mein define hote hai.

Example:

```
function foo() {
   var a = 10;
   function bar() {
      console.log(a);
   }
   bar();
}

foo(); // Output: 10
```

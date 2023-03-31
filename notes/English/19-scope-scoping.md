# Scope

In JavaScript, scope refers to the visibility or accessibility of variables, functions, and objects within different parts of a program. It determines where in the program a particular variable or function can be accessed and manipulated.

### There are two types of scopes in JavaScript:

- Global scope:
  Variables declared outside of any function or block have global scope, which means they can be accessed from anywhere in the program, including within functions or blocks.

```
  var x = 10;
function myFunction() {
console.log(x); // 10
}

myFunction();

```

- Local scope:
  Variables declared inside a function or block have local scope, which means they can only be accessed within that function or block.

When a variable is referenced in JavaScript, the interpreter searches for that variable first in the local scope of the current function, and then in the next outer scope, continuing until it reaches the global scope. If the variable is not found in any of the scopes, a reference error is thrown.

```
function myFunction() {
var x = 10;
console.log(x); // 10
}

myFunction();
console.log(x); // ReferenceError: x is not defined

```

- Functional scope:
  Functional scope is a concept in JavaScript that refers to the way scope works within functions. It means that variables declared inside a function are only accessible within that function and any nested functions, but not outside of it.

In other words, functional scope creates a private space for variables and functions within a function, which helps to avoid naming collisions and unexpected changes to variables.

- Here's an example:

```
function myFunction() {
var x = 10;
console.log(x); // 10

function nestedFunction() {
var y = 5;
console.log(x + y); // 15
}

nestedFunction();
console.log(y); // ReferenceError: y is not defined
}

myFunction();

```

It's important to understand scope in JavaScript because it affects how variables and functions are accessed and manipulated. When variables have global scope, they can be accessed and modified from anywhere in the program, which can lead to unexpected behavior and bugs. On the other hand, when variables have local scope, they are protected from unwanted changes and can be reused with different values in different parts of the program.

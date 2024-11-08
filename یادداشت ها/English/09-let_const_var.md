# Let, Const and Var

## let

We use "let" variables in JavaScript to declare variables that are only accessible within the specific block of code or function where they are defined. This helps to prevent accidental conflicts with other variables that may have the same name, and makes the code easier to read and understand.

The scope of a let variable is block scope. It can be updated but cannot be re-declared into the scope. It can be declared without initialization. It cannot be accessed without initialization otherwise it will give ‘referenceError’. Hoisting is done , but not initialized (this is the reason for error when we access the let variable before declaration/initialization. For example:

```javascript
let x = 10;
x = 20;
console.log(x);//SyntaxError: 'x' has already been declared

```

## const

The scope of a const variable is block scope. It cannot be updated or re-declared into the scope. It cannot be declared without initialization. It cannot be accessed without initialization, as it cannot be declared without initialization. Hoisting is done, but not initialized (this is the reason for error when we access the const variable before declaration/initialization. For example:

```javascript
const x = 10;
x = 20;
console.log(); //typeErroe:this will also give an error

```

## var

The scope of a var variable is functional scope. It can be updated and re-declared into the scope. It can be declared without initialization. It can be accessed without initialization as its default value is “undefined”. hoisting done , with initializing as ‘default’ value. For example:

```javascript
var val = 300;
console.log(val); //allowed and value will be undefined here
```

## What are the differences between let, const and var?

In JavaScript, var, let, and const are all used to declare variables, but they have different scoping rules and behavior.

- var: Variables declared with var are function scoped, which means that they are only accessible within the function in which they are declared. If a variable is declared with var outside of any function, it becomes a global variable and can be accessed from anywhere in the code. Variables declared with var can be reassigned new values at any time.

- let: Variables declared with let are block scoped, which means that they are only accessible within the block in which they are declared. Variables declared with let can also be reassigned new values at any time.

- const: Variables declared with const are also block scoped, similar to let. The main difference is that variables declared with const cannot be reassigned new values after they have been initialized. This means that once a variable is declared with const, its value is constant and cannot be changed.

In summary, var is function scoped and can be reassigned, let and const are block scoped and const can't be reassigned.

let and const were introduced in ECMAScript 6 (ES6), and are recommended to use over var as they provide better variable scoping and prevent accidental reassignments.

## When to use let, const and var?

When deciding which keyword to use when declaring a variable in JavaScript, consider the following guidelines:

- Use const when you know that a variable's value will not change. This helps prevent accidental reassignments and makes the code more readable by indicating that the variable's value is constant.

- Use let when you know that a variable's value will change, but it will only be used within a specific block of code. This helps to limit the scope of the variable and prevent naming conflicts.

- Use var only when necessary. It is function scoped and its behavior is similar to let but it's considered as legacy and not recommended to use in modern javascript development.

It's also worth noting that const does not make the variable immutable, just the reference to it, if the variable is an object or an array, you can still change its properties or elements.

In summary, prefer const over let when you don't need to reassign the value, and use let when you are going to reassign. Avoid using var unless you need its function-scoped behavior.

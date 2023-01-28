# Temporal Dead Zone (TDZ)

In JavaScript, the "Temporal Dead Zone" (TDZ) refers to the period of time before a variable declared with the let or const keyword is initialized. During this period, trying to access the variable will result in a ReferenceError.

The TDZ is different from hoisting, which only affects the scope of the variable. The TDZ applies to the variable's initialization as well. This is because, unlike variables declared with var, variables declared with let and const are not initialized until they are assigned a value.

Here's an example of the TDZ in action:

```
console.log(x); // ReferenceError: x is not defined
let x;
x = 5;
console.log(x); // 5
```

In this example, the variable x is declared with the let keyword, but it is not assigned a value until the next line of code. Trying to access x before it is assigned a value will result in a ReferenceError.

It's worth noting that if you try to re-declare a variable declared with let or const, it will throw a SyntaxError, this is different from using var where you can re-declare the variable and it will not throw any error.

```
let x = 1;
let x = 2; // SyntaxError: Identifier 'x' has already been declared
```

In summary, the Temporal Dead Zone is the period of time before a variable declared with let or const is initialized, trying to access the variable during this period will result in a ReferenceError.

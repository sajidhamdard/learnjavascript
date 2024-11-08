# Hoisting

In JavaScript, "hoisting" refers to the behavior of variable and function declarations being moved to the top of their scope. This means that a variable or function can be used before it is declared in the code. However, it is important to note that only the declarations themselves are hoisted, not the assignments. So, if a variable is assigned a value before it is declared, the value will be undefined when accessed before the assignment.

Here is an example of hoisting in JavaScript:

```
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

In this example, the declaration of the variable "x" is hoisted to the top of the scope, so the first console.log statement can access it, even though it is not assigned a value until later in the code. The second console.log statement then outputs the assigned value of 5.

It's important to remember that only the declarations are hoisted, not the assignment. If you try to access the value of a variable before the assignment, it will return undefined, even if the variable was declared before the point of reference.

```
console.log(x); // ReferenceError: x is not defined
let x;
```

In this example, the variable x was declared with let keyword but it is not assigned a value yet, so trying to access it will throw a ReferenceError.

Also, function declarations are hoisted as well, so a function can be called before it is defined in the code.

```
foo(); // "I am a hoisted function"
function foo(){
    console.log("I am a hoisted function")
}
```

In this example, the function foo is hoisted to the top of the scope, so it can be called before it is defined in the code.

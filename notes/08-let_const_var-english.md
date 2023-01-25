# ==========let==========

We use "let" variables in JavaScript to declare variables that are only accessible within the specific block of code or function where they are defined. This helps to prevent accidental conflicts with other variables that may have the same name, and makes the code easier to read and understand.

The scope of a let variable is block scope. It can be updated but cannot be re-declared into the scope.
It can be declared without initialization. It cannot be accessed without initialization otherwise it will give ‘referenceError’.
Hoisting is done , but not initialized (this is the reason for error when we access the
let variable before declaration/initialization

- for example

```
let x = 10;
x = 20;
console.log(x);

```

- SyntaxError: 'x' has already been declared

# ==========const==========

The scope of a const variable is block scope. It cannot be updated or re-declared into the scope.
It cannot be declared without initialization. It cannot be accessed without initialization, as it cannot be declared without initialization.
Hoisting is done, but not initialized (this is the reason for error when we access the const variable before declaration/initialization

- for example

```
const x = 10;
x = 20;
```

- console.log(); //typeErroe:this will also give an error

# ==========var==========

The scope of a var variable is functional scope. It can be updated and re-declared into the scope.
It can be declared without initialization. It can be accessed without initialization as its default value is “undefined”.
hoisting done , with initializing as ‘default’ value.

- for example

```
var val = 300;
```

- console.log(val); //allowed and value will be undefined here

### What is  Short Circuiting ?

Short circuiting in JavaScript is a behavior where the second operand of a logical expression is not evaluated if the first operand is sufficient to determine the result of the entire expression.

For example, consider the following code:

```javascript
const x = 10;
const y = null;

if (x > 5 && y) {
    console.log("Both conditions are true.");
} else {
    console.log("At least one condition is false.");
}
```

In this code, the `&&` operator is used for the logical expression `x > 5 && y`. Since `x > 5` evaluates to true, the second operand `y` is not evaluated, because the result of the entire expression can be determined as true based on the value of `x > 5` alone. This is an example of short circuiting. Therefore, the output of the above code will be "At least one condition is false."


### What is Use of || in short cicuiting ?

In JavaScript, the double vertical bar symbol "||" is used for short-circuiting in logical expressions. 

When used with two operands (e.g., A || B), it returns the first truthy value encountered or the last falsy value if no truthy value is found.

For example:

```javascript
let a = null;
let b = 5;
let c = "Hello";

console.log(a || b); // Output: 5
console.log(b || c); // Output: 5
console.log(c || b); // Output: "Hello"
console.log(a || b || c); // Output: 5
console.log(a || c || b); // Output: "Hello"
```

In the above example, the || operator returns the first truthy value encountered. So, in the first expression, it returns "5" as "null" is falsy and "5" is truthy. Similarly, in the second expression, it returns "5" as "5" is truthy. In the rest of the expressions, it returns the first truthy value encountered, which is "Hello" in the third expression and "5" in the fourth and fifth expressions.


### How to Replace short circuit || with ternary operator ?

To replace a short circuit `||` with a ternary operator in JavaScript, you can use the following syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Here's an example of how to replace a short circuit `||` with a ternary operator:

```javascript
// Using short circuit ||
const name = username || "Guest";

// Using ternary operator
const name = username ? username : "Guest";
```

In the above example, if `username` is truthy, then `name` will be assigned the value of `username`. Otherwise, it will be assigned the string `"Guest"`. The ternary operator achieves the same result as the short circuit `||`, but it explicitly shows the conditions and values for each case.


### Using || short cicuit with non nullish values?

In JavaScript, the double vertical bar (||) operator can be used for short-circuit evaluation. When two non-nullish values are evaluated with the || operator, the first truthy value is returned.

For example, consider the following code:

```javascript
const num = 0;
const defaultValue = 42;

const result = num || defaultValue;

console.log(result); // Output: 42
```

In this example, `num` has a value of 0, which is a falsy value in JavaScript. However, since `defaultValue` is a non-nullish value, the expression `num || defaultValue` evaluates to `defaultValue`, which is assigned to `result`.

Another example could be:

```javascript
const name = "Alice";
const username = "alice123";

const displayName = name || username;

console.log(displayName); // Output: "Alice"
```

Here, `name` has a truthy value, so the expression `name || username` evaluates to `name`, and `"Alice"` is assigned to `displayName`.


### How to Use of && short circuit ?

In JavaScript, the `&&` operator performs a logical AND operation on two boolean values or expressions. It returns `true` if both operands are true, and otherwise it returns `false`.

One of the benefits of using `&&` is that it short-circuits evaluation when the first operand is false. This means that if the first operand evaluates to false, the second operand is not evaluated at all. This can be useful for optimizing code and preventing unnecessary evaluations.

Here's an example:

```javascript
let x = 5;
if (x > 0 && x < 10) {
  console.log("x is between 0 and 10");
}
```

In this example, the `&&` operator checks whether `x` is greater than 0 and less than 10. Since `x` is equal to 5, both conditions are true, and the message "x is between 0 and 10" is logged to the console.

Now let's consider another example:

```javascript
let y = null;
if (y && y.length > 0) {
  console.log("y is not empty");
}
```

In this case, the `&&` operator checks whether `y` is truthy (i.e., not null, undefined, false, 0, "", or NaN) and whether its length property is greater than 0. However, since `y` is null and therefore falsy, the second condition is not evaluated at all. As a result, nothing is logged to the console.


### How to call a function using && in short circuit ?

In JavaScript, the `&&` operator can be used for short-circuit evaluation. When used with a function, the expression will evaluate to the value of the first operand if it is falsy (i.e., `false`, `0`, `null`, `undefined`, `NaN`, or an empty string), otherwise it will evaluate to the value of the second operand, which in this case is the function call.

Here is an example:

```javascript
function foo() {
  console.log("foo");
  return true;
}

function bar() {
  console.log("bar");
  return false;
}

// Using && to call foo() only if bar() returns true
bar() && foo(); // Output: "bar"

// Since bar() returns false, foo() is not called
// and the overall expression evaluates to false
```

In the above example, `bar()` returns `false`, so the expression `bar() && foo()` evaluates to `false`. Because of short-circuit evaluation, `foo()` is not called at all, so nothing is output to the console. If `bar()` had returned `true`, then `foo()` would have been called and `"foo"` would have been output to the console.


### What is  The Nullish Coalescing Operator ??

The Nullish Coalescing Operator (??) is a JavaScript operator that returns its right-hand side operand when its left-hand side operand is null or undefined; otherwise, it returns its left-hand side operand.

Here's an example:

let foo = null;
let bar = foo ?? "default value";

console.log(bar); // Output: "default value"

In the above code, the variable 'foo' is assigned to null, so the expression foo ?? "default value" evaluates to "default value" because the left-hand side operand ('foo') is null. If the value of 'foo' had been defined (i.e., not null), the expression would have evaluated to the value of 'foo'. 

The Nullish Coalescing Operator can also be used in combination with optional chaining operator (?.) to provide a default value for a nested property that may not exist. Here's an example:

const obj = {
  prop1: {
    prop2: null
  }
};

const val = obj.prop1.prop2 ?? "default value";

console.log(val); // Output: "null"

In the above code, the value of obj.prop1.prop2 is null, so the expression obj.prop1.prop2 ?? "default value" evaluates to null. If obj.prop1.prop2 had not been defined, the expression would have evaluated to the default value ("default value").


### What is Logical Assignment Operators ||= &&= ??= ?
Logical Assignment Operators in JavaScript are shorthand operators that combine logical operators with assignment operators. They allow you to perform a logical operation and re-assign the result back to the variable in a single line of code.

The three Logical Assignment Operators are:

1. `||=` (OR operator followed by assignment operator): It assigns a value to a variable only if the variable is falsy (i.e., null, undefined, 0, '', false, NaN). If the variable is truthy, it retains its original value.
Example:
```
let x = null;
x ||= "New Value";
console.log(x); // Output: "New Value"
```

2. `&&=` (AND operator followed by assignment operator): It assigns a value to a variable only if the variable is truthy. If the variable is falsy, it retains its original value.
Example:
```
let y = "Hello World";
y &&= "New Value";
console.log(y); // Output: "New Value"
```

3. `??=` (Nullish coalescing operator followed by assignment operator): It assigns a value to a variable if the variable is either null or undefined. Otherwise, it retains its original value.
Example:
```
let z = null;
z ??= "New Value";
console.log(z); // Output: "New Value"
```

Note: Logical Assignment Operators were introduced in ECMAScript 2021 (ES12) and may not be supported in all browsers yet.

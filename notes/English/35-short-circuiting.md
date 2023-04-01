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

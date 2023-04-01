# Conditional statements

A conditional statement in JavaScript allows you to execute different code based on whether a certain condition is true or false. This is useful for controlling the flow of your program and making decisions.

- Here is an example of a simple conditional statement in JavaScript:

```javascript
let x = 5;
if (x > 0) {
  console.log("x is positive");
}
```

In this example, the if statement checks whether the value of x is greater than 0. If it is, the code inside the curly braces (console.log("x is positive");) is executed. If x is not greater than 0, the code inside the if statement is skipped.

You can also use else statements to specify what code should be executed if the condition is not true.

```javascript
let x = 5;
if (x > 0) {
  console.log("x is positive");
} else {
  console.log("x is not positive");
}
```

In this example, if x is greater than 0, the first console.log statement is executed. Otherwise, the second console.log statement is executed.

For a conditional statement if block is mandatory, without if block we can not
write else if or else block. It means else if and else block are not mandatory.

The else if statement in JavaScript allows you to specify multiple conditions and execute different code based on which condition is true. This is useful for creating more complex decision-making logic in your code.

- Here is an example of using else if in JavaScript:

```javascript
let x = 5;
if (x > 10) {
  console.log("x is greater than 10");
} else if (x > 0) {
  console.log("x is greater than 0 but less than or equal to 10");
} else {
  console.log("x is less than or equal to 0");
}
```

In this example, the first if statement checks whether x is greater than 10. If it is, the code inside the first set of curly braces (console.log("x is greater than 10");) is executed. If x is not greater than 10, the program moves on to the next else if statement, which checks whether x is greater than 0. If it is, the code inside the second set of curly braces (console.log("x is greater than 0 but less than or equal to 10");) is executed. If x is not greater than 0, the code inside the else statement (console.log("x is less than or equal to 0");) is executed.

In this way else if statement is useful for creating complex decision-making logic and testing multiple conditions in a more organized and efficient way.

- Grouping multiple conditions using logical operator && and || :

In JavaScript, the logical operators && and || can be used to group multiple conditions together and evaluate them as a single Boolean expression.

The && operator (logical AND) returns true only if both conditions are true. If either condition is false, the expression will evaluate to false. For example:

```javascript
if (x > 0 && x < 10) {
  console.log('x is between 0 and 10');
}
```

The || operator (logical OR) returns true if at least one of the conditions is true. If both conditions are false, the expression will evaluate to false. For example:

```javascript
if (x < 0 || x > 10) {
  console.log('x is not between 0 and 10');
}
```

It's worth noting that the logical operators && and || are short-circuit operators, which means that the second operand is only evaluated if the first one does not determine the outcome of the expression.
For example, in the case of x > 0 && x < 10, if x is greater than 0, the second operand will be evaluated, otherwise the expression returns false without evaluating the second operand.

In summary, logical operators && and || in JavaScript can be used to group multiple conditions together and evaluate them as a single Boolean expression, where && returns true if both conditions are true, and ||returns true if at least one of the conditions is true.

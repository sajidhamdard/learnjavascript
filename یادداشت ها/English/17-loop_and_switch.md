# loop and switch

### What is loop ?

A loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code. There are several types of loops in JavaScript, including:

### What is for loop ?

The for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specific number of times. The basic syntax of a for loop is as follows

allows you to iterate over a specific number of times or over an array or other iterable object.
For example:

Syntax:

```
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```

The initialization is executed once at the beginning of the loop and is typically used to initialize a counter variable.

The condition is evaluated on each iteration of the loop, and if it is true, the code block within the loop will be executed. Once the condition is false, the loop will exit.

The increment/decrement is executed after each iteration of the loop, and is typically used to update the counter variable

```

for (var i = 0; i < 10; i++) {
console.log(i);
}

```

### What is for...of loop ?

The for...of loop in JavaScript is a control flow statement that allows you to iterate over the items of an array, string, or other iterable objects. The basic syntax of a for...of loop is as follows

allows you to iterate over the items of an array, string, or other iterable objects.

Syntax:

```
for (variable of iterable) {
  // code to be executed
}
```

For example:

```

let array = [1, 2, 3, 4, 5];
for (const item of array) {
console.log(item);
}

```

### What is for...in loop ?

The for...in loop in JavaScript is a control flow statement that allows you to iterate over the properties of an object. The basic syntax of a for...in loop is as follows:

allows you to iterate over the properties of an object.
Syntax:

```
for (variable in object) {
  // code to be executed
}
```

For example:

```

let obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
console.log(`key: ${key} , value: ${obj[key]}`);
}

```

### What is while loop ?

A while loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code as long as a specified condition is true. The basic syntax of a while loop is as follows:

while loop allows you to iterate until a certain condition is met.

Syntax:

```
while (condition) {
  // code to be executed
}
```

For example:

```

let i = 0;
while (i < 10) {
console.log(i);
i++;
}

```

### What is do...while loop ?

A do...while loop in JavaScript is a control flow statement that is similar to a while loop, but it guarantees that the code inside the loop will be executed at least once. The basic syntax of a do...while loop is as follows

Syntax:

```
do {
  // code to be executed
} while (condition);
```

For example:

```

let i = 0;
do {
console.log(i);
i++;
} while (i < 10);

```

# Switch Statment

### What is Switch Statment ?

A switch statement in JavaScript is a control flow statement that allows you to test a variable or expression against multiple cases, and execute different code for each case that matches. The basic syntax of a switch statement is as follows:

Syntax:

```
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  ...
  default:
    // code to be executed if expression does not match any of the cases
}
```

Here is an example of a switch statement that checks the value of a variable called day and outputs a message depending on the day:

```
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  case "Thursday":
    console.log("Today is Thursday.");
    break;
  case "Friday":
    console.log("Today is Friday.");
    break;
  default:
    console.log("Today is a weekend day.");
}
```

In this example, if the value of day is "Monday", the output will be "Today is Monday.".

It is important to include the break statement after each case block to prevent the code from falling through to the next case. Also, it's important to include a default case block to handle cases where the expression does not match any of the cases.

switch statement is a convenient way to write large if-else chains, but it's not the best option for certain types of comparisons such as comparing against ranges of values or using non-primitive values as cases.

### What is case clause in JavaScript ?

A case clause in a JavaScript switch statement defines a specific branch of execution to be taken if the expression of the switch statement matches the value of the case clause. The code within the case block will be executed if the expression matches the value of the case.

Here is an example:

```
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  case value3:
    // code to be executed if expression === value3
    break;
  default:
    // code to be executed if expression is not matched with any case
}
```

In this example, if the expression of the switch statement is equal to the value1, code inside the case value1 block will be executed. If the value of the expression is equal to value2, the code inside the case value2 block will be executed

For example:

```
let grade = 'B';

switch (grade) {
  case 'A':
    console.log("Excellent");
    break;
  case 'B':
    console.log("Good");
    break;
  case 'C':
    console.log("Average");
    break;
  default:
    console.log("Invalid grade");
}
```

In this example, the switch statement is checking the value of the grade variable. If the value of grade is 'B', the code inside the case 'B' block will be executed and it will print "Good" in the console. If the value of grade is not matched with any case values, it will execute the code in the default block and it will print "Invalid grade" in the console.

### What is break ?

In JavaScript, the break statement is used to break out of a loop or a switch statement. When the break statement is encountered within a loop or switch statement, it immediately exits the current iteration or case block, and the flow of control jumps to the next statement following the loop or switch
For example:

```
let grade = 'B';

switch (grade) {
  case 'A':
    console.log("Excellent");
    break;
  case 'B':
    console.log("Good");
    break;
  case 'C':
    console.log("Average");
    break;
  default:
    console.log("Invalid grade");
}
```

In this example, when the value of grade is 'B' the code inside the case 'B' block will be executed and it will print "Good" in the console. The break statement is encountered after the console.log and it stop the execution of the remaining cases, if any, and the flow of control jumps to the next statement following the switch.

It's important to note that if the break statement is not used, the code in the next case block will also be executed which can cause unexpected results.

### What is default case in a Switch Statement ?

In JavaScript, the default case in a switch statement is used as a catch-all case that will be executed if none of the other cases match the value of the expression.

The basic syntax for a default case looks like this:

Syntex:

```
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression is not matched with any case
}

```

For example:

```
let grade = 'D';

switch (grade) {
  case 'A':
    console.log("Excellent");
    break;
  case 'B':
    console.log("Good");
    break;
  case 'C':
    console.log("Average");
    break;
  default:
    console.log("Invalid grade");
}
```

In this example, when the value of grade is 'D' which not matched with any of the case values. The code inside the default block will be executed and it will print "Invalid grade" in the console.

It's important to note that the default case is optional and if it is not provided, the switch statement will not execute any code if none of the cases match the value of the expression.

Also, it is not necessary to use break statement in the default case. Because, if none of the cases matched the expression, it will not continue to execute the remaining cases.

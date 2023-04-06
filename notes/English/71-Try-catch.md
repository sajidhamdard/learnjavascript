### Error Handling with Try catch in javascript
In JavaScript, you can use a try-catch statement to handle errors in your code. 

The basic syntax for a try-catch statement is:

```
try {
  // Your code here
} catch (error) {
  // Handle the error here
}
```

Here's how it works:

1. The code inside the `try` block is executed.
2. If an error occurs, JavaScript immediately jumps to the `catch` block.
3. The error object is passed to the `catch` block as a parameter. You can then use this object to handle the error, log it to the console, or display a user-friendly message to the user.
4. After the `catch` block is finished, the program continues to execute normally.

For example, let's say you have a function that divides two numbers:

```
function divide(a, b) {
  return a / b;
}
```

If you call this function with `divide(10, 0)` (which would result in a division by zero error), you could use a try-catch statement to handle the error and return a user-friendly message instead:

```
function divide(a, b) {
  try {
    return a / b;
  } catch (error) {
    console.log("An error occurred: " + error.message);
    return "Cannot divide by zero";
  }
}

console.log(divide(10, 0)); // Outputs: "An error occurred: Division by zero" and "Cannot divide by zero"
```


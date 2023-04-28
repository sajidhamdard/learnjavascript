### What is Chaining methods and how to do it for custom functions

Chaining methods is a technique in JavaScript that allows you to call multiple functions on the same object in a single line of code. This can make your code more concise and easier to read.

To use chaining methods with custom functions in JavaScript, you need to ensure that each function returns the object it was called on (usually using the `return this;` statement at the end of the function). This allows you to chain additional functions onto the end of the initial function call.

Let's take an example of a custom function that manipulates an array of numbers:

```javascript
function NumberArray(numbers) {
  this.numbers = numbers;

  this.add = function (num) {
    this.numbers.push(num);
    return this;
  };

  this.subtract = function (num) {
    for (let i = 0; i < this.numbers.length; i++) {
      this.numbers[i] -= num;
    }
    return this;
  };

  this.multiply = function (num) {
    for (let i = 0; i < this.numbers.length; i++) {
      this.numbers[i] *= num;
    }
    return this;
  };

  this.divide = function (num) {
    for (let i = 0; i < this.numbers.length; i++) {
      this.numbers[i] /= num;
    }
    return this;
  };
}
```

Here, we have created a custom `NumberArray` object that contains an array of numbers and four functions: `add`, `subtract`, `multiply`, and `divide`. Each function modifies the array of numbers and returns the object itself (`this`) so that you can chain additional function calls onto it.

Now, we can create a new `NumberArray` object and chain together some function calls like this:

```javascript
const myNumbers = new NumberArray([1, 2, 3]);

myNumbers.add(4).subtract(1).multiply(2).divide(3);

console.log(myNumbers.numbers); // Output: [2, 4, 6]
```

In this code, we create a new `NumberArray` object with the numbers `[1, 2, 3]`. Then, we chain together four function calls to add `4`, subtract `1`, multiply by `2`, and divide by `3`. Finally, we log the resulting array of numbers (`[2, 4, 6]`) to the console.

So, chaining methods in JavaScript allows you to call multiple functions on the same object in a single line of code, which can make your code more concise and easier to read.

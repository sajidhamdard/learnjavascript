
### What is Chaining methods and how to do it for custom functions?

Chaining methods in JavaScript is a technique where multiple methods are called on the same object in sequence, with each method returning the object itself, allowing for a fluent syntax. 

To create custom functions that can be chained together, you need to modify the function so that it returns the object itself at the end of the function definition, like so:

```
function myFunction(param) {
  // do something with param
  return this;
}
```

By returning `this` (which refers to the object the function is called on), you allow the next function in the chain to be called on the same object. Here's an example:

```
const myObject = {
  value: 0,
  increment() {
    this.value++;
    return this;
  },
  multiply(n) {
    this.value *= n;
    return this;
  }
}

myObject.increment().multiply(3);
console.log(myObject.value); // Output: 3
```

In this example, the `increment()` and `multiply()` methods both return `this`, enabling them to be chained together in a single statement.

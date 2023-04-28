## Returning values from Async functions in javascript
Async functions in JavaScript use the `async/await` syntax to allow for asynchronous behavior. When an async function is called and awaited, it returns a promise that will eventually resolve with a value. The value can be returned using the `return` keyword inside the async function, and it will be wrapped in a resolved promise when the function is completed.

If an error is thrown inside the async function, the promise returned by the function will be rejected with the thrown error as the reason.

Async functions in JavaScript use the `async` and `await` keywords to handle asynchronous operations. They always return a Promise, which can be resolved with any value.

Here is an example of an Async function that returns a Promise with a string value:

```javascript
async function greet(name) {
  return "Hello, " + name + "!";
}

// calling the async function
greet("John").then(result => console.log(result));
// Output: "Hello, John!"
```

In the example above, the `greet` function takes a `name` parameter and returns a Promise that resolves to a string value. We call this function and use the `then` method to log the result to the console.

We can also use the `await` keyword to get the resolved value directly from an async function:

```javascript
async function getName() {
  return "John";
}

async function greet() {
  const name = await getName();
  return "Hello, " + name + "!";
}

// calling the async function
greet().then(result => console.log(result));
// Output: "Hello, John!"
```

In this example, the `getName` function returns a Promise that resolves to the string "John". We then call the `greet` function, which uses the `await` keyword to wait for the resolved value of `getName()` before concatenating it with the greeting string.


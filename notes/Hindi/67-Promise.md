### What is Promise ?

In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and allows you to write code that can handle the result of that operation once it's complete.

A Promise can be in one of three states:

- Pending: The initial state, representing the fact that the operation is still ongoing and the result is not yet available.
- Fulfilled: The operation has completed successfully, and the result is available.
- Rejected: The operation has failed, and an error has occurred.

Once a Promise is fulfilled or rejected, it cannot change its state again.

To create a Promise in JavaScript, you can use the Promise constructor, which takes a function that defines the asynchronous operation. This function takes two parameters: resolve and reject, which are functions that you can call to either fulfill or reject the Promise.

Here's an example of creating a Promise that represents an asynchronous operation that resolves after a set amount of time:

```javascript
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

delay(1000)
  .then(() => console.log('Operation complete!'))
  .catch((error) => console.error(error));
```

In this example, the delay function returns a new Promise that resolves after a specified number of milliseconds (in this case, 1000ms, or 1 second). We then use the then method to specify what should happen when the Promise is fulfilled (in this case, we simply log a message to the console), and the catch method to specify what should happen if the Promise is rejected (in this case, we log the error message to the console).

Promises are a powerful tool in JavaScript for handling asynchronous operations, and they provide a way to write cleaner, more readable code that is easier to reason about. They are widely used in modern web development, particularly when making HTTP requests or working with other external APIs or services.

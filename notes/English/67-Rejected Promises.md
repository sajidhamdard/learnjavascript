### Handling Rejected Promises

In JavaScript, you can handle rejected promises using the catch() method or the second argument to the then() method. Here is an example:

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation that will throw an error
  setTimeout(() => {
    const error = new Error('Something went wrong');
    reject(error);
  }, 1000);
});

promise.catch((error) => {
  console.error(error);
  // Handle the error here
});
```

In this example, we create a new promise that represents an asynchronous operation which will reject after one second. Inside the promise constructor, we define the asynchronous operation using a setTimeout function, and then call the reject() method to reject the promise with an error.

We then use the catch() method to specify what should happen when the promise is rejected, passing in a callback function that takes the error returned by the promise as an argument. In this case, we simply log the error to the console.

You can also handle rejected promises using the second argument to the then() method:

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation that will throw an error
  setTimeout(() => {
    const error = new Error('Something went wrong');
    reject(error);
  }, 1000);
});

promise.then(
  (result) => {
    // Handle the result here
  },
  (error) => {
    console.error(error);
    // Handle the error here
  }
);
```

In this example, we pass two callback functions to the then() method: one to handle the case where the promise is fulfilled, and another to handle the case where the promise is rejected. The second argument to the then() method is the rejection handler, which takes the error returned by the promise as an argument.

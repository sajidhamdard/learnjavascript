### Consuming Promises

In JavaScript, you can consume a Promise using the then method, which takes two callbacks as arguments: one to handle the case where the Promise is fulfilled, and another to handle the case where the Promise is rejected.

Here's an example of how to consume a Promise in JavaScript using the then method:
```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const data = { message: 'Promise resolved!' };
    resolve(data);
  }, 1000);
});

promise
  .then(data => console.log(data.message))
  .catch(error => console.error(error));
```

In this example, we create a new Promise that represents an asynchronous operation that will resolve after 1 second. Inside the Promise constructor, we define the asynchronous operation using a setTimeout function, and then call the resolve method to fulfill the Promise with some data (in this case, an object with a message property).

We then use the then method to specify what should happen when the Promise is fulfilled, passing in a callback function that takes the data returned by the Promise as an argument. In this case, we simply log the message property of the data object to the console.

If the Promise is rejected (for example, if an error occurs during the asynchronous operation), the catch method will be called, passing in the error as an argument.

Here's an example of how to handle errors using the catch method:

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation that throws an error
  setTimeout(() => {
    const error = new Error('Promise rejected!');
    reject(error);
  }, 1000);
});

promise
  .then(data => console.log(data.message))
  .catch(error => console.error(error.message));
```

In this example, we create a new Promise that represents an asynchronous operation that will reject after 1 second. Inside the Promise constructor, we define the asynchronous operation using a setTimeout function, and then call the reject method to reject the Promise with an error.

We then use the catch method to specify what should happen when the Promise is rejected, passing in a callback function that takes the error returned by the Promise as an argument. In this case, we simply log the error message to the console.

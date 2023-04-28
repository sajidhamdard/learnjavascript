### what is Consuming Promises

Consuming Promises in JavaScript refers to the process of handling the resolved or rejected values returned by a Promise object. When a Promise is created, it can either resolve successfully with a value or fail with an error. To consume these values, we use the then() and catch() methods.

The .then() method takes two optional callback functions as arguments - one for handling the resolved value and another for handling errors. For example:

```
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

In this example, we use the fetch API to make a request to a JSON placeholder API endpoint. The first .then() method converts the response into a JSON object. The second .then() method logs the data to the console. If there is an error, the .catch() method logs the error to the console.

If we want to handle both success and failure cases in a single callback function, we can use the .finally() method, which is called regardless of whether the promise was resolved or rejected. For example:

```
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Request completed'))
```

In this example, the .finally() method logs a message indicating that the request has completed, regardless of whether it succeeded or failed.

To summarize, consuming promises in JavaScript involves using the then(), catch(), and finally() methods to handle the resolved or rejected values returned by a Promise object.

### what is Consuming Promises in javascript
Consuming promises in JavaScript refers to using the result of a promise, which is an object that represents a value that may not be available yet. This is typically done by calling the `then()` method on a promise object, which takes one or two callback functions as arguments.

The first callback function is called if the promise is resolved successfully, and it receives the resolved value as its argument. The second callback function is called if the promise is rejected with an error, and it receives the error object as its argument.

By consuming promises, you can work with asynchronous code in a more readable and manageable way, and avoid issues such as callback hell and race conditions.

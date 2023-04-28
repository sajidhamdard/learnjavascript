### Consuming Promise with Async/Await in javascript
Async/await is a syntax for consuming promises in JavaScript. Async functions return a promise that resolves with the value returned by the function, or rejects with an error thrown from the function. Await can be used to wait for the resolution of a promise before continuing execution of the function.

Here's an example:

```javascript
async function myFunction() {
  try {
    const result1 = await promise1();
    const result2 = await promise2(result1);
    return result2;
  } catch (error) {
    console.error(error);
  }
}

myFunction()
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

In this example, `myFunction` is an async function that uses `await` to wait for the resolution of `promise1`, and then uses the result of `promise1` as an input to `promise2`. The `try`/`catch` block is used to handle any errors that may occur during the execution of the promises.

To call `myFunction`, we use `myFunction().then()` to log the result to the console if the promise is resolved successfully, and `.catch()` to log any errors that may occur during the execution.

### what is Returning values from Async functions

Async functions in JavaScript are special functions that allow asynchronous programming, which means the code within these functions can execute independently of the main program flow. One important feature of async functions is their ability to return values.

When an async function returns a value, it does so by wrapping the value in a Promise object. This Promise is returned immediately when the function is called, but its final value may not be available until some time later when the async operation completes.

Here's an example of how to define and call an async function that returns a value:

```
async function fetchData() {
  const response = await fetch('https://example.com/data.json');
  const data = await response.json();
  return data;
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

In this example, the `fetchData` function uses the `await` keyword to wait for the result of a network request before returning the value of `data`. When you call `fetchData`, it returns a Promise object that will eventually resolve to the actual value of `data`.

To get the final value of `data`, you can use the `then` method on the returned Promise, passing in a callback function that will be executed with the resolved value. You can also handle any errors that occur during the execution of the function by using the `catch` method.

Overall, async functions provide a powerful way to write asynchronous code in a more synchronous style, while still allowing you to work with Promises and handle errors effectively.

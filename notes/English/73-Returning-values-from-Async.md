## what is Returning values from Async functions in javascript
Async functions in JavaScript use the `async/await` syntax to allow for asynchronous behavior. When an async function is called and awaited, it returns a promise that will eventually resolve with a value. The value can be returned using the `return` keyword inside the async function, and it will be wrapped in a resolved promise when the function is completed.

If an error is thrown inside the async function, the promise returned by the function will be rejected with the thrown error as the reason.

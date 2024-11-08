### Top-Level await (ES2022)

Top-level await is a new feature in JavaScript that allows you to use the `await` keyword outside of an asynchronous function at the top level of your code. This means that you can directly use `await` when importing modules or loading data from external APIs without having to wrap them inside an immediately invoked async function expression (IIFE) or inside an async function.

Before top-level await, you had to use workarounds like IIFEs or async functions to await module imports or API requests, which made the code more verbose and harder to read. With top-level await, you can simplify your code and make it more elegant.

However, top-level await is only available in modules or scripts with the `"module"` type. If you're using CommonJS modules (`require()`), you still need to use IIFEs or async functions to await module imports.

Example:

```javascript
// Await an asynchronous operation at the top level
const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await result.json();

console.log(data);
```
In this example, we use the await keyword at the top level of the module to fetch some data from an API and parse it as JSON. In previous versions of JavaScript, we would have had to wrap this code in an IIFE with an async function to achieve the same result.

Top-level await can be useful for simplifying your code and reducing boilerplate when working with asynchronous operations at the top level of a module. However, it's important to note that top-level await can only be used in modules, not in scripts, and it may have some performance implications if not used correctly.

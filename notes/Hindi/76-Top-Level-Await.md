### what is Top-Level await (ES2022)

Top-level await is a new feature that was introduced in ECMAScript 2022 (ES2022) which allows you to use the `await` keyword at the top level of your code, outside of an `async` function. This means that you can now use asynchronous code in the global scope without having to wrap it inside an IIFE or other workarounds.

For example, suppose you have an API call that you want to make at the start of your script:

```javascript
const response = await fetch("https://api.example.com/data");
const data = await response.json();
console.log(data);
```

Before top-level await, this code would have resulted in a syntax error because you cannot use the `await` keyword outside of an `async` function. To work around this, you would have had to wrap this code inside an IIFE or a function:

```javascript
(async function () {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
})();
```

With top-level await, you can simply use `await` at the top level:

```javascript
const response = await fetch("https://api.example.com/data");
const data = await response.json();
console.log(data);
```

Note that for top-level await to work, you need to be using a module script (`<script type="module">`) or have enabled the `"module"` option in your `package.json` file. This is because top-level await is only allowed in modules, not in traditional scripts.

### what is Modules

Modules in JavaScript are a way to organize code into reusable, independent components. Each module can have its own state, functions, and variables that are not accessible from other modules unless explicitly exported.

For example, let's say you have two files: "math.js" and "main.js". In "math.js", you define some mathematical functions like add() and multiply(), and then export them using the keyword "export":

```
// math.js

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

export { add, multiply };
```

In "main.js", you can import these functions using the keyword "import":

```
// main.js

import { add, multiply } from './math.js';

console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6
```

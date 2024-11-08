### what is Exporting and importing in ES6 Modules

ES6 modules are a way to organize and share code in JavaScript. Exporting and importing are the two main features of ES6 modules that allow you to share code between different files.

Exporting is the process of making variables, functions or objects available to other modules. To export a variable, function or object from a module, you can use the "export" keyword followed by the name of the variable, function or object.

For example, let's say we have a module named "utils.js" which contains a function named "addNumbers". We can export this function using the following syntax:

```js
// utils.js

export function addNumbers(a, b) {
  return a + b;
}
```

Now, we can import this function in another module using the "import" keyword.

Importing is the process of loading variables, functions or objects from another module into your own module. To import a variable, function or object from a module, you can use the "import" keyword followed by the name of the variable, function or object.

For example, let's say we have another module named "main.js" which wants to use the "addNumbers" function from the "utils.js" module. We can import this function using the following syntax:

```js
// main.js

import { addNumbers } from "./utils.js";

console.log(addNumbers(2, 3)); // Output: 5
```

In the above example, we're importing the "addNumbers" function from the "utils.js" module using curly braces {}. We also provide the path to the module we want to import from using the "./" notation.

Overall, exporting and importing in ES6 modules makes it easier to organize and share code across different files in your application.

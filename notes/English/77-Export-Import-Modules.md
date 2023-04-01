### Exporting and importing in ES6 Modules 

In ES6 modules, exporting is the process of exposing functions, variables, or classes from a module to make them available for use in other modules. This is done by using the "export" keyword before the declaration of the item to be exported.

Importing is the process of bringing in functions, variables, or classes from another module into the current module. This is done by using the "import" keyword followed by the name of the module and the specific items to be imported enclosed in curly braces {}. 

For example, to export a function called "add" from a module named "math.js", we would write:

```
// math.js
export function add(x, y) {
  return x + y;
}
```

And to import that function into another module, we would write:

```
// app.js
import { add } from './math.js';

console.log(add(2, 3)); // output: 5
```

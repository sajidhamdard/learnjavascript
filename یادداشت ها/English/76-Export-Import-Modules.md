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

In JavaScript, you can import code from other files or modules using the import statement. There are two types of imports: named imports and default imports.

Named imports allow you to selectively import specific functions or variables from a module. Here's an example of a named import:

```javascript
import { sum, multiply } from './math.js';

console.log(sum(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6
```

In this example, we're importing the sum and multiply functions from the math.js module.

Default imports, on the other hand, allow you to import a single function or object from a module. Here's an example of a default import:

```javascript
import capitalize from './string.js';

console.log(capitalize('hello')); // Output: 'Hello'
```

In this example, we're importing the capitalize function from the string.js module.

Note that if a module only exports a single function or object, that function or object is automatically the default export. In this case, you can import it without using braces:

```javascript
import myFunction from './myModule.js';
```

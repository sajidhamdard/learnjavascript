### Modules in JavaScript 
In JavaScript, modules are a way to organize code into separate files or units of functionality. They allow developers to write reusable code and improve the maintainability and scalability of their applications. There are two main types of modules in JavaScript: 

1. CommonJS modules: This is the module format used in Node.js. It uses the `require()` function to import modules and the `module.exports` object to export them.

2. ES6 modules: This is the module format introduced in ECMAScript 2015, also known as ES6. It uses the `import` statement to import modules and the `export` keyword to export them. ES6 modules can be used both in Node.js and in modern web browsers that support them.

Both CommonJS and ES6 modules can be used to create reusable code libraries and to organize code within a single application.

### Creating custome module

Creating a custom module in JavaScript involves exporting functions, variables, or objects that can be imported and used in other parts of your codebase. Here's an example of how to create a custom module:

1. Create a new file, myModule.js, in your project directory.

2. In myModule.js, define the functions or variables you want to export. For example:

```javascript
export const PI = 3.14;

export function double(num) {
  return num * 2;
}
```

In this example, we're exporting a constant PI and a function double() that doubles a number.

3. To use these exported functions or variables in another file, you can import them using the import statement. For example, create a new file main.js in the same directory as myModule.js and import the PI constant and double() function like this:

```javascript
import { PI, double } from './myModule.js';

console.log(PI); // Output: 3.14
console.log(double(5)); // Output: 10
```

In this example, we're importing the PI constant and double() function from myModule.js and using them in main.js.

4. Note that you can also export a default value from a module, which can be imported without using braces. For example, if myModule.js only exports a single value, you can do:

```javascript
export default function square(num) {
  return num * num;
}
```

And import it like this:

```javascript
import square from './myModule.js';

console.log(square(5)); // Output: 25
```

This imports the default export from myModule.js and assigns it to the variable square.

# Use strict

"use strict" is a directive that can be placed at the beginning of a JavaScript file or a function to indicate that the code should be executed in "strict mode." When in strict mode, JavaScript will enforce a more strict set of rules and throw errors when certain actions are taken that would be allowed in non-strict mode. This can be useful for catching common coding mistakes and ensuring that your code runs as intended.

Some examples of things that will cause errors in strict mode include:

- Using a variable that has not been declared
- Deleting a variable or object property
- Using a variable or object property that has the same name as a reserved word in JavaScript
- Using a reserved word as a variable or function name
- Attempting to change the value of a read-only property
- Octal numeric literals

It is important to note that strict mode only applies to the code within the scope of the "use strict" directive. So, if you have a file that contains both strict and non-strict code, you will need to place the "use strict" directive at the appropriate scope level.

It is also important to note that some older browsers don't support strict mode, so you should consider browser compatibility when using strict mode. To active the strict mode you need to add the "use strict" string expression right at the first line of your code.

```javascript
//Using a variable, without declaring it, is not allowed:
x = 3.14; // This will cause an error

//Below Code witout use strict will work and will not give error
x = 10;
console.log(x); //output will be 10

function x(p1, p1) {
  console.log(p1);
}
```

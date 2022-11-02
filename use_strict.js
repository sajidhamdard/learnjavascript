/**
 * Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
 */
"use strict";

//To active the strict mode you need to add the "use strict" string expression right at the first line of your code.

//Using a variable, without declaring it, is not allowed:
x = 3.14; // This will cause an error

//Below Code witout use strict will work and will not give error
x = 10;
console.log(x); //output will be 10

function x(p1, p1) {
  console.log(p1);
}

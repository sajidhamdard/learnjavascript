/*
Coercion/Implicit Type conversion/Automatic Type conversion :

Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values.

Manual Type Conversion :

In case the behavior of the implicit conversion is not sure, the constructors of a data type can be used to convert any value to that datatype, like the Number(), String() or Boolean() constructor.

*/

//Coercion Example

// The Number 10 is converted to
// string '10' and then '+'
// concatenates both strings
var x = 10 + "20";
var y = "20" + 10;

// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
var z = true + "10";
console.log(x, y, z); //1020 2010 true10

var w = 10 - "5";
var x = 10 * "5";
var y = 10 / "5";
var z = 10 % "5";

console.log(w, x, y, z); //5 50 2 0

// The Boolean value true is
// converted to number 1 and
// then operation is performed
var x = true + 2;

// The Boolean value false is
// converted to number 0 and
// then operation is performed
var y = false + 2;

console.log(x, y); // 3 2

// Should output 'true' as string '10'
// is coerced to number 10
var x = 10 == "10";

// Should output 'true', as boolean true
// is coerced to number 1
var y = true == 1;

// Should output 'false' as string 'true'
// is coerced to NaN which is not equal to
// 1 of Boolean true
var z = true == "true";

console.log(x, y, z); //true true false

//Number to String

let ans = String(10);
console.log(typeof ans); //string

//String to Number

ans = Number("10");
console.log(ans); //number

ans = Number("wecode");
console.log(ans); //NaN

//Number to Boolean

ans = Boolean(10);
console.log(ans); //true

ans = Boolean(0);
console.log(ans); //false

/*Loose equality operator ==
The equality operator (==) checks whether its two operands are equal, returning a Boolean 
result. Unlike the strict equality operator, it attempts to convert and compare operands
that are of different types.

*/

console.log(1 == 1); //true

console.log("hello" == "hello"); //true

console.log("1" == 1); //true

console.log(0 == false); //true

/**
 * Strict Equality Operator ===
 * The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
 */

console.log(1 === 1); //true

console.log("hello" === "hello"); //true

console.log("1" === 1); //false

console.log(0 === false); //false

/*
    => Ternary Operators
        : ? Operator : 
        It is like the short form of the if-else condition. 
        Syntax: 
        Y =  ? A : B 
        where A and B are values and if condition is true then Y = A otherwise Y = B. 
        Example: 
        Y = (6>5) ? 6 : 5
        therefore Y = 6
    => typeof Operator 
        typeof	Returns the type of a variable
        instanceof	Returns true if an object is an instance of an object type */

//Without Ternary operator
let val = 10;
if (val < 20) {
  console.log("Yes");
} else {
  console.log("No");
}

//With Ternary Operator
val < 10 ? console.log("Yes") : console.log("No");

//Typeof operator example

let m = 10;
console.log(typeof m); //number
m = "Wecode";
console.log(typeof m); //string

/*
loose equality operator(==)
yaha do variable ko compair karta hain.pr compair karta time data type strictly check 
nahi karta hain.or jha bhi possibal hota hain vaha omomatic type conversion karke value
compair karta hain.
*/
var x = 20;
var y = "20";
if (x == y) {
  console.log(true);
} else {
  console.log(false);
}

/*

strict equality operator(====)
yaha 2 value ko strictly check karta hain.iska mtlb hain ke value ka sath sath data type
bhi check karta hain.
*/
var x = "20";
var y = 20;
if (x === y) {
  console.log(true);
} else {
  console.log(false);
}

/*
type of operator
yaha data type btata hain.
*/
var x = 10;
console.log(typeof x); //number
x = "Wecode";
console.log(typeof x); //string

/*

ternory operator
yadi if else me single line ka code hain to use ternory operator ke help se karte
hain
*/
let x = 10;
x < 20 ? console.log("yes") : console.log("no");

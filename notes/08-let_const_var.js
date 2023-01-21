let x = 10;

const y = 20;

var z = 30;

//===========var=============
/*
The scope of a var variable is functional scope. It can be updated and re-declared into the scope.
It can be declared without initialization. It can be accessed without initialization as its default value is “undefined”.
hoisting done , with initializing as ‘default’ value.
*/
console.log(val); //allowed and value will be undefined here
var val = 300;
//===========let==============

//The scope of a let variable is block scope. It can be updated but cannot be re-declared into the scope.
//It can be declared without initialization. It cannot be accessed without initialization otherwise it will give ‘referenceError’.
//Hoisting is done , but not initialized (this is the reason for error when we access the let variable before declaration/initialization

//==========const============

//The scope of a const variable is block scope. It cannot be updated or re-declared into the scope.
//It cannot be declared without initialization. It cannot be accessed without initialization, as it cannot be declared without initialization.
//Hoisting is done, but not initialized (this is the reason for error when we access the const variable before declaration/initialization

//==========let==========

//let:iska use variable declertion ka leya kiya jata hai.let variable ko declertion sa phala use nahi kar sktay.let ma value re assign kar sktay hai.let ko redeclere nahi kar sktay.for example:
let x = 10;
x = 20;
console.log(x); //
//SyntaxError: 'x' has already been declared

//==========const==========
//const keyword ka use constand  variable bananay ka leya kiya jata hai hai.const vha variable hota hai jis ki value change nahi kar sktay hai.const variable ko declertion sa phala use nahi kar sktay.

const x = 10;
x = 20;
console.log(); //typeErroe:this will also give an error

//==========var==========
//var variable let variable ki trha hi kam karta hai.lakin var or let ma kuch defrience hai.
//var ko decleration sa phala use kar sktay hai.var ko redecler bhi kar sktay hai.

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
/*
The scope of a let variable is block scope. It can be updated but cannot be re-declared into the scope.
It can be declared without initialization. It cannot be accessed without initialization otherwise it will give ‘referenceError’.
Hoisting is done , but not initialized (this is the reason for error when we access the let variable before declaration/initialization
*/

//==========const============
/*
The scope of a const variable is block scope. It cannot be updated or re-declared into the scope.
It cannot be declared without initialization. It cannot be accessed without initialization, as it cannot be declared without initialization.
Hoisting is done, but not initialized (this is the reason for error when we access the const variable before declaration/initialization
*/

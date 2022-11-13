/**
 * Conditional statements are used to perform different actions based on different conditions.
 *
 *In JavaScript we have the following conditional statements:
    => Use if to specify a block of code to be executed, if a specified condition is true
    => Use else to specify a block of code to be executed, if the same condition is false
    => Use else if to specify a new condition to test, if the first condition is false
 */

let i = 10;
if (i < 20) {
  console.log("Yes");
}

/*For a conditional statement if block is mandatory, without if block we can not 
write else if or else block. It means else if and else block are not mandatory.*/

if (i < 20) {
  console.log("Yes");
} else if (i === 10) {
  console.log("Yes 10");
} else {
  console.log("No");
}

//Grouping multiple conditions using logical operator && and ||

let j = 10;
let k = 20;
if ((j < 20 && k > 10) || j + 10 === 20) {
  console.log(true);
} else {
  console.log(false);
}

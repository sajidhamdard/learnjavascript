### Question 1

Create Bill Calculator

Ask below Questions

1. How many french fries (60rs per piece) do you want to order ?
2. How many burgers (50rs per piece) do you want to order ?
3. How many plates of chowmin (100rs per plate) do you want to order?
4. How many plates of Manchurian (80rs per plate) do you want to order?
5. How many Cokes (50 per piece) do you want to order ?

Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. If user enteres 0 or negative value then consider
item count as 0.

```
// Ask user for input
let frenchFriesCount = parseInt(prompt("How many french fries do you want to order?"));
let burgerCount = parseInt(prompt("How many burgers do you want to order?"));
let chowminCount = parseInt(prompt("How many plates of chowmin do you want to order?"));
let manchurianCount = parseInt(prompt("How many plates of Manchurian do you want to order?"));
let cokeCount = parseInt(prompt("How many Cokes do you want to order?"));

// Check for negative or zero values and set to zero
frenchFriesCount = frenchFriesCount <= 0 ? 0 : frenchFriesCount;
burgerCount = burgerCount <= 0 ? 0 : burgerCount;
chowminCount = chowminCount <= 0 ? 0 : chowminCount;
manchurianCount = manchurianCount <= 0 ? 0 : manchurianCount;
cokeCount = cokeCount <= 0 ? 0 : cokeCount;

// Calculate the bill
const frenchFriesCost = frenchFriesCount * 60;
const burgerCost = burgerCount * 50;
const chowminCost = chowminCount * 100;
const manchurianCost = manchurianCount * 80;
const cokeCost = cokeCount * 50;

const totalCost = frenchFriesCost + burgerCost + chowminCost + manchurianCost + cokeCost;

// Display the total cost
console.log("Total Bill: " + totalCost + " Rs");
```

### Question 2

```
Print below Pattern
$##$##$
$##$##
$##$
$##
$


let output = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    if (j % 2 == 0) {
      output += "#";
    } else {
      output += "$";
    }
  }
  for (let k = i; k < 5; k++) {
    if (k % 2 == 0) {
      output += "#";
    } else {
      output += "$";
    }
  }
  console.log(output);
  output = "";
}

```

### Question 3

Ask the user question "How many times do you want to print Series". Then print below series. For example below series will print if user enteres 5

2, 6, 30, 260, 3130
Find the pattern for above series and print accordingly. If the user enters 10 then we will print the same series numbers till 10 times.

```
let count = parseInt(prompt("How many times do you want to print Series?"));
let num = 2;

for (let i = 1; i <= count; i++) {
  console.log(num);
  num = (num * num) - 1;
}
```

### Question 4

Using a switch case to do this exercise

- If number is odd then print Odd
- If number is even then print Even
- If number is 100 then print 100
- Else print 10000

```
let num = parseInt(prompt("Enter a number:"));

switch (num) {
  case 100:
    console.log(100);
    break;
  default:
    if (num % 2 == 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
    break;
}

if (num != 100 && num % 2 == 1) {
  console.log(10000);
}
```

### Question 5

Ask user his/her birth year, "What is your birth year?"

If user age is greater than 18 then ask user "Do you have valid license number?"
If user click on Okay then ask for his license number and finally in the alert show message "User with license number #### is ready to drive."

If user age is less than 18 then ask him question in confirm box "Do you have gaurdians ?""
If user says yes then ask his/her Gaurdian name and then in alert show "You are ready to drive with your #### (show gaurdian name here.)"
Else show "Sorry visit again please." in alert box

```
let birthYear = parseInt(prompt("What is your birth year?"));
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age > 18) {
  let hasLicense = confirm("Do you have valid license number?");
  if (hasLicense) {
    let licenseNumber = prompt("Enter your license number:");
    alert(`User with license number ${licenseNumber} is ready to drive.`);
  }
} else if (age < 18) {
  let hasGuardian = confirm("Do you have guardians?");
  if (hasGuardian) {
    let guardianName = prompt("Enter your guardian's name:");
    alert(`You are ready to drive with your ${guardianName}.`);
  } else {
    alert("Sorry, visit again please.");
  }
}

```

### Question 6

Take any number and take other number as 19. Now check their difference by subtracting each other. If both numbers difference is greater than 19
then print triple their absolute difference else print double their absolute difference.

```
let num1 = parseInt(prompt("Enter a number:"));
let num2 = 19;

let diff = Math.abs(num1 - num2);

if (diff > 19) {
  console.log(diff * 3);
} else {
  console.log(diff * 2);
}
```

### Question 7

Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

If yes then print sum of both the numbers
Else print multiplication of both numbers

```
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
  console.log("The sum of the two numbers is: ", num1 + num2);
} else {
  console.log("The multiplication of the two numbers is: ", num1 * num2);
}
```

### Question 8

Write a JavaScript program to check if out of 4 numbers any two numbers are same or not. If yes then print Yes else print No.

```
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));
let num4 = parseInt(prompt("Enter the fourth number:"));

if (num1 === num2 || num1 === num3 || num1 === num4 || num2 === num3 || num2 === num4 || num3 === num4) {
  console.log("Yes, there are two numbers that are the same.");
} else {
  console.log("No, there are no two numbers that are the same.");
}

```

### Question 9

Write a program to check if a number is palindrome or not. It means 141 and 12221 both are examples of palindrome number. If number is palindrome then print yes else print no

```
let number = prompt("Enter a number:");
let reversedNumber = "";

for (let i = number.length - 1; i >= 0; i--) {
  reversedNumber += number[i];
}

if (number === reversedNumber) {
  console.log("Yes, the number is a palindrome.");
} else {
  console.log("No, the number is not a palindrome.");
}
```

```
et num = 151;
let rev = 0;
let temp = num;
while (num > 0) {
  let last = num % 10;
  num = parseInt(num / 10);
  rev = rev * 10 + last;
}
if (temp == rev) {
  console.log(temp + "  is palondrome");
} else {
  console.log(temp + " not palondrome");
}
```

### Question 10

Take a String and check its length. If string length is greater than 10 then print from 1 to length of the string. else print No

```
let str = prompt("Enter a string:");
let strLength = str.length;

if (strLength > 10) {
  for (let i = 1; i <= strLength; i++) {
    console.log(i);
  }
} else {
  console.log("No");
}
```

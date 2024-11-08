### Question 1

```javascript
function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
let str = "secodeacademy";
let capitalizedStr = capitalizeFirstChar(str);
console.log(capitalizedStr); // "Secodeacademy"
```

### Question 2

```
function insertString(originalString, stringToInsert, index) {
  return originalString.slice(0, index) + stringToInsert + originalString.slice(index);
}

let originalString = "We are learning exercises.";
let stringToInsert = "JavaScript";
let index = 14;
let newString = insertString(originalString, stringToInsert, index);
console.log(newString); // "We are learning JavaScript exercises."
```

### Question 3

```
function countSubstringOccurrences(str, substr) {
  // Use a regular expression to match all occurrences of the substring
  let regex = new RegExp(substr, "g");
  let matches = str.match(regex);

  // Return the number of matches (or 0 if there are none)
  return matches ? matches.length : 0;
}

let str = "My name is allen academy and my friend name is Arun Kumar.";
let substr = "is";
let count = countSubstringOccurrences(str, substr);
console.log(count); // 2
```

### Question 4

```
// Define maskStart and maskEnd functions
function maskStart(str, num) {
  return str.slice(num).padStart(str.length, '*');
}

function maskEnd(str, num) {
  return str.slice(0, -num).padEnd(str.length, '*');
}

// Ask user for input
let name = prompt("What is your name?");
let mobileNumber = prompt("What is your mobile number?");
let accountNumber = prompt("What is your account number?");
let atmCardNumber = prompt("What is your ATM card number?");
let aadhaarNumber = prompt("What is your Aadhaar number?");

// Mask the input values as required
let maskedMobileNumber = maskEnd(mobileNumber, 3);
let maskedAccountNumber = maskStart(maskEnd(accountNumber, 3), 5);
let maskedAtmCardNumber = maskEnd(atmCardNumber, 8);
let maskedAadhaarNumber = maskStart(maskEnd(aadhaarNumber, 4), 4);

// Log the masked values to the console
console.log("Name:", name);
console.log("Mobile number:", maskedMobileNumber);
console.log("Account number:", maskedAccountNumber);
console.log("Aadhaar number:", maskedAadhaarNumber);
```

### Question 5

```
for (let i = 1; i <= 6; i++) {
  let spaces = ' '.repeat(6 - i);
  let stars = '$'.repeat(2 * i - 1);
  console.log(spaces + stars);
}
```

### Question 6

```
const name = 'Sajid Khan';
const birthYear = 1993;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
const address = 'Jhotwara, Jaipur';
const countryCode = '+91';
const mobileNumber = '9565465654';

console.log(`My name is ${name}. I was born in ${birthYear} and my current age is ${age} years. My address is ${address} and my mobile number is ${countryCode}${mobileNumber}.`);
```

### Question 7

```
let str = "allen Academy";
let midIndex = Math.floor(str.length / 2);
let leftPart = str.slice(0, midIndex);
let rightPart = str.slice(midIndex);

let result = leftPart + "World " + rightPart + "Hello";

console.log(result);
```

### Question 8

```
let word = "Allen Academy";
let index = 3;
let guess = "A";

if (word.charAt(index) === guess) {
  console.log("Congratulations, you guessed it right!");
} else {
  console.log("Sorry, that's not the correct guess.");
}
```

### Question 9

```
for (let i = 1; i <= 6; i++) {
  let spaces = ' '.repeat(i - 1);
  let stars = '*'.repeat(13 - 2 * i);
  console.log(spaces + stars);
}
```

### Question 10

```
1 224 3339 444416 5555525

let str = "";
for (let i = 1; i <= 5; i++) {
  let sum = 0;
  for (let j = 1; j <= i; j++) {
    if (i !== 1) {
      sum = sum + i;
    } else {
      sum = "";
    }
  }
  str = str + i.toString().repeat(i) + sum + " ";
}
console.log(str);

```

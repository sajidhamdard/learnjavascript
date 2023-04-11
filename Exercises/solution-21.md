### Question 1 : How can you convert a string to a number in JavaScript? write all the ways.

In JavaScript, there are several ways to convert a string to a number:

- Using the Number() method: This method converts a string to a number by parsing the string. For example, Number("10") will return the number 10.

- Add + in front of a string

- Using the parseInt() method: This method converts a string to an integer by parsing the string. For example, parseInt("10") will return the number 10.

- Using the parseFloat() method: This method converts a string to a floating-point number by parsing the string. For example, parseFloat("10.5") will return the number 10.5.

### Question 2 : How do you round a number to a certain number of decimal places in JavaScript?

```javascript
var num = 10.5678;
num = num.toFixed(2); // num will now be "10.57"
```

### Question 3 : How can you generate a random number between two values in JavaScript?

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

```javascript
var num = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // num will be a random number between 1 and 10
```

### Question 4 : How do you convert a number to a binary, octal, or hexadecimal format in JavaScript?

In JavaScript, you can use the toString() method to convert a number to a binary, octal, or hexadecimal format.

To convert a number to binary format, you can use the following code:

```javascript
var num = 10;
var binary = num.toString(2); // binary will be "1010"
```

To convert a number to octal format, you can use the following code:

```
var num = 10;
var octal = num.toString(8); // octal will be "12"
```

To convert a number to hexadecimal format, you can use the following code:

```javascript
var num = 10;
var hex = num.toString(16); // hex will be "a"
```

### Question 5 : How do you add or subtract a certain number of days from a date in JavaScript?


```javascript
var date = new Date();
date.setDate(date.getDate() + 10); // date will be 10 days from the current date
```

```javascript
var date = new Date();
date.setDate(date.getDate() - 10); // date will be 10 days before the current date
```

### Question 6 : How do you compare two dates in JavaScript? Check if a date is small or large or equal to other date?

```javascript
var date1 = new Date("2022-05-10");
var date2 = new Date("2022-04-10");

if (date1.getTime() > date2.getTime()) {
console.log("date1 is greater than date2");
} else if (date1.getTime() < date2.getTime()) {
console.log("date1 is less than date2");
} else {
console.log("date1 is equal to date2");
}
```

### Question 7 : How can you format a date in JavaScript according to the user's locale?

```javascript
var date = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = date.toLocaleDateString(undefined, options); // formattedDate will be a string representation of the date in the user's locale
```

### Question 8 : How do you calculate the difference between two dates in JavaScript?

```
var date1 = new Date("2022-04-10");
var date2 = new Date("2022-04-01");
var diffInMs = date1 - date2; // difference in milliseconds
var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // difference in days
```

### Question 9 : How do you check if a year is a leap year in JavaScript?

```javascript
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
```

### Question 10 : How do you convert a string to a date in JavaScript? Write all ways.

In JavaScript, there are several ways to convert a string to a date:

1. Using the Date() constructor: This method creates a new Date object based on a string representation of the date. For example, new Date("2022-04-10") will create a Date object representing April 10, 2022.

2. Using the Date.parse() method: This method parses a string representation of the date and returns the number of milliseconds since January 1, 1970, which can be used to create a new Date object. For example, new Date(Date.parse("2022-04-10")) will also create a Date object representing April 10, 2022.

Here is an example of using the Date() constructor to convert a string to a date:
```javascript
var dateString = "2022-04-10";
var date = new Date(dateString);
```

### Question 11 : How can you parse a date from a string in a specific format in JavaScript?

```javascript
const dateString = "2023-04-12"; // Assuming the format is YYYY-MM-DD
const dateParts = dateString.split("-"); // Split the string into parts using the hyphen delimiter

// Create a new Date object with the parsed date
const parsedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]); // The month value is 0-based, so subtract 1

console.log(parsedDate); // Output: Wed Apr 12 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
```


### Question 12 : How can you get the time in a specific timezone in JavaScript?

```javascript
const date = new Date(); // Create a new Date object with the current date and time
const options = { timeZone: "America/New_York", hour12: false }; // Set the timezone and display format options
const timeString = date.toLocaleString("en-US", options); // Convert the date to a string in the specified timezone and format

console.log(timeString); // Output: "2023-04-12 15:27:00" (assuming the current time is 3:27 PM UTC)
```

### Question 13 : Print date and time after every 1 second in the format 'MM/DD/YYYY HH:MM:SS'

```javascript
function printDateTime() {
  const date = new Date(); // Create a new Date object with the current date and time
  const dateString = date.toLocaleString("en-US", { timeZone: "UTC" }); // Convert the date to a string in UTC timezone
  const dateTimeString = dateString.replace(",", ""); // Remove the comma from the date string
  console.log(dateTimeString); // Output the formatted date and time string
}

setInterval(printDateTime, 1000); // Call the printDateTime() function every 1 second (1000 milliseconds)
```

### Question 14 : Write a JavaScript function to get the number of days in a month. Pass month and year as an arugment to the function. for example : getDays(2, 2023). Answer will be 28

```javascript
function getDays(month, year) {
  return new Date(year, month, 0).getDate();
}

const daysInFebruary2023 = getDays(2, 2023); // Returns 28
```

### Question 15 : Write a JavaScript function to get the week day name for the given date.

```javascript
function getWeekdayName(date) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekdayIndex = date.getDay();
  return weekdays[weekdayIndex];
}

const date = new Date("2023-04-12");
const weekdayName = getWeekdayName(date); // Returns "Wednesday"
```

### Question 16 : Write a JavaScript function to get the month name from the given date

```javascript
function getMonthName(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthIndex = date.getMonth();
  return months[monthIndex];
}
const date = new Date("2023-04-12");
const monthName = getMonthName(date); // Returns "April"
```

### Question 17 : Write a JavaScript function to check if given date is on weekend or not (Saturday/Sunday).

```javascript
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}
const date = new Date("2023-04-16");
const isWeekendDay = isWeekend(date); // Returns true
```

### Question 18 : Ask your about his date of birth. Now write a JavaScript function to calculate age based on the given date of birth.

```javascript
function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}
const dateOfBirth = "1990-04-12";
const age = calculateAge(dateOfBirth); // Returns the current age based on the date of birth
```

### Question 19 : Write a Javascript function to using setInterval to show alert box when date is your birth date.

```javascript
function alertOnBirthday(birthDate) {
  setInterval(() => {
    const today = new Date();
    const todayFormatted = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    if (todayFormatted === birthDate) {
      alert("Happy Birthday!");
    }
  }, 1000);
}
const birthDate = "4/12/1990"; // Format: "MM/DD/YYYY"
alertOnBirthday(birthDate);
```

### Question 20 : Show your birth date in Arabic

```javascript
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'gregory', locale: 'ar-SA' };
const todayInArabic = today.toLocaleDateString('ar', options);
console.log(todayInArabic);
```

```javascript
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'gregory', locale: 'ar-SA' };
const formatter = new Intl.DateTimeFormat('ar', options);
const todayInArabic = formatter.format(today);
console.log(todayInArabic);
```

### Question 21 : Show your birth date in Chinese

```javascript
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'gregory', locale: 'zh-CN' };
const todayInChinese = today.toLocaleDateString('zh', options);
console.log(todayInChinese);
```

```javascript
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'gregory', locale: 'zh-CN' };
const formatter = new Intl.DateTimeFormat('zh', options);
const todayInChinese = formatter.format(today);
console.log(todayInChinese);
```

### Question 22 : Write a JavaScript function to convert a binary number to a decimal number.

```javascript
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

const binaryNumber = "101010";
const decimalNumber = binaryToDecimal(binaryNumber);
console.log(decimalNumber); // output: 42
```

### Question 23 : Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

```javascript
function convertToBase(decimalNumber, format) {
  let convertedNumber = "";

  if (format === "binary") {
    convertedNumber = decimalNumber.toString(2);
  } else if (format === "hexadecimal") {
    convertedNumber = decimalNumber.toString(16);
  } else if (format === "octal") {
    convertedNumber = decimalNumber.toString(8);
  } else {
    console.log("Invalid format!");
    return;
  }

  return convertedNumber;
}

const decimalNumber = 42;
const binaryNumber = convertToBase(decimalNumber, "binary");
const hexadecimalNumber = convertToBase(decimalNumber, "hexadecimal");
const octalNumber = convertToBase(decimalNumber, "octal");

console.log(binaryNumber); // Output: "101010"
console.log(hexadecimalNumber); // Output: "2a"
console.log(octalNumber); // Output: "52"
```

### Question 24 : Write a JavaScript function to find the highest value in an array using Math.max

```javascript
function findHighestValue(arr) {
  return Math.max(...arr);
}
const numbers = [5, 10, 2, 8, 3];
const highestValue = findHighestValue(numbers);
console.log(highestValue); // Output: 10
```

### Question 25 : Write a JavaScript function to find the minimum value in an array using Math.min

```javascript
function findMinimumValue(arr) {
  return Math.min(...arr);
}
const numbers = [5, 10, 2, 8, 3];
const minimumValue = findMinimumValue(numbers);
console.log(minimumValue); // Output: 2
```

### Question 26 : Write a JavaScript function to check whether a value is an integer or not.

```javascript
function isInteger(value) {
  return Number.isInteger(value);
}
console.log(isInteger(5)); // Output: true
console.log(isInteger(5.5)); // Output: false
console.log(isInteger('5')); // Output: false
console.log(isInteger(null)); // Output: false
```

### Question 27 : Write a JavaScript function to convert a positive number to negative number or to negativie number to positive number.

```javascript
function convertNumber(number) {
  return -number;
}
console.log(convertNumber(5)); // Output: -5
console.log(convertNumber(-5)); // Output: 5
```

### Question 28 : Convert 50 litre to Hindi locale and chinese locale

```javascript
// Convert 50 liters to Hindi locale
const hindiFormatter = new Intl.NumberFormat('hi-IN', { style: 'unit', unit: 'liter' });
const hindiResult = hindiFormatter.format(50);
console.log(hindiResult); // Output: ५० लीटर

// Convert 50 liters to Chinese locale
const chineseFormatter = new Intl.NumberFormat('zh-CN', { style: 'unit', unit: 'liter' });
const chineseResult = chineseFormatter.format(50);
console.log(chineseResult); // Output: 50升
```

### Question 29 : Create a function to convert any number to given currency.

```javascript
function convertToCurrency(number, currencyCode) {
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode });
  return formatter.format(number);
}
console.log(convertToCurrency(50, 'USD')); // Output: $50.00
console.log(convertToCurrency(1000, 'EUR')); // Output: €1,000.00
console.log(convertToCurrency(500, 'JPY')); // Output: ¥500
```

### Question 30 : Write a JavaScript program to find the missing number from a given array. There are no duplicates in the list. Start from 1

```javascript
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, val) => acc + val);
  return expectedSum - actualSum;
}

const arr = [1, 2, 4, 5, 6];
const missingNumber = findMissingNumber(arr);
console.log(missingNumber); // Output: 3
```

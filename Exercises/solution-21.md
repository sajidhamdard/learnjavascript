### Question 1 : How can you convert a string to a number in JavaScript? write all the ways.

In JavaScript, there are several ways to convert a string to a number:

- Using the Number() method: This method converts a string to a number by parsing the string. For example, Number("10") will return the number 10.

- Add + in front of a string

- Using the parseInt() method: This method converts a string to an integer by parsing the string. For example, parseInt("10") will return the number 10.

- Using the parseFloat() method: This method converts a string to a floating-point number by parsing the string. For example, parseFloat("10.5") will return the number 10.5.

### Question 2 : How do you round a number to a certain number of decimal places in JavaScript?

In JavaScript, you can use the toFixed() method to round a number to a certain number of decimal places. The toFixed() method returns a string representation of the number with the specified number of decimal places.

For example, if you want to round the number 10.5678 to 2 decimal places, you can use the following code:

```javascript
var num = 10.5678;
num = num.toFixed(2); // num will now be "10.57"
```

### Question 3 : How can you generate a random number between two values in JavaScript?

To generate a random number between two values in JavaScript, you can use the Math.random() method. The Math.random() method returns a random number between 0 and 1.

To generate a random number between two values, you can use the following formula:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

Where max is the maximum value, min is the minimum value, and Math.floor() is used to round down the result to the nearest integer.

For example, if you want to generate a random number between 1 and 10, you can use the following code:

```
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

```
var num = 10;
var hex = num.toString(16); // hex will be "a"
```

### Question 5 : How do you add or subtract a certain number of days from a date in JavaScript?

To add or subtract a certain number of days from a date in JavaScript, you can use the setDate() method of the Date object.

For example, to add 10 days to a date, you can use the following code:

```javascript
var date = new Date();
date.setDate(date.getDate() + 10); // date will be 10 days from the current date
```

To subtract 10 days from a date, you can use the following code:

```
var date = new Date();
date.setDate(date.getDate() - 10); // date will be 10 days before the current date
```

### Question 6 : How do you compare two dates in JavaScript? Check if a date is small or large or equal to other date?

To compare two dates in JavaScript, you can use the getTime() method of the Date object. The getTime() method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

For example, to check if date1 is greater than date2, you can use the following code:

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

This code first creates two Date objects, date1 and date2. It then uses the getTime() method to get the number of milliseconds since January 1, 1970 for each date object. Finally, it compares the two values to determine if date1 is greater than, less than, or equal to date2.

### Question 7 : How can you format a date in JavaScript according to the user's locale?

To format a date in JavaScript according to the user's locale, you can use the toLocaleDateString() method of the Date object.

For example, to format a date in the user's locale, you can use the following code:

```javascript
var date = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = date.toLocaleDateString(undefined, options); // formattedDate will be a string representation of the date in the user's locale
```

In this code, the toLocaleDateString() method is used to format the date in the user's locale. The options object is used to specify the format of the date. The undefined parameter is used to specify that the default locale should be used.

### Question 8 : How do you calculate the difference between two dates in JavaScript?

To calculate the difference between two dates in JavaScript, you can subtract the two dates and convert the result to the desired units (e.g., days, hours, minutes, seconds).

For example, to calculate the difference between two dates in days, you can use the following code:

```
var date1 = new Date("2022-04-10");
var date2 = new Date("2022-04-01");
var diffInMs = date1 - date2; // difference in milliseconds
var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // difference in days
```

This code first creates two Date objects, date1 and date2. It then subtracts date2 from date1 to get the difference in milliseconds. Finally, it divides the difference in milliseconds by the number of milliseconds in a day (1000 * 60 * 60 * 24) and rounds down to the nearest integer to get the difference in days.

### Question 9 : How do you check if a year is a leap year in JavaScript?

To check if a year is a leap year in JavaScript, you can use the following code:

```javascript
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
```
This code defines a function called isLeapYear that takes a year as an argument. It then uses the modulus operator (%) to determine if the year is divisible by 4 and not divisible by 100, or if the year is divisible by 400. If the year satisfies either of these conditions, the function returns true, indicating that the year is a leap year. Otherwise, the function returns false.

### Question 10 : How do you convert a string to a date in JavaScript? Write all ways.

In JavaScript, there are several ways to convert a string to a date:

1. Using the Date() constructor: This method creates a new Date object based on a string representation of the date. For example, new Date("2022-04-10") will create a Date object representing April 10, 2022.

2. Using the Date.parse() method: This method parses a string representation of the date and returns the number of milliseconds since January 1, 1970, which can be used to create a new Date object. For example, new Date(Date.parse("2022-04-10")) will also create a Date object representing April 10, 2022.

Here is an example of using the Date() constructor to convert a string to a date:
```javascript
var dateString = "2022-04-10";
var date = new Date(dateString);
```

This code creates a string variable called dateString that contains a string representation of the date "2022-04-10". It then uses the Date() constructor to create a new Date object called date based on the string representation.

Note that the string representation of the date must be in a format that the Date() constructor can recognize. In this example, the format is "YYYY-MM-DD".

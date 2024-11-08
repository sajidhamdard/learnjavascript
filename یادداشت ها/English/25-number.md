# Number

What is number
In JavaScript, Number is a built-in object that represents numeric values. It is a primitive data type that can represent both integers and floating-point numbers. In JavaScript, all numbers are stored as double-precision floating-point numbers, so you can represent a wide range of values with a high degree of precision.

For example:

```
let num = 42;
console.log(typeof num); // Output: "number"
```

### Converting numbers

In JavaScript, converting numbers involves changing a number from one data type to another, such as converting a number to a string or converting a string to a number

In JavaScript, you can convert numbers to strings and vice versa using the following methods:

- toString():
  Converts a number to a string.
  For example:

```
  let num = 42;
let str = num.toString();
 console.log(typeof str); // Output: "string"
```

- Number():
  Converts its argument to a number.
  For example:

```
  let str = "42";
let num = Number(str);
console.log(typeof num); // Output: "number"
```

- parseInt():
  Parses a string argument and returns an integer.
  For example:

```
  let str = "42";
let num = parseInt(str);
console.log(typeof num); // Output: "number"
console.log(num % 1 === 0); // Output: true
```

- parseFloat():
  Parses a string argument and returns a floating-point number.
  For example:

```
  let str = "3.14";
let num = parseFloat(str);
console.log(typeof num); // Output: "number"
console.log(num % 1 !== 0); // Output: true
```

It's important to note that parseInt() and parseFloat() only return numbers if the string argument represents a valid number. If the argument cannot be parsed as a number, these methods return NaN (Not-a-Number).

### What is NaN

NaN is an acronym for "Not a Number" in JavaScript. It's a special value that represents the result of an operation that cannot produce a valid number. For example, if you divide 0 by 0, the result is NaN:

```
console.log(0 / 0)  // Output: NaN
```

NaN is also returned when you try to perform an operation with non-numeric values, such as

```
console.log(parseInt("Hello World"));  // Output: NaN
```

In JavaScript, NaN is considered a "truthy" value, meaning that it's considered truthy in a boolean context. However, NaN is not equal to any value, including itself. To check for NaN, you can use the isNaN() function

```
console.log(isNaN(NaN));  // Output: true
```

### What is Infinity

In JavaScript, "Infinity" is a special value representing the positive infinity, which is a numerical value that is greater than any other number. It is a constant in the global JavaScript scope and can be used as a value in mathematical operations.

Here is an example of using "Infinity" in JavaScript

```
console.log(Infinity + 1); // outputs Infinity
console.log(Infinity * 2); // outputs Infinity
console.log(1 / 0); // outputs Infinity
```

- Note
  that division by zero in JavaScript results in "Infinity" or "-Infinity", depending on the signs of the operands.

### Number System

### What is Number System

In JavaScript, the number system is used to represent numbers in a particular format. JavaScript supports two number systems, which are:

1. Decimal number system:
   In JavaScript, the decimal number system is the default and most commonly used number system. It uses base-10 format and represents numbers using the 10 digits, 0 to 9. You can represent decimal numbers using the standard notation,
   for example:
   ```
   let decimal = 10;
   console.log(decimal); // 10
   ```
   In JavaScript, all numbers are stored as 64-bit floating-point numbers, which means that some precision can be lost when performing mathematical operations on very large or very small numbers. However, JavaScript provides several methods to perform arithmetic operations with integers, such as bitwise operators and the Math.floor() method.

It's important to note that JavaScript does not have a specific type for representing integers, so all numbers are treated as floating-point numbers. To ensure that you are working with integers, you may need to use methods such as Math.floor() or parseInt() to convert numbers to integers or use bitwise operators to perform bit-level operations.

2. Binary number system:
   Binary is a base-2 number system that uses only two digits, 0 and 1, to represent numbers. In JavaScript, you can represent binary numbers by prefixing the number with "0b" or "0B".
   For example:

```

let binary = 0b10;
console.log(binary); // 2

```

Binary numbers are often used in low-level programming and computer hardware, as well as in certain mathematical operations. In JavaScript, you can perform bitwise operations on binary numbers, such as shifting bits to the left or right, or performing logical operations like AND, OR, and XOR.

It is important to note that binary support was added in ECMAScript 6 (ES6) and may not be supported in older JavaScript engines. To ensure compatibility, it's best to use decimal or hexadecimal representations for numbers in your code

3. Octal number system:
   The octal number system is a base-8 number system that uses 8 digits, 0 to 7, to represent numbers. In JavaScript, you can represent octal numbers by prefixing the number with "0o" or "0O".

For example:

```
let octal = 0o10;
console.log(octal); // 8
```

It is important to note that octal support was added in ECMAScript 6 (ES6) and may not be supported in older JavaScript engines. To ensure compatibility, it's best to use decimal or hexadecimal representations for numbers in your code. Octal numbers can be useful for certain low-level operations, such as working with file permissions or representing values in a compact form.

4.  HexaDecimal Number system:
    Hexadecimal is a numeral system that uses base 16, and it's often used in computer science and programming. In JavaScript, hexadecimal numbers are represented as strings that begin with "0x".
    For example:

```
let hex = 0xff;
console.log(hex); // Output: 255

```

### Hoisting in numbers

Hoisting is a mechanism in JavaScript that allows variables and function declarations to be moved to the top of their respective scopes (either global or function) before the code is executed. This means that variables and functions can be declared after they are used in the code.

However, it's important to note that only the declarations are hoisted, not the initializations. In the case of variables, the variable declaration is moved to the top, but the value is not. So, if you try to use the value of a variable before it's initialized, it will have the value undefined.

- For example:

```
console.log(x); // output: undefined
var x = 5;
```

In the case of functions, the entire function declaration is hoisted to the top, including the body of the function. This means that you can call a function before it's declared in the code.

- For example:

```
foo(); // output: "Hello, world!"
function foo() {
  console.log("Hello, world!");
}
```

### Math and Rounding

Math is a built-in object in JavaScript that provides mathematical constants and functions. One of the most common uses of Math in JavaScript is for rounding numbers.

There are several methods available in Math for rounding numbers:

    Math.round(): The Math.round() method rounds a number to the nearest integer. If the fractional part of the number is 0.5 or greater, the number is rounded up. If the fractional part is less than 0.5, the number is rounded down.

- For example:

```
Math.round(4.6); // output: 5
Math.round(4.4); // output: 4
```

Math.floor(): The Math.floor() method rounds a number down to the nearest integer.

- For example:

```
Math.floor(4.6); // output: 4
Math.floor(4.4); // output: 4
```

Math.ceil(): The Math.ceil() method rounds a number up to the nearest integer.

- For example:

```
Math.ceil(4.6); // output: 5
Math.ceil(4.4); // output: 5

```

Math.trunc(): The Math.trunc() method returns the integer part of a number by removing any fractional digits.

- For example:

```
Math.trunc(4.6); // output: 4
Math.trunc(4.4); // output: 4
```

Number.toFixed(): The Number.toFixed() method rounds a number to a specified number of decimal places and returns a string representation of the rounded number.

- For example:

```
let x = 4.5678;
x.toFixed(2); // output: "4.57"
```

### The Reminder operator

The remainder operator in JavaScript is represented by the % symbol and is also known as the modulo operator. It returns the remainder of a division operation between two operands.

- For example:

```
5 % 2; // output: 1
```

In this example, the remainder operator returns the remainder of the division of 5 by 2, which is 1.

The remainder operator can be used with both positive and negative numbers, and it can also be used with floating-point numbers.

- For example:

```
-5 % 2; // output: -1
5.5 % 2; // output: 1.5
```

In the first example, the remainder operator returns -1 because -5 divided by 2 has a remainder of -1. In the second example, the remainder operator returns 1.5 because 5.5 divided by 2 has a remainder of 1.5.

The remainder operator can be used in a variety of ways in JavaScript, including for checking if a number is even or odd.

- For example:

```
let x = 5;
if (x % 2 === 0) {
  console.log("x is even");
} else {
  console.log("x is odd");
}
```

### Numeric Separators

Numeric separators in JavaScript are a way to make large numbers more readable by separating groups of digits with underscores. This is especially useful for large numbers, such as millions or billions, where it can be difficult to quickly count the number of digits.

Numeric separators are represented by an underscore (\_) character and can be used in the middle of a number.

- For example:

```
let x = 1_000_000;
console.log(x); // output: 1000000
```

In this example, the numeric separator is used to separate the groups of digits in the number 1_000_000, making it easier to read.

Numeric separators can be used with integers, floating-point numbers, and binary, octal, and hexadecimal literals.

- For example:

```
let y = 0b1010_0001_0010;
console.log(y); // output: 4162
```

In this example, the binary literal 0b1010_0001_0010 is used with a numeric separator to represent the decimal number 4162.

It's important to note that numeric separators are ignored by JavaScript when parsing a number, so they have no effect on the actual value of the number.

- For example:

```
let z = 1_2_3 + 4_5_6;
console.log(z); // output: 579
```

In this example, the numeric separators are used to make the number 579 more readable, but they have no effect on the actual value of the expression 1_2_3 + 4_5_6.

Numeric separators were introduced in ECMAScript 2017 (ES8) and are supported in modern browsers and Node.js. However, they may not be supported in older browsers or environments, so it's important to check for compatibility before using them in your code.

### Working with BigInt

In JavaScript, BigInt is a built-in object that provides a way to represent integers larger than the maximum safe integer value of 2^53 - 1. BigInts can be used for calculations involving very large numbers, such as cryptography, scientific computations, and financial applications.

To create a BigInt, you can append the n suffix to an integer literal or use the BigInt() constructor function.

- For example:

```
let x = 123456789012345678901234567890n;
let y = BigInt("987654321098765432109876543210");
```

In these examples, the n suffix and the BigInt() constructor are used to create BigInts.

BigInts can be used with standard arithmetic operators, such as +, -, \*, /, and %. However, you must use the BigInt() function when mixing BigInts with regular numbers, as shown in the following example:

```
let x = 123n;
let y = 456;
let z = x + BigInt(y); // output: 579n
```

In this example, the BigInt() function is used to convert the regular number y to a BigInt, so it can be added to the BigInt x.

BigInts can also be compared using standard comparison operators, such as <, <=, >, >=, ==, and !=. However, you cannot mix BigInts and regular numbers in a comparison, so you must use the BigInt() function to convert regular numbers to BigInts.

- For example:

```
let x = 123n;
let y = 456;
console.log(x < BigInt(y)); // output: true
```

In this example, the BigInt() function is used to convert the regular number y to a BigInt, so it can be compared to the BigInt x.

BigInts also support bitwise operators, such as &, |, ^, ~, <<, and >>. However, you cannot mix BigInts and regular numbers in a bitwise operation, so you must use the BigInt() function to convert regular numbers to BigInts.

- For example:

```
let x = 0b1010n;
let y = 0b1100;
let z = x & BigInt(y); // output: 8n
```

n this example, the BigInt() function is used to convert the regular number y to a BigInt, so it can be bitwise-ANDed with the BigInt x.

In summary, BigInt is a built-in object in JavaScript that provides a way to represent integers larger than the maximum safe integer value. BigInts can be created using the n suffix or the BigInt() constructor function and can be used with standard arithmetic, comparison, and bitwise operators. However, you must use the BigInt() function when mixing BigInts and regular numbers.

- Exceptions in BigInt
  In JavaScript, BigInts can throw exceptions when certain operations are performed on them. These exceptions are similar to regular JavaScript exceptions and are designed to help you catch errors in your code.

The most common exception that can be thrown when working with BigInts is RangeError, which occurs when a BigInt operation results in a value that is outside the range of valid BigInt values. For example, the following code will throw a RangeError exception:

```
let x = 1n << 1000000n; // RangeError: BigInt too big
```

In this example, the << operator is used to shift the BigInt 1n left by 1000000 bits, which results in a BigInt value that is too large to be represented.

Another exception that can be thrown when working with BigInts is TypeError, which occurs when a function or operator is used on a non-BigInt value. For example, the following code will throw a TypeError exception:

```
let x = 123n;
let y = "456";
let z = x + y; // TypeError: Cannot mix BigInt and other types
```

In this example, the + operator is used to add the BigInt x to the string "456", which is not a BigInt and cannot be mixed with BigInts.

To handle exceptions when working with BigInts, you can use the standard JavaScript try/catch statement.

- For example:

```
try {
  let x = 1n << 1000000n;
} catch (e) {
  console.error(e); // RangeError: BigInt too big
}
```

In this example, the try statement is used to attempt the << operation on the BigInt 1n. If a RangeError exception is thrown, the catch statement will catch the exception and log an error message to the console.

In summary, BigInts in JavaScript can throw exceptions when certain operations are performed on them. The most common exception is RangeError, which occurs when a BigInt value is outside the range of valid BigInt values. To handle exceptions, you can use the standard JavaScript try/catch statement.

### Number class functions

    Number.isNaN(value) - Returns true if the given value is NaN (Not a Number), and false otherwise.

```
   console.log(Number.isNaN(10)); // false
console.log(Number.isNaN("Hello")); // true
console.log(Number.isNaN(NaN)); // true

```

Number.isFinite(value) - Returns true if the given value is a finite number, and false otherwise. This function does not convert the value to a number before checking it, so it will return false for non-numeric values.

Number.parseInt(string, radix) - Parses a string into an integer using the specified radix (base). The radix can be any integer between 2 and 36. If the string cannot be parsed into an integer, this function returns NaN.

```
    console.log(Number.parseInt("100")); // 100
console.log(Number.parseInt("100", 2)); // 4
console.log(Number.parseInt("FF", 16)); // 255
```

Number.parseFloat(string) - Parses a string into a floating-point number. If the string cannot be parsed into a number, this function returns NaN.

Number.MAX_VALUE - Returns the largest representable number in JavaScript.

```
  console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
```

Number.MIN_VALUE - Returns the smallest representable number in JavaScript.

Number.POSITIVE_INFINITY - Represents positive infinity in JavaScript.

Number.NEGATIVE_INFINITY - Represents negative infinity in JavaScript.

Number.EPSILON - Represents the smallest representable difference between two numbers in JavaScript.

Number.prototype.toFixed(digits) - Returns a string representing the given number with a fixed number of decimal places (specified by the digits argument).

```
  let x = 10.12345;
console.log(x.toFixed(2)); // "10.12"

```

Number.prototype.toPrecision(digits) - Returns a string representing the given number with a specified number of significant digits (specified by the digits argument).

Number.prototype.toString(radix) - Returns a string representation of the given number in the specified radix (base).

These functions provide powerful tools for working with numbers in JavaScript. They can be used to validate input, convert between number formats, and manipulate numbers in various ways.

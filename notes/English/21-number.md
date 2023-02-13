# Number

What is number
In JavaScript, Number is a built-in object that represents numeric values. It is a primitive data type that can represent both integers and floating-point numbers. In JavaScript, all numbers are stored as double-precision floating-point numbers, so you can represent a wide range of values with a high degree of precision.

For example:

```
let num = 42;
console.log(typeof num); // Output: "number"
```

### Converting numbers in javaScript

In JavaScript, converting numbers involves changing a number from one data type to another, such as converting a number to a string or converting a string to a number

### Converting numbers in javaScript

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

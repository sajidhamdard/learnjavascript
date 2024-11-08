# Operators

Operators JavaScript mein aise symbols hote hain jo values ko manipulate karne ke liye use kiye jaate hain. Kuch common operators include arithmetic, comparison, logical, bitwise, assignment, and ternary operators.

Arithmetic operators math calculations ke liye use kiye jaate hain jaise:

```js
let x = 10;
let y = 3;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Remainder
console.log(x ** y); // Exponentiation
```

Comparison operators values ko compare karne ke liye use kiye jaate hain jaise:

```js
let x = 10;
let y = 3;

console.log(x > y); // Greater than
console.log(x < y); // Less than
console.log(x >= y); // Greater than or equal to
console.log(x <= y); // Less than or equal to
console.log(x == y); // Equal to
console.log(x != y); // Not equal to
console.log(x === y); // Strict equal to
console.log(x !== y); // Strict not equal to
```

Logical operators boolean values ke saath kaam karte hain jaise:

```js
let x = 10;
let y = 3;

console.log(x > 5 && y < 7); // AND
console.log(x > 5 || y > 7); // OR
console.log(!(x > y)); // NOT
```

Bitwise operators binary representation of numbers ke liye use kiye jaate hain jaise:

```js
let x = 10; // Binary representation: 1010
let y = 3; // Binary representation: 0011

console.log(x & y); // Bitwise AND
console.log(x | y); // Bitwise OR
console.log(x ^ y); // Bitwise XOR
console.log(~x); // Bitwise NOT
console.log(x << 1); // Left shift
console.log(x >> 1); // Right shift
console.log(x >>> 1); // Unsigned right shift
```

Assignment operators variables ko assign karne ke liye use kiye jaate hain jaise:

```js
let x = 10;

x += 5; // Same as x = x + 5;
x -= 5; // Same as x = x - 5;
x *= 5; // Same as x = x * 5;
x /= 5; // Same as x = x / 5;
x %= 5; // Same as x = x % 5;
x **= 5; // Same as x = x ** 5;
x &= 5; // Same as x = x & 5;
x |= 5; // Same as x = x | 5;
x ^= 5; // Same as x = x ^ 5;
x <<= 5; // Same as x = x << 5;
x >>= 5; // Same as x = x >> 5;
x >>>= 5; // Same as x = x >>> 5;
```

Ternary operator if-else statement ka ek shorthand version hai jaise:

```js
let age = 18;

let status = age >= 18 ? "Adult" : "Minor";

console.log(status); // Adult
```

Is tarah se, JavaScript mein bahut saare operators hote hain jo values ko manipulate karne ke liye use kiye jaate hain.

### Arithmetic Operators

Arithmetic operators in JavaScript are symbols or characters used to perform mathematical operations on numeric values.

There are five arithmetic operators in JavaScript:

1. Addition operator (+) - This operator adds two or more values and returns the sum.

Example:

```
let x = 10;
let y = 5;
let z = x + y;   // z will be 15
```

2. Subtraction operator (-) - This operator subtracts one value from another and returns the difference.

Example:

```
let x = 10;
let y = 5;
let z = x - y;   // z will be 5
```

3. Multiplication operator (\*) - This operator multiplies two or more values and returns the product.

Example:

```
let x = 10;
let y = 5;
let z = x * y;   // z will be 50
```

4. Division operator (/) - This operator divides one value by another and returns the quotient.

Example:

```
let x = 10;
let y = 5;
let z = x / y;   // z will be 2
```

5. Remainder operator (%) - This operator returns the remainder of a division operation.

Example:

```
let x = 10;
let y = 3;
let z = x % y;   // z will be 1
```

Arithmetic Operators JavaScript mein wo symbol ya character hote hain jinka prayog sankhyatmak maan ko ganitik karyon ke liye kiya jaata hai. Ismein paanch operators hote hain - Jodne ka operator (+), Ghataane ka operator (-), Gunank ka operator (\*), Bhag ka operator (/) aur Shesh ka operator (%). Inka prayog sankhyatmak maano ko jodne, ghataane, guna karne, bhag karne aur shesh nikalne ke liye kiya jaata hai.

### Comparison Operators

Comparison Operators in JavaScript are used to compare two values and return a Boolean value (true or false) depending on whether the comparison is true or false. There are several comparison operators in JavaScript, including:

1. == : This operator checks if two values are equal to each other, regardless of their data types.
   Example:

```
var x = 10;
console.log(x == '10'); // Output: true
```

2. === : This operator checks if two values are equal to each other AND have the same data type.
   Example:

```
var x = 10;
console.log(x === '10'); // Output: false
```

3. != : This operator checks if two values are not equal to each other, regardless of their data types.
   Example:

```
var x = 10;
console.log(x != '5'); // Output: true
```

4. !== : This operator checks if two values are not equal to each other OR do not have the same data type.
   Example:

```
var x = 10;
console.log(x !== '10'); // Output: true
console.log(x !== 10); // Output: false
```

5. > : This operator checks if one value is greater than another.
   > Example:

```
var x = 10;
console.log(x > 5); // Output: true
```

6. < : This operator checks if one value is less than another.
   Example:

```
var x = 10;
console.log(x < 5); // Output: false
```

7. > = : This operator checks if one value is greater than or equal to another.
   > Example:

```
var x = 10;
console.log(x >= 10); // Output: true
```

8. <= : This operator checks if one value is less than or equal to another.
   Example:

```
var x = 10;
console.log(x <= 5); // Output: false
```

Comparison Operators can be explained as "bandhu-tulyakari sangathan" or "samanta-kari sangathan" that help you compare two values and give a response in the form of "haan" (true) ya "na" (false) depending on the comparison being true or false.

### Logical Operators

Logical operators in JavaScript are used to combine multiple conditions and evaluate them as a single expression. There are three logical operators in JavaScript:

1. && (AND) operator: This operator returns true if both conditions are true, otherwise, it returns false.

Example:

```javascript
let num = 5;
if (num > 0 && num < 10) {
  console.log("The number is between 0 and 10.");
}
```

In this example, the condition inside if statement will return true if `num` is greater than 0 AND less than 10, so the message "The number is between 0 and 10." will be printed.

2. || (OR) operator: This operator returns true if at least one of the conditions is true, otherwise, it returns false.

Example:

```javascript
let name = "";
let age = 20;
if (name || age > 18) {
  console.log("You can enter the site.");
}
```

In this example, the condition inside if statement will return true if `name` is not empty OR `age` is greater than 18, so the message "You can enter the site." will be printed.

3. ! (NOT) operator: This operator reverses the boolean value of the condition. If the condition is true, then it returns false, and vice versa.

Example:

```javascript
let loggedIn = false;
if (!loggedIn) {
  console.log("Please login first.");
}
```

In this example, the condition inside if statement will return true if `loggedIn` is false (i.e. NOT true), so the message "Please login first." will be printed.

logical operators JavaScript mein use hote hain multiple conditions ko ek hi expression ke roop me milane ke liye aur unhe evaluate karne ke liye. Ismein teen operators hote hain: AND (&&), OR (||) aur NOT (!). AND operator true tab return karta hai agar dono conditions true hain, nahi toh false. OR operator true tab return karta hai agar kam se kam ek condition true hai, nahi toh false. NOT operator boolean value ko reverse karta hai, agar condition true hai toh false return karta hai aur agar false hai toh true.

### Assignment Operators

Assignment Operators in JavaScript are used to assign values to variables. These operators combine the assignment operation with another operation, such as addition, subtraction, multiplication, or division.

For example, consider the following code:

```
let x = 5;
x += 3;
console.log(x);
```

In the above example, the `+=` operator is an assignment operator that combines the addition operation with the assignment operation. It adds 3 to the value of `x` (which is 5), and then assigns the result (8) back to `x`. So, when we log `x` to the console, it prints 8.

Similarly, we can use other assignment operators like `-=` for subtraction, `*=` for multiplication, `/=` for division, etc.

Example:

```
let a = 10;
a -= 2; // Subtract 2 from a and assign the result back to a
console.log(a); // Output: 8

let b = 5;
b *= 3; // Multiply b by 3 and assign the result back to b
console.log(b); // Output: 15

let c = 20;
c /= 4; // Divide c by 4 and assign the result back to c
console.log(c); // Output: 5
```

Assignment operators are a shorthand way of writing more readable and concise code. They save us from having to write repetitive code and make it easier to perform arithmetic operations on variables.

### Typeof operators

Typeof ka operator JavaScript mein data type ko identify karne ke liye istemal hota hai. Isse hum yeh pata laga sakte hain ki kisi bhi variable ki value kis data type mei hai.

Iska syntax hai: `typeof operand`

Jahan 'operand' kisi variable ya expression ho sakta hai jo check karna hai uska data type.

For example:

```
let num = 10;
let str = "Hello";
let bool = true;

console.log(typeof num); // output: "number"
console.log(typeof str); // output: "string"
console.log(typeof bool); // output: "boolean"
```

Iss code mei humne `typeof` ka operator use kiya hai jisse humne `num`, `str`, aur `bool` variables ke data types determine kiye hain. Jaise ki hum dekh sakte hain, `num` ka data type number hai, `str` ka data type string hai, aur `bool` ka data type boolean hai.

Agar hum `typeof` ka operator non-existent variable par use karenge toh uska output `"undefined"` hoga.

For example:

```
console.log(typeof x); // output: "undefined"
```

Iss code mei humne `x` naam ka koi bhi variable define nahi kiya hai, isliye `typeof x` ka output `"undefined"` hai.

### Operator precedence

JavaScript Operator Precedence refers to the order in which operators are evaluated in an expression. It is important to understand this order because it can affect the outcome of an expression.

Operators with higher precedence are evaluated first, followed by those with lower precedence. For example, multiplication has higher precedence than addition, so the expression `3 + 4 * 5` will be evaluated as `3 + (4 * 5)` which equals 23.

Here's a table showing the operator precedence in JavaScript, from highest to lowest:

| Precedence | Operator                                | Description              |
| ---------- | --------------------------------------- | ------------------------ |
| 1          | ()                                      | Parentheses              |
| 2          | ! ~ + - ++ -- typeof void               | Unary operators          |
| 3          | \* / %                                  | Multiplicative operators |
| 4          | + -                                     | Additive operators       |
| 5          | << >> >>>                               | Bitwise shift operators  |
| 6          | < <= > >= instanceof                    | Relational operators     |
| 7          | == != === !==                           | Equality operators       |
| 8          | &                                       | Bitwise AND operator     |
| 9          | ^                                       | Bitwise XOR operator     |
| 10         | &#124;                                  | Bitwise OR operator      |
| 11         | &&                                      | Logical AND operator     |
| 12         | &#124;&#124;                            | Logical OR operator      |
| 13         | ? :                                     | Conditional operator     |
| 14         | = += -= \*= /= %= <<= >>= &= ^= &#124;= | Assignment operators     |

Let's consider an example:

```
var num1 = 10;
var num2 = 5;

var result = num1 + num2 * 2; // here the multiplication has higher precedence than addition

console.log(result); // Output: 20
```

In this example, the expression `num2 * 2` is evaluated first (giving us 10), and then added to num1, giving a result of 20.

### Number

Number in JavaScript is a data type that represents numeric values. It includes both integers and floating-point numbers (decimal numbers). In Hinglish, we can say "Number" ko JavaScript mein ek prakar ka data type hai jo sankhyaaon ko darshata hai. Yeh poori tarah se digit ya decimal number ho sakta hai.

Example:
var num1 = 10; // integer
var num2 = 3.14; // floating-point number

In this example, we have two variables num1 and num2 of the Number data type, where num1 holds an integer value of 10 and num2 holds a floating-point (decimal) value of 3.14.

JavaScript provides various mathematical operations that can be performed on Number values such as addition, subtraction, multiplication, division, and more. For example:

var sum = num1 + num2; // addition
var diff = num1 - num2; // subtraction
var product = num1 \* num2; // multiplication
var quotient = num1 / num2; // division

Apart from these basic arithmetic operations, there are many other built-in functions and methods available in JavaScript for working with Number values, such as Math.round(), Math.floor(), and Math.random().

Overall, Number is a fundamental data type in JavaScript that plays a crucial role in many programming tasks, particularly those that involve numerical calculations and manipulations.

### Converting numbers

JavaScript provides several methods to convert numbers from one format to another. Here are some examples:

1. parseInt()
   The parseInt() method converts a string to an integer. It parses a string argument and returns an integer value. If the string starts with a non-numeric character, it returns NaN (not-a-number).

parseInt("123") // Returns 123
parseInt("123.45") // Returns 123
parseInt("abc123") // Returns NaN

2. parseFloat()
   The parseFloat() method converts a string to a floating-point number. It works similar to parseInt() but returns a floating-point number instead of an integer.

Example in Hinglish:
parseFloat("123.45") // Returns 123.45
parseFloat("123") // Returns 123
parseFloat("abc123") // Returns NaN

3. Number()
   The Number() function converts a value to a number. It can be used to convert strings, boolean values, or objects into a number. If the argument cannot be converted into a number, it returns NaN.

Example in Hinglish:
Number("123") // Returns 123
Number("123.45") // Returns 123.45
Number("abc123") // Returns NaN

4. toString()
   The toString() method converts a number to a string. It takes an optional parameter that specifies the radix (base) of the number system to use for representing the number as a string.

Example in Hinglish:
(123).toString() // Returns "123"
(123).toString(16) // Returns "7b" (hexadecimal representation)
(123).toString(2) // Returns "1111011" (binary representation)

These are some basic ways of converting numbers in JavaScript.

### NaN

NaN stands for "Not a Number" in JavaScript. It is a special value that represents an invalid or unrepresentable numeric result.

NaN ka matlab hai "kuch bhi nahi", yani ki agar koi number expected hai lekin usme koi invalid operations hote hai toh NaN return hota hai.

For example:

```
let result = 10 / "hello";
console.log(result); // Output: NaN
```

Is example mein humne ek string ko number ke saath divide karne ki koshish ki hai jo ki possible nahi hai. Isliye, JavaScript NaN return karega.

NaN can also result from mathematical operations like dividing zero by zero, multiplying infinity by zero, or taking the square root of a negative number.

It is important to note that NaN is not equal to anything, including itself. So, the following comparison will always return false:

```
console.log(NaN === NaN); // Output: false
```

### Infinity

Infinity in JavaScript is a special numeric value that represents the concept of mathematical infinity, which means a number that is larger than any other number. Infinity is a global property in JavaScript and is represented by the keyword "Infinity".

In JavaScript, you can get Infinity by dividing a number by zero or by using the Infinity keyword directly. For example:

```js
console.log(1 / 0); // Output: Infinity

console.log(Infinity + 1); // Output: Infinity
```

The Infinity value is also used when a mathematical operation exceeds the largest possible value that JavaScript can represent. For example:

```js
console.log(Math.pow(2, 1024)); // Output: Infinity
```

Infinity in JavaScript can be described as अनंत (anant) or असीम (aseem) which means limitless or boundless. It represents a mathematical concept of a number that is larger than any other number and is used in JavaScript to indicate values that are too large to represent in memory.

### Number System

Number System in JavaScript refers to the way numbers are represented and manipulated in the programming language. In JavaScript, there are two main types of number systems: decimal (base 10) and binary (base 2).

Decimal numbers are the familiar numbers we use in our everyday lives. These numbers have ten digits (0-9) and are used in arithmetic operations such as addition, subtraction, multiplication, and division. Here's an example of how decimal numbers work in JavaScript:

```
// Decimal Example
let x = 10; // Assigning value 10 to the variable 'x'
let y = 5; // Assigning value 5 to the variable 'y'

console.log(x + y); // Output: 15
console.log(x - y); // Output: 5
console.log(x * y); // Output: 50
console.log(x / y); // Output: 2
```

On the other hand, binary numbers use only two digits, 0 and 1, and are commonly used in computer systems since they are easier for machines to manipulate. Binary numbers are represented using the prefix "0b" in JavaScript. Here's an example of how binary numbers work in JavaScript:

```
// Binary Example
let a = 0b1010; // Assigning binary value 1010 (which is equivalent to decimal 10) to variable 'a'
let b = 0b0110; // Assigning binary value 0110 (which is equivalent to decimal 6) to variable 'b'

console.log(a + b); // Output: 16 (binary 10000)
console.log(a - b); // Output: 4 (binary 0100)
console.log(a * b); // Output: 60 (binary 111100)
console.log(a / b); // Output: 1.6666666666666667 (binary 1.10100110100110100110...)
```

JavaScript provides built-in methods to convert between decimal and binary number systems, such as `parseInt()` and `toString()`. For example:

```
// Converting Binary to Decimal
console.log(parseInt('1010', 2)); // Output: 10

// Converting Decimal to Binary
console.log((10).toString(2)); // Output: "1010"
```

In summary, number system in JavaScript refers to the way numbers are represented and manipulated in the programming language. Decimal numbers have ten digits (0-9) and are used in everyday life, while binary numbers use only two digits (0 and 1) and are commonly used in computer systems.

### Hoisting in numbers

Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the code is executed. This means that a variable or function can be used before it is declared in the code.

Let's take an example to understand this concept:

```javascript
console.log(a); // Output: undefined
var a = 10;
```

In the above code snippet, even though we have not declared the variable `a` before using it in the `console.log` statement, the code still runs without any error and outputs `undefined`. This is because during the compilation phase, the variable `a` is hoisted to the top of the scope and assigned a default value of `undefined`. Therefore, when we try to access the value of `a` before its declaration, we get the value `undefined`.

Similarly, let's take an example with functions:

```javascript
foo(); // Output: 'Hello, World!'

function foo() {
  console.log("Hello, World!");
}
```

In the above code snippet, even though we are calling the `foo()` function before its declaration, the code still runs without any error and outputs `'Hello, World!'`. This is because during the compilation phase, the function declaration is hoisted to the top of the scope, so the `foo()` function is already available when we call it.

In simpler terms, hoisting in JavaScript means that variable and function declarations are moved to the top of their respective scopes, making them available for use before they are actually declared in the code.

### Math and Rounding

Math and Rounding are important concepts in JavaScript that deal with mathematical operations and rounding off numbers.

Math is a built-in object in JavaScript that provides various mathematical functions such as finding the square root, calculating trigonometric values, etc. These functions can be accessed using the Math object and the dot notation. For example, to find the square root of a number in JavaScript, we can use the Math.sqrt() function:

```
let num = 25;
let sqrtNum = Math.sqrt(num);
console.log(sqrtNum); // Output: 5
```

Rounding is the process of converting a number to its nearest whole number or a specified number of decimal places. In JavaScript, there are several methods to round numbers, including Math.round(), Math.ceil(), and Math.floor().

- Math.round() function rounds a number to the nearest whole number. If the fractional part is .5 or greater, the number is rounded up, otherwise, it is rounded down. Here's an example:

```
let num = 3.6;
let roundedNum = Math.round(num);
console.log(roundedNum); // Output: 4
```

- Math.ceil() function always rounds a number up to the nearest whole number. Here's an example:

```
let num = 3.2;
let roundedNum = Math.ceil(num);
console.log(roundedNum); // Output: 4
```

- Math.floor() function always rounds a number down to the nearest whole number. Here's an example:

```
let num = 3.8;
let roundedNum = Math.floor(num);
console.log(roundedNum); // Output: 3
```

Math aur Rounding JavaScript mein mathematical operations aur numbers ko round karne ke important concepts hai. Math ek built-in object hai jo ki bahut se mathematical functions provide karta hai jaise ki square root find karna, trigonometric values calculate karna, etc. Ye functions Math object aur dot notation ka use karke access kiye ja sakte hai. Rounding ek process hai jisme ham ek number ko uske nearest whole number ya specified number of decimal places me convert karte hai. JavaScript me rounding ke liye kuch methods hote hai jaise ki Math.round(), Math.ceil(), aur Math.floor().

### The Reminder operator

The Reminder operator in JavaScript is represented by the percent sign (%). It is also known as the modulo operator. It returns the remainder of a division operation between two numbers.

For example, when we divide 10 by 3, the quotient is 3 with a remainder of 1. In JavaScript, we can use the reminder operator to get the remainder:

```
10 % 3 // returns 1
```

Another example would be dividing 15 by 5, which gives a quotient of 3 with no remainder:

```
15 % 5 // returns 0
```

the reminder operator as "bacha hua" or "shesh". When we perform division, sometimes there is a leftover amount that doesn't divide evenly. The reminder operator gives us that leftover amount. For example, agar hum 10 ko 3 se divide karein toh humein teen ka quotient aur ek ka bacha hua milega. Aur yeh bacha hua, jo ki 1 hai, hum reminder operator ke zariye hasil kar sakte hai:

```
10 % 3 // 1 dega
```

Ek aur udahran hota hai jab hum 15 ko 5 se divide karte hai, jismein quotient 3 hai aur koi bacha hua nahi hai:

```
15 % 5 // 0 dega
```

### Numeric Separators

Numeric separators are characters that can be used to separate groups of digits in a number in JavaScript. This helps improve the readability of large numbers and makes it easier to understand them.

For example, consider the number 1000000. It can be difficult to quickly determine how many zeroes there are without counting them one by one. With numeric separators, we can write this number as 1_000_000, making it much easier to read at a glance.

Numeric separators are represented by an underscore (\_) character and can be placed anywhere within a number, except at the beginning or end.

Here's an example:

```
const bigNumber = 1_234_567_890;
console.log(bigNumber); // Output: 1234567890
```

In this example, we've used numeric separators to make `bigNumber` more readable. The underscores have no effect on the actual value of the number, but they make it easier to read and understand.

अंक विभाजक जावास्क्रिप्ट में उन वर्णों को कहते हैं जो कि एक संख्या में अंकों के समूहों को अलग करने के लिए उपयोग किए जाते हैं। यह बड़ी संख्याओं की पठनीयता में सुधार करता है और इन्हें समझने में आसान बनाता है।

उदाहरण के रूप में, एक संख्या 1000000 को ध्यान में रखते हुए लिखना काफी मुश्किल हो सकता है जब आप इसमें शून्यों की संख्या को गिनते हुए जानने की कोशिश करते हैं। अंक विभाजक का उपयोग करके, हम इस संख्या को 1_000_000 के रूप में लिख सकते हैं, जिससे इसे एक नजर में पढ़ना बहुत आसान हो जाता है।

अंक विभाजक अंडरस्कोर (\_) वर्ण द्वारा प्रतिनिधित होते हैं और एक संख्या के भीतर कहीं भी रखे जा सकते हैं, शुरुआत या अंत में नहीं।

निम्नलिखित उदाहरण में, हमने अंक विभाजक का उपयोग करके `bigNumber` जैसी संख्या को और पठनीय बनाया है। अंडरस्कोर का कोई भी प्रभाव संख्या के वास्तविक मान पर नहीं होता है, लेकिन वह इसे पढ़ने और समझने में आसान बनाता है।

```
const bigNumber = 1_234
```

### Working with BigInt

BigInt ek JavaScript data type hai jo normal integers se bade numbers ko store karne ki suvidha deta hai. BigInt ka use tab kiya jata hai jab hume bahut bade numeric values handle karne hote hai jo ki JavaScript ke normal Number data type ki capacity se jyada hai.

JavaScript me, jab hum kisi variable ko declare karte hai to wah by default Number data type ka hota hai. Lekin agar hume kisi bade number ko store karna hai to uske liye hume BigInt data type ka use karna padta hai.

BigInt ko declare karne ke liye hume number ke end me 'n' lagana hota hai. Iske alawa hume BigInt ke saath normal numbers ka use nahi karna chahiye, jaise ki 1 + 2n likhna theek hai lekin 1n + 2n likhna galat hai.

Yeh ek example hai jisme hum ek bada number store karenge aur uska square root nikalenge:

```
const bigNumber = 1234567890123456789012345678901234567890n;
const bigSqrt = Math.sqrt(bigNumber); // Error: cannot convert BigInt to number
console.log(bigSqrt);
```

Is code me humne `bigNumber` variable me ek bada number store kiya hai. Fir hum `Math.sqrt()` function ka use karke is number ka square root calculate karne ki koshish karenge, lekin yaha error aayega kyunki ye function BigInt ko handle nahi kar sakta.

Iske bajaye, hum `"big-integer"` ya `"bignumber.js"` jaise third-party libraries ka use kar sakte hai jiske through hum bade numbers ko handle kar sakte hai. Upar diye hue example ko agar hum `"bignumber.js"` library ke saath rewrite kare to ye is tarah se dikhega:

```
const BigNumber = require("bignumber.js");
const bigNumber = new BigNumber('1234567890123456789012345678901234567890');
const bigSqrt = bigNumber.sqrt();
console.log(bigSqrt.toString()); // "1.1102230246251561122324293051892e+24"
```

Is code me humne `"bignumber.js"` library ko import karke `BigNumber` class ka instance banaya hai jisme hum apna bada number store kiya hai. Fir hum `sqrt()` function ka use karke is number ka square root calculate karenge aur usko console me print karenge.

Mujhe ummeed hai ki yeh samajhne me aapki madad karega ki JavaScript me BigInt data type ka use kaise kiya jata hai.

### Number class functions

Number class functions in javascript are a set of built-in functions that can be used to perform various operations on numbers in javascript. These functions are part of the Number data type and can be accessed using dot notation.

For example, let's say we have a number variable called `num` which has a value of 5. We can use the following Number class functions:

1. `toString()`: This function converts a number to its string representation.

Example: `num.toString();` // Returns "5" as a string

2. `toFixed()`: This function formats a number with a fixed number of decimal places.

Example: `num.toFixed(2);` // Returns "5.00" as a string

3. `parseInt()`: This function parses a string and returns an integer.

Example: `parseInt("10");` // Returns 10 as an integer

4. `parseFloat()`: This function parses a string and returns a floating point number.

Example: `parseFloat("10.5");` // Returns 10.5 as a floating point number

5. `isNaN()`: This function checks if a value is NaN (not a number).

Example: `isNaN(num);` // Returns false since num is a number and not NaN

6. `isFinite()`: This function checks if a value is finite (not Infinity or -Infinity).

Example: `isFinite(num);` // Returns true since num is finite

Number class functions javascript mein uss set ke functions hote hai jo ki numbers par various operations perform karne ke liye use kiye jaate hai. Ye functions Number data type ke hisse hote hai aur dot notation se access kiye ja sakte hai. Inmein se kuch common functions jaise ki toString(), toFixed(), parseInt(), parseFloat(), isNaN() aur isFinite() hai. Ye functions numbers ko string representation me convert karna, decimal places ke sath format karna, integer ya floating point number me parse karna, NaN aur finite check karna jaisi operations perform karne ke liye use kiye jaate hai.

# Value, Variable and Data Types

### What is Data:

In JavaScript, data refers to the information that a program manipulates and processes. This can include numbers, strings, booleans, arrays, objects, and many other types of data.

JavaScript provides several data types such as:

- Primitive types: These include numbers, strings, booleans, and symbols. They are basic building blocks of JavaScript and have a single value.

- Complex types: These include arrays and objects. They can hold multiple values and provide additional functionality.

JavaScript also supports special values like null and undefined, which can be used to represent missing or unknown values.

JavaScript also allows for easy manipulation and manipulation of data through various built-in functions and methods like .map(), .filter(), .sort() etc. JavaScript also allows for easy interaction with other data sources such as JSON and XML through built-in functions like JSON.parse(), JSON.stringify(), XMLHttpRequest() etc.

Data manipulation is a key aspect of JavaScript and is used extensively in web development to create dynamic and interactive web pages, and for building web and mobile apps.

### What is value?

In JavaScript, a value is a piece of data that can be stored in a variable or passed as an argument to a function. JavaScript has several types of values, including:

- Primitive values: These include numbers, strings, booleans, and symbols. They are basic building blocks of JavaScript and have a single value.

- Complex values: These include arrays and objects. They can hold multiple values and provide additional functionality.

- Special values: These include null and undefined, which can be used to represent missing or unknown values.

Values in JavaScript can be assigned to variables and passed as arguments to functions. They can also be used to perform operations and calculations, and can be used to control the flow of a program.

In JavaScript, values are also known as literals, which are the actual data that is given to the program. For example, number 3, string "hello" and boolean true are literals.

All values in JavaScript have a type, which determines what kind of data it represents and how it can be used. The typeof operator can be used to check the type of a value at runtime.

### What is Data type:

In JavaScript, a data type is a classification of data that determines the kind of value it represents and how it can be used. JavaScript has several built-in data types, including:

- Primitive types: These include numbers, strings, booleans, and symbols. They are basic building blocks of JavaScript and have a single value.

- Complex types: These include arrays and objects. They can hold multiple values and provide additional functionality.

- Special types: These include null and undefined, which can be used to represent missing or unknown values.

JavaScript also has a "dynamic typing" feature, which means that the type of a variable can change during the execution of the program. However, JavaScript still uses these types to determine how a value should be treated and how it can be used.

It's also worth noting that, JavaScript has a typeof operator which can be used to check the data type of a variable or a value at runtime, it returns a string that represents the type of the value.

JavaScript's rich set of data types and its dynamic typing feature make it a versatile and expressive language that can be used for a wide range of tasks.

### Primitive data types (inbuilt data types):

In JavaScript, primitive data types are basic building blocks of the language and have a single value. They include:

- Number: Represents numeric values. Can be integers or floating-point values.

- String: Represents a sequence of characters. Strings are enclosed in single or double quotes.

- Boolean: Represents true or false values.

- Symbol: Represents a unique and immutable value.

- Undefined: Represents a value that has not been assigned.

- Null: Represents a null or empty value.

These primitive data types are also known as "simple data types" or "scalar data types" because they represent a single value and do not have any methods or properties.

In JavaScript, primitive data types are passed by value, meaning that when a primitive value is assigned to a variable or passed as an argument to a function, a copy of the value is created. This means that changes to the original value will not affect the copy, and vice versa.

These primitive data types are the foundation of JavaScript and are used extensively in web development to create dynamic and interactive web pages, and for building web and mobile apps.

### Non primitve (reference types) data types:

In JavaScript, non-primitive data types are complex data types that can hold multiple values and provide additional functionality. They include:

- Array: Represents a collection of values. Arrays are enclosed in square brackets and can hold a mix of different data types.

- Object: Represents a collection of key-value pairs. Objects are enclosed in curly braces and can hold a mix of different data types.

- Function: Represents a block of code that can be executed. Functions are first-class citizens in JavaScript and can be assigned to variables, passed as arguments, and returned as values.

These non-primitive data types are also known as "reference data types" because they are reference to the memory location where the actual data is stored.

In JavaScript, non-primitive data types are passed by reference, meaning that when a non-primitive value is assigned to a variable or passed as an argument to a function, a reference to the value is created. This means that changes to the original value will affect the copy and vice versa.

These non-primitive data types are used extensively in JavaScript to create complex data structures and provide additional functionality. They also allow for more expressive, flexible, and reusable code, making it easy to use for a wide range of tasks, from simple scripts to complex web applications.

### What is variable?

In JavaScript, a variable is a container that stores a value. Variables are used to store data and make it available for use in a program. They are defined using the var, let, const keyword followed by a name, which is used to reference the variable's value.

For example, the following code creates a variable called x and assigns it the value 10:

for example:
let x = 10; //10 is value and x is variable

Once a variable is defined, its value can be accessed and modified throughout the program. Variables can be reassigned new values, and their types can change dynamically during the execution of the program.

JavaScript also allows variables to be defined without assigning a value to them, in that case they will have the value undefined.

JavaScript also has a feature called "hoisting" which means that variables declared using the var keyword are moved to the top of the scope and are initialized with a value of undefined before any code is executed.

JavaScript's variables provide a way to store and manipulate data, which is a key aspect of the language, and is used extensively in web development to create dynamic and interactive web pages and for building web and mobile apps.

### Primitive Data Types Examples:

- Number

```javascript
let value = 10; `
```

- Boolean

```javascript
let flag = false;
```

- String

```javascript
let str = "learnjavascript";
```

- undefined

```javascript
let val; //value will be undefined here
val = undefined; //we can also assign undefined to a variable
```

- Symbol

```javascript
let sym = Symbol("A");
```

- BigInt

```javascript
let num = BigInt(10);
num = 10n;
```

### Non Primitive Data Type Examples:

- Object

```javascript
let obj = {
myName: "learnjavascript",
age: 21,
};
```

- Array

```javascript
let arr = [1, 2, 3, 4, 5];
```

- function

```javascript
function sum() {
console.log(1+2);
}
```

- Date

```javascript
let date = new Date();
```

- Regex example

```javascript
let str = "I love learning javascript, it's one of my favorite programming languages!";
let regex = /javascript/gi;
let result = str.match(regex);
console.log(result);
// Output: ["javascript", "javascript"]
```

- Maps

```javascript
let map = new Map();
```

- Set

```javascript
let set = new Set();
```

- WeakMap

```javascript
let wm = new WeakMap();
let obj1 = {};
let obj2 = {};

wm.set(obj1, "value1");
wm.set(obj2, "value2");

console.log(wm.get(obj1)); // Output: "value1"
console.log(wm.get(obj2)); // Output: "value2"
```

## Call/Apply/Bind Solutions

### Question 1 : Write a function that uses the call method to print the name of an object.

```
function printName() {
  console.log(this.name);
}

const obj = { name: "John" };
printName.call(obj); // prints "John"
```

### Question 2 : Write a function that uses the apply method to find the minimum value in an array of numbers.

```
function findMin() {
  const min = Math.min.apply(null, this);
  console.log(min);
}

const numbers = [5, 3, 8, 1, 9];
findMin.apply(numbers); // prints 1

```

### Question 3 : Write a function that uses the bind method to create a new function that always has a specific "this" value.

```
function multiplyBy(value) {
  return this * value;
}

const double = multiplyBy.bind(2);
console.log(double(5)); // prints 10

```

### Question 4 : Write a function that uses the call method to add two numbers together.

```
function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers.call(null, 5, 3); // prints 8

```

### Question 5 : Write a function that uses the apply method to concatenate two arrays.

```
function concatenateArrays(arr1, arr2) {
  console.log([...arr1, ...arr2]);
}

concatenateArrays.apply(null, [[1, 2], [3, 4]]); // prints [1, 2, 3, 4]

```

### Question 6 : Write a function that uses the bind method to create a new function that multiplies a number by a specified value.

```
function multiplyBy(value, num) {
  console.log(this * value * num);
}

const triple = multiplyBy.bind(3, 2);
triple(5); // prints 30

```

### Question 7 : Write a function that uses the call method to find the length of a string.

```
function findLength() {
  console.log(this.length);
}

const str = "Hello World";
findLength.call(str); // prints 11

```

### Question 8 : Write a function that uses the apply method to find the sum of all numbers in an array.

```
function findSum() {
  const sum = this.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
}

const numbers = [1, 2, 3, 4, 5];
findSum.apply(numbers); // prints 15

```

### Question 9 : Write a function that uses the bind method to create a new function that logs a message with a specific prefix.

```
function logMessage(prefix, message) {
  console.log(`${prefix}: ${message}`);
}

const logError = logMessage.bind(null, "Error");
logError("Something went wrong!"); // prints "Error: Something went wrong!"

```

### Question 10 : Write a function that uses the call method to convert a string to uppercase.

```
function toUpperCase() {
  console.log(this.toUpperCase());
}

const str = "hello world";
toUpperCase.call(str); // prints "HELLO WORLD"

```

### Question 11 : Create a function sum that takes in two numbers and returns their sum. Use call to invoke sum with an array [2, 3] as the context and log the result to the console.

```
function sum(a, b) {
  console.log(a + b);
}

sum.call([2, 3], ...[2, 3]); // prints 5

```

### Question 12 : Create an object person with a property name set to your name. Create a function sayHello that logs "Hello, <name>!". Use bind to create a new function sayHi that logs "Hi, <name>!" and use it to greet yourself.

```
const person = {
  name: "John",
};

function sayHello() {
  console.log(`Hello, ${this.name}!`);
}

const sayHi = sayHello.bind(person);
sayHi(); // prints "Hi, John!"

```

### Question 13 : Write a function greet that takes in a string name and logs "Hello, <name>!". Use apply to pass in an array ["Alice"] as the context and invoke the function.

```
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet.apply(null, ["Alice"]); // prints "Hello, Alice!"

```

### Question 14 : Create a function multiply that takes in two numbers and returns their product. Use bind to create a new function double that always doubles its argument, and use it to multiply 5 by 2.

```
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // prints 10

```

### Question 15 : Create a function square that takes in a number and returns its square. Use map and square to create a new array squares that contains the squares of the numbers in an array [1, 2, 3, 4, 5].

```
function square(num) {
  return num * num;
}

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
console.log(squares); // prints [1, 4, 9, 16, 25]
```

### Loose equality operator (==)

The equality operator (==) checks whether its two operands are equal, returning a Boolean
result. Unlike the strict equality operator, it attempts to convert and compare operands
that are of different types.

```javascript
console.log(1 == 1); //true

console.log("hello" == "hello"); //true

console.log("1" == 1); //true

console.log(0 == false); //true
```

### Strict Equality Operator (===)

The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

```javascript
console.log(1 === 1); //true

console.log("hello" === "hello"); //true

console.log("1" === 1); //false

console.log(0 === false); //false
```

### Ternary Operator

: ? Operator :
It is like the short form of the if-else condition. - Syntax:

```javascript
Y = ? A : B
```

- where A and B are values and if condition is true then Y = A otherwise Y = B.
- Example:

```javascript
Y = (6>5) ? 6 : 5
therefore Y = 6
```

### typeof Operator

typeof Returns the type of a variable instanceof Returns true if an object is an instance of an object type

- Without Ternary operator

```javascript
let val = 10;
if (val < 20) {
console.log("Yes");
} else {
console.log("No");
}
```

- With Ternary Operator

```javascript
val < 10 ? console.log("Yes") : console.log("No");
```

- Typeof operator example

```javascript
let m = 10;
console.log(typeof m); //number
m = "learnjavascript";
console.log(typeof m); //string
```

# 03 : Value, Variable and Data Types

### What is Data type:

Data type kisi bhi data ki type btata hai ki vah data kis type ka hai. Data type two type ka hota hai. Data types 2 type ki hoti hain:
primitive data type
non-primitive data type

### Primitive data types (inbuilt data types):

Primitive data type vah data type hoti hai jo kisi bhi programming language me pre define data type hoti hai. Yeh data types Javascript ke building blocks and direct memory me store hoti hain. Primitive data types immutable hoti hain it means inhe change ni kia ja skta hai.

1. number: Javascript me kisi bhi number ka liye number data type use hoti hai.
2. String: Javascript me kisi bhi word, text, ya paragraph/sentence ka liye string data type ka use hota hai.
3. undefined: kisi bhi variable ko koi bhi data nhi assign kiya hai to us variable
   ki data type undefined hogi
4. boolean: boolean data type vah data store krane ke kaam aati hai jiski value true/false ho. true aur false ko 1 and 0 se b represent krte hain.
5. BigInt: BigInt vah data type hota hai jo bahut big number ka leya use hota hai. Aise numbers jo number datatype me store ni hote hain.

### Non primitve (reference types) data types:

Non primitive data type ko reference data types b kha jata hai. Ye data types primitive data type se hi bni hoti hai. But in Non primitive data type ko user khud define karta hai. Non primitve data type me hum different type ka data store kar saktay hai.

1. object
2. array
3. functions
4. Dates
5. Regular expressions
6. Maps
7. Sets
8. WeakMap

### Value and Variable:

Value ka matlab data hota hai. Jise hum kisi variable me store krate hain. Variable ek place holder ki trah hota hai jisme ki hum value store krte hain and jha b vo value use krni ho to value ki jgah variable use kr skte hain. variable ek identifire hota hain. identifier ek unique name hota hai.

for example:

```javascript
let x = 10; //10 is value and x is variable
```

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

```

let str = "learnjavascript";

```

- undefined

```

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
  console.log(1 + 2);
}
```

- Date

```javascript
let date = new Date();
```

- Regex example

```javascript
let str =
  "I love learning javascript, it's one of my favorite programming languages!";
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

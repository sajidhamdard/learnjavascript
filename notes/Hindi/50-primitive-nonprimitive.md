### Primitive vs Object in JavaScript ?
In JavaScript, there are two main data types: primitive and object. 

Primitives are the most basic data types in JavaScript, and they are immutable, which means their values cannot be changed after they are created. There are six primitive data types in JavaScript:

1. Boolean: represents a logical value of true or false.
```javascript
let isTrue = true;
let isFalse = false;
```

2. Number: represents numeric values.
```javascript
let number = 42;
```

3. String: represents textual data.
```javascript
let string = "Hello World";
```

4. Null: represents an intentional absence of any object value.
```javascript
let nullValue = null;
```

5. Undefined: represents a variable that has been declared but has not been assigned a value.
```javascript
let undefinedValue;
```

6. Symbol: represents a unique identifier.
```javascript
let symbol = Symbol("description");
```

On the other hand, objects are more complex data types that can hold multiple values and methods. Objects are mutable, which means their properties and values can be changed even after they are created. Objects are created using curly braces {}. Objects can have properties and methods attached to them. Properties are key-value pairs separated by colons. Methods are functions attached to properties.

```javascript
let person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    },
    sayHello: function() {
        console.log("Hello!");
    }
};

person.name = "Jane Doe"; // changing the value of a property
person.address.zipCode = "12345"; // changing a nested property
person.sayHello(); // calling a method
```

In summary, primitives are simple data types that are immutable, while objects are complex data types that are mutable and can hold multiple values and methods.


### Understanding of how primitive and non-primitives are stored in memory in JavaScript
In JavaScript, primitives are stored by value, while non-primitives are stored by reference. 

Primitives include numbers, strings, booleans, null, and undefined. When a primitive is assigned to a variable, a copy of its value is created and stored in memory at a specific location. For example:

```javascript
let num1 = 5;
let num2 = num1; // a copy of the value at the memory location of num1 is created and stored in a new location for num2
num1 = 10;
console.log(num1); // 10
console.log(num2); // 5
```

In this example, `num1` is assigned the value of `5`. When `num2` is assigned to `num1`, a copy of the value stored in the memory location of `num1` is created and stored in a new location for `num2`. Changing the value of `num1` afterwards does not affect the value of `num2`.

Non-primitives include objects and arrays. When a non-primitive is assigned to a variable, a reference to its memory location is created instead of a copy of its value. For example:

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // a reference to the memory location of arr1 is created and stored in memory for arr2
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4] (since arr2 contains a reference to the same memory location as arr1)
```

In this example, `arr1` is assigned an array with three elements. When `arr2` is assigned to `arr1`, a reference to the memory location where `arr1` is stored is created and stored in memory for `arr2`. Therefore, when an element is added to `arr1`, it affects the value of `arr2` as well since they both point to the same memory location.


### How to Copy object? Shallow copy and deep copy ?

In JavaScript, you can copy an object in two ways: shallow copy and deep copy.

A shallow copy creates a new object with the same properties as the original object, but the properties are simply references to the same values as the original object. This means that if you modify a property of the copied object or the original object, both objects will be affected. Shallow copying can be done using the spread operator (`...`) or `Object.assign()` method.

Example of shallow copy:

```javascript
const obj1 = {a: 1, b: {c: 2}};
const obj2 = {...obj1};

console.log(obj1); // {a: 1, b: {c: 2}}
console.log(obj2); // {a: 1, b: {c: 2}}

obj2.a = 3;
console.log(obj1); // {a: 1, b: {c: 2}}
console.log(obj2); // {a: 3, b: {c: 2}}

obj2.b.c = 4;
console.log(obj1); // {a: 1, b: {c: 4}}
console.log(obj2); // {a: 3, b: {c: 4}}
```

A deep copy creates a new object with the same properties as the original object, but the properties are not references to the same values as the original object. This means that modifying a property of the copied object does not affect the original object, and vice versa. Deep copying can be done using several methods, including recursion or libraries such as Lodash.

Example of deep copy:

```javascript
const obj1 = {a: 1, b: {c: 2}};
const obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj1); // {a: 1, b: {c: 2}}
console.log(obj2); // {a: 1, b: {c: 2}}

obj2.a = 3;
console.log(obj1); // {a: 1, b: {c: 2}}
console.log(obj2); // {a: 3, b: {c: 2}}

obj2.b.c = 4; 
console.log(obj1); // {a: 1, b: {c: 2}}
console.log(obj2); // {a: 3, b: {c: 4}}
```

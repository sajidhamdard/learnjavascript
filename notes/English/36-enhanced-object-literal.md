### What is the Enhanced Object literals ?

Enhanced Object literals is a feature in JavaScript that allows developers to create object literals more easily and concisely. It was introduced in ECMAScript 6.

One example of using Enhanced Object literals is by using shorthand property names. Instead of having to specify the key and value for each property separately, you can directly use the variable name as the key and its value as the value.

For instance, consider the following code:

```javascript
// Without Enhanced Object literals
const x = 10;
const y = 20;
const obj = {
  x: x,
  y: y
};

// With Enhanced Object literals
const x = 10;
const y = 20;
const obj = {
  x,
  y
};
```

In the second example, we are using shorthand property names where we don't need to specify the key and value separately. This makes the code shorter and easier to read.


### What is Enhanced Object literals Function in object ?

Enhanced Object Literals is a feature in JavaScript that allows for shorthand syntax when creating object literals. 

It includes the following enhancements:
- Shorter syntax for defining object literal methods.
- Shorthand property assignments.
- Computed property names.

Here's an example of Enhanced Object Literals:

```javascript
// Old Syntax
var name = 'John';
var age = 20;

var user = {
  name: name,
  age: age,
  greet: function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  }
};

user.greet(); // "Hello, my name is John and I am 20 years old."

// Enhanced Object Literal Syntax
const name = 'John';
const age = 20;

const user = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  [`${name}_${age}`]: 'User Name' // Computed Property Names
};

user.greet(); // "Hello, my name is John and I am 20 years old."
console.log(user['John_20']); // "User Name"
```

In the above example, we can see how Enhanced Object Literals allow us to use shorter syntax while creating objects that have properties and methods. We can directly assign variables to properties without having to repeat their names. We can also define methods using shorter syntax. Finally, using computed property names, we can create an object key from the values of the `name` and `age` variables.


### Enhanced Object literals compute property name ?

Enhanced object literals in JavaScript allow for more concise and expressive ways of defining objects. One feature of enhanced object literals is the ability to use a computed property name when defining an object.

With computed property names, you can define object properties dynamically by evaluating an expression inside square brackets. For example:

```javascript
const key = 'foo';
const obj = {
  [key]: 'bar'
};

console.log(obj.foo); // Output: 'bar'
```

In this example, we define an object `obj` with a property name that is computed dynamically using the variable `key`. The resulting property name is `foo`, and its value is `'bar'`.

Computed property names can also be used to create objects with dynamic keys:

```javascript
function createObject(key, value) {
  return {
    [key]: value
  };
}

const obj1 = createObject('name', 'John');
const obj2 = createObject('age', 30);

console.log(obj1.name); // Output: 'John'
console.log(obj2.age); // Output: 30
```

In this example, we define a function `createObject` that takes a `key` and a `value`. Inside the function, we use a computed property name to create an object with the specified `key` and `value`. We then call the function twice with different arguments to create two different objects `obj1` and `obj2`.

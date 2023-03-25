## Object Questions

### Question 1: What is an object in JavaScript?

In JavaScript, an object is a non-primitive data type that represents a collection of key-value pairs. It can be created using the object literal syntax, which involves enclosing a comma-separated list of key-value pairs in curly braces ({}) or by using the Object constructor function. An object can have properties (keys) and methods (functions) that define its behavior.

Objects can be used to represent complex entities such as people, products, or events, and they can be used to store and manipulate data. In addition to the properties and methods that are defined by default, objects can also have their own custom properties and methods added at runtime, making them highly flexible and adaptable to a wide range of use cases.

### Question 2: What is the difference between dot notation and bracket notation for accessing object properties?

In JavaScript, objects are used to store collections of data as key-value pairs. There are two ways to access the properties of an object: dot notation and bracket notation.

Dot notation is used to access object properties using the property name directly after the object. For example, if myObject has a property called name, you can access it using myObject.name. Dot notation is commonly used when the property name is known and fixed.

Bracket notation is used to access object properties using a string containing the property name. For example, if myObject has a property called name, you can access it using myObject["name"]. Bracket notation is commonly used when the property name is dynamic or contains spaces or special characters that are not valid in dot notation.

One key difference between dot notation and bracket notation is that dot notation requires the property name to be a valid identifier (i.e., it cannot contain spaces or special characters), while bracket notation can handle any string as a property name. Another difference is that bracket notation allows you to access properties using variables or expressions, whereas dot notation does not.

### Question 3: How do you loop through the properties of an object in JavaScript?

```
for (let prop in object) {
  // Do something with object[prop]
}

let person = {
  name: "John",
  age: 30,
  gender: "male"
};

for (let prop in person) {
  console.log(prop + ": " + person[prop]);
}
```

### Question 4: What is the difference between an object and an array in JavaScript?

```
In JavaScript, an object is a collection of key-value pairs, where the keys are strings and the values can be any valid JavaScript data type, including arrays. Objects are often used to represent real-world entities, such as a person or a car, and can have methods, which are functions that can be called on the object.

On the other hand, an array is a collection of values, which can be any valid JavaScript data type, including objects. Arrays are used to represent ordered lists of data, such as a list of numbers or a list of names. Arrays have numeric indices, which start at 0, and can be accessed using bracket notation.

In summary, the main difference between objects and arrays is that objects use named keys to access their values, while arrays use numeric indices. Additionally, objects can have methods, while arrays cannot.
```

### Question 5: Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

```
function objectToList(obj) {
  return Object.entries(obj);
}

const myObj = { a: 1, b: 2, c: 3 };
const myList = objectToList(myObj);
console.log(myList); // Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```

### Question 6: Write a function that takes an object representing a person and returns their full name.

```
function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

let person = { firstName: "John", lastName: "Doe" };
console.log(getFullName(person)); // Output: "John Doe"
```

### Question 7: Create an Object with your personal details. Now print all the keys of the object in ascending order.

```
let personalDetails = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
  occupation: "Web Developer"
};

// Get all keys and sort them in ascending order
let keys = Object.keys(personalDetails).sort();

// Print each key
for(let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}
```

### Question 8: Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.

```
// Object with some properties and values
let obj = {
  name: "John",
  age: 30,
  address: "123 Main St",
  city: "Anytown"
};

// Extract values of the object into an array
let values = Object.values(obj);

// Sort the array in descending order
values.sort(function(a, b) {
  return b - a;
});

// Print the sorted array
console.log(values);
```

### Question 9: Create an object to hold information on your favorite recipe.

```
const recipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log("Ingredients:");
recipe.ingredients.forEach(ingredient => console.log(ingredient));
```

### Question 10: Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.

```
const maxFinder = {
  findMax: function(a, b, c) {
    return Math.max(a, b, c);
  }
};

console.log(maxFinder.findMax(5, 9, 2)); // Output: 9
```
